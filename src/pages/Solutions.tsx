import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Droplets,
  Shield,
  CloudRain,
  Users,
  Truck,
  Sprout,
  FileText,
  Bot,
  Camera,
  FlaskConical,
  Calendar,
  Cpu,
  CheckCircle,
  ArrowRight,
  Zap,
  AlertTriangle,
  DollarSign,
  Wind,
} from "lucide-react";

const Solutions = () => {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Unpredictable Pest & Disease Pressure",
      description:
        "Australian growers face increasing climate variability — meaning traditional calendar-based spray programs are no longer reliable. Late detection costs an average AU farm $45,000+ per outbreak.",
      stat: "40% of crop losses are preventable with early detection",
    },
    {
      icon: DollarSign,
      title: "Rising Input Costs with Thin Margins",
      description:
        "Fertiliser, chemical, and water costs have surged 30–60% over five years. Without precision guidance, over-application is common — draining profitability without improving yields.",
      stat: "10–20% average input saving with AI-guided application",
    },
    {
      icon: Wind,
      title: "Seasonal Workforce Complexity",
      description:
        "Managing seasonal workers across harvest periods, compliance requirements, and variable weather windows is a paperwork burden that takes growers away from the paddock.",
      stat: "80% reduction in admin time with digital workforce tools",
    },
  ];

  const solutions = [
    {
      id: "bhoomi-ai",
      icon: Brain,
      title: "Agentic AI Platform",
      description:
        "Four autonomous AI agents handle disease forecasting, fertigation scheduling, farm setup, and seasonal planning — end-to-end, 24/7. Not dashboards. Real workflows.",
      badge: "Core Intelligence",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: "protect",
      icon: Shield,
      title: "Disease & Pest Management",
      description:
        "15-day advance disease forecast + computer vision detection from a phone photo. Guided Q&A diagnosis and ranked treatment plans — including organic and cultural options.",
      badge: "Biosecurity",
      color: "from-amber-600 to-yellow-700",
    },
    {
      id: "optimize",
      icon: Droplets,
      title: "Fertigation & Irrigation",
      description:
        "AI-generated crop fertigation schedules by growth stage, soil type, and irrigation method. IoT sensor data (NPK, pH, EC, moisture) feeds automatic adjustments in real time.",
      badge: "Resource Efficiency",
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "local",
      icon: CloudRain,
      title: "Microclimate Intelligence",
      description:
        "Hyperlocal 16-day weather forecasts with hourly spray advisory windows based on VPD, Delta-T, humidity, and wind speed — calibrated for Australian growing conditions.",
      badge: "Weather Intelligence",
      color: "from-sky-500 to-blue-600",
    },
    {
      id: "smart-manager",
      icon: Users,
      title: "Farm & Workforce Management",
      description:
        "Digital check-in/out, bulk payroll, role-based access, and advance reconciliation. Replace paper timesheets and spreadsheets with a single mobile-first system.",
      badge: "Farm Operations",
      color: "from-slate-500 to-indigo-700",
    },
    {
      icon: Truck,
      title: "Harvest & Supply Chain",
      description:
        "Create digital consignment records with buyer/driver assignment, quality grading, and digital signature capture. Full paddock-to-market traceability.",
      badge: "Logistics",
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Sprout,
      title: "Precision Nutrition Engine",
      description:
        "Growth-stage-based fertigation schedules tailored to your crop and soil. Mark-as-applied tracking, nutrient balance history, and recommendations that update with each sensor reading.",
      badge: "Nutrition",
      color: "from-teal-500 to-green-600",
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description:
        "Scheduled PDF and Excel reports — attendance, payroll, consignment, production — delivered directly to your inbox on your timetable. No manual data entry.",
      badge: "Compliance & Reporting",
      color: "from-gray-500 to-slate-600",
    },
  ];

  const agents = [
    {
      icon: Bot,
      name: "Farm Setup Agent",
      description:
        "Onboards your farm through a natural conversation — no forms, no manuals. Detects your farming intent, auto-fills plot details, suggests crop varieties suited to your region, and shows early AI insights before you finish setup.",
      color: "from-amber-600 to-yellow-700",
    },
    {
      icon: Camera,
      name: "Disease Management Agent",
      description:
        "Forecasts crop disease 15 days ahead using weather and farm context. Point your phone camera at a sick plant for instant AI diagnosis with confidence scoring, guided Q&A, and full treatment plans including Australian-registered products.",
      color: "from-red-500 to-orange-600",
    },
    {
      icon: FlaskConical,
      name: "Fertigation Intelligence Agent",
      description:
        "Reads your soil sensor data and weather forecast, then auto-generates your complete fertigation schedule by growth stage, fertiliser type, and timing. Compatible with Australian irrigation infrastructure standards.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Calendar,
      name: "Seasonal Planning Agent",
      description:
        "Predicts your workforce requirements based on weather, production targets, and scheduled farm activities — so you have the right people at harvest time. Integrates with Australian seasonal workforce frameworks.",
      color: "from-slate-500 to-indigo-700",
    },
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gray-950">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800" />
          <div className="relative max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Badge className="mb-6 bg-green-900 text-green-300 border-green-700">
                <Zap className="w-4 h-4 mr-2" />
                Precision Tools for Australian Growers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Every Challenge.
                <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  One Platform.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Bhoomi brings together agentic AI, IoT soil intelligence, computer vision, and farm management tools — purpose-built for the complexity of Australian agriculture.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-gray-500 text-gray-300 bg-transparent hover:border-green-400 hover:text-green-400 px-8 py-3 text-lg">
                  <Link to="/for-farmers">Explore for Growers</Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hidden lg:grid grid-cols-2 gap-4"
            >
              {[
                { value: "40–50%", label: "Yield increase on pilot farms" },
                { value: "15-Day", label: "Ahead disease forecast" },
                { value: "10–20%", label: "Input cost reduction" },
                { value: "25%", label: "Less water used" },
              ].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">{s.value}</div>
                  <div className="text-sm text-gray-300">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* AU Pain Points */}
        <section className="relative py-20 px-6 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-50/95" />
          <div className="relative max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-red-100 text-red-800 border-red-200">The Challenge</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  What Australian Growers Are Up Against
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Bhoomi was designed to solve the three biggest cost drivers on modern Australian farms.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {painPoints.map((point, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-red-100 hover:border-red-300 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center mb-4">
                        <point.icon className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-lg text-gray-800">{point.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm mb-4">{point.description}</p>
                      <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                        <p className="text-green-700 text-sm font-medium">✓ {point.stat}</p>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 8 Core Solutions */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">Platform Capabilities</Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">8 Integrated Tools. One App.</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every module connects to every other — your disease detection feeds your spray record, which feeds your compliance report, automatically.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solutions.map((sol, i) => (
                <ScrollReveal key={i} delay={i * 0.07}>
                  <Card id={sol.id} className="h-full scroll-mt-24 border-2 border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg group">
                    <CardHeader>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${sol.color} flex items-center justify-center mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                        <sol.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className="w-fit text-xs mb-2 bg-gray-100 text-gray-600 border-gray-200">{sol.badge}</Badge>
                      <CardTitle className="text-base text-gray-800">{sol.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{sol.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4 AI Agents */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-900 text-green-300 border-green-700">
                  <Zap className="w-4 h-4 mr-2" />
                  Agentic AI
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Four AI Agents. Working for Your Farm 24/7.
                </h2>
                <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                  These aren’t chatbots. Each agent handles a complete end-to-end workflow autonomously — from detecting a problem to delivering an action plan, without you having to prompt it.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8">
              {agents.map((agent, i) => (
                <ScrollReveal key={i} delay={i * 0.12}>
                  <Card className="h-full bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/20">
                    <CardHeader>
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <agent.icon className="h-7 w-7 text-white" />
                      </div>
                      <CardTitle className="text-xl text-white">{agent.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-400 leading-relaxed">{agent.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
            <ScrollReveal>
              <div className="mt-12 text-center">
                <Button asChild className="bg-green-600 hover:bg-green-700 text-white px-8 py-3">
                  <Link to="/ai-for-nature">
                    How AI Helps Nature
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* IoT + CV */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
                  <Cpu className="w-4 h-4 mr-2" />
                  Hardware + Computer Vision
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  From Soil Sensor to Smart Decision
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Bhoomi connects in-field sensors to AI agents in the cloud — a closed loop of real-world data and intelligent action.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid lg:grid-cols-2 gap-12">
              <ScrollReveal direction="left">
                <Card id="ground-d" className="h-full scroll-mt-24 border-2 border-teal-100 hover:border-teal-300 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="/IOT1.png"
                      alt="Weather station and IoT sensor hardware for Australian farms"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-teal-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">IoT Hardware Integration</CardTitle>
                    <p className="text-gray-500 text-sm">Compatible with Australian sensor hardware standards.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Weather Station Integration", detail: "Hyper-accurate microclimate data — critical for net houses, polyhouses, and protected crops where ambient readings differ from crop-level conditions." },
                      { title: "Soil Sensor Telemetry", detail: "Real-time NPK, moisture, pH, EC, and temperature from in-field probes. Data feeds directly into the Fertigation Intelligence Agent." },
                      { title: "Supported Sensor Types", detail: "NPK 7-in-1 probes, moisture/EC/salinity sensors, pH/ORP meters, and all-in-one multi-sensor devices. Compatible with RS485/Modbus sensors." },
                      { title: "GPS-Tagged Readings", detail: "Every reading is stamped with GPS location, depth, battery level, and signal strength — full data traceability for every paddock." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                          <div className="text-gray-600 text-sm">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <Card className="h-full border-2 border-blue-100 hover:border-blue-300 transition-all duration-300 hover:shadow-lg overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80"
                      alt="Farmer photographing crop with smartphone for AI disease detection"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg">
                        <Camera className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl text-gray-800">Computer Vision Disease Detection</CardTitle>
                    <p className="text-gray-500 text-sm">Point. Shoot. Diagnose. Treat.</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      { title: "Instant Photo Analysis", detail: "Upload a crop photo from your phone and receive a full AI-powered diagnosis in seconds — no specialist needed on-farm." },
                      { title: "Confidence-Scored Results", detail: "Each detected issue receives a confidence score (High / Medium / Low) and severity rating (Severe / Moderate / Mild / Early Stage)." },
                      { title: "Guided Farmer Q&A", detail: "The AI asks targeted questions to confirm or rule out each diagnosis — like having a plant pathologist in your pocket." },
                      { title: "Full Treatment Plans", detail: "Ranked confirmed issues with chemical, organic, biological, or cultural treatment options — including Australian-registered products and dosages." },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-800 text-sm">{item.title}</div>
                          <div className="text-gray-600 text-sm">{item.detail}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-6 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1587925358603-c2eea5305bbc?auto=format&fit=crop&w=1600&q=80"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/95 to-teal-700/90" />
          <div className="relative max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Ready to See It on Your Farm?
              </h2>
              <p className="text-lg text-green-100 mb-8">
                Book a personalised demo and we'll walk through exactly how Bhoomi can reduce your costs and lift your yields.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button asChild className="bg-white text-green-700 hover:bg-green-50 font-semibold px-10 py-3 text-lg">
                  <Link to="/contact">Request Demo</Link>
                </Button>
                <Button asChild variant="outline" className="border-white text-white bg-transparent hover:bg-white/10 px-10 py-3 text-lg">
                  <Link to="/for-farmers">For Growers</Link>
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

export default Solutions;