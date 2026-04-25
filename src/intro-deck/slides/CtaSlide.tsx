import React from "react";
import { BG, SlideLayout, GradientText, GlassCard, Eyebrow, SlideTopBar } from "../shared";

const audiences = [
  {
    icon: "🌾",
    tag: "Growers",
    tagColor: "text-green-400",
    title: "Farm Pilots",
    sub: "Join as a founding AU farm",
    bullets: [
      "Free access during pilot phase",
      "15-day disease & weather forecasts",
      "Direct line to founding team",
      "Shape the AU product roadmap",
    ],
    cta: "For growers in VIC, QLD, SA, WA",
  },
  {
    icon: "🤝",
    tag: "Partners",
    tagColor: "text-teal-400",
    title: "Distribution Partners",
    sub: "AgTech resellers & consultants",
    bullets: [
      "White-label & co-brand options",
      "Revenue share on subscriptions",
      "Technical & sales enablement",
      "Proven ROI to take to market",
    ],
    cta: "For ag-retailers & input suppliers",
  },
  {
    icon: "📈",
    tag: "Invest",
    tagColor: "text-blue-400",
    title: "Investors",
    sub: "Seed & Series A enquiries",
    bullets: [
      "Live revenue, 3 continents",
      "Defensible data moat",
      "Massive AU addressable market",
      "Founders with enterprise exits",
    ],
    cta: "For angels, VCs & strategic investors",
  },
];

export default function CtaSlide() {
  return (
    <SlideLayout bgImage={BG.heroFarm} bgOpacity={0.32}>
      <SlideTopBar />

      {/* Heading */}
      <div className="text-center mb-4 space-y-1.5">
        <Eyebrow>Let&apos;s Build Together</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Bringing Precision Ag
          <br />
          <GradientText>to Australia.</GradientText>
        </h2>
        <p className="text-base text-gray-200 max-w-xl mx-auto leading-relaxed">
          We&apos;re actively seeking partners, farm pilots and investors to
          grow Bhoomi across Australia&apos;s key growing regions.
        </p>
      </div>

      {/* Audience cards */}
      <div className="flex-1 flex items-center">
        <div className="w-full flex items-start gap-5">
          {audiences.map((a) => (
            <GlassCard
              key={a.title}
              className="flex-1 flex flex-col p-3 gap-1.5"
            >
              <div className="flex items-start justify-between">
                <span className="text-xl">{a.icon}</span>
                <span className={`text-sm font-semibold uppercase tracking-wider ${a.tagColor} bg-white/5 px-2 py-0.5 rounded-full`}>{a.tag}</span>
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-tight tracking-tight">{a.title}</div>
                <div className="text-gray-300 text-sm mt-2">{a.sub}</div>
              </div>
              <ul className="space-y-1">
                {a.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-gray-200 text-sm leading-snug font-normal">
                    <span className="text-green-400/50 flex-shrink-0 mt-0.5">›</span>
                    {b}
                  </li>
                ))}
              </ul>
              <div className="text-gray-200 text-sm mt-auto pt-2 border-t border-white/5">{a.cta}</div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Pravinda contact card */}
      <div className="flex items-center justify-center pt-2">
        <div className="flex items-center gap-4 bg-white/[0.05] border border-white/10 rounded-2xl px-6 py-2.5 backdrop-blur-sm">
          <img
            src="/pravinda.png"
            alt="Pravinda"
            className="w-11 h-11 rounded-full object-cover object-[42%_22%] ring-2 ring-green-500/30"
          />
          <div>
            <div className="text-white font-semibold text-sm">Pravinda — MD &amp; Co-Founder</div>
            <div className="text-gray-200 text-xs mb-1">AGX Global Solutions Pty Ltd</div>
            <div className="flex items-center gap-3">
              <a href="mailto:pravinda@agxglobal.earth" className="text-green-400 text-sm hover:text-green-300 transition-colors">
                pravinda@agxglobal.earth
              </a>
              <span className="text-white/20">·</span>
              <a href="https://www.agxglobal.earth" className="text-gray-200 text-sm hover:text-white transition-colors">
                www.agxglobal.earth
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-6 pt-1">
        <p className="text-white/45 text-sm tracking-widest uppercase">
          AGX Global · Bhoomi Earth · Precision Agriculture for Every Farm
        </p>
      </div>
    </SlideLayout>
  );
}
