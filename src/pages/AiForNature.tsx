import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Leaf,
  Droplets,
  Zap,
  CloudRain,
  Shield,
  TrendingDown,
  Sprout,
  Sun,
  BarChart3,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const AiForNature = () => {
  const metrics = [
    { value: "10–20%", label: "Reduction in fertiliser application", icon: TrendingDown },
    { value: "25–35%", label: "Less irrigation water used", icon: Droplets },
    { value: "15–30%", label: "Fewer chemical spray events", icon: Shield },
  ];

  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-white"
      >
        {/* Hero */}
        <section className="relative min-h-[80vh] flex items-center overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-teal-900">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1600&q=80')",
            }}
          />
          {/* Digital circuit overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2334d399' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-950/90 via-green-900/75 to-teal-900/60" />
          <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-green-900 text-green-300 border-green-700">
                <Leaf className="w-4 h-4 mr-2" />
                AI for Nature
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Bhoomi AI That Grows More
                <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  With Less
                </span>
              </h1>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Precision farming isn't just about higher yields — it's about growing more food with fewer chemicals, less water, and a lighter footprint on the land. That's the promise of Bhoomi's agentic AI.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  <Link to="/contact">Talk to Us</Link>
                </Button>
                <Button asChild variant="outline" className="border-green-500 text-green-300 bg-transparent hover:border-teal-400 hover:text-teal-400 px-8 py-3 text-lg">
                  <Link to="/solutions">Explore Platform</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:grid grid-cols-3 gap-4"
            >
              {metrics.map((m, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center col-span-1">
                  <m.icon className="h-8 w-8 text-green-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{m.value}</div>
                  <div className="text-xs text-green-200">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* The Paradox */}
        <section className="relative py-20 px-6 overflow-hidden">
          <img
            src="/aus_farm_1.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-50/95" />
          <div className="relative max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-4 bg-amber-100 text-amber-800 border-amber-200">The Paradox</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Feed More People. Damage Less Land.
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Global food demand will grow 70% by 2050. But agricultural land is finite, aquifers are under pressure, and chemical runoff is degrading waterways on every continent. The answer isn't less farming — it's smarter farming. Precision AI makes every input count, and eliminates the excess that damages ecosystems.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                {[
                  { icon: Shield, title: "Chemical Overuse", stat: "40% of chemical inputs are unnecessary with precision guidance", color: "bg-red-50 border-red-200" },
                  { icon: Droplets, title: "Water Waste", stat: "Up to 35% of irrigation water is lost without IoT monitoring", color: "bg-blue-50 border-blue-200" },
                  { icon: Sprout, title: "Soil Degradation", stat: "Over-fertilisation destroys microbial soil health over 5–10 years", color: "bg-green-50 border-green-200" },
                ].map((item, i) => (
                  <Card key={i} className={`border-2 ${item.color}`}>
                    <CardHeader>
                      <item.icon className="h-8 w-8 text-gray-700 mb-2" />
                      <CardTitle className="text-base text-gray-800">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{item.stat}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Agentic Outcomes */}
        <section className="py-16 px-6 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-green-900 text-green-300 border-green-700">
                  <Zap className="w-4 h-4 mr-2" />
                  Agentic AI Impact
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Four Agents. One Ecological System.
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  Bhoomi's AI agents share the same farm data and inform each other — creating a compound effect across resources, chemistry, and labour.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { value: "15–30%", label: "Fewer spray events", sub: "Disease Management Agent", color: "border-gray-700/50 bg-gray-800/50" },
                  { value: "10–20%", label: "Less fertiliser used", sub: "Fertigation Intelligence Agent", color: "border-gray-700/50 bg-gray-800/50" },
                  { value: "25–35%", label: "Less water consumed", sub: "Fertigation + IoT data", color: "border-gray-700/50 bg-gray-800/50" },
                  { value: "Fewer", label: "Field interventions", sub: "Seasonal Planning Agent", color: "border-gray-700/50 bg-gray-800/50" },
                ].map((item, i) => (
                  <div key={i} className={`rounded-xl p-5 border ${item.color} text-center`}>
                    <div className="text-2xl font-bold text-green-400 mb-1">{item.value}</div>
                    <div className="text-white text-sm font-medium leading-tight mb-1">{item.label}</div>
                    <div className="text-gray-500 text-xs">{item.sub}</div>
                  </div>
                ))}
              </div>
              <p className="text-center text-gray-500 text-sm mb-6">
                Full agent capabilities — how each one works, what it does, and when — are detailed on the Solutions page.
              </p>
              <div className="text-center">
                <Link to="/solutions">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                    Explore all four agents in detail
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Chemical Reduction */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">Chemical Reduction</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Fewer Sprays. Less Runoff.
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bhoomi's Disease Management Agent forecasts disease pressure 15 days ahead using weather models, crop stage, and historical outbreak data. When the risk is low, it holds the spray. When risk is genuine, it generates a targeted, minimal-dose plan. Growers report 15–30% fewer spray events per season — reducing chemical load on waterways, pollinators, and soil biology.
              </p>
              <div className="space-y-3">
                {[
                  "Disease forecast before chemical threshold is reached",
                  "Ranked treatment plans — organic options shown first",
                  "Computer vision detects early-stage infections before spread",
                  "Spray advisory windows calibrated to Delta-T, VPD, and wind",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px]">
                <img
                  src="/spraying_farm.png"
                  alt="Spray machine operating in an Australian farm"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-900/40 to-black/10" />
                <div className="relative p-10 flex flex-col justify-end h-full min-h-[420px]">
                  <div className="inline-flex items-center gap-2 bg-gray-500/20 border border-gray-400/40 rounded-full px-4 py-1.5 mb-5 w-fit">
                    <Shield className="h-4 w-4 text-red-300" />
                    <span className="text-red-200 text-sm font-medium">Spray Reduction</span>
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">15–30%</div>
                  <div className="text-red-200 text-lg mb-4">Fewer spray events per season on pilot farms</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Every avoided spray event means fewer active ingredients entering soil and waterways — directly benefiting aquatic ecosystems, native insect populations, and long-term soil microbial diversity.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Nutritious Food */}
        <section className="py-20 px-6 bg-green-50">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=900&q=80"
                  alt="Fresh Australian produce from precision-fertilised farm"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-950/95 via-green-900/60 to-black/20" />
                <div className="relative p-10 flex flex-col justify-end h-full min-h-[420px]">
                  <div className="inline-flex items-center gap-2 bg-green-500/20 border border-green-400/40 rounded-full px-4 py-1.5 mb-5 w-fit">
                    <Sprout className="h-4 w-4 text-green-300" />
                    <span className="text-green-200 text-sm font-medium">Precision Nutrition</span>
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">Denser</div>
                  <div className="text-green-200 text-lg mb-4">Micronutrients in precision-fertilised crops</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    Research shows precision NPK application — timed to crop demand — produces measurably higher micronutrient density (zinc, iron, calcium) compared to calendar-based programs. Less fertiliser, more food value.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Nutritious Food</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Precision Nutrition Grows Healthier Food
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                When fertiliser application is guided by real soil sensor data and crop growth stage rather than a fixed calendar, plants get exactly what they need at the right time. The Fertigation Intelligence Agent generates stage-by-stage NPK schedules that eliminate excess nitrogen — which dilutes crop nutritional quality and acidifies soil.
              </p>
              <div className="space-y-3">
                {[
                  "Stage-specific NPK scheduling tied to growth phenology",
                  "Reduces excess nitrogen — a key driver of crop hollow nutrition",
                  "Real-time soil EC and pH adjustment prevents over-application",
                  "Nutrient balance history ensures nothing is missed or doubled",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Water Intelligence */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal direction="left">
              <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Water Intelligence</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Every Drop Accounted For
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Bhoomi's IoT integration reads in-field soil moisture sensors and cross-references microclimate weather data to determine real-time crop water demand. The Fertigation Intelligence Agent adjusts irrigation scheduling in response — not on a timer, but on actual soil conditions. Pilot farms report 25–35% reductions in total water consumption without any yield penalty.
              </p>
              <div className="space-y-3">
                {[
                  "Real-time soil moisture telemetry from in-field sensors",
                  "Irrigation recommendations based on actual crop demand",
                  "Integrates with Australian sensor hardware standards (RS485/Modbus)",
                  "Prevents over-watering — the single biggest driver of root disease",
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[420px]">
                <img
                  src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=900&q=80"
                  alt="Farm sprinkler irrigation system in field"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-blue-900/60 to-black/20" />
                <div className="relative p-10 flex flex-col justify-end h-full min-h-[420px]">
                  <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/40 rounded-full px-4 py-1.5 mb-5 w-fit">
                    <Droplets className="h-4 w-4 text-blue-300" />
                    <span className="text-blue-200 text-sm font-medium">Water Intelligence</span>
                  </div>
                  <div className="text-6xl font-bold text-white mb-2">25–35%</div>
                  <div className="text-blue-200 text-lg mb-4">Irrigation water saved on pilot farms</div>
                  <p className="text-white/70 text-sm leading-relaxed">
                    In water-stressed regions like the Murray–Darling Basin, every megalitre conserved matters. Bhoomi's sensor-driven irrigation model doesn't just reduce costs — it directly reduces pressure on shared water resources.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Carbon Story */}
        <section className="relative py-20 px-6 bg-gray-900 overflow-hidden">
          <img
            src="/earth_frame.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-20"
          />
          <div className="relative max-w-5xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-4 bg-green-900 text-green-300 border-green-700">
                <Sun className="w-4 h-4 mr-2" />
                Carbon Story
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Reducing Scope 3 Emissions from Agriculture
              </h2>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                Fertiliser and chemical manufacturing are among agriculture's largest Scope 3 emission sources. Every kilogram of fertiliser or litre of chemical avoided through precision application directly reduces upstream CO₂ emissions. For food companies and retailers with supply chain sustainability commitments, Bhoomi-connected farms offer a verifiable, data-backed emissions reduction story.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { icon: TrendingDown, title: "Lower Fertiliser Use", detail: "10–20% reduction in nitrogen application = measurable Scope 3 reduction per tonne of produce." },
                  { icon: CloudRain, title: "Fewer Chemical Inputs", detail: "Fewer spray events = less chemical synthesis demand and packaging waste in the supply chain." },
                  { icon: BarChart3, title: "Audit-Ready Records", detail: "Every input application is digitally logged — providing the traceability needed for carbon reporting and retailer audits." },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <item.icon className="h-8 w-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.detail}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Nature Metrics */}
        <section className="relative py-20 px-6 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-50/97 to-teal-50/97" />
          <div className="relative max-w-5xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">By the Numbers</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                The Nature Impact of Precision AI
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  { value: "10–20%", label: "Reduction in fertiliser application", sub: "Eliminating excess nitrogen runoff into waterways", icon: TrendingDown, color: "text-green-600" },
                  { value: "25–35%", label: "Less irrigation water used", sub: "Directly reducing pressure on shared water resources", icon: Droplets, color: "text-blue-600" },
                  { value: "15–30%", label: "Fewer spray events per season", sub: "Less chemical load on pollinators, soil biology, and waterways", icon: Shield, color: "text-red-600" },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-2xl p-8 shadow-md border border-gray-100">
                    <stat.icon className={`h-10 w-10 ${stat.color} mx-auto mb-4`} />
                    <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                    <div className="text-gray-800 font-semibold mb-2">{stat.label}</div>
                    <div className="text-gray-500 text-sm">{stat.sub}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-teal-700">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Leaf className="h-12 w-12 text-green-300 mx-auto mb-6" />
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Grow More. Consume Less. Leave More Behind.
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Talk to our team about bringing precision AI to your operation — and what that means for your farm's sustainability story.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-white text-green-700 hover:bg-green-50 font-semibold px-10 py-3 text-lg">
                  <Link to="/contact">
                    Request a Demo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-10 py-3 text-lg">
                  <Link to="/solutions">See Full Platform</Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default AiForNature;
