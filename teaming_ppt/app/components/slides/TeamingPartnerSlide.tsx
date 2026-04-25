import { motion } from "motion/react";
import { TrendingUp, Leaf, Globe2, Users } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter, CheckItem } from "./TitleSlide";
import React from "react";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

const iconColors = [
  "from-[#C8A84B] to-[#8DB870]",
  "from-[#8DB870] to-[#1E9EA4]",
  "from-[#1E9EA4] to-[#0E7BB5]",
  "from-[#0E7BB5] to-[#1E9EA4]",
];

export default function TeamingPartnerSlide() {
  const gains = [
    {
      icon: TrendingUp,
      title: "Differentiated Offering",
      desc: "Add proven AI precision-ag technology to your portfolio — stand out in every RFP",
    },
    {
      icon: Leaf,
      title: "New Revenue Stream",
      desc: "Recurring SaaS revenue share on every customer you bring onto bhoomi",
    },
    {
      icon: Globe2,
      title: "Global-Grade Technology",
      desc: "Platform tested across India, Africa & Australia — not a prototype",
    },
    {
      icon: Users,
      title: "Farmer Retention Tool",
      desc: "Sticky daily-use platform keeps your customers engaged season after season",
    },
  ];

  const requirements = [
    "Established relationships with large agribusiness customers",
    "Experience responding to enterprise RFPs",
    "On-ground presence and credibility in the Australian market",
    "Ability to position and sell software solutions",
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg flip />

      <SlideHeader
        title="Why We Need a Teaming Partner in Australia"
        subtitle="Great technology needs great distribution."
      />

      <div className="relative flex-1 flex gap-6 px-10 py-6">
        {/* Left: Strategy */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[44%] rounded-2xl border border-[#C8A84B]/27 p-6 flex flex-col"
          style={{
            background: "linear-gradient(160deg, rgba(200,168,75,0.12), rgba(14,123,181,0.09))",
            backdropFilter: "blur(20px)",
          }}
        >
          <h2 className="text-white font-bold text-lg mb-3">Our Strategy</h2>
          <p className="text-white/65 text-[15px] leading-relaxed mb-4">
            We have the precision agriculture technology. What we need in Australia is a partner
            with:
          </p>
          <div className="space-y-3 flex-1">
            {requirements.map((req, i) => (
              <CheckItem key={i} text={req} />
            ))}
          </div>

          <div className="h-[1px] w-full my-4" style={{ background: "rgba(255,255,255,0.10)" }} />

          <div
            className="rounded-xl p-4 border border-white/12"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <p className="text-white/75 text-sm leading-relaxed italic">
              Together, we deliver a complete solution — you bring the customer relationships, we
              bring the Agri centric technology solution.
            </p>
          </div>

          <div
            className="mt-4 rounded-xl px-4 py-3 flex items-center gap-3"
            style={{ background: "rgba(200,168,75,0.12)", border: "1px solid rgba(200,168,75,0.25)" }}
          >
            <span style={gradientText} className="text-2xl font-black">2+2=5</span>
            <p className="text-white/60 text-sm">
              Your market access + our technology = outsized value for Australian farmers
            </p>
          </div>
        </motion.div>

        {/* Right: What you gain */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-white/55 text-sm font-semibold tracking-widest mb-4 uppercase">
            What You Gain
          </h2>
          <div className="grid grid-cols-2 gap-3 flex-1">
            {gains.map((gain, index) => {
              const Icon = gain.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.4 }}
                  className="rounded-2xl border border-white/12 p-5 flex flex-col"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center mb-3 bg-gradient-to-br ${iconColors[index]}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-2">{gain.title}</h3>
                  <p className="text-white/60 text-[15px] leading-relaxed">{gain.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <SlideFooter />
    </div>
  );
}
