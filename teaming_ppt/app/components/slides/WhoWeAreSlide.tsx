import { motion } from "motion/react";
import { TrendingUp, Tractor, Globe2, Smartphone } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter, AgxLogo } from "./TitleSlide";

const iconBg = [
  "from-[#C8A84B] to-[#8DB870]",
  "from-[#8DB870] to-[#1E9EA4]",
  "from-[#1E9EA4] to-[#0E7BB5]",
  "from-[#0E7BB5] to-[#1E9EA4]",
];

export default function WhoWeAreSlide() {
  const credentials = [
    {
      icon: TrendingUp,
      title: "20+ Years Tech Experience",
      desc: "Each founder — scaling digital products across APAC, EMEA, ANZ & MEA",
    },
    {
      icon: Tractor,
      title: "Farmer at Heart",
      desc: "Dinesh quit Wipro in 2019 to farm full-time. 15+ crops, 25,000+ man-days of real farm data",
    },
    {
      icon: Globe2,
      title: "Already Global",
      desc: "Live in India (7 states), Africa & Australia. Problem-Solution Fit proven and, Product-market fit in progress.",
    },
    {
      icon: Smartphone,
      title: "Proven Product — bhoomi 2.0",
      desc: "5-star rated. 10,000+ downloads. Zero paid marketing spend.",
    },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg flip />

      <SlideHeader title="Who We Are" subtitle="Agx Global — Xcelerating Agriculture" />

      <div className="relative flex-1 flex gap-6 px-10 py-6">
        {/* Left: About */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-[42%] rounded-2xl border border-[#C8A84B]/27 p-7 flex flex-col"
          style={{
            background: "linear-gradient(160deg, rgba(200,168,75,0.13), rgba(14,123,181,0.09))",
            backdropFilter: "blur(20px)",
          }}
        >
          <div className="mb-5">
            <AgxLogo />
          </div>

          <div
            className="h-[1px] w-full mb-5"
            style={{
              background: "linear-gradient(to right, rgba(200,168,75,0.5), rgba(14,123,181,0.5))",
            }}
          />

          <div className="space-y-4 flex-1">
            <p className="text-white/80 text-[15px] leading-relaxed">
              We are an AgriTech company, building bhoomi — a farmer-first precision agriculture
              platform that empowers growers globally with data-driven decision making.
            </p>
            <p className="text-white/80 text-[15px] leading-relaxed">
              Founded by two operators with{" "}
              <span className="text-white font-semibold">20+ years each in technology</span> and
              deep personal agricultural roots, we have spent 6+ years building, farming, and
              iterating to solve this problem from the inside out.
            </p>

            {/* Founder highlights */}
            <div className="space-y-2 pt-2">
              <div
                className="rounded-xl px-4 py-3 border border-white/10"
                style={{ background: "rgba(200,168,75,0.07)" }}
              >
                <p className="text-white/90 text-sm font-semibold mb-0.5">Dinesh Sahu — Co-Founder & CEO</p>
                <p className="text-white/60 text-sm leading-snug">
                  Left corporate tech (Wipro) in 2019 to farm full-time. Built bhoomi from the
                  ground up — literally in the field.
                </p>
              </div>
              <div
                className="rounded-xl px-4 py-3 border border-white/10"
                style={{ background: "rgba(14,123,181,0.07)" }}
              >
                <p className="text-white/90 text-sm font-semibold mb-0.5">Co-Founder & CTO</p>
                <p className="text-white/60 text-sm leading-snug">
                  20+ years scaling enterprise platforms across APAC, EMEA & ANZ. Deep roots in
                  AgriTech systems architecture.
                </p>
              </div>
            </div>
          </div>

          {/* Quote */}
          <div
            className="mt-4 rounded-xl px-4 py-3"
            style={{
              background: "rgba(255,255,255,0.04)",
              borderLeft: "3px solid #C8A84B",
            }}
          >
            <p className="text-white/60 text-sm italic">
              "Built from the farm up — not the boardroom down."
            </p>
          </div>
        </motion.div>

        {/* Right: Credentials */}
        <div className="flex-1 flex flex-col">
          <h2 className="text-white/60 text-xs font-semibold tracking-widest mb-4 uppercase">
            Our Credentials
          </h2>
          <div className="flex flex-col gap-3 flex-1">
            {credentials.map((cred, index) => {
              const Icon = cred.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.4 }}
                  className="flex items-center gap-4 rounded-2xl border border-white/12 px-5 py-4 flex-1"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${iconBg[index]}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-base">{cred.title}</h3>
                    <p className="text-white/65 text-sm leading-snug mt-0.5">{cred.desc}</p>
                  </div>
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