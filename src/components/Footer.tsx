import { Link } from "react-router-dom";
import { Smartphone, Mail, Phone, MapPin, Play, Apple, Globe, ExternalLink } from "lucide-react";

const handleSolutionClick = (solutionId: string) => {
  // Check if we're already on the solutions page
  if (window.location.pathname === '/solutions') {
    // Just update the hash
    window.location.hash = solutionId;
  } else {
    // Navigate to solutions page with hash
    window.location.href = `/solutions#${solutionId}`;
  }
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="AGX Global Logo" 
                className="h-8 w-auto"
              />
            </div>
            <p className="text-gray-300 text-sm">
              Democratizing precision farming for growers globally through AI-powered insights and automation.
            </p>
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@agxglobal.earth</span>
              </div>
              <div className="flex items-start space-x-2">
                <Globe className="h-4 w-4 mt-0.5" />
                <span>Operating in 10+ countries and available worldwide</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><button onClick={() => handleSolutionClick('bhoomi-ai')} className="hover:text-white transition-colors text-left">Bhoomi AI</button></li>
              <li><button onClick={() => handleSolutionClick('protect')} className="hover:text-white transition-colors text-left">Bhoomi Protect</button></li>
              <li><button onClick={() => handleSolutionClick('smart-manager')} className="hover:text-white transition-colors text-left">Smart Manager</button></li>
              <li><button onClick={() => handleSolutionClick('local')} className="hover:text-white transition-colors text-left">Bhoomi Local</button></li>
              <li><button onClick={() => handleSolutionClick('optimize')} className="hover:text-white transition-colors text-left">Bhoomi Optimize</button></li>
              <li><button onClick={() => handleSolutionClick('ground-d')} className="hover:text-white transition-colors text-left">Bhoomi Ground-0</button></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><a href="mailto:support@agxglobal.earth?subject=Press%20%26%20Media%20Inquiry" className="hover:text-white transition-colors">Press & Media</a></li>
            </ul>
          </div>

          {/* Download App */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Download Bhoomi App</h3>
            <div className="space-y-3">
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
            
            <div className="pt-4 space-y-2">
              <div className="text-sm text-gray-300">
                <Smartphone className="inline h-4 w-4 mr-1" />
                10K+ Downloads
              </div>
              <div className="text-sm text-gray-300">
                ⭐ 4.8 Average Rating
              </div>
            </div>
          </div>
        </div>


        {/* Social Media & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              <a
                href="https://www.agxglobal.earth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AGX Global website"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
              <Link
                to="/contact"
                aria-label="Contact AGX Global"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
              </Link>
              <Link
                to="/for-investors"
                aria-label="AGX Global for investors"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="h-5 w-5" />
              </Link>
            </div>
            
            <div className="text-center text-sm text-gray-400">
              <div>
                &copy; 2024 AGX Global. All rights reserved. | 
                <Link to="/privacy-policy" className="hover:text-white transition-colors ml-1">Privacy Policy</Link> | 
                <Link to="/terms-conditions" className="hover:text-white transition-colors ml-1">Terms & Conditions</Link>
                {import.meta.env.DEV && (
                  <>
                    {" "}| <a href="/pitch.html" className="hover:text-green-400 transition-colors ml-1 opacity-50">Partner Pitch ↗</a>
                    {" "}| <a href="/intro.html" className="hover:text-green-400 transition-colors ml-1 opacity-50">Intro Deck ↗</a>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;