import { motion } from "motion/react";
import { Handshake, ArrowRight } from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter, CheckItem } from "./TitleSlide";

export default function TeamingModelSlide() {
  const partnerRoles = [
    "Identify & approach target customers (large agribusinesses, farm groups, irrigation districts)",
    "Lead RFP responses, commercial negotiations, and contract execution",
    "Position bhoomi as the precision agriculture technology layer in your proposals",
    "Provide on-ground support, demonstrations, and farmer onboarding",
    "Maintain the primary customer relationship post-sale",
  ];

  const agxRoles = [
    "Provide bhoomi as a white-label or co-branded technology solution",
    "Supply all technical documentation, product specs, and demo environments",
    "Lead platform onboarding, training, and technical support",
    "Continuously develop and enhance product features based on AU market feedback",
    "Share in commercial success through agreed revenue share structure",
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg />

      <SlideHeader
        title="The Teaming Model — How It Works"
        subtitle="A clean division of roles. A shared upside."
      />

      <div className="relative flex-1 flex flex-col px-10 py-5 gap-4">
        {/* Flow indicator */}
        <div className="flex items-center gap-3">
          <div
            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #C8A84B, #8DB870)" }}
          >
            Partner Leads
          </div>
          <ArrowRight className="w-4 h-4 text-white/35" />
          <div
            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.18)" }}
          >
            Joint Delivery
          </div>
          <ArrowRight className="w-4 h-4 text-white/35" />
          <div
            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #1E9EA4, #0E7BB5)" }}
          >
            AgX Supports
          </div>
          <ArrowRight className="w-4 h-4 text-white/35" />
          <div
            className="px-4 py-2 rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
          >
            Shared Revenue
          </div>
        </div>

        <div className="flex gap-5 flex-1">
          {/* Partner role */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.45 }}
            className="flex-1 rounded-2xl border border-white/12 p-6 flex flex-col"
            style={{ background: "rgba(255,255,255,0.09)", backdropFilter: "blur(20px)" }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #C8A84B, #8DB870)" }}
              >
                P
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Your Role — The Partner</h2>
                <p className="text-white/40 text-sm">Market access & commercial leadership</p>
              </div>
            </div>
            <div className="space-y-3 flex-1">
              {partnerRoles.map((role, i) => (
                <CheckItem key={i} text={role} />
              ))}
            </div>
          </motion.div>

          {/* AgX role */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.45 }}
            className="flex-1 rounded-2xl border border-[#C8A84B]/27 p-6 flex flex-col"
            style={{
              background: "linear-gradient(160deg, rgba(200,168,75,0.12), rgba(14,123,181,0.09))",
              backdropFilter: "blur(20px)",
            }}
          >
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center text-white font-bold text-base flex-shrink-0"
                style={{ background: "linear-gradient(135deg, #1E9EA4, #0E7BB5)" }}
              >
                A
              </div>
              <div>
                <h2 className="text-white font-bold text-lg">Our Role — Agx Global</h2>
                <p className="text-white/40 text-sm">Technology, product & support</p>
              </div>
            </div>
            <div className="space-y-3 flex-1">
              {agxRoles.map((role, i) => (
                <CheckItem key={i} text={role} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Shared goal banner */}
        <motion.div
          initial={{ y: 16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.45 }}
          className="rounded-2xl border border-[#C8A84B]/32 px-6 py-4 flex items-center gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(200,168,75,0.17), rgba(14,123,181,0.14))",
            backdropFilter: "blur(20px)",
          }}
        >
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
          >
            <Handshake className="w-5 h-5 text-white" />
          </div>
          <p className="text-white/85 text-base font-medium">
            Shared Goal: Win enterprise contracts. Deliver measurable outcomes. Grow together.
          </p>
        </motion.div>
      </div>

      <SlideFooter />
    </div>
  );
}
