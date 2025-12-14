import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Phone } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartCount } = useCart();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      {/* Top Bar - Contact Info (Traditional Trust Element) */}
      <div className="bg-brand-black text-white py-1 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p className="font-medium tracking-wide">TRUSTED SINCE 1998</p>
          <div className="flex items-center gap-2">
            <Phone size={14} className="text-brand-red" />
            <span>+92 300 1234567</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col shrink-0 group">
            <span className="font-heading font-black text-2xl md:text-3xl tracking-tighter text-brand-black group-hover:text-brand-red transition-colors">
              SARDAR KHAN
            </span>
            <span className="font-heading font-bold text-xs md:text-sm tracking-[0.3em] text-brand-red -mt-1 group-hover:text-brand-black transition-colors">
              MATS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? 'text-brand-red'
                    : 'text-gray-700 hover:text-brand-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-600 hover:text-brand-red transition-colors">
              <Search size={22} />
            </button>
            <Link to="/cart" className="relative text-gray-600 hover:text-brand-red transition-colors">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
             <Link to="/cart" className="relative text-gray-600">
              <ShoppingCart size={22} />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-brand-red text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-brand-red transition-colors"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg animate-in slide-in-from-top-5 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-medium ${
                   location.pathname === link.path
                    ? 'bg-red-50 text-brand-red'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-brand-red'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-3">
               <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Search products..." 
                    className="w-full border border-gray-300 rounded px-4 py-2 text-sm focus:outline-none focus:border-brand-red"
                  />
                  <Search size={16} className="absolute right-3 top-2.5 text-gray-400"/>
               </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
