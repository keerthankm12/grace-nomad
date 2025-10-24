import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

interface NewFooterProps {
  onNavigate: (page: string) => void;
}

export const NewFooter = ({ onNavigate }: NewFooterProps) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <footer className="bg-gray-800 text-white pt-12 pb-6">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-bold mb-4">GRACE DESTINY</h3>
              <p className="text-gray-300 mb-4 text-sm">Your trusted travel partner for unforgettable journeys around the world.</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-start gap-2">
                  <MapPin size={16} className="mt-1 flex-shrink-0" />
                  <span className="text-gray-300">#A/75, 38th Cross, 4th T Block, Jayanagar, Bangalore 560 041, Karnataka, India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span className="text-gray-300">+91 98450 72277</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span className="text-gray-300">info@gracedestiny.in</span>
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:text-[#EF4444] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-[#EF4444] transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="hover:text-[#EF4444] transition-colors">
                  <Twitter size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <button onClick={() => onNavigate('destinations')} className="text-gray-300 hover:text-[#EF4444] transition-colors">
                    Destinations
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('about')} className="text-gray-300 hover:text-[#EF4444] transition-colors">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('gallery')} className="text-gray-300 hover:text-[#EF4444] transition-colors">
                    Gallery
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('blogs')} className="text-gray-300 hover:text-[#EF4444] transition-colors">
                    Blogs
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('contact')} className="text-gray-300 hover:text-[#EF4444] transition-colors">
                    Contact Us
                  </button>
                </li>
                <li>
                  <button onClick={() => onNavigate('destinations')} className="text-gray-300 hover:text-[#EF4444] transition-colors">
                    View All Tours
                  </button>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">Get the best deals and travel inspiration delivered to your inbox!</p>
              <form className="flex flex-col gap-2">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#EF4444]"
                />
                <button 
                  type="submit"
                  className="bg-[#EF4444] hover:bg-[#DC2626] px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-blue-900 py-4 mt-8">
          <div className="container mx-auto px-4 text-center text-sm text-gray-300">
            Copyright © 2023. All Rights Reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};
