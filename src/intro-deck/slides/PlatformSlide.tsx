import React from "react";
import { BG, SlideLayout, GradientText, GlassCard, PhoneFrame, Eyebrow, SlideTopBar } from "../shared";

const modules = [
  { name: "Microclimate Intelligence",     desc: "Hyper-local IoT weather + forecast",      live: true },
  { name: "Disease & Pest Management",     desc: "15-day AI outbreak prediction + CV",       live: true },
  { name: "Fertigation & Irrigation",      desc: "AI-scheduled water & nutrient cycles",     live: true },
  { name: "Precision Nutrition Engine",    desc: "Crop-specific NPK recommendations",        live: true },
  { name: "Farm & Workforce Management",   desc: "Teams, tasks & compliance tracking",       live: true },
  { name: "Harvest & Supply Chain",        desc: "Produce tracking from farm to market",     live: true },
  { name: "Agentic AI Platform",           desc: "4 autonomous AI agents — see slide 4",     live: false },
  { name: "Automated Reporting",           desc: "Regulatory & business reporting, zero effort", live: true },
];

export default function PlatformSlide() {
  return (
    <SlideLayout bgImage={BG.crops} bgOpacity={0.18}>
      <SlideTopBar />

      <div className="flex-1 flex items-center gap-8">

        {/* Left: module grid */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="space-y-1">
            <Eyebrow>The Platform</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              8 Modules.
              <br />
              <GradientText>One App.</GradientText>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              A single platform covering the full farming cycle — from soil to sale.
              Live across 3 continents, zero paid marketing.
            </p>
          </div>

          {/* Module grid: 2 columns */}
          <div className="grid grid-cols-2 gap-1.5">
            {modules.map((m) => (
              <GlassCard key={m.name} className="flex items-start gap-2.5 px-3 py-2">
                <span
                  className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${
                    m.live ? "bg-green-400" : "bg-blue-400"
                  }`}
                />
                <div className="min-w-0">
                  <div className="text-white text-sm font-semibold leading-snug truncate">{m.name}</div>
                  <div className="text-gray-300 text-xs mt-0.5 leading-snug">{m.desc}</div>
                </div>
                <span
                  className={`flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full ${
                    m.live
                      ? "bg-green-400/10 text-green-400"
                      : "bg-blue-400/10 text-blue-400"
                  }`}
                >
                  {m.live ? "Live" : "AI"}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right: stacked phone mockups */}
        <div className="flex-shrink-0 flex items-end gap-4 pr-4">
          <PhoneFrame
            src="/bhoomi/bhoomi_pest_management.png"
            alt="Bhoomi Pest Management"
            className="w-44 lg:w-52"
          />
          <PhoneFrame
            src="/bhoomi/bhoomi_dashboard.png"
            alt="Bhoomi Dashboard"
            className="w-40 lg:w-48 mb-8"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-center gap-6 pt-3 border-t border-white/5">
        <span className="text-white/35 text-sm">● Live module</span>
        <span className="text-blue-400/60 text-sm">● Agentic AI module</span>
        <span className="text-white/10 text-sm">·</span>
        <span className="text-white/35 text-sm">
          25,000+ farming days digitised · $0 paid marketing · 5★ rated
        </span>
      </div>
    </SlideLayout>
  );
}
