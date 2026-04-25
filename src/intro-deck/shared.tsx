import React from "react";
import type { ReactNode } from "react";

// ─── Background farm images ────────────────────────────────────────────────
export const BG = {
  heroFarm: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2232&q=80",
  auFarm:   "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80",
  crops:    "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=1600&q=80",
  nature:   "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80",
  tech:     "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2400&q=80",
  farmers:  "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2400&q=80",
} as const;

// ─── Slide root wrapper ────────────────────────────────────────────────────
interface SlideLayoutProps {
  bgImage?: string;
  bgOpacity?: number;
  children: ReactNode;
  className?: string;
}

export function SlideLayout({
  bgImage,
  bgOpacity = 0.12,
  children,
  className = "",
}: SlideLayoutProps) {
  return (
    <div className={`relative w-full h-full bg-slate-950 overflow-hidden ${className}`}>
      {bgImage && (
        <>
          <img
            src={bgImage}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
            style={{ opacity: bgOpacity }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/70 via-slate-950/10 to-slate-950/80 pointer-events-none" />
        </>
      )}
      <div className="relative z-10 h-full flex flex-col px-12 py-8">
        {children}
      </div>
    </div>
  );
}

// ─── Gradient headline text ────────────────────────────────────────────────
export function GradientText({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  );
}

// ─── Glassy card ──────────────────────────────────────────────────────────
export function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-white/[0.04] border border-white/10 rounded-2xl backdrop-blur-sm ${className}`}>
      {children}
    </div>
  );
}

// ─── App phone-frame mockup ────────────────────────────────────────────────
export function PhoneFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div
      className={`rounded-[2.2rem] overflow-visible
        drop-shadow-[0_32px_55px_rgba(0,0,0,0.42)] ${className}`}
    >
      <img src={src} alt={alt} className="w-full block" />
    </div>
  );
}

// ─── Small section eyebrow label ──────────────────────────────────────────
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-green-400 text-sm font-semibold tracking-[0.18em] uppercase">
      {children}
    </p>
  );
}

// ─── Top bar shared across all slides ─────────────────────────────────────
export function SlideTopBar({ slideLabel }: { slideLabel?: string }) {
  return (
    <div className="flex items-center justify-between mb-6">
      <img src="/logo.png" alt="AGX Global" className="h-7 w-auto opacity-80" />
      {slideLabel && (
        <span className="text-white/20 text-xs font-mono tracking-wider">{slideLabel}</span>
      )}
    </div>
  );
}

// ─── Stat block (number + label) ──────────────────────────────────────────
export function StatBlock({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl lg:text-4xl font-bold text-green-400 leading-none">{number}</div>
      <div className="text-xs text-gray-500 mt-1.5 uppercase tracking-wider">{label}</div>
    </div>
  );
}
