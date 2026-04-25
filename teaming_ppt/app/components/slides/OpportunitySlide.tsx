import { motion } from "motion/react";
import { Lightbulb, TrendingUp, CloudRain, Users } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter, MetricCard } from "./TitleSlide";
import React from "react";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function OpportunitySlide() {
  const drivers = [
    {
      icon: TrendingUp,
      title: "Export-grade produce demand",
      desc: "AU farmers under pressure to maximise quality & yield to meet international standards",
      color: "from-[#C8A84B] to-[#8DB870]",
    },
    {
      icon: CloudRain,
      title: "Climate volatility increasing",
      desc: "Erratic rainfall, droughts and heat events making data-driven farm decisions critical",
      color: "from-[#1E9EA4] to-[#0E7BB5]",
    },
    {
      icon: Users,
      title: "Labour shortage crisis",
      desc: "Chronic on-farm labour shortages accelerating adoption of digital farm management tools",
      color: "from-[#8DB870] to-[#1E9EA4]",
    },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg flip />

      <SlideHeader
        title="The Australian Agriculture Opportunity"
        subtitle="Why now. Why here."
      />

      <div className="relative flex-1 flex flex-col px-10 py-5 gap-4">
        {/* Stat cards */}
        <div className="grid grid-cols-3 gap-4">
          <MetricCard
            metric="$60B+"
            title="Annual farm output"
            desc="One of world's top agricultural exporters"
            delay={0}
          />
          <MetricCard
            metric="135K+"
            title="Farm businesses"
            desc="Horticulture, grains, viticulture & more"
            delay={0.1}
          />
          <MetricCard
            metric="12%"
            title="Digitally enabled"
            desc="vs 35% cross-industry avg — massive gap"
            delay={0.2}
          />
        </div>

        {/* Main insight + drivers row */}
        <div className="flex gap-4 flex-1">
          {/* Insight panel */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="flex-[1.4] rounded-2xl border border-[#C8A84B]/25 p-6 flex flex-col gap-4"
            style={{
              background: "linear-gradient(135deg, rgba(200,168,75,0.12), rgba(14,123,181,0.09))",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
              >
                <Lightbulb className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white font-bold text-xl">The Window of Opportunity</h2>
            </div>

            <p className="text-white/70 text-[15px] leading-relaxed">
              Australian farmers are sophisticated, tech-savvy, and financially motivated — yet
              lack an integrated, farmer-first precision agriculture platform.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed">
              <span className="text-white font-semibold">
                Climate volatility, labour shortages, and rising input costs
              </span>{" "}
              are forcing the sector to modernise rapidly. The timing for a precision ag solution
              like bhoomi is ideal.
            </p>

            {/* Key sectors */}
            <div className="mt-auto pt-3 border-t border-white/10">
              <p className="text-white/50 font-semibold tracking-widest uppercase mb-2 text-[13px]">
                Key Sectors
              </p>
              <div className="flex flex-wrap gap-2">
                {["Horticulture", "Viticulture", "Broadacre Grains", "Irrigated Crops", "Orchards"].map(
                  (sector) => (
                    <span
                      key={sector}
                      className="text-sm px-3 py-1 rounded-full border border-white/15 text-white/65"
                      style={{ background: "rgba(255,255,255,0.07)" }}
                    >
                      {sector}
                    </span>
                  )
                )}
              </div>
            </div>
          </motion.div>

          {/* Drivers column */}
          <div className="flex flex-col gap-3 flex-1">
            <p className="text-white/50 text-sm font-semibold tracking-widest uppercase">
              Key Market Drivers
            </p>
            {drivers.map((driver, index) => {
              const Icon = driver.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.4 }}
                  className="flex-1 rounded-2xl border border-white/12 p-4 flex items-center gap-4"
                  style={{ background: "rgba(255,255,255,0.08)", backdropFilter: "blur(20px)" }}
                >
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${driver.color}`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-[17px]">{driver.title}</h3>
                    <p className="text-white/60 leading-snug mt-0.5 text-[15px]">{driver.desc}</p>
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
