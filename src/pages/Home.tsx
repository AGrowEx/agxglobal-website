import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Star,
  Shield,
  Droplets,
  Brain,
  BarChart3,
  CheckCircle,
  Quote,
  Users,
  Cpu,
  Camera,
  Leaf,
  Bot,
  Zap,
  FlaskConical,
  Calendar,
  TrendingUp,
  ArrowRight,
  Globe,
  Truck,
  FileText,
  CloudRain,
  Sprout,
} from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Brain,
      title: "Agentic AI Assistant",
      description: "Four autonomous AI agents handle disease forecasting, fertigation scheduling, farm onboarding, and ops planning — end-to-end, 24/7.",
    },
    {
      icon: Droplets,
      title: "Smart Fertigation",
      description: "AI-generated crop fertigation schedules by growth stage. IoT soil data (NPK, pH, EC, moisture) feeds automatic adjustments in real time.",
    },
    {
      icon: Shield,
      title: "Disease & Pest Management",
      description: "15-day advance disease forecast + computer vision detection from a phone photo. Guided diagnosis Q&A and ranked treatment plans.",
    },
    {
      icon: CloudRain,
      title: "Microclimate Intelligence",
      description: "Hyperlocal 16-day weather forecast with hourly spray and fertigation advisory windows based on VPD, Delta-T, humidity and wind speed.",
    },
    {
      icon: Users,
      title: "Farm & Workforce Management",
      description: "Digital check-in/out, bulk payroll, role-based access for supervisors, and advance reconciliation — for Australian farms of any size.",
    },
    {
      icon: Truck,
      title: "Harvest & Supply Chain",
      description: "Create digital consignment records with buyer and driver assignment, quality grading, and digital signature capture. From paddock to market.",
    },
    {
      icon: Sprout,
      title: "Precision Nutrition Engine",
      description: "Growth-stage-based fertigation schedules tailored to your crop, soil type, and irrigation method — with mark-as-applied tracking.",
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description: "Scheduled PDF and Excel reports (attendance, payroll, bilty, production) delivered directly to your email on your timetable.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Avocado & Mango Grower",
      location: "Tablelands, QLD, Australia",
      content: "Bhoomi's 15-day disease forecast is unlike anything I've used before. We avoided a major fungal outbreak last season that would have cost us over $80,000. The photo diagnosis is extraordinary.",
      rating: 5,
    },
    {
      name: "James Donaldson",
      role: "Viticulturist",
      location: "Yarra Valley, VIC, Australia",
      content: "The fertigation scheduling alone paid for the platform within six weeks. Soil sensors feed directly into the AI — it adjusted our schedule overnight based on a weather change I hadn't even noticed.",
      rating: 5,
    },
    {
      name: "Priya Naidu",
      role: "Horticulture Farm Manager",
      location: "Riverland, SA, Australia",
      content: "Managing 12 seasonal workers used to be a nightmare. The workforce module replaced our entire spreadsheet system in one week. Payroll, dispatch, reports — all automated.",
      rating: 5,
    },
  ];

  const metrics = [
    { value: "25,000+", label: "Farming Days Digitised" },
    { value: "40–50%", label: "Yield Increase on Pilot Farms" },
    { value: "15-Day", label: "Ahead Pest Forecast" },
    { value: "10–20%", label: "Input Cost Reduction" },
    { value: "3 Continents", label: "Active Globally" },
    { value: "5-Star", label: "App Rating" },
  ];

  const audiences = [
    {
      icon: Leaf,
      title: "For Growers",
      description: "From small family farms to large horticulture operations — AI-powered tools that make every decision smarter.",
      cta: "Explore for Growers",
      href: "/for-farmers",
      color: "border-green-200 hover:border-green-400",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      icon: TrendingUp,
      title: "For Agri-Business",
      description: "Farm groups, cooperatives, irrigation districts — scale your operations with our Farm Management Suite, workforce tools, and automated reporting.",
      cta: "Explore for Business",
      href: "/for-business",
      color: "border-blue-200 hover:border-blue-400",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: Globe,
      title: "Australia Partners & Investors",
      description: "We're actively expanding across NSW, VIC, SA, and WA. Learn about our go-to-market strategy, traction, and partnership model.",
      cta: "Explore Australia",
      href: "/australia",
      color: "border-teal-200 hover:border-teal-400",
      badgeColor: "bg-teal-100 text-teal-800",
    },
  ];

  const erpFeatures = [
    "Workers, supervisors, buyers & drivers — all in one place",
    "Digital check-in / check-out with daily wage tracking",
    "Bulk payroll processing with one-swipe confirmation",
    "Produce dispatch with consignment dockets and digital signatures",
    "Role-based access: supervisors see only what they need",
    "Automated email reports (PDF/Excel) on your schedule",
    "Advance payment management and auto-reconciliation",
    "Full activity audit trail for every action on-farm",
  ];

  return (
    <>
      <Navigation />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/20"
      >
        <Hero />

        {/* Impact Metrics Bar */}
        <section className="py-8 px-6 bg-gray-900 border-y border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {metrics.map((metric, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl font-bold text-green-400">{metric.value}</div>
                  <div className="text-xs text-gray-400 leading-tight">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Audience Split Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                  Who Is Bhoomi For?
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Built for every scale of agriculture
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Whether you're a solo grower or managing a cooperative across multiple farms, Bhoomi scales with you.
                </p>
              </div>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8">
              {audiences.map((audience, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className={`h-full border-2 ${audience.color} transition-all duration-300 hover:shadow-xl`}>
                    <CardHeader>
                      <Badge className={`w-fit mb-4 ${audience.badgeColor}`}>
                        <audience.icon className="w-4 h-4 mr-2" />
                        {audience.title}
                      </Badge>
                      <CardTitle className="text-xl text-gray-800">{audience.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600">{audience.description}</p>
                      <Link to={audience.href}>
                        <Button variant="outline" className="w-full mt-2 border-gray-300 hover:border-green-500 hover:text-green-700">
                          {audience.cta}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents Teaser */}
        <section className="py-16 px-6 bg-gray-900">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <Badge className="mb-4 bg-green-900 text-green-300 border-green-700">
                  <Zap className="w-4 h-4 mr-2" />
                  Agentic AI
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">
                  Your Farm's AI Crew — Always On
                </h2>
                <p className="text-gray-400 max-w-xl mx-auto">
                  Four specialised agents run your farm's most critical workflows end-to-end, without you having to prompt them.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
                {[
                  { icon: Bot, label: "Farm Setup Agent", sub: "Onboarding", color: "from-green-500 to-emerald-600" },
                  { icon: Camera, label: "Disease Management Agent", sub: "Biosecurity", color: "from-amber-600 to-yellow-700" },
                  { icon: FlaskConical, label: "Fertigation Intelligence Agent", sub: "Nutrition", color: "from-blue-500 to-indigo-600" },
                  { icon: Calendar, label: "Seasonal Planning Agent", sub: "Workforce", color: "from-slate-500 to-indigo-700" },
                ].map((item, i) => (
                  <div key={i} className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex flex-col items-center text-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white text-sm font-semibold leading-tight">{item.label}</p>
                      <p className="text-gray-500 text-xs mt-0.5">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Link to="/solutions">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8">
                    How each agent works
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* IoT + Hardware Intelligence */}
        <section className="py-20 px-6 bg-[radial-gradient(circle_at_top,_rgba(20,184,166,0.08),_transparent_28%)]">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
                  <Cpu className="w-4 h-4 mr-2" />
                  Hardware + Cloud AI
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Field Sensors to Smart Decisions —
                  <span className="bg-gradient-to-r from-teal-600 to-green-600 bg-clip-text text-transparent"> Closed Loop</span>
                </h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  IoT weather stations, soil probes (NPK, pH, EC, moisture), and computer vision feed real-time data
                  directly into Bhoomi's AI agents — automatically adjusting spray, fertigation, and irrigation
                  without manual input.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { label: "NPK / pH / EC / Moisture", sub: "Soil sensor telemetry" },
                    { label: "Weather station integration", sub: "Microclimate accuracy" },
                    { label: "Phone camera diagnosis", sub: "Computer vision AI" },
                    { label: "GPS-tagged readings", sub: "Full audit trail" },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-teal-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-sm font-semibold text-gray-800">{item.label}</div>
                        <div className="text-xs text-gray-500">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>
                <Link to="/solutions">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6">
                    Full IoT & Computer Vision Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </ScrollReveal>
              <ScrollReveal direction="right">
                <div className="relative">
                  <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-teal-300/30 via-green-200/20 to-transparent blur-3xl" />
                  <img
                    src="/IOT.png"
                    alt="IoT sensors on Australian farm"
                    className="relative w-full rounded-[2rem] shadow-[0_45px_90px_-35px_rgba(15,23,42,0.38)]"
                  />
                  <div className="absolute -bottom-8 -right-20 max-w-[200px] hidden lg:block">
                    <div className="absolute -inset-6 rounded-[2.2rem] bg-white/30 blur-3xl" />
                    <div className="relative p-1">
                    <img
                      src="/bhoomi/bhoomi_weather.png"
                      alt="Microclimate intelligence app screen"
                        className="w-full drop-shadow-[0_28px_60px_rgba(0,0,0,0.3)]"
                    />
                      <p className="text-xs text-gray-600 mt-3 text-center font-semibold">Microclimate Intelligence</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Carbon Narrative Section */}
        <section className="py-20 px-6 bg-gradient-to-br from-green-900 via-teal-900 to-emerald-900 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2232&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-800 text-green-200 border-green-600">
                  <Leaf className="w-4 h-4 mr-2" />
                  AI in Service of the Planet
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                  AI That Gives Back to the Planet
                </h2>
                <p className="text-xl text-green-100 max-w-3xl mx-auto leading-relaxed">
                  We know AI has a carbon cost. That's why Bhoomi is built to use AI as a force multiplier
                  for sustainability. Every recommendation we generate reduces chemical runoff, water waste,
                  and unnecessary tillage.{" "}
                  <span className="text-green-300 font-semibold">
                    We're not just using AI — we're using it to lower agriculture's footprint on Bhoomi (Earth).
                  </span>
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { value: "25%", label: "Less Water Used", detail: "Precision irrigation scheduling based on real soil moisture and weather data eliminates over-watering." },
                { value: "10–20%", label: "Fewer Chemical Inputs", detail: "AI-timed spray windows and organic alternatives reduce pesticide and fertiliser waste significantly." },
                { value: "More Yield", label: "Less Land Pressure", detail: "Higher productivity per hectare means less pressure to clear new land — protecting ecosystems at scale." },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.15}>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/20 hover:bg-white/15 transition-all duration-300">
                    <div className="text-4xl font-bold text-green-300 mb-2">{stat.value}</div>
                    <div className="text-xl font-semibold text-white mb-3">{stat.label}</div>
                    <p className="text-green-200 text-sm leading-relaxed">{stat.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Overview */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <Badge className="mb-6 bg-green-100 text-green-800 border-green-200">
                  Platform Overview
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  One App. Zero Silos.
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every part of your operation talks to every other — no manual data entry, no missed connections, no blind spots.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className="rounded-3xl bg-gradient-to-br from-green-50 to-emerald-100 border border-green-200 p-10 md:p-14 text-center">
                <p className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Complete precision farming platform</p>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
                  Every module connects — disease detection, fertigation, workforce, and supply chain all share the same data and feed each other automatically.
                </p>
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                  {["Agentic AI", "IoT Sensors", "Disease Detection", "Workforce", "Supply Chain", "Reporting"].map((tag) => (
                    <span key={tag} className="text-sm font-medium px-4 py-2 rounded-full bg-white text-green-700 border border-green-300 shadow-sm">{tag}</span>
                  ))}
                </div>
                <div className="pt-2">
                  <Link to="/solutions">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-base">
                      Explore Full Platform
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Vision Section */}
        <section className="py-20 px-6 relative overflow-hidden min-h-[60vh] flex items-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url(/earth_frame.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white leading-tight">
                With a vision to make impact at scale
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                To empower every farmer, to leverage their own farm's data to produce more and better
                from planet earth{" "}
                <span className="text-green-400 font-semibold">(Bhoomi)</span>{" "}
                while consuming less natural and man-made resources.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Bhoomi App Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <ScrollReveal direction="left">
                <div>
                  <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                    <Smartphone className="w-4 h-4 mr-2" />
                    Mobile App
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Download Bhoomi App
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Get the full power of precision farming in your pocket. Bhoomi is available on both
                    Google Play and Apple App Store — bringing AI-powered agricultural intelligence to
                    growers worldwide.
                  </p>
                  <div className="flex flex-row gap-4 flex-wrap justify-start items-center">
                    <a
                      href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                        alt="Get it on Google Play"
                        className="max-h-full max-w-full object-contain"
                      />
                    </a>
                    <a
                      href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                        alt="Download on the App Store"
                        className="max-h-full max-w-full object-contain"
                      />
                    </a>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="relative mx-auto max-w-64">
                  <div className="absolute -inset-10 rounded-[3rem] bg-gradient-to-br from-blue-200/45 via-teal-200/30 to-transparent blur-3xl" />
                  <img
                    src="/bhoomi/bhoomi_dashboard.png"
                    alt="Bhoomi App Screenshots"
                    className="relative w-full h-auto drop-shadow-[0_45px_75px_rgba(15,23,42,0.3)]"
                  />
                  <div className="absolute -top-3 -right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                    5-Star Rating
                  </div>
                  <div className="absolute -bottom-3 -left-3 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium shadow-lg">
                    10K+ Downloads
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-6 bg-yellow-100 text-yellow-800 border-yellow-200">
                  Success Stories
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                  Growers Love Bhoomi
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Hear from Australian growers already transforming their operations with Bhoomi
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="h-full border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <Quote className="h-8 w-8 text-green-500 mb-4" />
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                      <div className="border-t pt-4">
                        <div className="font-semibold text-gray-800">{testimonial.name}</div>
                        <div className="text-sm text-gray-500">{testimonial.role}</div>
                        <div className="text-sm text-green-600">{testimonial.location}</div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Ready to Transform Your Farm?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Join the Precision Farming Revolution
              </h2>
              <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
                Start with Bhoomi today. Download the app or reach out for a personalised demo tailored to your operation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
                <a
                  href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-40 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="max-h-full max-w-full object-contain"
                  />
                </a>
                <Link to="/contact">
                  <Button className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 h-12">
                    Request a Demo
                  </Button>
                </Link>
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

export default Home;
