import { motion } from "motion/react";
import { Tractor, Bot, Globe2, TrendingUp } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter } from "./TitleSlide";

const iconColors = [
  "from-[#C8A84B] to-[#8DB870]",
  "from-[#8DB870] to-[#1E9EA4]",
  "from-[#1E9EA4] to-[#0E7BB5]",
  "from-[#0E7BB5] to-[#1E9EA4]",
];

export default function WhyNowSlide() {
  const differentiators = [
    {
      icon: Tractor,
      title: "Built by Farmers, Not Just Engineers",
      desc: "Our co-founder ran a commercial farm full-time 2019–until now. Every feature validated in the field.",
    },
    {
      icon: Bot,
      title: "Full-Stack AI Platform",
      desc: "Not a niche tool — bhoomi covers the entire farm operation cycle in one integrated app.",
    },
    {
      icon: Globe2,
      title: "Already Global, Already Working",
      desc: "Live in India, Africa, Australia. Product-market fit proven. Low 'early stage' risk.",
    },
    {
      icon: TrendingUp,
      title: "Capital Efficient & Lean",
      desc: "10K+ downloads and 5-star ratings achieved with $0 marketing. Strong unit economics.",
    },
  ];

  const timing = [
    {
      title: "Climate Pressure",
      desc: "Australian droughts and erratic weather patterns are forcing growers to seek smarter tools",
      emoji: "🌡️",
      color: "#C8A84B",
    },
    {
      title: "Labour Costs Rising",
      desc: "Farm labour costs increasing — digital management tools show immediate ROI",
      emoji: "📊",
      color: "#8DB870",
    },
    {
      title: "AI Moment",
      desc: "Farmers now understand and trust AI tools. The mindset shift is happening",
      emoji: "🤖",
      color: "#1E9EA4",
    },
    {
      title: "Precision Ag Funding",
      desc: "Australian government investing in AgTech adoption — tailwinds for enterprise deals",
      emoji: "🏛️",
      color: "#0E7BB5",
    },
    {
      title: "First-Mover Window",
      desc: "Integrated AI farm platforms rare in AU market. Early entrant advantage is real",
      emoji: "🚀",
      color: "#C8A84B",
    },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg flip />

      <SlideHeader
        title="Why Agx Global — Why Now?"
        subtitle="The right partner, at the right time."
      />

      <div className="relative flex-1 flex gap-6 px-10 py-5">
        {/* Left: Differentiators */}
        <div className="w-[50%] flex flex-col">
          <h2 className="text-white/55 text-sm font-semibold tracking-widest mb-3 uppercase">
            What Sets Us Apart
          </h2>
          <div className="flex flex-col gap-3 flex-1">
            {differentiators.map((diff, index) => {
              const Icon = diff.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/12 px-5 py-4 flex-1"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${iconColors[index]}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-base">{diff.title}</h3>
                    <p className="text-white/60 text-sm leading-snug mt-0.5">{diff.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: Timing */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-white/55 text-sm font-semibold tracking-widest mb-3 uppercase">
            Why the Timing is Right
          </h2>
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="flex-1 rounded-2xl border border-[#C8A84B]/27 p-5 flex flex-col gap-3"
            style={{
              background: "linear-gradient(160deg, rgba(200,168,75,0.12), rgba(14,123,181,0.09))",
              backdropFilter: "blur(20px)",
            }}
          >
            {timing.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 flex-1 border-b border-white/[0.08] last:border-0 pb-3 last:pb-0"
              >
                <span className="text-xl flex-shrink-0">{item.emoji}</span>
                <div className="flex-1">
                  <h3
                    className="font-semibold text-sm mb-0.5"
                    style={{ color: item.color }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-white/65 text-sm leading-snug">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
