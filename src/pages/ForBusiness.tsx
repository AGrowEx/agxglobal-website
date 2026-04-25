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
  TrendingUp,
  Users,
  Truck,
  FileText,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Building2,
  Layers,
  Calendar,
  Settings,
} from "lucide-react";

const ForBusiness = () => {
  const modules = [
    {
      icon: Users,
      title: "Workforce Management",
      description:
        "Digital check-in/check-out, daily wage tracking, role-based access (supervisor/worker/manager), advance payments, and auto-reconciliation. Manage hundreds of seasonal and permanent workers without a single spreadsheet.",
      features: [
        "Digital attendance with GPS verification",
        "Bulk payroll processing (one swipe confirm)",
        "Advance payment management with auto deduction",
        "Role-based views: supervisors see only their teams",
      ],
    },
    {
      icon: Truck,
      title: "Produce Dispatch & Logistics",
      description:
        "Digital consignment docket creation with buyer, driver, and vehicle assignment. Quality grading capture, digital signatures, and real-time dispatch status — no paper, no disputes.",
      features: [
        "Consignment docket with buyer and driver details",
        "Quality grading and weight recording",
        "Digital signature capture for delivery confirmation",
        "Buyer and driver directory with history",
      ],
    },
    {
      icon: FileText,
      title: "Automated Reporting",
      description:
        "Scheduled email delivery of PDF and Excel reports — attendance, payroll, consignment, production summaries. Set it once, receive it on your schedule. No need to log in to get the numbers you need.",
      features: [
        "Automated email delivery (daily/weekly/monthly)",
        "PDF and Excel export formats",
        "Attendance and payroll summaries",
        "Consignment and production dispatch reports",
      ],
    },
    {
      icon: Layers,
      title: "Multi-Farm & Multi-Plot Management",
      description:
        "Manage multiple farms and plots from a single dashboard. Each plot has its own crop, irrigation method, growth stage tracking, and sensor connection — fully independent but centrally visible.",
      features: [
        "Unlimited farm and plot creation",
        "Per-plot crop and growth stage tracking",
        "Individual IoT sensor assignment per plot",
        "Cross-farm performance comparison",
      ],
    },
    {
      icon: BarChart3,
      title: "Operations Analytics Dashboard",
      description:
        "Real-time visibility across your entire operation. Workforce costs by date, produce dispatch value, water usage trends, and yield vs. input benchmarks — all in one view.",
      features: [
        "Workforce cost tracking by day/week/month",
        "Produce dispatch revenue and volume trends",
        "Input cost vs yield performance dashboard",
        "AI-generated operational insights and alerts",
      ],
    },
    {
      icon: Calendar,
      title: "Seasonal Planning Agent",
      description:
        "Predict your workforce requirements before the week starts. Our Seasonal Planning Agent analyses weather, production targets, and scheduled tasks to recommend daily staffing levels — so you're never under or overstaffed.",
      features: [
        "AI-predicted workforce requirements by day",
        "Weather-aware scheduling recommendations",
        "Production target vs. capacity modelling",
        "Integration with attendance and payroll systems",
      ],
    },
  ];

  const scaleStats = [
    { value: "Unlimited", label: "Farm & Plot Accounts" },
    { value: "Role-Based", label: "User Access Control" },
    { value: "Real-Time", label: "Workforce Visibility" },
    { value: "One App", label: "Farm Management Suite + AI Platform" },
  ];

  const integrations = [
    "IoT soil and weather sensor support",
    "Email delivery for all reports",
    "GPS-tagged attendance and activities",
    "Digital signature workflows",
    "Multi-device (iOS + Android) sync",
    "Offline capability for poor connectivity areas",
  ];

  const useCases = [
    {
      title: "Large Horticulture Operations",
      description: "Manage multiple blocks, seasonal workers, and daily dispatch. Smart Farm Command Centre handles operations; Bhoomi AI handles the precision farming side.",
    },
    {
      title: "Farm Groups & Cooperatives",
      description: "Central dashboard for multiple member farms. Compare performance, aggregate produce for dispatch, and manage shared workforce across properties.",
    },
    {
      title: "Irrigation Districts",
      description: "Track soil moisture and water usage per plot across the district. AI-driven irrigation recommendations reduce wastage across all member farms simultaneously.",
    },
    {
      title: "Agribusiness Verticals",
      description: "Pack-house and export operations need end-to-end visibility from farm gate to dispatch. Bhoomi's consignment and dispatch module closes the gap.",
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-blue-950 via-indigo-950 to-teal-950">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=2400&q=80")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="relative max-w-7xl mx-auto px-6 py-32">
            <div className="max-w-3xl">
              <Badge className="mb-6 bg-blue-900 text-blue-200 border-blue-700">
                <Building2 className="w-4 h-4 mr-2" />
                For Agri-Business
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Run Your Farm Like
                <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  a World-Class Business.
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Bhoomi's Farm Management Suite is purpose-built for Australian farm operations.
                Workforce, dispatch, payroll, analytics, and agentic AI — in one platform, on one device.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                    Request a Business Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/solutions">
                  <Button variant="outline" className="border-gray-500 text-gray-300 bg-transparent hover:border-blue-400 hover:text-blue-400 px-8 py-3 text-lg">
                    View All Platform Features
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Scale Stats */}
        <section className="py-8 px-6 bg-gray-900">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {scaleStats.map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                  <div className="text-xs text-gray-400 leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ERP Modules */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                  Farm Management Suite Modules
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Complete Operations Management — On One App
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Every module works standalone and integrates with the others. No implementation project needed — just download and start.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((module, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <Card className="h-full border-2 border-gray-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center mb-3">
                        <module.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-lg text-gray-800">{module.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-gray-600 text-sm">{module.description}</p>
                      <ul className="space-y-2">
                        {module.features.map((feature, fi) => (
                          <li key={fi} className="flex items-start gap-2 text-xs text-gray-600">
                            <CheckCircle className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <ScrollReveal>
              <div className="text-center mb-12">
                <Badge className="mb-4 bg-teal-100 text-teal-800 border-teal-200">
                  Who Uses Smart Manager
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  Built for Operations at Scale
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((useCase, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                    <Settings className="w-4 h-4 mr-2" />
                    Technical Capabilities
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                    Works Where Your Farm Works
                  </h2>
                  <p className="text-lg text-gray-600 mb-8">
                    Bhoomi is designed for agricultural environments — patchy connectivity, varying device types, and complex multi-stakeholder workflows.
                  </p>
                  <div className="space-y-4">
                    {integrations.map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Why Choose Bhoomi Farm Management Suite?</h3>
                  {[
                    { title: "No implementation project", detail: "Download, setup, and use. Farm Setup Agent configures your account in a conversation." },
                    { title: "Built for Australian agriculture", detail: "Not a generic system adapted for farms. Payroll, dispatch, and analytics are purpose-built for agri operations." },
                    { title: "AI + Farm Management in one app", detail: "Don't manage two systems. Bhoomi's AI agents and farm management modules share the same farm data for true intelligence." },
                    { title: "Scales with your operation", detail: "From single farm to multi-property operations — the same app, the same data model, no upgrade needed." },
                  ].map((item, i) => (
                    <div key={i} className="mb-5 pb-5 border-b border-blue-100 last:border-0 last:mb-0 last:pb-0">
                      <div className="font-semibold text-gray-800 text-sm mb-1">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.detail}</div>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-700 to-indigo-700">
          <div className="max-w-4xl mx-auto text-center">
            <ScrollReveal>
              <Badge className="mb-6 bg-white/20 text-white border-white/30">
                Ready to Modernise Your Operation?
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                See Smart Manager in Action
              </h2>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                Request a personalised demo for your operation type. We'll walk you through the exact modules relevant to your farms.
              </p>
              <Link to="/contact">
                <Button className="bg-white text-blue-700 hover:bg-blue-50 font-semibold px-10 py-3 text-lg">
                  Request a Business Demo
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

export default ForBusiness;
