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
  Leaf,
  Bot,
  Camera,
  FlaskConical,
  CloudRain,
  Cpu,
  CheckCircle,
  ArrowRight,
  Star,
  Sprout,
  Shield,
  Smartphone,
} from "lucide-react";

const ForFarmers = () => {
  const coreTools = [
    {
      icon: Bot,
      title: "AI Onboarding — Zero Paperwork",
      description:
        "Bhoomi learns your farm through a natural conversation. Tell it what you grow, where you are, and how you irrigate — and the AI automatically configures your farm with personalised insights from day one.",
      badge: "Farm Setup Agent",
      badgeColor: "bg-green-100 text-green-800",
    },
    {
      icon: Camera,
      title: "Disease Forecast + Photo Diagnosis",
      description:
        "Know what's coming 15 days before it hits. Our disease forecasting engine analyses weather patterns, growth stage, and local disease pressure to alert you in advance. Then snap a photo and get an instant AI diagnosis with confidence scoring and ranked treatment options.",
      badge: "Disease Management Agent",
      badgeColor: "bg-red-100 text-red-800",
    },
    {
      icon: FlaskConical,
      title: "Fertigation — AI Schedules, IoT Validation",
      description:
        "Stop guessing at nutrient needs. Your crop's growth stage, soil sensor readings (NPK, pH, EC, moisture), and real weather conditions all feed into an AI-generated fertigation schedule. One tap to confirm and track what you've applied.",
      badge: "Fertigation Intelligence Agent",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: CloudRain,
      title: "Microclimate Weather Intelligence",
      description:
        "16-day hyperlocal forecast with hourly spray and fertigation advisory windows. VPD, Delta-T, wind speed, and humidity analysis tells you exactly when it's safe to spray and when to hold off — protecting your inputs and your crops.",
      badge: "Weather Intelligence",
      badgeColor: "bg-teal-100 text-teal-800",
    },
    {
      icon: Cpu,
      title: "IoT Soil & Weather Sensors",
      description:
        "Connect your in-field hardware directly to Bhoomi. Real-time NPK, moisture, EC, pH, and ORP data from your soil probes feed directly into our AI agents. Supported: NPK 7-in-1, moisture/EC/salinity combos, and RS485/Modbus devices.",
      badge: "IoT Hardware",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      icon: Shield,
      title: "Integrated Pest Management",
      description:
        "Track the full lifecycle of crop threats. From early-stage chemical, organic, biological, and cultural treatment options — to preventive spray programs. Ranked by severity, evidence-weighted by your guided Q&A answers.",
      badge: "Pest & Disease",
      badgeColor: "bg-orange-100 text-orange-800",
    },
  ];

  const outcomes = [
    { value: "40–50%", label: "Yield increase reported on pilot farms" },
    { value: "25%", label: "Reduction in water usage" },
    { value: "10–20%", label: "Fewer chemical inputs" },
    { value: "15-Day", label: "Advance disease warning" },
    { value: "5-Star", label: "Average app store rating" },
    { value: "10K+", label: "App downloads globally" },
  ];

  const crops = [
    "Tomatoes & Capsicums",
    "Cucumbers & Zucchini",
    "Lettuce & Leafy Greens",
    "Strawberries & Berries",
    "Apples & Stone Fruit",
    "Grapes & Viticulture",
    "Wheat, Canola & Pulses",
    "Rice & Corn",
    "Cotton",
    "Almonds & Tree Nuts",
    "Citrus",
    "Avocado & Mango",
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-green-900 via-emerald-900 to-teal-900">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2400&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-green-800 text-green-200 border-green-600">
                <Leaf className="w-4 h-4 mr-2" />
                For Growers
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Grow More.
                <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Use Less. Stress Less.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Bhoomi is an agentic AI precision farming app built for growers of every scale. From
                disease forecasting to IoT soil sensing to automated fertigation — it's like having an
                expert agronomist on call 24/7, in your pocket.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-44 h-14 flex items-center justify-center hover:scale-105 transition-transform duration-300"
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
          </div>
        </section>

        {/* Outcomes Strip */}
        <section className="py-8 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
              {outcomes.map((item, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold text-green-400">{item.value}</div>
                  <div className="text-xs text-gray-400 leading-tight">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Tools */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                  What Bhoomi Does for You
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Six Tools That Work Together
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every feature in Bhoomi feeds data into the next. Your weather powers your spray window. Your soil data shapes your fertigation. Your growth stage informs your disease risk. It all works together.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreTools.map((tool, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mb-3">
                        <tool.icon className="h-6 w-6 text-white" />
                      </div>
                      <Badge className={`w-fit mb-2 text-xs ${tool.badgeColor}`}>{tool.badge}</Badge>
                      <CardTitle className="text-lg text-gray-800">{tool.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm leading-relaxed">{tool.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Supported Crops */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
                  <Sprout className="w-4 h-4 mr-2" />
                  Supported Crops
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Works Across 40+ Crop Types
                </h2>
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap gap-3 justify-center max-w-4xl mx-auto">
              {crops.map((crop, i) => (
                <ScrollReveal key={i} delay={i * 0.04}>
                  <div className="flex items-center gap-2 bg-white border border-green-200 text-green-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-green-50 transition-colors">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    {crop}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonial + CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-teal-700">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed">
                "The disease forecast system is incredible. The 15-day early warning saved my entire
                crop from a potential outbreak. The AI diagnosis from a photo is something I didn't
                think was possible."
              </blockquote>
              <div className="text-green-200 font-semibold mb-1">Sunny</div>
              <div className="text-green-300 text-sm mb-10">Horticulture Farm Owner — Victoria, Australia</div>

              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Grow Smarter?
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
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
                  <Button className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 h-14">
                    Talk to Our Team
                    <ArrowRight className="ml-2 h-4 w-4" />
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

export default ForFarmers;
