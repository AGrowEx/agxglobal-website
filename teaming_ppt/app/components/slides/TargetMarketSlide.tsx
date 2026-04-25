import { motion } from "motion/react";
import { Tractor, Leaf, Users, Globe2, MapPin } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter } from "./TitleSlide";

const iconColors = [
  "from-[#C8A84B] to-[#8DB870]",
  "from-[#8DB870] to-[#1E9EA4]",
  "from-[#1E9EA4] to-[#0E7BB5]",
  "from-[#0E7BB5] to-[#1E9EA4]",
];

const tagColors = [
  { bg: "rgba(200,168,75,0.20)", color: "#C8A84B", border: "rgba(200,168,75,0.35)" },
  { bg: "rgba(141,184,112,0.20)", color: "#8DB870", border: "rgba(141,184,112,0.35)" },
  { bg: "rgba(30,158,164,0.20)", color: "#1E9EA4", border: "rgba(30,158,164,0.35)" },
  { bg: "rgba(14,123,181,0.20)", color: "#0E7BB5", border: "rgba(14,123,181,0.35)" },
];

export default function TargetMarketSlide() {
  const markets = [
    {
      icon: Tractor,
      title: "Large Horticulture Farms",
      desc: "Fruit, vegetable & flower growers. 100+ acres with drip irrigation. High value crops, high ROI from precision ag.",
      tag: "Primary",
      detail: "Immediate bhoomi fit — irrigation scheduling, pest forecasting, fertigation advisory",
    },
    {
      icon: Leaf,
      title: "Viticulture & Orchards",
      desc: "Wine grapes, stone fruits, citrus. Premium segment with high willingness to pay for yield quality improvement.",
      tag: "High Value",
      detail: "Micro-climate alerts and disease prediction are key value drivers in this segment",
    },
    {
      icon: Users,
      title: "Farm Management Groups",
      desc: "Aggregators managing multiple farms or providing advisory services to grower networks across states.",
      tag: "Scale",
      detail: "Single dashboard for multi-farm oversight; ERP module for labour & input tracking",
    },
    {
      icon: Globe2,
      title: "Agribusiness & Co-ops",
      desc: "Irrigation districts, grower cooperatives, and agri-input companies seeking digital value-adds for customers.",
      tag: "Enterprise",
      detail: "White-label or co-branded deployment; B2B2C revenue share model applies",
    },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg flip />

      <SlideHeader title="Target Market in Australia" subtitle="Where we focus first." />

      <div className="relative flex-1 flex flex-col px-10 py-5 gap-4">
        {/* Market grid */}
        <div className="grid grid-cols-2 gap-4 flex-1">
          {markets.map((market, index) => {
            const Icon = market.icon;
            return (
              <motion.div
                key={index}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                className="rounded-2xl border border-white/12 p-5 flex flex-col"
                style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br ${iconColors[index]}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h2 className="text-white font-bold text-base">{market.title}</h2>
                      <span
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full flex-shrink-0"
                        style={{
                          background: tagColors[index].bg,
                          color: tagColors[index].color,
                          border: `1px solid ${tagColors[index].border}`,
                        }}
                      >
                        {market.tag}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-white/65 text-sm leading-relaxed mb-3">{market.desc}</p>
                <div
                  className="rounded-lg px-3 py-2.5 border-l-2 mt-auto"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    borderLeftColor: tagColors[index].color,
                  }}
                >
                  <p className="text-white/50 text-sm leading-snug">{market.detail}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Focus banner */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="rounded-2xl border border-[#C8A84B]/27 px-6 py-4 flex items-center gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(200,168,75,0.13), rgba(14,123,181,0.10))",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
          >
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <p className="text-white/75 text-base italic">
            Initial focus:{" "}
            <span className="text-white font-semibold not-italic">NSW, VIC, SA, WA</span> —
            high-value horticulture belts with strong irrigation infrastructure
          </p>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
