import React from "react";
import { BG, SlideLayout, GradientText, GlassCard, Eyebrow, SlideTopBar } from "../shared";

const problems = [
  {
    icon: "🦟",
    tag: "Biosecurity",
    stat: "AU$45K+",
    statLabel: "avg. loss per outbreak",
    title: "Pest & Disease Threats",
    body:
      "Fungal, viral and insect outbreaks can wipe 30–60% of a season's yield. Most detection happens too late — after visible damage is done.",
    accent: "text-amber-400",
  },
  {
    icon: "💧",
    tag: "Input Efficiency",
    stat: "30–60%",
    statLabel: "input cost surge since 2020",
    title: "Rising Input Costs",
    body:
      "Fertiliser, water and labour costs are climbing. Without precision guidance, growers over-apply inputs — wasting money and damaging soil health.",
    accent: "text-blue-400",
  },
  {
    icon: "📋",
    tag: "Workforce Management",
    stat: "3 hrs/day",
    statLabel: "lost to manual admin",
    title: "Workforce & Compliance Load",
    body:
      "Scheduling teams, tracking activities and generating compliance reports consumes time that should be spent farming. Spreadsheets aren't enough.",
    accent: "text-purple-400",
  },
];

export default function ProblemSlide() {
  return (
    <SlideLayout bgImage={BG.auFarm} bgOpacity={0.23}>
      {/* Top strip: image bleed with gradient */}
      <div className="absolute inset-x-0 top-0 h-40 pointer-events-none z-0">
        <img
          src={BG.auFarm}
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover"
          style={{ opacity: 0.35 }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-950" />
      </div>

      <SlideTopBar />

      {/* Heading block */}
      <div className="relative z-10 text-center mb-4 space-y-1.5">
        <Eyebrow>The Challenge</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Australian Farms Are Ready.
          <br />
          <GradientText>The Tools Aren&apos;t.</GradientText>
        </h2>
        <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Three persistent pain points costing Australian growers time, money and crops — every season.
        </p>
      </div>

      {/* 3 problem cards */}
      <div className="relative z-10 flex-1 flex items-center">
        <div className="w-full flex items-stretch gap-5">
          {problems.map((p) => (
            <GlassCard key={p.title} className="flex-1 flex flex-col p-4 gap-2.5">
              <div className="flex items-start justify-between">
                <span className="text-3xl">{p.icon}</span>
                <span className={`text-xs font-semibold uppercase tracking-wider ${p.accent} bg-white/5 px-2.5 py-1 rounded-full`}>
                  {p.tag}
                </span>
              </div>

              <div>
                <div className={`text-2xl font-extrabold leading-none ${p.accent}`}>{p.stat}</div>
                <div className="text-sm text-gray-400 mt-0.5">{p.statLabel}</div>
              </div>

              <div>
                <div className="text-white font-semibold text-base mb-1">{p.title}</div>
                <p className="text-gray-300 text-sm leading-snug">{p.body}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Bottom note */}
      <div className="relative z-10 text-center pt-2">
        <p className="text-white/35 text-sm tracking-wide">
          40% of crop losses are preventable with the right data — Bhoomi provides it 15 days in advance
        </p>
      </div>
    </SlideLayout>
  );
}
