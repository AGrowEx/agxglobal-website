import { motion } from "motion/react";
import { Star, MapPin, Download } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter } from "./TitleSlide";
import React from "react";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function ResultsSlide() {
  const results = [
    {
      metric: "40–50%",
      title: "Yield Increase",
      desc: "Demonstrated across horticulture crops in India pilot farms",
      emoji: "🌱",
      color: "from-[#C8A84B] to-[#8DB870]",
    },
    {
      metric: "10–20%",
      title: "Input Cost Reduction",
      desc: "Through precise nutrient scheduling and spray timing advisory",
      emoji: "💰",
      color: "from-[#1E9EA4] to-[#0E7BB5]",
    },
    {
      metric: "15 Days",
      title: "Advance Pest Forecast",
      desc: "GenAI IPM engine predicts outbreaks ahead of time, not after",
      emoji: "🔬",
      color: "from-[#8DB870] to-[#1E9EA4]",
    },
  ];

  const deployments = [
    { label: "7 Indian States", desc: "Live farming operations", icon: MapPin, color: "from-[#C8A84B] to-[#8DB870]" },
    { label: "Africa", desc: "Active pilot deployments", icon: MapPin, color: "from-[#8DB870] to-[#1E9EA4]" },
    { label: "Australia", desc: "Early adopter engagement", icon: MapPin, color: "from-[#1E9EA4] to-[#0E7BB5]" },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg />

      <SlideHeader title="Proven Results in the Field" subtitle="Real farms. Real numbers." />

      <div className="relative flex-1 flex flex-col px-10 py-5 gap-4">
        {/* Metric cards */}
        <div className="grid grid-cols-3 gap-4">
          {results.map((card, index) => (
            <motion.div
              key={index}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="rounded-2xl border border-[#C8A84B]/22 p-6 flex flex-col items-center text-center"
              style={{
                background: "linear-gradient(160deg, rgba(200,168,75,0.12), rgba(14,123,181,0.09))",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="text-3xl mb-2">{card.emoji}</div>
              <div className="text-[42px] font-black leading-none mb-2" style={gradientText}>
                {card.metric}
              </div>
              <div
                className="h-[2px] w-10 rounded-full my-2"
                style={{ background: "linear-gradient(to right, #C8A84B, #0E7BB5)" }}
              />
              <div className="text-white font-semibold text-base mb-1.5">{card.title}</div>
              <div className="text-white/60 text-sm leading-relaxed">{card.desc}</div>
            </motion.div>
          ))}
        </div>

        {/* Bottom section: proof strip + deployments */}
        <div className="flex gap-4 flex-1">
          {/* Proof strip */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex-[1.6] rounded-2xl border border-white/12 p-6 flex flex-col justify-between"
            style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div
                className="w-13 h-13 rounded-2xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)", width: "52px", height: "52px" }}
              >
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              <div>
                <p className="text-white text-base font-semibold">App Store Rating</p>
                <div className="flex gap-1 mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>

            <p className="text-white/65 text-[15px] leading-relaxed">
              bhoomi is already live in{" "}
              <span className="font-semibold" style={gradientText}>
                7 Indian states
              </span>{" "}
              and active in{" "}
              <span className="font-semibold" style={gradientText}>
                Africa and Australia
              </span>{" "}
              — with{" "}
              <span className="text-white font-semibold">10,000+ downloads</span>, a{" "}
              <span className="text-white font-semibold">5-star App Store rating</span>, and zero
              paid marketing spend.
            </p>

            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-white/10">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #C8A84B, #8DB870)" }}
              >
                <Download className="w-4 h-4 text-white" />
              </div>
              <span className="text-white/60 text-sm">
                10,000+ downloads achieved with <span className="text-white/75 font-semibold">$0 paid marketing</span> — pure word-of-mouth product-market fit
              </span>
            </div>
          </motion.div>

          {/* Global deployments */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex-1 rounded-2xl border border-[#C8A84B]/22 p-6 flex flex-col"
            style={{
              background: "linear-gradient(160deg, rgba(200,168,75,0.10), rgba(14,123,181,0.09))",
              backdropFilter: "blur(20px)",
            }}
          >
            <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-4">
              Global Deployments
            </p>
            <div className="flex flex-col gap-3 flex-1">
              {deployments.map((dep, i) => {
                const Icon = dep.icon;
                return (
                  <div key={i} className="flex items-center gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${dep.color}`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold text-base">{dep.label}</p>
                      <p className="text-white/50 text-sm">{dep.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
