import { motion } from "motion/react";
import {
  CloudSun,
  FlaskConical,
  Bot,
  TrendingUp,
  Users,
  UserCheck,
  Bug,
  Droplets,
  CalendarClock,
  Wifi,
  Cpu,
  Sprout,
} from "lucide-react";
import { SlideBg, SlideHeader, SlideFooter, BhoomiLogo } from "./TitleSlide";

/* ─── colour helpers ─────────────────────────────────────────── */
const liveGradients = [
  "from-[#C8A84B] to-[#8DB870]",
  "from-[#8DB870] to-[#1E9EA4]",
  "from-[#1E9EA4] to-[#0E7BB5]",
  "from-[#0E7BB5] to-[#1E9EA4]",
  "from-[#1E9EA4] to-[#8DB870]",
];

const upcomingGradients = [
  "from-[#6366f1] to-[#8B5CF6]",
  "from-[#8B5CF6] to-[#EC4899]",
  "from-[#EC4899] to-[#F97316]",
  "from-[#F97316] to-[#EAB308]",
];

const upcomingShimmer = ["#6366f1", "#8B5CF6", "#EC4899", "#F97316"];

export default function PlatformSlide() {
  /* ── LIVE modules (AI-gronomist removed) ── */
  const liveModules = [
    {
      icon: CloudSun,
      title: "Micro-Climate Hub",
      desc: "Hyper-local 15-day forecasts & real-time weather alerts. Virtual weather station — no hardware needed.",
      tag: "Weather",
    },
    {
      icon: FlaskConical,
      title: "Smart Fertigation",
      desc: "Best-window advisory for spray & fertiliser timing based on wind, humidity, leaf wetness & ET.",
      tag: "Inputs",
    },
    {
      icon: Bot,
      title: "Nutrient Engine",
      desc: "Crop & stage-specific fertiliser plans tailored to soil health, weather & growth calendar.",
      tag: "AI",
    },
    {
      icon: TrendingUp,
      title: "GenAI IPM",
      desc: "Predicts pest & disease outbreaks 15 days ahead across 40+ crops using a locally trained model.",
      tag: "GenAI",
    },
    {
      icon: Users,
      title: "Farm Manager ERP",
      desc: "Digitise labour, attendance, payments & input costs. Lightweight on-farm operations management.",
      tag: "Operations",
    },
  ];

  /* ── UPCOMING AI Agent roadmap ── */
  const upcomingAgents = [
    {
      icon: UserCheck,
      title: "Onboarding Agent",
      desc: "Guides farmers through smooth platform onboarding, capturing farm, crop & location data critical for enabling all downstream features.",
    },
    {
      icon: Bug,
      title: "Disease Management Agent",
      desc: "15-day disease forecast based on crop age, climate & farm details; computer-vision disease detection; guided Q&A for precise diagnosis.",
    },
    {
      icon: Droplets,
      title: "Fertigation Agent",
      desc: "Auto-generates crop-specific fertigation schedules based on soil, climate & farm parameters — reducing input waste and boosting yield.",
    },
    {
      icon: CalendarClock,
      title: "Ops Planning Agent",
      desc: "Predicts workforce requirements based on climate, production targets & farm activities — optimising daily farm operations at scale.",
    },
  ];

  return (
    <div
      className="w-full h-full relative flex flex-col overflow-hidden"
      style={{ background: "#102A1A", fontFamily: "'Inter', sans-serif" }}
    >
      <SlideBg />

      <SlideHeader
        title="bhoomi — The Precision Agriculture Platform"
        subtitle="Farmer-first. Data-driven. AI-powered."
      />

      <div className="relative flex-1 flex flex-col px-10 pb-3 pt-3 gap-3 min-h-0">

        {/* ── Sub-headline ── */}
        <div className="flex items-center gap-4 shrink-0">
          <BhoomiLogo />
          <div
            className="h-[1px] flex-1"
            style={{
              background: "linear-gradient(to right, rgba(200,168,75,0.4), transparent)",
            }}
          />
          <p className="text-white/40 text-[10px] italic">
            One platform · Five live modules · AI agents coming soon
          </p>
        </div>

        {/* ── LIVE MODULES ── */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center gap-2 mb-2 shrink-0">
            <span
              className="text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase"
              style={{
                background: "rgba(141,184,112,0.15)",
                color: "#8DB870",
                border: "1px solid rgba(141,184,112,0.3)",
              }}
            >
              ● Live
            </span>
            <div
              className="h-[1px] flex-1"
              style={{
                background: "linear-gradient(to right, rgba(141,184,112,0.3), transparent)",
              }}
            />
          </div>

          <div className="flex-1 grid grid-cols-5 gap-3" style={{ gridAutoRows: "1fr" }}>
            {liveModules.map((mod, i) => {
              const Icon = mod.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="rounded-xl border border-white/10 p-5 flex flex-col h-full"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    backdropFilter: "blur(20px)",
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${liveGradients[i]}`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span
                      className="text-[8px] font-semibold px-1.5 py-0.5 rounded-full"
                      style={{
                        background: "rgba(200,168,75,0.12)",
                        color: "#C8A84B",
                        border: "1px solid rgba(200,168,75,0.22)",
                      }}
                    >
                      {mod.tag}
                    </span>
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-[14px] leading-snug">
                    {mod.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed flex-1 text-[11px]">
                    {mod.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── UPCOMING AI AGENTS ── */}
        <div className="flex flex-col flex-1 min-h-0">
          <div className="flex items-center gap-2 mb-2 shrink-0">
            <span
              className="text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wider uppercase"
              style={{
                background: "rgba(99,102,241,0.15)",
                color: "#a5b4fc",
                border: "1px solid rgba(99,102,241,0.3)",
              }}
            >
              ◆ Upcoming — AI Agents
            </span>
            <div
              className="h-[1px] flex-1"
              style={{
                background: "linear-gradient(to right, rgba(99,102,241,0.35), transparent)",
              }}
            />
          </div>

          <div className="flex-1 grid grid-cols-4 gap-3" style={{ gridAutoRows: "1fr" }}>
            {upcomingAgents.map((agent, i) => {
              const Icon = agent.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ y: 14, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.35 }}
                  className="rounded-xl border p-5 flex flex-col relative overflow-hidden h-full"
                  style={{
                    background: "rgba(99,102,241,0.07)",
                    backdropFilter: "blur(20px)",
                    borderColor: "rgba(99,102,241,0.2)",
                  }}
                >
                  <div
                    className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
                    style={{
                      background: `linear-gradient(to right, transparent, ${upcomingShimmer[i]}, transparent)`,
                    }}
                  />
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center bg-gradient-to-br ${upcomingGradients[i]} mb-3`}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-[14px] leading-snug">
                    {agent.title}
                  </h3>
                  <p className="text-white/50 leading-relaxed flex-1 text-[11px]">
                    {agent.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── HARDWARE SUPPORT BANNER ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.4 }}
          className="shrink-0 rounded-xl border px-5 py-3 flex items-center gap-5"
          style={{
            background: "rgba(30,158,164,0.08)",
            borderColor: "rgba(30,158,164,0.25)",
          }}
        >
          <div className="flex items-center gap-2 shrink-0">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "rgba(30,158,164,0.2)" }}
            >
              <Wifi className="w-4 h-4" style={{ color: "#1E9EA4" }} />
            </div>
            <span
              className="text-[11px] font-semibold"
              style={{ color: "#1E9EA4" }}
            >
              Hardware Integration Support
            </span>
          </div>

          <div
            className="w-[1px] self-stretch"
            style={{ background: "rgba(30,158,164,0.25)" }}
          />

          <div className="flex gap-6 flex-1">
            <div className="flex items-start gap-2">
              <Cpu className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#1E9EA4" }} />
              <div>
                <p className="text-white/80 text-[10px] font-medium">Weather Stations</p>
                <p className="text-white/45 text-[9px]">
                  Physical sensors for hyper-accurate micro-climate data — especially critical
                  for net &amp; polyhouses where ambient readings differ significantly from
                  crop-level conditions.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Sprout className="w-3.5 h-3.5 mt-0.5 shrink-0" style={{ color: "#8DB870" }} />
              <div>
                <p className="text-white/80 text-[10px] font-medium">Soil Sensors</p>
                <p className="text-white/45 text-[9px]">
                  Real-time soil NPK, moisture, pH, EC &amp; temperature telemetry feeding
                  directly into fertigation scheduling and nutrient advisory engines.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <SlideFooter />
    </div>
  );
}