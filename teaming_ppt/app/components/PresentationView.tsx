import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { flushSync } from "react-dom";
import { useParams, useNavigate } from "react-router";
import { ChevronLeft, ChevronRight, LayoutGrid, X, FileDown, Loader2 } from "lucide-react";
import { motion, AnimatePresence, MotionConfig } from "motion/react";
import { toJpeg, getFontEmbedCSS } from "html-to-image";
import { jsPDF } from "jspdf";
import TitleSlide from "./slides/TitleSlide";
import OpportunitySlide from "./slides/OpportunitySlide";
import PlatformSlide from "./slides/PlatformSlide";
import WhoWeAreSlide from "./slides/WhoWeAreSlide";
import ResultsSlide from "./slides/ResultsSlide";
import TeamingPartnerSlide from "./slides/TeamingPartnerSlide";
import TeamingModelSlide from "./slides/TeamingModelSlide";
import TargetMarketSlide from "./slides/TargetMarketSlide";
import CommercialModelSlide from "./slides/CommercialModelSlide";
import WhyNowSlide from "./slides/WhyNowSlide";
import NextStepsSlide from "./slides/NextStepsSlide";
import ClosingSlide from "./slides/ClosingSlide";

const PDF_W = 297;
const PDF_H = 167.0625; // 297/16*9  — perfect 16:9 landscape
const CAPTURE_W = 1280;
const CAPTURE_H = 720;

const slideMeta = [
  { Component: TitleSlide,           title: "Title" },
  { Component: OpportunitySlide,     title: "Opportunity" },
  { Component: PlatformSlide,        title: "Platform" },
  { Component: WhoWeAreSlide,        title: "Who We Are" },
  { Component: ResultsSlide,         title: "Results" },
  { Component: TeamingPartnerSlide,  title: "Why Partner" },
  { Component: TeamingModelSlide,    title: "Teaming Model" },
  { Component: TargetMarketSlide,    title: "Target Market" },
  { Component: CommercialModelSlide, title: "Commercial" },
  { Component: WhyNowSlide,          title: "Why Now" },
  { Component: NextStepsSlide,       title: "Next Steps" },
  { Component: ClosingSlide,         title: "Closing" },
];

// ── Force-finish all WAAPI animations in a container ───────────────────────
// Motion (v10+) uses the Web Animations API for opacity/transform.
// finish() + commitStyles() + cancel() locks the final keyframe into inline styles.
function forceFinishAnimations(container: HTMLElement) {
  const all = [container, ...Array.from(container.querySelectorAll("*"))];

  // Pass 1: finish + commitStyles + cancel all WAAPI animations
  all.forEach((el) => {
    try {
      el.getAnimations().forEach((anim) => {
        try {
          anim.finish();
          if ('commitStyles' in anim) (anim as any).commitStyles();
          anim.cancel();
        } catch {
          try { anim.cancel(); } catch { /* ignore */ }
        }
      });
    } catch { /* element may not support getAnimations */ }
  });

  // Pass 2: Safety net for JS-driven animations that don't use WAAPI.
  // Only fix elements with computed opacity near 0 that aren't intentionally transparent.
  all.forEach((el) => {
    const htmlEl = el as HTMLElement;
    try {
      const computedOpacity = parseFloat(window.getComputedStyle(htmlEl).opacity);
      if (computedOpacity < 0.05) {
        const classes = htmlEl.className || "";
        const isIntentional = typeof classes === "string" && (
          classes.includes("opacity-0") ||
          classes.includes("opacity-[0") ||
          classes.includes("hidden") ||
          classes.includes("sr-only") ||
          classes.includes("pointer-events-none")
        );
        // Also check if this is an intentionally faint watermark element
        const parentClasses = htmlEl.parentElement?.className || "";
        const isWatermark = typeof parentClasses === "string" &&
          parentClasses.includes("pointer-events-none");
        if (!isIntentional && !isWatermark) {
          htmlEl.style.setProperty("opacity", "1", "important");
        }
      }
    } catch { /* skip */ }
  });
}

// ── Bake computed layout into inline styles ──────────────────────────────────
// html-to-image clones the DOM via node.cloneNode() (which preserves inline
// styles), then iterates getComputedStyle() properties and overwrites them on
// the clone. Critically, it deliberately REDUCES font-size by
// `Math.floor(px) - 0.1` — e.g. 15px → 14.9px. Over many text elements this
// causes cumulative text reflow and misaligned cards / panels.
//
// Strategy:
//   1. Bake font properties as inline styles (these survive DOM cloning).
//   2. Pass `includeStyleProperties` to toJpeg() that EXCLUDES 'font-size',
//      so html-to-image's clone step can't overwrite our correct font-sizes.
//   3. Bake only dimensions on flex/grid items + containers to lock layout.
//   4. Do NOT bake margin/padding/position — let html-to-image's own computed-
//      style copying handle those (it does them correctly, unlike font-size).
//
// Build the property allowlist once (all computed properties minus 'font-size')
let _stylePropsWithoutFontSize: string[] | null = null;
function getStylePropsWithoutFontSize(): string[] {
  if (_stylePropsWithoutFontSize) return _stylePropsWithoutFontSize;
  const cs = window.getComputedStyle(document.documentElement);
  const all: string[] = [];
  for (let i = 0; i < cs.length; i++) all.push(cs[i]);
  _stylePropsWithoutFontSize = all.filter((p) => p !== "font-size");
  return _stylePropsWithoutFontSize;
}

function bakeLayoutForCapture(container: HTMLElement) {
  const els = Array.from(container.querySelectorAll("*"));

  // Pass 1: snapshot all rects + styles BEFORE any mutations
  const snapshot = els.map((el) => {
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

  // Pass 2: apply baked values
  snapshot.forEach((s) => {
    if (!s) return;
    const { el, w, h } = s;

    // ── Font properties ────────────────────────────────────────────────
    // These inline styles survive cloneNode() and will NOT be overwritten
    // by html-to-image because we exclude 'font-size' from its property list.
    el.style.fontFamily = s.fontFamily;
    el.style.fontSize = s.fontSize;       // preserved — html-to-image won't touch it
    el.style.fontWeight = s.fontWeight;
    el.style.lineHeight = s.lineHeight;
    el.style.letterSpacing = s.letterSpacing;

    // ── Dimensions on flex/grid children ────────────────────────────────
    // Lock these so the clone can't redistribute space differently.
    el.style.boxSizing = "border-box";

    const pd = s.parentDisplay;
    if (
      pd === "flex" || pd === "inline-flex" ||
      pd === "grid" || pd === "inline-grid"
    ) {
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
      el.style.minWidth = `${w}px`;
      el.style.minHeight = `${h}px`;
      el.style.maxWidth = `${w}px`;
      el.style.maxHeight = `${h}px`;
      el.style.flexShrink = "0";
      el.style.flexGrow = "0";
      el.style.flexBasis = "auto";
    }

    // Lock flex/grid container dimensions too
    if (
      s.display === "flex" || s.display === "inline-flex" ||
      s.display === "grid" || s.display === "inline-grid"
    ) {
      el.style.width = `${w}px`;
      el.style.height = `${h}px`;
    }
  });
}

export default function PresentationView() {
  const { slideNumber } = useParams();
  const navigate = useNavigate();
  const currentSlide = slideNumber ? parseInt(slideNumber) - 1 : 0;
  const [direction, setDirection]       = useState(0);
  const [showOverview, setShowOverview] = useState(false);
  const [isExporting, setIsExporting]   = useState(false);
  const [exportStep, setExportStep]     = useState(0); // 0=idle 1-12=capturing 13=saving

  useEffect(() => {
    if (!slideNumber) navigate("/slide/1", { replace: true });
  }, [slideNumber, navigate]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < slideMeta.length) {
      setDirection(index > currentSlide ? 1 : -1);
      navigate(`/slide/${index + 1}`);
      setShowOverview(false);
    }
  };
  const nextSlide = () => goToSlide(currentSlide + 1);
  const prevSlide = () => goToSlide(currentSlide - 1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isExporting) return;
      if (showOverview) { if (e.key === "Escape") setShowOverview(false); return; }
      if (e.key === "ArrowRight" || e.key === " ")  { e.preventDefault(); nextSlide(); }
      else if (e.key === "ArrowLeft")               { e.preventDefault(); prevSlide(); }
      else if (e.key === "g" || e.key === "G")      { setShowOverview(true); }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, showOverview, isExporting]);

  // ── PDF export ────────────────────────────────────────────────────────────
  const exportToPDF = async () => {
    if (isExporting) return;
    setIsExporting(true);
    setExportStep(0);
    const pages: string[] = [];

    try {
      // Ensure all web fonts are loaded before we start measuring
      await document.fonts.ready;

      for (let i = 0; i < slideMeta.length; i++) {
        setExportStep(i + 1);

        // ── Render the slide in a fresh off-screen container ────────────────
        const captureEl = document.createElement("div");
        Object.assign(captureEl.style, {
          position:      "fixed",
          top:           "0",
          left:          "0",
          width:         `${CAPTURE_W}px`,
          height:        `${CAPTURE_H}px`,
          overflow:      "hidden",
          pointerEvents: "none",
          zIndex:        "-1",  // behind everything
          opacity:       "1",   // must be visible for capture
        });

        // Kill CSS transitions/animations so they don't interfere
        const killAnimStyle = document.createElement("style");
        killAnimStyle.textContent = `
          *, *::before, *::after {
            animation-duration: 0s !important;
            animation-delay: 0s !important;
            transition-duration: 0s !important;
            transition-delay: 0s !important;
          }
        `;
        captureEl.appendChild(killAnimStyle);

        document.body.appendChild(captureEl);

        // Use flushSync for synchronous React 18 rendering
        const root = createRoot(captureEl);
        flushSync(() => {
          root.render(
            React.createElement(MotionConfig, { transition: { duration: 0, delay: 0 } },
              React.createElement(slideMeta[i].Component)
            )
          );
        });

        // Wait for layout + animation creation
        await new Promise<void>((res) =>
          requestAnimationFrame(() => requestAnimationFrame(() => res()))
        );

        // Finish all WAAPI animations (pass 1 + pass 2)
        forceFinishAnimations(captureEl);

        // Second round for late-created animations
        await new Promise<void>((res) =>
          requestAnimationFrame(() => requestAnimationFrame(() => res()))
        );
        forceFinishAnimations(captureEl);

        // Bake computed layout into inline styles
        bakeLayoutForCapture(captureEl);

        // Let the browser settle
        await new Promise((res) => setTimeout(res, 100));

        try {
          // html-to-image uses the browser's own rendering engine (SVG foreignObject),
          // so it natively supports background-clip:text, CSS masks, backdrop-filter,
          // oklch/oklab colors, and SVG gradients — no workarounds needed.
          const dataUrl = await toJpeg(captureEl, {
            width: CAPTURE_W,
            height: CAPTURE_H,
            pixelRatio: 2,
            quality: 0.93,
            backgroundColor: "#102A1A",
            skipFonts: false,
            // Embedded fonts: inline all @font-face so the SVG foreignObject
            // has access to the same fonts as the live page.
            includeQueryParams: true,
            // Exclude 'font-size' from style properties to prevent html-to-image
            // from reducing font sizes and causing text reflow.
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
    } catch (err) {
      console.error("PDF export failed", err);
    }

    // ── Assemble & download PDF ──────────────────────────────────────────────
    setExportStep(13);
    await new Promise((r) => setTimeout(r, 60));

    const pdf = new jsPDF({ orientation: "landscape", unit: "mm", format: [PDF_W, PDF_H] });
    pages.forEach((imgData, idx) => {
      if (!imgData) return;
      if (idx > 0) pdf.addPage([PDF_W, PDF_H], "landscape");
      pdf.addImage(imgData, "JPEG", 0, 0, PDF_W, PDF_H, undefined, "FAST");
    });
    pdf.save("AgX-bhoomi-teaming-proposal.pdf");

    setIsExporting(false);
    setExportStep(0);
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  const CurrentSlideComponent = slideMeta[currentSlide]?.Component;
  const slideVariants = {
    enter: (dir: number) => ({ x: dir > 0 ? "100%" : "-100%", opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit:   (dir: number) => ({ x: dir > 0 ? "-100%" : "100%",  opacity: 0 }),
  };

  const exportLabel =
    exportStep === 13 ? "Saving PDF…"
    : exportStep > 0  ? `Capturing slide ${exportStep} of ${slideMeta.length}…`
    : "Preparing…";
  const exportPct = exportStep === 13 ? 100 : Math.round((exportStep / slideMeta.length) * 100);

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ background: "#0A1F10" }}>

      {/* ── Main slide ────────────────────────────────────────────────────── */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter" animate="center" exit="exit"
          transition={{ x: { type: "spring", stiffness: 350, damping: 35 }, opacity: { duration: 0.15 } }}
          className="absolute inset-0"
        >
          {CurrentSlideComponent && <CurrentSlideComponent />}
        </motion.div>
      </AnimatePresence>

      {/* ── Nav bar ───────────────────────────────────────────────────────── */}
      <div
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2.5 rounded-full"
        style={{ background: "rgba(7,25,16,0.85)", backdropFilter: "blur(24px)", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 8px 32px rgba(0,0,0,0.5)" }}
      >
        <button onClick={prevSlide} disabled={currentSlide === 0}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-25"
          style={{ background: currentSlide === 0 ? "transparent" : "rgba(255,255,255,0.1)" }}>
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

        <div className="flex items-center gap-1.5">
          {slideMeta.map((_, index) => (
            <button key={index} onClick={() => goToSlide(index)} className="transition-all rounded-full"
              style={{ width: index === currentSlide ? "22px" : "6px", height: "6px",
                background: index === currentSlide ? "linear-gradient(to right, #C8A84B, #0E7BB5)" : "rgba(255,255,255,0.25)" }} />
          ))}
        </div>

        <button onClick={nextSlide} disabled={currentSlide === slideMeta.length - 1}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all disabled:opacity-25"
          style={{ background: currentSlide === slideMeta.length - 1 ? "transparent" : "rgba(255,255,255,0.1)" }}>
          <ChevronRight className="w-4 h-4 text-white" />
        </button>

        <div className="w-px h-5 bg-white/10" />

        <button onClick={() => setShowOverview(true)}
          className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10">
          <LayoutGrid className="w-4 h-4 text-white/60" />
        </button>

        <div className="w-px h-5 bg-white/10" />

        <button onClick={exportToPDF} disabled={isExporting}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold transition-all disabled:opacity-50"
          style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)", color: "white" }}>
          {isExporting ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <FileDown className="w-3.5 h-3.5" />}
          <span>{isExporting ? `${exportPct}%` : "PDF"}</span>
        </button>
      </div>

      {/* ── Slide counter ─────────────────────────────────────────────────── */}
      <div className="absolute top-5 right-5 z-20 px-3 py-1 rounded-full text-xs"
        style={{ background: "rgba(7,25,16,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.45)", fontFamily: "'Inter', sans-serif" }}>
        <span style={{ color: "#C8A84B" }}>{currentSlide + 1}</span>
        <span className="mx-1">/</span>{slideMeta.length}
      </div>

      {/* ── Slide title ───────────────────────────────────────────────────── */}
      <AnimatePresence mode="wait">
        <motion.div key={currentSlide} initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="absolute top-5 left-1/2 -translate-x-1/2 z-20 px-4 py-1 rounded-full text-[11px]"
          style={{ background: "rgba(7,25,16,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.35)", fontFamily: "'Inter', sans-serif", letterSpacing: "0.05em" }}>
          {slideMeta[currentSlide]?.title}
        </motion.div>
      </AnimatePresence>

      {/* ── Export overlay ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {isExporting && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="absolute inset-0 z-50 flex flex-col items-center justify-center gap-6"
            style={{ background: "rgba(4,14,9,0.94)", backdropFilter: "blur(28px)" }}>

            <div className="w-20 h-20 rounded-3xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}>
              {exportStep === 13
                ? <FileDown className="w-9 h-9 text-white" />
                : <Loader2 className="w-9 h-9 text-white animate-spin" />}
            </div>

            <div className="text-center">
              <h2 className="text-white text-2xl font-bold mb-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                {exportStep === 13 ? "Saving your PDF…" : "Generating PDF"}
              </h2>
              <p className="text-white/50 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{exportLabel}</p>
            </div>

            <div className="w-72 h-2 rounded-full overflow-hidden" style={{ background: "rgba(255,255,255,0.10)" }}>
              <motion.div className="h-full rounded-full"
                style={{ background: "linear-gradient(to right, #C8A84B, #8DB870, #1E9EA4, #0E7BB5)" }}
                initial={{ width: "0%" }} animate={{ width: `${exportPct}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }} />
            </div>

            <div className="flex gap-1.5 items-center">
              {slideMeta.map((meta, idx) => (
                <div key={idx} className="rounded-md transition-all duration-200"
                  style={{
                    width:  idx === exportStep - 1 ? "32px" : "10px",
                    height: "10px",
                    background: idx < exportStep - 1
                      ? "linear-gradient(to right, #C8A84B, #0E7BB5)"
                      : idx === exportStep - 1 ? "#C8A84B" : "rgba(255,255,255,0.15)",
                  }}
                  title={meta.title} />
              ))}
            </div>

            <p className="text-white/25 text-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
              AgX-bhoomi-teaming-proposal.pdf
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Overview modal ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {showOverview && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}
            className="absolute inset-0 z-30 flex flex-col"
            style={{ background: "rgba(4,12,8,0.95)", backdropFilter: "blur(24px)" }}
            onClick={() => setShowOverview(false)}>
            <div className="flex items-center justify-between px-10 py-6">
              <h2 className="text-white font-bold text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>All Slides</h2>
              <button className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: "rgba(255,255,255,0.08)" }} onClick={() => setShowOverview(false)}>
                <X className="w-4 h-4 text-white" />
              </button>
            </div>

            <div className="flex-1 px-10 pb-10 grid grid-cols-4 gap-4 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              {slideMeta.map((meta, index) => {
                const { Component } = meta;
                const isActive = index === currentSlide;
                return (
                  <motion.button key={index} initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: index * 0.03 }} onClick={() => goToSlide(index)}
                    className="relative rounded-xl overflow-hidden text-left"
                    style={{ border: isActive ? "2px solid #C8A84B" : "2px solid rgba(255,255,255,0.08)", aspectRatio: "16/9" }}>
                    <div className="absolute inset-0"
                      style={{ transform: "scale(0.25)", transformOrigin: "top left", width: "400%", height: "400%" }}>
                      <Component />
                    </div>
                    <div className="absolute bottom-0 inset-x-0 px-2 py-1.5 flex items-center gap-1.5"
                      style={{ background: "rgba(4,12,8,0.8)" }}>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded"
                        style={{ background: isActive ? "linear-gradient(135deg, #C8A84B, #0E7BB5)" : "rgba(255,255,255,0.1)", color: "white" }}>
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[9px] truncate" style={{ color: isActive ? "#C8A84B" : "rgba(255,255,255,0.5)" }}>
                        {meta.title}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}