import { motion } from "framer-motion";
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollReveal from "@/components/ScrollReveal";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  CheckCircle,
  ChevronDown,
  ChevronUp
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    subject: 'general'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '', subject: 'general' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const toggleFAQ = (index: number) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const offices = [
    {
      country: "Australia",
      city: "Melbourne",
      address: "6 Cradle Circuit, Manor Lakes, Melbourne, Australia",
      phone: "+61422868025",
      email: "australia@agxglobal.earth",
      flag: "🇦🇺"
    },
    {
      country: "India",
      city: "Bangalore",
      address: "Genesis Ecosphere, Neeladari Road, Electronic City, Phase 1, BLR, Karnataka",
      phone: "+919731806131",
      email: "india@agxglobal.earth",
      flag: "🇮🇳"
    },
    {
      country: "Spain",
      city: "Madrid",
      address: "Paseo de la Castellana 200, 28046 Madrid",
      phone: "+34689105996",
      email: "europe@agxglobal.earth",
      flag: "🇪🇸"
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
        className="pt-24 pb-16 px-6"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[500px]">
            {/* Left Side - Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-4"
              >
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  Contact Us
                </Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800">
                  Get in Touch
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Ready to transform your agricultural operations? Our team is here to help you 
                  get started with AGX Global's precision farming solutions.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-4"
              >
                <p className="text-lg text-gray-600">
                  We're committed to supporting farmers worldwide with innovative technology 
                  and personalized service. Reach out to us through any of the methods below.
                </p>
              </motion.div>
            </div>

            {/* Right Side - Contact Methods */}
            <div className="space-y-6">
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <Card className="border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">Email Support</h3>
                        <p className="text-gray-600 text-sm mb-2">Get in touch via email for detailed inquiries</p>
                        <p className="text-green-600 font-medium">support@agxglobal.earth</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

            </div>
          </div>
        </div>
      </motion.section>


      {/* Contact Form and Office Info */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <ScrollReveal>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                Ready to Connect?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Send us a message or visit one of our global offices
              </p>
            </motion.div>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-2 border-gray-100">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="company">Company/Organization</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company Name"
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="subject">Subject</Label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="demo">Request Demo</option>
                          <option value="pricing">Pricing Information</option>
                          <option value="support">Technical Support</option>
                          <option value="partnership">Partnership</option>
                        </select>
                      </div>
                      
                      <div>
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Tell us about your agricultural needs and how we can help..."
                        />
                      </div>
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-green-600 hover:bg-green-700 text-white" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </div>
                        )}
                      </Button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-8"
                    >
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        Message Sent Successfully!
                      </h3>
                      <p className="text-gray-600">
                        Thank you for reaching out. We'll get back to you within 24 hours.
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Office Information */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Our Global Offices
                </h3>
                <p className="text-gray-600 mb-4">
                  We operate across multiple continents to serve farmers worldwide
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <Card className="border-2 border-gray-100 hover:border-green-200 transition-all duration-300 h-full">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className="text-xl">{office.flag}</div>
                          <div className="flex-1">
                            <h4 className="text-base font-semibold text-gray-800 mb-2">
                              {office.country} - {office.city}
                            </h4>
                            <div className="space-y-1 text-xs text-gray-600">
                              <div className="flex items-center">
                                <MapPin className="h-3 w-3 mr-2 text-green-600" />
                                {office.address}
                              </div>
                              <div className="flex items-center">
                                <Phone className="h-3 w-3 mr-2 text-green-600" />
                                {office.phone}
                              </div>
                              <div className="flex items-center">
                                <Mail className="h-3 w-3 mr-2 text-green-600" />
                                {office.email}
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              
              <Card className="mt-4 border-2 border-gray-100">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-green-600" />
                    <div>
                      <h4 className="text-sm font-semibold mb-1 text-gray-800">Business Hours</h4>
                      <p className="text-xs text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM (Local Time)</p>
                      <p className="text-xs text-green-600">24/7 Support Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Quick answers to common questions about AGX Global
              </p>
            </motion.div>
          </ScrollReveal>
          
          <div className="space-y-4">
            {[
              {
                question: "What is Bhoomi?",
                answer: "Bhoomi is our comprehensive precision farming platform that combines AI-powered insights, automated irrigation, pest management, and analytics to help farmers optimize their operations."
              },
              {
                question: "Is Bhoomi available as a mobile app?",
                answer: "Yes, Bhoomi is available as a native mobile app with features like ERP, Smart Irrigation, Microclimate Intelligence, Smart Fertigation, AI Assistant, and Pest Management."
              },
              {
                question: "Where can I download the Bhoomi app?",
                answer: "The Bhoomi app is available for download on both Google Play Store and Apple App Store.",
                hasDownloadLinks: true
              },
              {
                question: "How much does AGX Global cost?",
                answer: "We use a SaaS-based pricing model with variable monthly fees based on your farm's usage and scale of operations. Contact us for personalized pricing based on your specific needs."
              },
              {
                question: "What makes AGX Global unique?",
                answer: "Our founding team has 35+ years of combined experience in digital technology and agriculture, including real farming experience on an 8-hectare automated farm."
              },
              {
                question: "Do you offer support for smallholder farmers?",
                answer: "Yes, we work with farms of all sizes, from smallholder farmers to large agricultural enterprises. Our platform is designed to be scalable and accessible."
              },
              {
                question: "What kind of results can I expect?",
                answer: "Our users typically see 20% yield increases, 25% water savings, and 15% cost reduction. Results vary based on farm size, crops, and current practices."
              },
              {
                question: "How quickly can I get started?",
                answer: "You can get started within 24 hours of signing up. Our team provides onboarding support and helps you set up your account."
              },
              {
                question: "Can I schedule a demo?",
                answer: "Absolutely! We offer personalized demos to show you exactly how our platform can benefit your specific farming operations."
              },
              {
                question: "Which countries do you operate in?",
                answer: "We're active across Australia, India, and Europe, with pilots in Africa."
              }
            ].map((faq, index) => (
              <ScrollReveal key={index}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Card className="border-2 border-gray-100 hover:border-green-200 transition-all duration-300">
                    <CardContent className="p-0">
                      <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                      >
                        <h3 className="text-lg font-semibold text-gray-800">
                          {faq.question}
                        </h3>
                        <div className="flex-shrink-0 ml-4">
                          {expandedFAQ === index ? (
                            <ChevronUp className="h-5 w-5 text-green-600" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          )}
                        </div>
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedFAQ === index ? 'auto' : 0,
                          opacity: expandedFAQ === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <p className="text-gray-600 whitespace-pre-line mb-4">
                            {faq.answer}
                          </p>
                          {faq.hasDownloadLinks && (
                            <div className="flex flex-col sm:flex-row gap-3 mt-4">
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
                          )}
                        </div>
                      </motion.div>
                    </CardContent>
                  </Card>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
      </motion.div>
    </>
  );
};

export default Contact;