import React from "react";
import { BG, SlideLayout, GradientText, GlassCard, Eyebrow, SlideTopBar } from "../shared";

const offerings = [
  {
    icon: "⚙️",
    tag: "Engineering",
    tagColor: "text-green-400",
    title: "Platform Engineering",
    subtitle: "End-to-end product development",
    bullets: [
      "Web & mobile applications (React, React Native)",
      "Cloud-native architecture (AWS / Azure / GCP)",
      "API design, microservices & system integration",
      "From MVP to enterprise-scale production",
    ],
  },
  {
    icon: "🤖",
    tag: "AI / ML",
    tagColor: "text-blue-400",
    title: "Agentic AI Applications",
    subtitle: "Multi-agent workflow automation",
    bullets: [
      "LLM orchestration & autonomous agent design",
      "Domain-specific AI fine-tuning & RAG pipelines",
      "Computer vision & predictive analytics",
      "Proven in production across agriculture, logistics & ops",
    ],
  },
  {
    icon: "📡",
    tag: "IoT",
    tagColor: "text-purple-400",
    title: "IoT + Data Pipelines",
    subtitle: "Real-time sensor-to-insight",
    bullets: [
      "IoT device integration & edge computing",
      "Real-time data ingestion & stream processing",
      "Decision automation from live sensor feeds",
      "Custom dashboards & reporting infrastructure",
    ],
  },
];

const credentials = [
  "36+ Years Combined Experience",
  "Infosys · IBM · NAB · Wipro · Schiavello",
  "3 Continents · 16+ Yrs Data Science & AI",
];

export default function B2BSolutionsSlide() {
  return (
    <SlideLayout bgImage={BG.tech} bgOpacity={0.17}>
      <SlideTopBar />

      {/* Heading block */}
      <div className="text-center mb-4 space-y-1">
        <Eyebrow>AGX Global Solutions Pty Ltd</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Beyond AgTech.
          <br />
          <GradientText>We Build for Any Business.</GradientText>
        </h2>
        <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The same agentic AI architecture powering Bhoomi — available as a custom solution for your industry.
        </p>
      </div>

      {/* 3-col offering cards */}
      <div className="flex-1 flex items-center">
        <div className="w-full flex items-start gap-5">
          {offerings.map((o) => (
            <GlassCard
              key={o.title}
              className="flex-1 flex flex-col p-3.5 gap-2"
            >
              <div className="flex items-start justify-between">
                <span className="text-xl">{o.icon}</span>
                <span className={`text-sm font-semibold uppercase tracking-wider ${o.tagColor} bg-white/5 px-2 py-0.5 rounded-full`}>{o.tag}</span>
              </div>
              <div>
                <div className="text-white font-semibold text-sm leading-snug">{o.title}</div>
                <div className="text-gray-300 text-sm mt-0.5">{o.subtitle}</div>
              </div>
              <ul className="space-y-1">
                {o.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-gray-200 text-sm leading-snug">
                    <span className="text-green-400/50 mt-0.5 flex-shrink-0">›</span>
                    {b}
                  </li>
                ))}
              </ul>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Credential bar */}
      <div className="pt-2 border-t border-white/5 flex flex-wrap items-center justify-between gap-y-2 gap-x-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
          {credentials.map((c, i) => (
            <React.Fragment key={c}>
              <span className="text-white/45 text-xs">{c}</span>
              {i < credentials.length - 1 && <span className="text-white/10 text-xs">·</span>}
            </React.Fragment>
          ))}
        </div>
        <a
          href="mailto:pravinda@agxglobal.earth"
          className="text-green-400/80 text-xs font-medium tracking-wide hover:text-green-400 transition-colors flex-shrink-0"
        >
          pravinda@agxglobal.earth — Let&apos;s talk custom builds →
        </a>
      </div>
    </SlideLayout>
  );
}
