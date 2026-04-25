import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showSignInPopup, setShowSignInPopup] = useState(false);
  
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Solutions", href: "/solutions" },
    { label: "AI for Nature", href: "/ai-for-nature" },
    { label: "Australia", href: "/australia" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-gray-900 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left - AGX Global Logo (pulled slightly left) */}
          <Link to="/" className="flex items-center -ml-2">
            <img 
              src="/logo.png" 
              alt="AGX Global Logo" 
              className="h-8 w-auto"
            />
          </Link>
          
          {/* Center - Navigation */}
          <div className="hidden md:flex items-center gap-6 flex-1 justify-center">
            {navItems.map((item) => (
              <Link 
                key={item.label}
                to={item.href}
                className={`font-medium text-sm transition-all duration-200 px-3 py-2 rounded-md ${
                  location.pathname === item.href
                    ? "text-green-400 bg-green-400/10"
                    : "text-gray-300 hover:text-green-400 hover:bg-green-400/5"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          
          {/* Right - Sign In only */}
          <div className="flex items-center gap-3">
            <Button 
              onClick={() => setShowSignInPopup(true)}
              className="hidden sm:inline-flex bg-green-600 hover:bg-green-700 text-white font-medium px-5"
            >
              Sign in
            </Button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden p-2 rounded-lg"
            >
              <Menu className="h-6 w-6 text-gray-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu - Rendered in document body */}
      {isMobileMenuOpen && createPortal(
        <MobileMenu 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
          onSignInClick={() => setShowSignInPopup(true)}
        />,
        document.body
      )}
      
      {/* Sign In Popup - Rendered in document body */}
      {showSignInPopup && createPortal(
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSignInPopup(false)}
            className="fixed inset-0 bg-black/60 z-[1000] flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-xl p-8 max-w-md w-full mx-4 relative shadow-2xl my-8"
            >
              <button
                onClick={() => setShowSignInPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full p-1 transition-colors z-10"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="text-center">
                <div className="flex items-center justify-center mx-auto mb-4">
                  <img 
                    src="/bhoomi.png" 
                    alt="Bhoomi Logo" 
                    className="h-16 w-auto"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Coming Soon!</h2>
                <p className="text-gray-600 mb-6">
                  We're working hard to bring you the web version of Bhoomi. 
                  For now, download our mobile app to get started with precision farming.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </nav>
  );
};

export default Navigation;