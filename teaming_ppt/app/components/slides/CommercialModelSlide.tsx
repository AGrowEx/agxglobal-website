import { motion } from "motion/react";
import { SlideBg, SlideHeader, SlideFooter, CheckItem } from "./TitleSlide";
import React from "react";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const modelAccents = [
  { from: "#C8A84B", to: "#8DB870" },
  { from: "#1E9EA4", to: "#0E7BB5" },
  { from: "#8DB870", to: "#1E9EA4" },
];

export default function CommercialModelSlide() {
  const models = [
    {
      title: "B2C Micro-payments",
      subtitle: "Direct to farmer",
      desc: "~$10/month per module. Low friction, high volume. Suitable for individual grower sign-ups via partner network.",
      emoji: "👨‍🌾",
      highlight: "~$10/mo per module",
    },
    {
      title: "B2B Contract",
      subtitle: "Enterprise & Co-ops",
      desc: "Quarterly / annual SaaS pricing for larger farm groups, irrigation districts, and agribusiness customers.",
      emoji: "🏢",
      highlight: "Annual SaaS pricing",
    },
    {
      title: "B2B2C Revenue Share",
      subtitle: "Via Partner Channel",
      desc: "Partner leads the sale. AgX provides the tech. Revenue shared on commercials generated through your partnership.",
      emoji: "🤝",
      highlight: "Recurring rev share",
    },
  ];

  const terms = [
    "Revenue share structure agreed upfront — partner earns recurring % on all customers onboarded",
    "White-label or co-branded platform options available depending on partner preference",
    "Pilot programme available: 3–6 months structured POC with a target customer before full commitment",
    "Exclusive territory arrangement can be discussed for committed partners",
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg />

      <SlideHeader title="Commercial Model" subtitle="How we make money together." />

      <div className="relative flex-1 flex flex-col px-10 py-5 gap-4">
        {/* Model cards */}
        <div className="grid grid-cols-3 gap-4">
          {models.map((model, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="rounded-2xl border border-white/12 p-6 flex flex-col"
              style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
            >
              <div className="text-3xl mb-3">{model.emoji}</div>
              <div className="mb-3">
                <h2 className="text-white font-bold text-base" style={gradientText}>
                  {model.title}
                </h2>
                <p
                  className="text-sm font-medium mt-0.5"
                  style={{
                    color: modelAccents[index].from,
                    opacity: 0.9,
                  }}
                >
                  {model.subtitle}
                </p>
              </div>
              <div
                className="h-[1px] w-full mb-3"
                style={{
                  background: `linear-gradient(to right, ${modelAccents[index].from}, ${modelAccents[index].to})`,
                  opacity: 0.45,
                }}
              />
              <p className="text-white/65 text-sm leading-relaxed flex-1">{model.desc}</p>
              <div
                className="mt-4 self-start px-3 py-1.5 rounded-full text-sm font-semibold"
                style={{
                  background: `linear-gradient(135deg, ${modelAccents[index].from}22, ${modelAccents[index].to}22)`,
                  border: `1px solid ${modelAccents[index].from}55`,
                  color: modelAccents[index].from,
                }}
              >
                {model.highlight}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key terms */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex-1 rounded-2xl border border-[#C8A84B]/27 p-6 flex flex-col"
          style={{
            background: "linear-gradient(160deg, rgba(200,168,75,0.11), rgba(14,123,181,0.08))",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="text-white font-bold text-base mb-4 flex items-center gap-2">
            <span
              className="inline-block w-4 h-4 rounded-sm"
              style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
            />
            Key Commercial Terms{" "}
            <span className="text-white/45 font-normal">(Indicative)</span>
          </h2>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {terms.map((term, i) => (
              <CheckItem key={i} text={term} />
            ))}
          </div>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
