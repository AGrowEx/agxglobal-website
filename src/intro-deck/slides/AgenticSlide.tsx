import React from "react";
import { BG, SlideLayout, GradientText, GlassCard, PhoneFrame, Eyebrow, SlideTopBar } from "../shared";

const agents = [
  {
    dot: "bg-green-400",
    step: "01",
    name: "Farm Setup Agent",
    desc: "Captures farm boundaries, crop types, soil profiles and location data. Activates all downstream intelligence automatically.",
  },
  {
    dot: "bg-amber-400",
    step: "02",
    name: "Disease Intelligence Agent",
    desc: "15-day outbreak forecast using crop age, climate & farm data. Computer-vision disease detection from photos. Guided diagnosis Q&A.",
  },
  {
    dot: "bg-blue-400",
    step: "03",
    name: "Fertigation Intelligence Agent",
    desc: "Auto-generates crop-specific fertigation and irrigation schedules from soil type, climate and growth stage. Reduces input waste 10–20%.",
  },
  {
    dot: "bg-purple-400",
    step: "04",
    name: "Seasonal Planning Agent",
    desc: "Predicts workforce requirements from climate, production targets and farm activity calendar. Optimises daily operations at scale.",
  },
];

export default function AgenticSlide() {
  return (
    <SlideLayout bgImage={BG.nature} bgOpacity={0.2}>
      <SlideTopBar />

      <div className="flex-1 flex items-center gap-8">

        {/* Left: heading + 2×2 agent grid */}
        <div className="flex-1 flex flex-col gap-3">
          <div className="space-y-1">
            <Eyebrow>Agentic AI — Bhoomi Platform</Eyebrow>
            <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Your Farm. Running on
              <br />
              <GradientText>Autopilot.</GradientText>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed max-w-md">
              Four AI agents operating in concert — learning from your farm, acting before you ask.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-1.5">
            {agents.map((a) => (
              <GlassCard key={a.name} className="flex items-start gap-2.5 px-3 py-2">
                <span className={`mt-1 flex-shrink-0 w-2 h-2 rounded-full ${a.dot}`} />
                <div className="min-w-0">
                  <div className="text-white text-sm font-semibold leading-snug">{a.name}</div>
                  <div className="text-gray-300 text-xs mt-0.5 leading-snug">{a.desc}</div>
                </div>
                <span className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded-full bg-white/5 text-white/40">
                  {a.step}
                </span>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Right: phone mockup — same size as slide 3 */}
        <div className="flex-shrink-0 flex items-end gap-4 pr-4">
          <PhoneFrame
            src="/bhoomi/bhoomi_AI.png"
            alt="Bhoomi AI"
            className="w-44 lg:w-52"
          />
          <PhoneFrame
            src="/bhoomi/bhoomi_pest_management.png"
            alt="Bhoomi Disease"
            className="w-40 lg:w-48 mb-8"
          />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex items-center justify-center gap-6 pt-3 border-t border-white/5">
        <span className="text-white/35 text-sm">● 15-Day Advance Forecast</span>
        <span className="text-white/10 text-sm">·</span>
        <span className="text-white/35 text-sm">● Computer Vision Detection</span>
        <span className="text-white/10 text-sm">·</span>
        <span className="text-white/35 text-sm">● Auto-Scheduling</span>
        <span className="text-white/10 text-sm">·</span>
        <span className="text-white/35 text-sm">● Zero Manual Input</span>
      </div>
    </SlideLayout>
  );
}
