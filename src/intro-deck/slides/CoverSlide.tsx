import React from "react";
import { BG, SlideLayout, GradientText, PhoneFrame, Eyebrow } from "../shared";

const stats = [
  { n: "25,000+", l: "Farming Days Digitised" },
  { n: "~40%", l: "Yield Increase" },
  { n: "15-Day", l: "Advance Forecast" },
  { n: "3", l: "Continents Active" },
];

export default function CoverSlide() {
  return (
    <SlideLayout bgImage={BG.heroFarm} bgOpacity={0.28}>
      {/* Top: logo */}
      <div className="flex items-center justify-between mb-6">
        <img src="/logo.png" alt="AGX Global" className="h-8 w-auto opacity-85" />
        <span className="text-white/20 text-xs font-mono tracking-wider">AGX GLOBAL · 2026</span>
      </div>

      {/* Main 2-col layout */}
      <div className="flex-1 flex items-center gap-12">

        {/* Left: text content */}
        <div className="flex-1 flex flex-col gap-7">
          <Eyebrow>AGX Global · Bhoomi Platform</Eyebrow>

          <div className="space-y-2">
            <h1 className="text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
              One Platform.
            </h1>
            <h1 className="text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              <GradientText>Every Farm.</GradientText>
            </h1>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed max-w-lg">
            Agentic AI precision agriculture — turning a AU$45K fungal outbreak into
            a AU$0 prevention story.
          </p>

          {/* Stat pills */}
          <div className="grid grid-cols-4 gap-3 max-w-5xl">
            {stats.map(({ n, l }) => (
              <div
                key={l}
                className="bg-white/[0.06] border border-white/10 rounded-xl px-5 py-3.5 text-center min-w-0 backdrop-blur-sm"
              >
                <div className="text-[2rem] font-bold text-green-400 leading-none tracking-tight">{n}</div>
                <div className="text-xs text-gray-300/85 mt-1.5 leading-snug">{l}</div>
              </div>
            ))}
          </div>

          {/* App store badges */}
          <div className="flex items-center gap-4 pt-1">
            <span className="text-gray-300/80 text-xs uppercase tracking-wider">Available on</span>
            <span className="text-white/70 text-xs border border-white/10 rounded-lg px-3 py-1.5 bg-white/[0.03]">
              App Store
            </span>
            <span className="text-white/70 text-xs border border-white/10 rounded-lg px-3 py-1.5 bg-white/[0.03]">
              Google Play
            </span>
            <span className="text-gray-300/80 text-xs">· 5★ · 10,000+ downloads</span>
          </div>
        </div>

        {/* Right: phone mockups */}
        <div className="flex-shrink-0 flex items-end gap-5 pr-4">
          <PhoneFrame
            src="/bhoomi/bhoomi_dashboard_hero.png"
            alt="Bhoomi Dashboard"
            className="w-48 lg:w-56"
          />
          <PhoneFrame
            src="/bhoomi/bhoomi_weather.png"
            alt="Bhoomi Weather"
            className="w-40 lg:w-48 mb-10"
          />
        </div>
      </div>

      {/* Bottom tagline */}
      <div className="flex items-center justify-center pt-4">
        <p className="text-white/20 text-xs tracking-widest uppercase">
          agxglobal.earth · Precision Agriculture, Redefined
        </p>
      </div>
    </SlideLayout>
  );
}
