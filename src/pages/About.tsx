import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  MapPin,
  Calendar,
  TrendingUp,
  Globe,
  Leaf,
  ArrowRight,
  Linkedin
} from "lucide-react";

const About = () => {
  const founders = [
    {
      name: "Dinesh Sahu",
      role: "Business Partner",
      image: "/dinesh.png",
      experience: "18+ years experience leading digital transformation across ANZ, APAC, MEA",
      background: "Ex-entrepreneur and Agripreneur",
      expertise: ["Digital Transformation", "Sales Strategy", "Agricultural Operations", "Global Markets"],
      previousExperience: ["IBM", "Wipro", "OnMobile"],
      linkedin: "https://www.linkedin.com/in/dinesh-sahu-863a5718/"
    },
    {
      name: "Ankur Gupta", 
      role: "Business Partner",
      image: "/ankur.png",
      experience: "18+ years experience launching and expanding global digital products across APAC and EMEA",
      background: "Ex-founder and angel investor",
      expertise: ["Product Development", "Technology Architecture", "AI/ML Implementation", "Startup Scaling"],
      previousExperience: ["INSEAD", "Wipro", "OnMobile"],
      linkedin: "https://www.linkedin.com/in/ankurashokg/"
    }
  ];

  const combinedProfile = {
    totalExperience: "35+ years of combined operating experience in digital, technology & business leadership",
    businessModels: "Experience spanning product, tech, sales & marketing across SaaS, B2C, B2B, B2B2C business models",
    agricultureRoots: "Agriculture ecosystem roots - farming and wholesale production selling",
    realFarmingExperience: "Real farming experience - lived the life of farmers and ran an 8-hectare farm, automating most processes over 5+ years",
    globalNetwork: "Global network - lived in more than 20 countries and worked in over 50",
  };

  const milestones = [
    {
      year: "2019",
      title: "Foundation & Pilot Farm",
      description: "Established 8-hectare pilot farm with tech automation. Lived the life of farmers to understand real pain points.",
      icon: Calendar,
      color: "from-green-500 to-emerald-600"
    },
    {
      year: "2022–23",
      title: "MVP Launch",
      description: "Bhoomi 1.0 launched in 3 Indian states. First 5,000 man-days digitised, 5-star app store rating achieved.",
      icon: TrendingUp,
      color: "from-blue-500 to-cyan-600"
    },
    {
      year: "2024",
      title: "Global Expansion",
      description: "Bhoomi 2.0 launched across India, Africa & Australia. 4 AI agents deployed. IoT hardware integration completed.",
      icon: Globe,
      color: "from-teal-500 to-cyan-600"
    },
    {
      year: "2026",
      title: "Australia Market Entry & Scale",
      description: "Entering the Australian market with early pilot farms already active in Victoria. Actively seeking additional farm partnerships, AgTech distribution partners, and investors to grow Bhoomi's presence across key Australian growing regions.",
      icon: Award,
      color: "from-teal-500 to-green-600"
    },
  ];


  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting eco-friendly farming practices that protect our planet for future generations"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Delivering precise, data-driven solutions that maximize efficiency and minimize waste"
    },
    {
      icon: Users,
      title: "Farmer-First",
      description: "Putting farmers at the center of everything we do, creating solutions that truly serve their needs"
    },
    {
      icon: Award,
      title: "Innovation",
      description: "Continuously pushing the boundaries of agricultural technology to solve real-world challenges"
    }
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
      
      {/* Hero Section */}
      <motion.section 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="pt-32 pb-20 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight mt-8">
                <span className="bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
                  <span className="text-teal-700 font-black">X</span>celerating Agriculture's Future
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                At the intersection of agriculture, environment, and technology, we're democratizing 
                precision farming for growers globally with AI-powered solutions.
              </p>
              <p className="text-lg text-gray-500 mb-8 leading-relaxed">
                From smallholder farmers to large agricultural enterprises, our comprehensive platform 
                transforms traditional farming practices through data-driven insights, automated systems, 
                and intelligent recommendations that maximize yield while minimizing environmental impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button 
                  onClick={() => {
                    const journeySection = document.getElementById('journey-section');
                    const offset = journeySection?.offsetTop ? journeySection.offsetTop - 80 : 0;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }}
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3"
                >
                  Our Journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button 
                  onClick={() => {
                    const foundersSection = document.getElementById('founders-section');
                    const offset = foundersSection?.offsetTop ? foundersSection.offsetTop - 80 : 0;
                    window.scrollTo({ top: offset, behavior: 'smooth' });
                  }}
                  variant="outline" 
                  className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3"
                >
                  Meet the Founders
                </Button>
              </div>

            </div>
            
            {/* Right Side - All Stats in 2x2 Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">10+</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Countries Reached</h3>
                  <p className="text-sm text-gray-600">Global presence</p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">15</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Crops Tested</h3>
                  <p className="text-sm text-gray-600">Diverse crop varieties</p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">25,000+</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Man-days Digitised</h3>
                  <p className="text-sm text-gray-600">Operational farm data</p>
                </motion.div>
                
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="text-3xl font-bold text-green-600 mb-2">40–50%</div>
                  <h3 className="font-semibold text-gray-800 mb-1">Yield Increase</h3>
                  <p className="text-sm text-gray-600">On AI-guided pilot farms</p>
                </motion.div>
              </div>
              
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-green-400/5 to-teal-400/5 rounded-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Agriculture is 12,000 years old – the foundation of civilization. With $4-8 trillion 
                in global trade and GDP contribution, yet only 12% digital transformation compared 
                to 35% average across other industries, we see immense opportunity.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're bridging this gap by bringing cutting-edge technology to farmers worldwide, 
                making precision farming accessible, affordable, and effective for operations of all sizes.
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl opacity-10"></div>
              <div className="relative p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">12,000</div>
                    <div className="text-sm text-gray-600">Years of Agriculture</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">$4-8T</div>
                    <div className="text-sm text-gray-600">Global Trade Value</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">12%</div>
                    <div className="text-sm text-gray-600">Digital Transformation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">35%</div>
                    <div className="text-sm text-gray-600">Industry Average</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders-section" className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Meet Our Founders
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {combinedProfile.totalExperience}
            </p>
          </motion.div>
          
          {/* Founders Cards */}
          <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ x: index === 0 ? -50 : 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="h-full border-2 border-gray-200 hover:border-green-300 transition-all duration-300 hover:shadow-xl bg-white rounded-2xl overflow-hidden">
                  <CardContent className="p-6">
                    {/* Top Section: Image and Basic Info */}
                    <div className="flex items-start space-x-6 mb-6">
                      {/* Left: Square Image */}
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 overflow-hidden rounded-lg">
                          <img 
                            src={founder.image} 
                            alt={founder.name}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: 'center top' }}
                          />
                        </div>
                      </div>
                      
                      {/* Right: Name, Designation, LinkedIn */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-1">{founder.name}</h3>
                            <p className="text-green-600 font-semibold mb-2">{founder.role}</p>
                          </div>
                          <a
                            href={founder.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200 flex-shrink-0"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom Section: Details */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                        <p className="text-gray-600 text-sm">{founder.experience}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Background</h4>
                        <p className="text-gray-600 text-sm">{founder.background}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Previous Companies</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.previousExperience.map((company, companyIndex) => (
                            <Badge key={companyIndex} variant="outline" className="text-blue-600 border-blue-200 hover:bg-blue-50">
                              {company}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Combined Profile Section */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-12"
          >
            <Card className="bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Combined Leadership Profile</h3>
                  <p className="text-green-600 font-semibold">
                    {combinedProfile.totalExperience}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Business Models Expertise</h4>
                      <p className="text-gray-600 text-sm">{combinedProfile.businessModels}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Agricultural Roots</h4>
                      <p className="text-gray-600 text-sm">{combinedProfile.agricultureRoots}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Real Farming Experience</h4>
                      <p className="text-gray-600 text-sm">{combinedProfile.realFarmingExperience}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Global Network</h4>
                      <p className="text-gray-600 text-sm">{combinedProfile.globalNetwork}</p>
                    </div>
                    <div className="pt-4">
                      <div className="text-center">
                        <div className="bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold">
                          The Right to PLAY and WIN!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section id="journey-section" className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From pilot farm to global expansion, tracking our path of innovation and growth
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 via-teal-500 to-green-600 shadow-sm"></div>
            
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-6' : 'pl-6'}`}>
                    <div className={`bg-white p-5 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <div className={`flex items-center gap-3 mb-3 ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                        <Badge className="bg-green-100 text-green-800 text-sm font-semibold">{milestone.year}</Badge>
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${milestone.color} shadow-sm`}>
                          <milestone.icon className="h-4 w-4 text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-800 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Enhanced Timeline Node */}
                  <div className="w-2/12 flex justify-center">
                    <div className="relative">
                      <div className="w-6 h-6 bg-white rounded-full border-4 border-green-500 shadow-lg z-10 relative">
                        <div className="absolute inset-1 bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our mission to transform agriculture
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center"
              >
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Precision Farming Revolution Section */}
      <motion.section 
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="py-20 px-6 bg-gradient-to-r from-green-600 to-teal-600"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Join the Precision Farming Revolution
          </h2>
          <p className="text-lg text-green-100 mb-8">
            Download the Bhoomi app today and start transforming your farm with AI-powered insights and precision agriculture tools.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://play.google.com/store/apps/details?id=com.agrowex.bhoomi&hl=en_IN"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                alt="Get it on Google Play"
                className="h-16 w-44 object-contain"
              />
            </a>
            <a
              href="https://apps.apple.com/in/app/bhoomi-earth/id6467924283"
              target="_blank"
              rel="noopener noreferrer"
              className="w-48 h-16 flex items-center justify-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                className="h-12 w-44 object-contain"
              />
            </a>
          </div>
        </div>
      </motion.section>

      <Footer />
      <ScrollToTop />
      </motion.div>
    </>
  );
};

export default About;