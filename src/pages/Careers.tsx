import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  MapPin, 
  Clock,
  DollarSign,
  Heart,
  Code,
  Briefcase,
  GraduationCap,
  Globe,
  Laptop,
  Coffee,
  Car,
  Shield,
  TrendingUp,
  Target,
  ArrowRight,
  Mail,
  Calendar,
  Building
} from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, and vision coverage for you and your family",
      details: ["Medical insurance", "Dental & vision", "Mental health support", "Wellness programs"]
    },
    {
      icon: Laptop,
      title: "Remote Work",
      description: "Flexible work arrangements with remote work options and modern equipment",
      details: ["Work from anywhere", "Latest tech equipment", "Home office setup", "Flexible hours"]
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conference attendance, and skill development programs",
      details: ["Conference attendance", "Online courses", "Skill certifications", "Mentorship programs"]
    },
    {
      icon: DollarSign,
      title: "Competitive Compensation",
      description: "Market-competitive salaries with performance bonuses and equity options",
      details: ["Competitive salary", "Performance bonuses", "Equity options", "Annual reviews"]
    },
    {
      icon: Coffee,
      title: "Work-Life Balance",
      description: "Generous PTO, parental leave, and sabbatical opportunities",
      details: ["Unlimited PTO", "Parental leave", "Sabbatical options", "Mental health days"]
    },
    {
      icon: Car,
      title: "Travel & Relocation",
      description: "Travel allowances, relocation assistance, and international assignment opportunities",
      details: ["Travel allowances", "Relocation support", "International assignments", "Visa assistance"]
    }
  ];

  const cultureValues = [
    {
      title: "Global Impact",
      description: "Work on solutions that directly impact farmers and food security worldwide",
      icon: Globe,
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Innovation First",
      description: "Push the boundaries of agricultural technology with cutting-edge AI and IoT solutions",
      icon: Target,
      color: "from-indigo-500 to-slate-600"
    },
    {
      title: "Farmer-Centric",
      description: "Every product decision is made with farmers' needs and success in mind",
      icon: Heart,
      color: "from-green-500 to-teal-600"
    },
    {
      title: "Growth Mindset",
      description: "Continuous learning and professional development in a fast-growing industry",
      icon: TrendingUp,
      color: "from-amber-500 to-yellow-600"
    }
  ];

  const applicationProcess = [
    {
      step: "1",
      title: "Apply Online",
      description: "Submit your application through our careers portal with your resume and cover letter",
      icon: Mail
    },
    {
      step: "2", 
      title: "Initial Screening",
      description: "Our HR team will review your application and conduct an initial phone screening",
      icon: Users
    },
    {
      step: "3",
      title: "Technical Interview",
      description: "Meet with our technical team to discuss your skills and experience in detail",
      icon: Code
    },
    {
      step: "4",
      title: "Final Interview",
      description: "Final round with leadership team and cultural fit assessment",
      icon: Building
    },
    {
      step: "5",
      title: "Offer & Onboarding",
      description: "Receive your offer and start your journey with comprehensive onboarding",
      icon: Calendar
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-teal-50/20"
    >
      <Navigation />
      
      {/* Hero Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-40 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  Join Our Mission
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                Help us revolutionize agriculture through AI-powered solutions that 
                empower farmers worldwide to achieve sustainable, efficient farming.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                At AGX Global, you'll work with cutting-edge technology, collaborate with 
                passionate professionals, and make a meaningful impact on global food security.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    const positionsSection = document.getElementById('positions-section');
                    positionsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg"
                >
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => {
                    const benefitsSection = document.getElementById('benefits-section');
                    benefitsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
                >
                  Learn About Benefits
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Countries</h3>
                  <p className="text-sm text-gray-600">Global presence</p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Remote OK</h3>
                  <p className="text-sm text-gray-600">Flexible work</p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">AI-First</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Technology</h3>
                  <p className="text-sm text-gray-600">Cutting-edge tech</p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">$4-8T</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Market Size</h3>
                  <p className="text-sm text-gray-600">Global agriculture</p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* No Current Openings */}
      <section id="positions-section" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Current Opportunities
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                No Current Openings
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                We don't have any open positions at the moment, but we're always looking for talented 
                individuals who share our passion for transforming agriculture through technology.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-dashed border-gray-300 bg-white">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Stay in Touch
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Even though we don't have current openings, we're always interested in connecting 
                    with talented professionals. Send us your resume and let us know how you'd like to 
                    contribute to our mission of revolutionizing agriculture.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-3"
                      onClick={() => window.open('mailto:careers@agxglobal.earth?subject=Future Opportunities - Resume Submission', '_blank')}
                    >
                      Send Your Resume
                      <Mail className="ml-2 h-4 w-4" />
                    </Button>
                    <Button 
                      variant="outline" 
                      className="border-gray-300 text-gray-600 hover:bg-gray-50 px-8 py-3"
                      onClick={() => window.open('https://www.linkedin.com/company/agx-global-earth', '_blank')}
                    >
                      Follow on LinkedIn
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <Code className="h-8 w-8 text-green-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Engineering</h4>
                  <p className="text-sm text-gray-600">AI/ML, Mobile, Web Development</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <Target className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Product & Design</h4>
                  <p className="text-sm text-gray-600">Product Management, UX/UI Design</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <Globe className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-800 mb-2">Business & Operations</h4>
                  <p className="text-sm text-gray-600">Sales, Marketing, Field Operations</p>
                </div>
              </div>
              <div className="text-center mt-8">
                <p className="text-gray-600">
                  <strong>Interested in any of these areas?</strong> We'd love to hear from you even if there's no current opening.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits-section" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
                Benefits & Perks
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment that helps 
                you grow both professionally and personally.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="p-3 bg-green-100 rounded-lg">
                        <benefit.icon className="h-6 w-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {benefit.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center text-sm text-gray-600">
                          <Shield className="h-3 w-3 text-green-500 mr-2" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>




      <Footer />
      <ScrollToTop />
    </motion.div>
  );
};

export default Careers;