import React, { useEffect, useState, useCallback } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { useParams, useNavigate } from "react-router-dom";
import CoverSlide from "./slides/CoverSlide";
import ProblemSlide from "./slides/ProblemSlide";
import PlatformSlide from "./slides/PlatformSlide";
import AgenticSlide from "./slides/AgenticSlide";
import B2BSolutionsSlide from "./slides/B2BSolutionsSlide";
import TeamSlide from "./slides/TeamSlide";
import CtaSlide from "./slides/CtaSlide";

const SLIDES = [
  CoverSlide,
  ProblemSlide,
  PlatformSlide,
  AgenticSlide,
  B2BSolutionsSlide,
  TeamSlide,
  CtaSlide,
];
const TOTAL = SLIDES.length;

// PDF dimensions — A4 landscape, 16:9 proportional
const PDF_W = 297;
const PDF_H = 167.0625;
const CAPTURE_W = 1280;
const CAPTURE_H = 720;
const STAGE_GUTTER = 40;

// ── Build style property list excluding font-size (prevents html-to-image
//    from shrinking fonts by 0.1px causing text reflow) ──────────────────
let _stylePropsCache: string[] | null = null;
function getStylePropsWithoutFontSize(): string[] {
  if (_stylePropsCache) return _stylePropsCache;
  const cs = window.getComputedStyle(document.documentElement);
  const all: string[] = [];
  for (let i = 0; i < cs.length; i++) all.push(cs[i]);
  _stylePropsCache = all.filter((p) => p !== "font-size");
  return _stylePropsCache;
}

// ── Bake computed layout into inline styles so cloneNode preserves them ──
function bakeLayout(container: HTMLElement) {
  const els = Array.from(container.querySelectorAll("*"));
  const snapshots = els.map((el) => {
    const htmlEl = el as HTMLElement;
    if (!(htmlEl instanceof HTMLElement)) return null;
    if (htmlEl.closest("svg") && htmlEl.tagName.toLowerCase() !== "svg") return null;
    const rect = htmlEl.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) return null;
    const cs = window.getComputedStyle(htmlEl);
    return {
      el: htmlEl,
      w: rect.width,
      h: rect.height,
      fontSize: cs.fontSize,
      fontFamily: cs.fontFamily,
      fontWeight: cs.fontWeight,
      lineHeight: cs.lineHeight,
      letterSpacing: cs.letterSpacing,
      display: cs.display,
      parentDisplay: htmlEl.parentElement
        ? window.getComputedStyle(htmlEl.parentElement).display
        : "",
    };
  });
  snapshots.forEach((s) => {
    if (!s) return;
    s.el.style.fontFamily = s.fontFamily;
    s.el.style.fontSize = s.fontSize;
    s.el.style.fontWeight = s.fontWeight;
    s.el.style.lineHeight = s.lineHeight;
    s.el.style.letterSpacing = s.letterSpacing;
    s.el.style.boxSizing = "border-box";
    const pd = s.parentDisplay;
    if (pd === "flex" || pd === "inline-flex" || pd === "grid" || pd === "inline-grid") {
      s.el.style.width = `${s.w}px`;
      s.el.style.height = `${s.h}px`;
      s.el.style.minWidth = `${s.w}px`;
      s.el.style.minHeight = `${s.h}px`;
      s.el.style.maxWidth = `${s.w}px`;
      s.el.style.maxHeight = `${s.h}px`;
      s.el.style.flexShrink = "0";
      s.el.style.flexGrow = "0";
      s.el.style.flexBasis = "auto";
    }
    if (s.display === "flex" || s.display === "inline-flex" || s.display === "grid" || s.display === "inline-grid") {
      s.el.style.width = `${s.w}px`;
      s.el.style.height = `${s.h}px`;
    }
  });
}

async function generatePDF(
  slides: React.FC[],
  onProgress?: (step: number, total: number) => void
) {
  const { toJpeg } = await import("html-to-image");
  const { jsPDF } = await import("jspdf");

  await document.fonts.ready;

  const pages: string[] = [];

  for (let i = 0; i < slides.length; i++) {
    onProgress?.(i + 1, slides.length);

    const captureEl = document.createElement("div");
    Object.assign(captureEl.style, {
      position:      "fixed",
      top:           "0",
      left:          "0",
      width:         `${CAPTURE_W}px`,
      height:        `${CAPTURE_H}px`,
      overflow:      "hidden",
      pointerEvents: "none",
      zIndex:        "-1",
      opacity:       "1",
    });

    // Disable animations + fix h-screen inside fixed capture container
    // (100vh resolves to browser viewport, not the 720px container, clipping the footer)
    const killAnims = document.createElement("style");
    killAnims.textContent = `*, *::before, *::after {
      animation-duration: 0s !important;
      animation-delay: 0s !important;
      transition-duration: 0s !important;
      transition-delay: 0s !important;
    }
    .h-screen { height: 100% !important; min-height: 0 !important; max-height: 100% !important; }
    `;
    captureEl.appendChild(killAnims);
    document.body.appendChild(captureEl);

    const root = createRoot(captureEl);
    flushSync(() => {
      root.render(React.createElement(slides[i]));
    });

    // Two rAF ticks for layout to settle
    await new Promise<void>((res) =>
      requestAnimationFrame(() => requestAnimationFrame(() => res()))
    );

    bakeLayout(captureEl);
    await new Promise((res) => setTimeout(res, 120));

    try {
      // html-to-image uses SVG foreignObject — natively supports
      // background-clip:text, CSS gradients, backdrop-filter, etc.
      const dataUrl = await toJpeg(captureEl, {
        width: CAPTURE_W,
        height: CAPTURE_H,
        pixelRatio: 2,
        quality: 0.93,
        backgroundColor: "#020617",
        skipFonts: false,
        includeQueryParams: true,
        includeStyleProperties: getStylePropsWithoutFontSize(),
      });
      pages.push(dataUrl);
    } catch (err) {
      console.error(`Slide ${i + 1} capture failed`, err);
      pages.push("");
    } finally {
      root.unmount();
      captureEl.remove();
    }
  }

  // Assemble PDF
  const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: [PDF_W, PDF_H] });
  pages.forEach((imgData, idx) => {
    if (!imgData) return;
    if (idx > 0) pdf.addPage([PDF_W, PDF_H], "landscape");
    pdf.addImage(imgData, "JPEG", 0, 0, PDF_W, PDF_H, undefined, "FAST");
  });
  pdf.save("AGX-Global-Intro-Deck.pdf");
}

export default function IntroPresentation() {
  const { slideNumber } = useParams();
  const navigate = useNavigate();
  const current = Math.min(Math.max(parseInt(slideNumber ?? "1", 10), 1), TOTAL);
  const [pdfState, setPdfState] = useState<{ exporting: boolean; progress: number }>({
    exporting: false,
    progress: 0,
  });

  const goTo = (n: number) => {
    const next = Math.min(Math.max(n, 1), TOTAL);
    navigate(next === 1 ? "/" : `/slide/${next}`, { replace: true });
  };

  const handleExportPDF = useCallback(async () => {
    if (pdfState.exporting) return;
    setPdfState({ exporting: true, progress: 0 });
    try {
      await generatePDF(SLIDES, (step) => {
        setPdfState({ exporting: true, progress: step });
      });
    } finally {
      setPdfState({ exporting: false, progress: 0 });
    }
  }, [pdfState.exporting]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (["ArrowRight", "ArrowDown", " "].includes(e.key)) {
        e.preventDefault();
        goTo(current + 1);
      } else if (["ArrowLeft", "ArrowUp"].includes(e.key)) {
        e.preventDefault();
        goTo(current - 1);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [current]);

  // Swipe navigation
  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 60) goTo(dx < 0 ? current + 1 : current - 1);
    };
    window.addEventListener("touchstart", onTouchStart);
    window.addEventListener("touchend", onTouchEnd);
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [current]);

  const SlideComponent = SLIDES[current - 1];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.14),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(20,184,166,0.12),_transparent_28%)] pointer-events-none" />

      <div className="relative z-10 flex h-full items-center justify-center p-5">
        <div
          className="relative aspect-[16/9] w-full overflow-hidden rounded-[30px] border border-white/10 bg-slate-950 shadow-[0_40px_120px_-30px_rgba(0,0,0,0.85)]"
          style={{
            maxWidth: `calc((100vh - ${STAGE_GUTTER}px) * 16 / 9)`,
            maxHeight: `calc(100vh - ${STAGE_GUTTER}px)`,
          }}
        >
          <SlideComponent />
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i + 1)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i + 1 === current
                ? "bg-green-400 w-6 h-2"
                : "bg-white/25 hover:bg-white/50 w-2 h-2"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute top-5 right-7 text-white/25 text-xs font-mono z-50 select-none">
        {current} / {TOTAL}
      </div>

      {/* PDF export button */}
      <button
        onClick={handleExportPDF}
        disabled={pdfState.exporting}
        title="Download all slides as PDF"
        className="absolute bottom-5 right-7 z-50 flex items-center gap-2 bg-white/[0.07] hover:bg-white/[0.13] disabled:opacity-50 disabled:cursor-wait border border-white/10 rounded-full px-3.5 py-1.5 transition-all backdrop-blur-sm"
      >
        {pdfState.exporting ? (
          <>
            <span className="w-3.5 h-3.5 rounded-full border-2 border-green-400/40 border-t-green-400 animate-spin" />
            <span className="text-green-400 text-xs font-medium whitespace-nowrap">
              {pdfState.progress} / {TOTAL}
            </span>
          </>
        ) : (
          <>
            {/* Download icon */}
            <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="text-white/60">
              <path d="M7 1v8M4 6l3 3 3-3M2 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span className="text-white/60 text-xs font-medium">PDF</span>
          </>
        )}
      </button>

      {/* Side click zones */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="absolute left-0 top-0 h-full w-14 z-40 flex items-center justify-start pl-3 opacity-0 hover:opacity-100 transition-opacity"
      >
        <span className="text-white/40 text-3xl">‹</span>
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="absolute right-0 top-0 h-full w-14 z-40 flex items-center justify-end pr-3 opacity-0 hover:opacity-100 transition-opacity"
      >
        <span className="text-white/40 text-3xl">›</span>
      </button>
    </div>
  );
}
