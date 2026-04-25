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
  DollarSign,
  TrendingUp,
  Globe,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Leaf,
  Bot,
  Layers,
  Zap,
  MapPin,
} from "lucide-react";

const ForInvestors = () => {
  const traction = [
    { value: "25,000+", label: "Man-days of farm data digitised", detail: "Real operational usage across 7 Indian states" },
    { value: "40–50%", label: "Yield increase on pilot farms", detail: "AI-driven improvement measured against baseline" },
    { value: "10–20%", label: "Input cost reduction", detail: "Fertiliser and pesticide savings per hectare" },
    { value: "15-Day", label: "Disease forecast accuracy", detail: "Advance warning vs. competitor 3-day averages" },
    { value: "5-Star", label: "App store rating", detail: "Maintained across 10,000+ downloads" },
    { value: "3 Continents", label: "Active market presence", detail: "India, Australia, Africa — operational today" },
  ];

  const marketOpportunity = [
    {
      region: "India",
      tam: "$8.3B",
      status: "Active — 7 states",
      detail: "140M+ farm households. 12% precision ag penetration. Early mover advantage across commercial horticulture.",
    },
    {
      region: "Australia",
      tam: "$1.2B",
      status: "Expanding — NSW, VIC, SA, WA",
      detail: "$60B+ farm output, 135K+ farm businesses, only 12% digitised. Government AgTech incentives accelerating adoption.",
    },
    {
      region: "Africa",
      tam: "$4.1B",
      status: "Pilot stage",
      detail: "Fastest-growing smartphone agricultural market. Bhoomi's mobile-first design and AI onboarding uniquely suited for low-tech adoption.",
    },
  ];

  const moat = [
    {
      icon: Bot,
      title: "Agentic AI — Not Just Software",
      description:
        "Four autonomous AI agents (Onboarding, Disease, Fertigation, Ops Planning) handle full end-to-end farm workflows. This is not a dashboard — it's an intelligent operating system for agriculture.",
    },
    {
      icon: Layers,
      title: "Vertically Integrated Platform",
      description:
        "IoT hardware integration, computer vision, weather intelligence, ERP, and AI agents in a single app. Competitors address one layer. Bhoomi addresses all five simultaneously.",
    },
    {
      icon: Zap,
      title: "25,000+ Man-Days of Proprietary Farm Data",
      description:
        "Every interaction, spray event, soil reading, and disease record trains our models. This flywheel compounds over time — creating a data moat that is extremely difficult for new entrants to replicate.",
    },
    {
      icon: Globe,
      title: "Multi-Market Architecture",
      description:
        "Platform is already localised across India, Australia, and Africa — three distinct agricultural systems, one codebase. Expansion to new geographies is a configuration exercise, not a re-build.",
    },
  ];

  const useOfFunds = [
    {
      area: "Australia Go-to-Market",
      allocation: "40%",
      detail: "Dedicated AU sales, partner onboarding, agronomy integrations, and regulatory alignment for Australian farming conditions.",
    },
    {
      area: "AI Model Development",
      allocation: "30%",
      detail: "Expanding disease and pest models to cover Australian crop varieties. Strengthening the computer vision pipeline with Australian training data.",
    },
    {
      area: "IoT Hardware Partnerships",
      allocation: "20%",
      detail: "Integrating with Australian sensor distributors and irrigation hardware manufacturers for seamless sensor-to-AI connectivity.",
    },
    {
      area: "Platform Engineering",
      allocation: "10%",
      detail: "Performance, reliability, and security infrastructure to support rapid user base growth across multiple geographies.",
    },
  ];

  const whyNow = [
    "Global food security concerns have elevated AgTech investment to record levels",
    "Climate variability is forcing growers to adopt precision tools — creating urgency we've never seen before",
    "AI capabilities (LLMs, computer vision) have reached the quality threshold required for trusted farm decision-making",
    "Australian AgTech market has government tailwinds but no dominant player yet — the window is open",
    "Bhoomi has proven product-market fit in India with real traction before approaching new markets",
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-950 via-violet-950 to-indigo-950">
          <div
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=2400&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-violet-900 text-violet-200 border-violet-700">
                <DollarSign className="w-4 h-4 mr-2" />
                Investor Relations
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                The Intelligence Layer
                <span className="block bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                  for Global Agriculture.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Bhoomi is an agentic AI precision farming platform with proven traction across India,
                Australia, and Africa. We're raising to accelerate our Australian market expansion
                and deepen our AI/IoT capabilities.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3 text-lg">
                    Request Investor Briefing
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/australia">
                  <Button variant="outline" className="border-gray-500 text-gray-300 bg-transparent hover:border-violet-400 hover:text-violet-400 px-8 py-3 text-lg">
                    See Australia Strategy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Traction Metrics */}
        <section className="py-16 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-10">
                <Badge className="bg-violet-900 text-violet-300 border-violet-700">
                  Proven Traction
                </Badge>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              {traction.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center p-6 bg-gray-800 rounded-xl border border-gray-700">
                    <div className="text-3xl font-bold text-violet-400 mb-1">{item.value}</div>
                    <div className="text-sm font-semibold text-white mb-2">{item.label}</div>
                    <div className="text-xs text-gray-500">{item.detail}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Market Opportunity */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-indigo-100 text-indigo-800 border-indigo-200">
                  <Globe className="w-4 h-4 mr-2" />
                  Market Opportunity
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  A $13B+ Global TAM
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Bhoomi operates across three distinct agricultural markets, each at a different stage of digitisation — creating a natural expansion pathway.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {marketOpportunity.map((market, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-gray-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-indigo-500" />
                        <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                          {market.status}
                        </span>
                      </div>
                      <CardTitle className="text-3xl font-bold text-indigo-600">{market.tam}</CardTitle>
                      <div className="text-xl font-semibold text-gray-800">{market.region}</div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 text-sm">{market.detail}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Competitive Moat */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-violet-100 text-violet-800 border-violet-200">
                  Competitive Advantage
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Why Bhoomi is Defensible
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {moat.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-gray-100 hover:border-violet-200 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-violet-500 to-indigo-600 flex items-center justify-center mb-4">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl text-gray-800">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use of Funds */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Use of Investment
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Where the Funds Go
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {useOfFunds.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-gray-800">{item.area}</h3>
                      <span className="text-2xl font-bold text-green-600">{item.allocation}</span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.detail}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Now */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-green-900 text-green-300 border-green-700">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  Market Timing
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Why Now Is the Right Time
                </h2>
              </div>
            </ScrollReveal>

            <div className="space-y-4">
              {whyNow.map((point, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="flex items-start gap-4 bg-gray-800 rounded-xl p-5 border border-gray-700">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-gray-300">{point}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Carbon / Sustainability */}
        <section className="py-20 px-6 bg-gradient-to-br from-green-900 to-teal-900">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-6 bg-green-800 text-green-200 border-green-600">
                <Leaf className="w-4 h-4 mr-2" />
                ESG Credentials
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                An Investment in Sustainable Agriculture
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Bhoomi is not just an AgTech investment — it's an investment in the future of food
                security and sustainable agriculture. Every farm that uses Bhoomi uses 25% less water,
                10–20% fewer chemicals, and grows more from the same land.{" "}
                <span className="text-green-300 font-semibold">
                  That's a measurable ESG outcome on every transaction.
                </span>
              </p>
              <Link to="/contact">
                <Button className="bg-white text-green-700 hover:bg-green-50 font-semibold px-10 py-3 text-lg">
                  Request Investor Briefing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </ScrollReveal>
          </div>
        </section>

        <Footer />
        <ScrollToTop />
      </motion.div>
    </>
  );
};

export default ForInvestors;
