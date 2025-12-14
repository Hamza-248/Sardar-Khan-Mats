import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Phone, MapPin, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-heading font-black text-2xl tracking-tighter text-white">
                SARDAR KHAN
              </span>
              <span className="font-heading font-bold text-xs tracking-[0.3em] text-brand-red -mt-1">
                MATS
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Serving our community with premium quality PVC flooring solutions for over 25 years. We combine traditional durability with modern aesthetics.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-brand-red transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-brand-red pl-3">
              QUICK LINKS
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/shop" className="hover:text-brand-red transition-colors">All Products</Link></li>
              <li><Link to="/category/Automotive" className="hover:text-brand-red transition-colors">Automotive Mats</Link></li>
              <li><Link to="/category/Industrial" className="hover:text-brand-red transition-colors">Industrial Flooring</Link></li>
              <li><Link to="/about" className="hover:text-brand-red transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-red transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
             <h3 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-brand-red pl-3">
              CONTACT US
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-red shrink-0 mt-0.5" />
                <span>Shop #12, Old Market Road,<br/>Saddar, Karachi.</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-red shrink-0" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-red shrink-0" />
                <span>info@sardarkhanmats.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-brand-red pl-3">
              OPENING HOURS
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14}/> Mon - Sat</span>
                <span>10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex items-center justify-between border-b border-gray-800 pb-2">
                <span className="flex items-center gap-2"><Clock size={14}/> Sunday</span>
                <span className="text-brand-red font-medium">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Sardar Khan Mats. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
