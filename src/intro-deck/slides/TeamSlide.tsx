import React from "react";
import { BG, SlideLayout, GradientText, GlassCard, Eyebrow, SlideTopBar } from "../shared";

const traction = [
  { n: "25,000+", l: "Farming Days Digitised" },
  { n: "5★",     l: "App Store Rating" },
  { n: "10K+",   l: "App Downloads" },
  { n: "$0",     l: "Paid Marketing" },
];

const farmingExp = [
  "Established 20-hectare pilot farm with tech automation — growing 15+ commercial crops including capsicum, cucumber, chilli & other vegetables and fruits",
  "25,000+ farming days digitised across India, Australia & Africa",
  "Built with farmers — not just for them. Every feature validated on real farms",
  "Deep command of crop cycles, disease pressure, fertigation & input economics",
];

export default function TeamSlide() {
  return (
    <SlideLayout bgImage={BG.heroFarm} bgOpacity={0.18}>
      <SlideTopBar />

      <div className="text-center mb-3 space-y-1">
        <Eyebrow>The Team</Eyebrow>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Built From the
          <br />
          <GradientText>Farm Up.</GradientText>
        </h2>
        <p className="text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Three operators with 50+ years combined experience — enterprise pedigree, farm-first thinking.
        </p>
      </div>

      <div className="flex-1 flex items-center gap-6">

        {/* Left: 3 founder cards */}
        <div className="flex gap-3 flex-shrink-0">
          {/* Dinesh */}
          <GlassCard className="flex flex-col items-center gap-2.5 p-4 w-40 text-center">
            <img
              src="/dinesh.png"
              alt="Dinesh Sahu"
              className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-green-500/30"
            />
            <div>
              <div className="text-white font-bold text-sm">Dinesh Sahu</div>
              <div className="text-green-400 text-xs mt-0.5">Co-Founder</div>
            </div>
            <div className="space-y-1 text-left w-full">
              <div className="text-gray-300 text-xs">18+ yrs enterprise leadership</div>
              <div className="flex flex-wrap gap-1">
                {["IBM", "Wipro", "Telstra"].map((c) => (
                  <span key={c} className="bg-white/5 border border-white/10 text-gray-400 text-[9px] px-1.5 py-0.5 rounded-full">{c}</span>
                ))}
              </div>
              <div className="text-gray-400 text-[10px]">ANZ · APAC · MEA</div>
            </div>
          </GlassCard>

          {/* Ankur */}
          <GlassCard className="flex flex-col items-center gap-2.5 p-4 w-40 text-center">
            <img
              src="/ankur.png"
              alt="Ankur Gupta"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-teal-500/30"
            />
            <div>
              <div className="text-white font-bold text-sm">Ankur Gupta</div>
              <div className="text-teal-400 text-xs mt-0.5">Co-Founder</div>
            </div>
            <div className="space-y-1 text-left w-full">
              <div className="text-gray-300 text-xs">18+ yrs deep-tech engineering</div>
              <div className="flex flex-wrap gap-1">
                {["INSEAD", "Wipro", "OnMobile"].map((c) => (
                  <span key={c} className="bg-white/5 border border-white/10 text-gray-400 text-[9px] px-1.5 py-0.5 rounded-full">{c}</span>
                ))}
              </div>
              <div className="text-gray-400 text-[10px]">APAC · EMEA</div>
            </div>
          </GlassCard>

          {/* Pravinda */}
          <GlassCard className="flex flex-col items-center gap-2.5 p-4 w-40 text-center">
            <img
              src="/pravinda.png"
              alt="Pravinda"
              className="w-14 h-14 rounded-full object-cover object-[42%_22%] ring-2 ring-blue-500/30"
            />
            <div>
              <div className="text-white font-bold text-sm">Pravinda</div>
              <div className="text-blue-400 text-xs mt-0.5">MD &amp; Co-Founder</div>
            </div>
            <div className="space-y-1 text-left w-full">
              <div className="text-gray-300 text-xs">16+ yrs Data Science &amp; AI</div>
              <div className="flex flex-wrap gap-1">
                {["Infosys", "IBM", "NAB", "Schiavello Grp"].map((c) => (
                  <span key={c} className="bg-white/5 border border-white/10 text-gray-400 text-[9px] px-1.5 py-0.5 rounded-full">{c}</span>
                ))}
              </div>
              <div className="text-gray-400 text-[10px]">ANZ · APAC · MEA</div>
            </div>
          </GlassCard>
        </div>

        {/* Right: farming experience + traction */}
        <div className="flex-1 flex flex-col gap-3 h-full justify-center">

          {/* Farming experience */}
          <GlassCard className="p-3 border-l-2 border-l-green-500/40">
            <div className="text-green-400 text-sm font-semibold uppercase tracking-widest mb-1.5">Our Farming Roots</div>
            <ul className="space-y-1">
              {farmingExp.map((f) => (
                <li key={f} className="flex items-start gap-2 text-gray-200 text-xs leading-snug">
                  <span className="text-green-400/60 flex-shrink-0 mt-0.5">›</span>
                  {f}
                </li>
              ))}
            </ul>
          </GlassCard>

          {/* Traction 4-col strip */}
          <div className="grid grid-cols-4 gap-2">
            {traction.map(({ n, l }) => (
              <GlassCard key={l} className="px-2 py-2 text-center">
                <div className="text-lg font-extrabold text-green-400 leading-none">{n}</div>
                <div className="text-xs text-gray-300 mt-1 leading-snug">{l}</div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center pt-2">
        <p className="text-white/35 text-sm">
          Pilot farms active in Victoria · Seeking farm partnerships, distributors &amp; investors
        </p>
      </div>
    </SlideLayout>
  );
}
