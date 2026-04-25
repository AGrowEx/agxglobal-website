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
  Globe,
  TrendingUp,
  Leaf,
  CheckCircle,
  ArrowRight,
  MapPin,
  Users,
  BarChart3,
  Sprout,
  Handshake,
  DollarSign,
  Zap,
} from "lucide-react";

const Australia = () => {
  const stats = [
    { value: "$60B+", label: "Annual Farm Output", detail: "Australia's agricultural sector generates over $60 billion annually" },
    { value: "135K+", label: "Farm Businesses", detail: "Active farm businesses across the continent" },
    { value: "12%", label: "Currently Digitised", detail: "vs 35% in comparable markets — a $12B+ addressable gap" },
    { value: "4 States", label: "Go-to-Market Focus", detail: "NSW, VIC, SA, and WA — Australia's largest agricultural states" },
  ];

  const focusRegions = [
    {
      state: "NSW",
      crops: "Horticulture, Viticulture, Cotton, Wheat",
      highlight: "Largest agricultural state by output",
    },
    {
      state: "VIC",
      crops: "Dairy, Horticulture, Grains, Livestock",
      highlight: "Highest farm density in Australia",
    },
    {
      state: "SA",
      crops: "Wine grapes, Almonds, Grain, Livestock",
      highlight: "Premium viticulture and almond hub",
    },
    {
      state: "WA",
      crops: "Wheat, Canola, Sheep, Horticulture",
      highlight: "Fastest growing AgTech adoption",
    },
  ];

  const whyAustralia = [
    {
      icon: TrendingUp,
      title: "Massive Digitisation Gap",
      description:
        "Only 12% of Australian farm businesses use precision agriculture tools, compared to 35% in comparable markets. This gap represents a multi-billion dollar opportunity for the right platform.",
    },
    {
      icon: DollarSign,
      title: "Government AgTech Tailwinds",
      description:
        "The Australian Government's Digital Agriculture Strategy and state-level AgTech investment programs create strong policy tailwinds for precision farming adoption — including funding incentives for growers.",
    },
    {
      icon: Users,
      title: "Large Operations, High ROI",
      description:
        "Australian farms are significantly larger than Indian or African counterparts, meaning the ROI from AI-driven yield improvement and input reduction is proportionally higher per farm.",
    },
    {
      icon: Globe,
      title: "English-First Market",
      description:
        "Bhoomi's platform is fully English-ready with no localisation required. Our data pipeline already integrates Australian weather data for hyperlocal forecasting across all agricultural zones.",
    },
  ];

  const platformFit = [
    "15-day ahead disease forecasting tuned for Australian crop zones",
    "Weather advisory powered by Australian Bureau of Meteorology data",
    "IoT sensor support for Australian soil types (clay-heavy, sandy loam, red earth)",
    "Compatible with irrigation systems common on Australian farms (drip, furrow, pivot)",
    "Workforce management supporting seasonal worker payroll (backpacker tax, AWU rates)",
    "Bilty and consignment records supporting Australian produce supply chains",
    "Spray and fertigation windows compliant with Australian chemical use guidelines",
    "English-language AI onboarding — zero friction for Australian growers",
  ];

  const partnershipModel = [
    {
      title: "Distribution Partner",
      description:
        "AgTech distributors, agronomists, irrigation retailers, and rural cooperatives. Earn revenue sharing for every farm onboarded through your network.",
      cta: "Become a Distributor",
    },
    {
      title: "Agronomy Integration",
      description:
        "Agronomists and crop consultants — white-label Bhoomi's disease forecasting and recommendation engine under your own brand.",
      cta: "Explore White-Label",
    },
    {
      title: "Investment & Co-Development",
      description:
        "We're seeking strategic investors who understand Australian agriculture. Help us fast-track our go-to-market while we adapt Bhoomi specifically for Australian farm conditions.",
      cta: "Talk Investment",
    },
  ];

  const traction = [
    { metric: "25,000+", label: "Man-days digitised globally" },
    { metric: "40–50%", label: "Yield increase on pilot farms" },
    { metric: "15-Day", label: "Ahead disease forecast accuracy" },
    { metric: "7 States", label: "Active across India" },
    { metric: "5-Star", label: "App store rating" },
    { metric: "3 Continents", label: "India, Australia, Africa" },
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'url("/aus_farm.png")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          <div className="relative w-full px-8 md:px-16 py-32">
            <div className="max-w-lg">
              <Badge className="mb-6 bg-green-900 text-green-300 border-green-700">
                <MapPin className="w-4 h-4 mr-2" />
                Australia Market Expansion
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Precision Agriculture
                <span className="block bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Built for Australian Growers
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Australia's $60B+ agricultural sector has a 12% digitisation rate — one of the lowest
                among developed farming nations. Bhoomi is ready to change that, with a proven platform,
                real traction, and a deep commitment to the Australian grower.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                    Talk to Our Australia Team
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="border-gray-500 text-gray-300 bg-transparent hover:border-green-400 hover:text-green-400 px-8 py-3 text-lg">
                    Try Bhoomi App Free
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Market Stats */}
        <section className="py-16 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">{stat.value}</div>
                    <div className="text-base font-semibold text-white mb-1">{stat.label}</div>
                    <div className="text-xs text-gray-500">{stat.detail}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Why Australia */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-100 text-green-800 border-green-200">
                  Market Opportunity
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Why Australia, Why Now
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  The conditions for Bhoomi's success in Australia are uniquely aligned right now.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {whyAustralia.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-gray-100 hover:border-green-200 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-teal-600 flex items-center justify-center mb-4">
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

        {/* Focus Regions */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
                  <MapPin className="w-4 h-4 mr-2" />
                  Go-to-Market Regions
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Starting in Four Key States
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Our initial focus covers the states representing the majority of Australia's horticultural and broadacre output.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {focusRegions.map((region, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-teal-100 hover:border-teal-400 transition-all duration-300 hover:shadow-lg text-center">
                    <CardHeader>
                      <div className="text-4xl font-bold text-teal-600 mb-2">{region.state}</div>
                      <div className="text-xs font-semibold text-teal-500 bg-teal-50 px-3 py-1 rounded-full inline-block">
                        {region.highlight}
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">{region.crops}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Fit */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                    <Sprout className="w-4 h-4 mr-2" />
                    Ready for Australian Conditions
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Bhoomi is Built for Australian Agriculture
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    From Australian weather data pipelines to compatibility with Australian irrigation
                    systems and workforce regulations — Bhoomi is not a generic platform adapted for
                    Australia. It's purpose-built for the realities of growing here.
                  </p>
                  <div className="space-y-3">
                    {platformFit.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl p-8 border border-green-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Global Traction Snapshot</h3>
                  <div className="grid grid-cols-2 gap-6">
                    {traction.map((item, i) => (
                      <div key={i} className="text-center p-4 bg-white rounded-xl border border-gray-100 shadow-sm">
                        <div className="text-2xl font-bold text-green-600 mb-1">{item.metric}</div>
                        <div className="text-xs text-gray-500 leading-tight">{item.label}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-sm text-gray-500 mt-6 text-center">
                    Proven at scale across 3 continents before the Australian launch.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Partnership Model */}
        <section className="py-20 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-green-900 text-green-300 border-green-700">
                  <Handshake className="w-4 h-4 mr-2" />
                  Partnership Opportunities
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                  Grow with Bhoomi in Australia
                </h2>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                  We're actively building our Australian partner network. Multiple entry points depending on who you are.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipModel.map((model, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full bg-gray-800 border-gray-700 hover:border-green-500 transition-all duration-300 hover:shadow-xl">
                    <CardHeader>
                      <CardTitle className="text-xl text-white">{model.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-400">{model.description}</p>
                      <Link to="/contact">
                        <Button className="w-full bg-green-600 hover:bg-green-700 text-white border-0">
                          {model.cta}
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

        {/* Carbon Narrative */}
        <section className="py-20 px-6 bg-gradient-to-r from-green-700 to-teal-700">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                <Leaf className="w-4 h-4 mr-2" />
                Sustainability First
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Australia's Climate Requires Smarter Farming
              </h2>
              <p className="text-xl text-green-100 mb-8 leading-relaxed">
                Climate variability, drought cycles, and water scarcity make precision agriculture
                not just profitable — but essential. Bhoomi's AI-driven water optimisation, spray
                timing, and disease forecasting directly address the environmental pressures facing
                Australian growers today.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                {[
                  { stat: "25%", label: "Less Water Used" },
                  { stat: "10–20%", label: "Fewer Chemical Inputs" },
                  { stat: "40–50%", label: "Higher Yield Potential" },
                ].map((item, i) => (
                  <div key={i} className="bg-white/15 rounded-xl p-5 border border-white/20">
                    <div className="text-3xl font-bold text-green-200 mb-1">{item.stat}</div>
                    <div className="text-white font-medium">{item.label}</div>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <Button className="bg-white text-green-700 hover:bg-green-50 font-semibold px-10 py-3 text-lg">
                  Connect with Our Australia Team
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

export default Australia;
