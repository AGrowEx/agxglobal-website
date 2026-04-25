import { motion } from "motion/react";
import React from "react";
import VectorMark from "../../../imports/Vector";
import Group3Bhoomi from "../../../imports/Group3";

// ─── Shared Logo Components ───────────────────────────────────────────────────

export const AgxLogo = ({ className = "" }: { className?: string }) => (
  <div className={`flex items-center gap-3 flex-shrink-0 ${className}`}>
    <div className="relative flex-shrink-0" style={{ width: "46px", height: "22px" }}>
      <VectorMark />
    </div>
    <div className="flex flex-col justify-center">
      <div
        className="font-bold leading-none text-white"
        style={{ fontSize: "18px", letterSpacing: "-0.01em" }}
      >
        Ag<sup style={{ color: "#C8A84B", fontSize: "11px", verticalAlign: "super" }}>x</sup>{" "}
        Global
      </div>
      <div
        className="leading-none mt-[3px] text-white/45"
        style={{ fontSize: "8px", letterSpacing: "0.13em" }}
      >
        XCELERATING AGRICULTURE
      </div>
    </div>
  </div>
);

export const BhoomiLogo = ({ className = "" }: { className?: string }) => (
  <div className={`relative flex-shrink-0 ${className}`} style={{ width: "91px", height: "43px" }}>
    <Group3Bhoomi />
  </div>
);

// ─── Gradient helpers (inline styles) ─────────────────────────────────────────
export const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

// ─── Background Blobs (reusable pattern) ─────────────────────────────────────
export const SlideBg = ({ flip = false }: { flip?: boolean }) => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    {/* Warm amber blob */}
    <div
      className="absolute w-[600px] h-[600px] rounded-full"
      style={{
        background: `radial-gradient(circle, rgba(200,168,75,0.22) 0%, transparent 70%)`,
        top: flip ? "auto" : "-150px",
        bottom: flip ? "-150px" : "auto",
        left: flip ? "auto" : "-130px",
        right: flip ? "-130px" : "auto",
      }}
    />
    {/* Deep teal blob */}
    <div
      className="absolute w-[460px] h-[460px] rounded-full"
      style={{
        background: `radial-gradient(circle, rgba(14,123,181,0.20) 0%, transparent 70%)`,
        bottom: flip ? "auto" : "-110px",
        top: flip ? "-110px" : "auto",
        right: flip ? "auto" : "-90px",
        left: flip ? "-90px" : "auto",
      }}
    />
    {/* Sage mid-blob */}
    <div
      className="absolute w-[340px] h-[340px] rounded-full"
      style={{
        background: `radial-gradient(circle, rgba(141,184,112,0.12) 0%, transparent 70%)`,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    />
    {/* Large watermark Vector mark */}
    <div
      className="absolute opacity-[0.05]"
      style={{ width: "680px", height: "320px", right: "-60px", bottom: "50px" }}
    >
      <VectorMark />
    </div>
  </div>
);

// ─── Slide Header ─────────────────────────────────────────────────────────────
export const SlideHeader = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="relative px-10 py-5 flex justify-between items-center border-b border-white/[0.10]">
    <div className="flex items-center gap-4">
      <div
        className="w-[3px] h-10 rounded-full flex-shrink-0"
        style={{ background: "linear-gradient(to bottom, #C8A84B, #0E7BB5)" }}
      />
      <div>
        <h1 className="text-[1.85rem] font-bold text-white leading-tight">{title}</h1>
        <p className="text-white/55 text-sm mt-0.5 italic">{subtitle}</p>
      </div>
    </div>
    <AgxLogo />
  </div>
);

// ─── Slide Footer ─────────────────────────────────────────────────────────────
export const SlideFooter = () => (
  <div className="relative px-10 py-2.5 flex justify-between items-center border-t border-white/[0.08]">
    <BhoomiLogo />
    <span className="text-white/30 text-xs tracking-wider">www.agxglobal.earth</span>
    <AgxLogo className="opacity-55" />
  </div>
);

// ─── Glass Card ───────────────────────────────────────────────────────────────
export const GlassCard = ({
  children,
  className = "",
  accent = false,
  style,
}: {
  children: React.ReactNode;
  className?: string;
  accent?: boolean;
  style?: React.CSSProperties;
}) => (
  <div
    className={`rounded-2xl border ${accent ? "border-[#C8A84B]/30" : "border-white/12"} ${className}`}
    style={{
      background: accent
        ? "linear-gradient(135deg, rgba(200,168,75,0.14), rgba(14,123,181,0.10))"
        : "rgba(255,255,255,0.09)",
      backdropFilter: "blur(20px)",
      ...style,
    }}
  >
    {children}
  </div>
);

// ─── Check Item ───────────────────────────────────────────────────────────────
export const CheckItem = ({ text }: { text: string }) => (
  <div className="flex gap-3 items-start">
    <div
      className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
    >
      <svg viewBox="0 0 10 8" fill="none" className="w-2.5 h-2">
        <path d="M1 4L3.5 6.5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
    <p className="text-white/80 text-[15px] leading-relaxed">{text}</p>
  </div>
);

// ─── Metric Card ─────────────────────────────────────────────────────────────
export const MetricCard = ({
  metric,
  title,
  desc,
  delay = 0,
}: {
  metric: string;
  title: string;
  desc: string;
  delay?: number;
}) => (
  <motion.div
    initial={{ y: 24, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="rounded-2xl border border-white/12 p-6 flex flex-col"
    style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
  >
    <div className="text-4xl font-bold mb-1" style={gradientText}>
      {metric}
    </div>
    <div
      className="h-[2px] w-8 rounded-full my-2"
      style={{ background: "linear-gradient(to right, #C8A84B, #0E7BB5)" }}
    />
    <div className="text-white font-semibold text-base mb-1">{title}</div>
    <div className="text-white/65 text-sm leading-relaxed">{desc}</div>
  </motion.div>
);

// ─── Title Slide ──────────────────────────────────────────────────────────────
export default function TitleSlide() {
  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg />

      {/* Main content */}
      <div className="relative flex-1 flex">
        {/* Left Column */}
        <div className="w-[55%] flex flex-col justify-between px-14 py-12">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AgxLogo />
            <div
              className="mt-2 text-[10px] tracking-[0.2em] font-medium"
              style={{ color: "rgba(200,168,75,0.75)" }}
            >
              XCELERATING AGRICULTURE
            </div>
          </motion.div>

          {/* Hero text */}
          <div>
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[56px] font-black text-white leading-none mb-4"
              style={{ letterSpacing: "-0.02em" }}
            >
              Teaming
              <br />
              Agreement
              <br />
              <span style={gradientText}>Proposal</span>
            </motion.div>

            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2px] rounded-full mb-5 origin-left"
              style={{
                background: "linear-gradient(to right, #C8A84B, #0E7BB5, transparent)",
                width: "340px",
              }}
            />

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/70 text-lg leading-relaxed max-w-sm"
            >
              Bringing Precision Agriculture Technology to Australian Growers — Together
            </motion.p>
          </div>

          {/* Powered by bhoomi */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center gap-4 rounded-2xl px-6 py-4 border border-white/12"
            style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)", maxWidth: "340px" }}
          >
            <span className="text-white/45 text-base italic">Powered by</span>
            <BhoomiLogo />
          </motion.div>
        </div>

        {/* Right Column */}
        <div className="w-[45%] flex flex-col justify-center gap-5 pr-14 py-12">
          {[
            { metric: "$45B+", label: "Global AgTech Market", icon: "🌏", sub: "and growing fast" },
            { metric: "$20B+", label: "Precision Ag Market", icon: "🌾", sub: "targeted segment" },
            { metric: "40–50%", label: "Yield Increase Proven", icon: "📈", sub: "on pilot farms" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.5 }}
              className="rounded-2xl border border-white/12 px-6 py-5 flex items-center gap-5"
              style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
            >
              <div className="text-3xl">{item.icon}</div>
              <div className="flex-1">
                <div className="text-[34px] font-black leading-none" style={gradientText}>
                  {item.metric}
                </div>
                <div className="text-white/75 text-base mt-0.5">{item.label}</div>
                <div className="text-white/40 text-sm mt-0.5">{item.sub}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="relative px-14 py-3 flex items-center justify-between border-t border-white/[0.08]">
        <span className="text-white/25 text-xs tracking-widest">
          CONFIDENTIAL | FOR PARTNERSHIP DISCUSSION ONLY
        </span>
        <span className="text-white/30 text-sm tracking-wider">www.agxglobal.earth</span>
      </div>
    </div>
  );
}
