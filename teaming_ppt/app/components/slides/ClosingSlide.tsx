import { motion } from "motion/react";
import { Mail, Globe, Handshake, Phone } from "lucide-react";
import { AgxLogo, BhoomiLogo } from "./TitleSlide";
import VectorMark from "../../../imports/Vector";
import React from "react";

const gradientText: React.CSSProperties = {
  background: "linear-gradient(135deg, #C8A84B 0%, #0E7BB5 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

export default function ClosingSlide() {
  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[750px] h-[750px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(200,168,75,0.20) 0%, transparent 65%)",
            top: "-220px",
            left: "-200px",
          }}
        />
        <div
          className="absolute w-[650px] h-[650px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(14,123,181,0.20) 0%, transparent 65%)",
            bottom: "-180px",
            right: "-160px",
          }}
        />
        <div
          className="absolute w-[450px] h-[450px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(141,184,112,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-10%, -50%)",
          }}
        />
        <div
          className="absolute opacity-[0.06]"
          style={{ width: "900px", height: "423px", right: "-80px", top: "50%", transform: "translateY(-50%)" }}
        >
          <VectorMark />
        </div>
      </div>

      {/* Top bar */}
      <div className="relative px-10 py-5 flex justify-between items-center border-b border-white/[0.09]">
        <AgxLogo />
        <BhoomiLogo />
      </div>

      {/* Main content — stretch to fill */}
      <div className="relative flex-1 flex gap-10 px-14 py-8">

        {/* Left: Hero message */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8"
            style={{ background: "linear-gradient(135deg, #C8A84B, #0E7BB5)" }}
          >
            <Handshake className="w-8 h-8 text-white" />
          </motion.div>

          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="text-[54px] font-black leading-none mb-3"
            style={{ letterSpacing: "-0.02em", color: "white" }}
          >
            Let's Grow Australian
            <br />
            Agriculture
          </motion.h1>

          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[46px] font-black leading-none mb-7"
            style={{ ...gradientText, letterSpacing: "-0.02em" }}
          >
            Together
          </motion.h2>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="h-[3px] w-56 rounded-full mb-7 origin-left"
            style={{ background: "linear-gradient(to right, #C8A84B, #0E7BB5)" }}
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-white/70 text-lg leading-relaxed max-w-lg mb-6"
          >
            We are looking for a forward-thinking Australian partner who understands the agricultural
            sector and is ready to build a high-value digital offering together.
          </motion.p>

          {/* Value prop chips */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65, duration: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {["Proven Technology", "Global Track Record", "Flexible Commercial Terms", "Joint Go-To-Market"].map((chip) => (
              <span
                key={chip}
                className="text-sm px-3 py-1.5 rounded-full border border-white/15 text-white/60"
                style={{ background: "rgba(255,255,255,0.06)" }}
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Right: Contact card */}
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="w-[400px] flex flex-col gap-4"
        >
          {/* Contact card */}
          <div
            className="flex-1 rounded-2xl border border-[#C8A84B]/35 px-8 py-8 flex flex-col gap-5"
            style={{
              background: "linear-gradient(160deg, rgba(200,168,75,0.14), rgba(14,123,181,0.10))",
              backdropFilter: "blur(20px)",
            }}
          >
            <div>
              <p className="text-white/50 text-sm font-semibold tracking-widest uppercase mb-2">Get In Touch</p>
              <h3 className="text-white font-black text-2xl">Dinesh Sahu</h3>
              <p className="text-white/55 text-base mt-0.5">Founder &amp; CEO, Agx Global</p>
            </div>

            <div
              className="h-[1px] w-full"
              style={{ background: "linear-gradient(to right, rgba(200,168,75,0.45), rgba(14,123,181,0.45))" }}
            />

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #C8A84B, #8DB870)" }}
                >
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/80 text-base">dinesh.sahu@agxglobal.earth</span>
              </div>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "linear-gradient(135deg, #1E9EA4, #0E7BB5)" }}
                >
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <span className="text-white/65 text-base">www.agxglobal.earth</span>
              </div>
            </div>

            <div
              className="rounded-xl px-4 py-3 mt-auto"
              style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              <p className="text-white/50 text-sm leading-relaxed italic">
                "Built from the farm up — not the boardroom down. Let's bring precision agriculture to every Australian grower together."
              </p>
            </div>
          </div>

          {/* Logos row */}
          <div
            className="rounded-2xl border border-white/12 px-6 py-4 flex items-center justify-between"
            style={{ background: "rgba(255,255,255,0.06)", backdropFilter: "blur(20px)" }}
          >
            <AgxLogo />
            <div className="w-[1px] h-8" style={{ background: "rgba(255,255,255,0.12)" }} />
            <BhoomiLogo />
          </div>
        </motion.div>
      </div>

      {/* Footer */}
      <div className="relative px-10 py-3 flex items-center justify-center border-t border-white/[0.07]">
        <span className="text-white/30 text-xs tracking-widest">
          CONFIDENTIAL | FOR PARTNERSHIP DISCUSSION ONLY
        </span>
      </div>
    </div>
  );
}
