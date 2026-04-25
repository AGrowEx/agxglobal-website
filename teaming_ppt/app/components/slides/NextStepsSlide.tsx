import { motion } from "motion/react";
import { SlideBg, SlideHeader, SlideFooter } from "./TitleSlide";
import React from "react";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const stepColors = [
  { from: "#C8A84B", to: "#8DB870" },
  { from: "#8DB870", to: "#4A9490" },
  { from: "#4A9490", to: "#1E9EA4" },
  { from: "#1E9EA4", to: "#1488B8" },
  { from: "#1488B8", to: "#0E7BB5" },
  { from: "#C8A84B", to: "#0E7BB5" },
];

export default function NextStepsSlide() {
  const steps = [
    {
      number: "01",
      title: "Mutual NDA & Intro Call",
      timeline: "Week 1–2",
      description:
        "Sign mutual NDA, align on goals, confirm mutual interest. Share detailed platform access and product roadmap.",
    },
    {
      number: "02",
      title: "Platform Demo & Deep Dive",
      timeline: "Week 2–3",
      description:
        "Live bhoomi demo for your team. Walk through technical architecture, integration options, and AU use cases.",
    },
    {
      number: "03",
      title: "Identify First Target Customer",
      timeline: "Week 3–4",
      description:
        "Together, identify 1–2 suitable customers from your pipeline for a structured pilot programme.",
    },
    {
      number: "04",
      title: "Teaming Agreement Execution",
      timeline: "Month 2",
      description:
        "Agree commercial terms, roles, revenue share, and co-branding. Execute formal Teaming Agreement.",
    },
    {
      number: "05",
      title: "Pilot Launch",
      timeline: "Month 2–4",
      description:
        "Joint onboarding of first customer. AgX provides full technical support. Partner manages commercial relationship.",
    },
    {
      number: "06",
      title: "Scale & Grow",
      timeline: "Month 4+",
      description:
        "Based on pilot results, expand to more customers and develop joint RFP pipeline for enterprise opportunities.",
    },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg />

      <SlideHeader
        title="Proposed Next Steps"
        subtitle="From conversation to collaboration."
      />

      <div className="relative flex-1 flex flex-col px-10 py-4 gap-3 min-h-0">
        {/* Timeline connector */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className="h-2 rounded-full flex-1"
            style={{
              background: "linear-gradient(to right, #C8A84B, #8DB870, #1E9EA4, #0E7BB5)",
            }}
          />
          <span className="text-white/45 text-sm">6-step pathway to partnership</span>
        </div>

        {/* Steps grid — flex-1 + gridAutoRows fills all remaining space */}
        <div
          className="flex-1 grid grid-cols-2 gap-4 min-h-0"
          style={{ gridAutoRows: "1fr" }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              className="rounded-2xl border border-white/12 p-6 flex items-start gap-5 h-full"
              style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
            >
              {/* Number badge */}
              <div
                className="w-14 h-14 rounded-2xl flex-shrink-0 flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${stepColors[index].from}, ${stepColors[index].to})`,
                }}
              >
                <span className="text-white font-black text-xl">{step.number}</span>
              </div>

              <div className="flex-1 flex flex-col min-w-0">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-white font-bold text-base leading-snug">{step.title}</h3>
                  <span
                    className="text-[11px] font-semibold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0"
                    style={{
                      background: "rgba(200,168,75,0.18)",
                      color: "#C8A84B",
                      border: "1px solid rgba(200,168,75,0.3)",
                    }}
                  >
                    {step.timeline}
                  </span>
                </div>
                <p className="text-white/65 text-sm leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="text-center shrink-0 py-1"
        >
          <p className="text-white/45 text-sm italic">
            Ready to start?{" "}
            <span style={gradientText} className="not-italic font-semibold">
              Reach out to Dinesh Sahu — Dinesh.Sahu@agxglobal.earth
            </span>
          </p>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
