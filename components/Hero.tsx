import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1600712242805-5f78671d2434?q=80&w=2574&auto=format&fit=crop", // Automotive Interior
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop", // Industrial Factory
  "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2684&auto=format&fit=crop"  // Home Interior
];

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % BACKGROUND_IMAGES.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[600px] w-full bg-brand-black overflow-hidden group">
      {/* Background Images with Fade Transition */}
      {BACKGROUND_IMAGES.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 z-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-40' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${img}')` }}
        />
      ))}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-brand-black via-brand-black/80 to-transparent" />

      {/* Content */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl animate-in slide-in-from-left duration-700 fade-in">
          <div className="inline-flex items-center space-x-2 bg-brand-red/10 border border-brand-red/20 text-brand-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            <span className="w-2 h-2 bg-brand-red rounded-full animate-pulse"></span>
            <span>Premium PVC Flooring</span>
          </div>
          
          <h1 className="font-heading font-black text-5xl md:text-7xl text-white leading-tight mb-6">
            25 YEARS OF <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-red-500">
              TRUST
            </span>
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            Transforming spaces with durable, high-quality PVC mats for your car, home, industry, and office. Experience the Sardar Khan difference today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/shop"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-red text-white font-bold uppercase tracking-wider rounded hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-900/20 group"
            >
              Shop Now
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-bold uppercase tracking-wider rounded hover:bg-white hover:text-brand-black transition-all duration-300"
            >
              Custom Order
            </Link>
          </div>
        </div>
      </div>
      
      {/* Stats/Features Banner Bottom */}
      <div className="absolute bottom-0 left-0 w-full bg-white/5 backdrop-blur-md border-t border-white/10 z-20 py-6 hidden md:block">
         <div className="max-w-7xl mx-auto px-6 grid grid-cols-4 gap-8 text-white">
            <div className="text-center border-r border-white/10">
               <span className="block font-heading font-bold text-2xl">25+</span>
               <span className="text-xs uppercase text-gray-400 tracking-wider">Years Experience</span>
            </div>
            <div className="text-center border-r border-white/10">
               <span className="block font-heading font-bold text-2xl">500+</span>
               <span className="text-xs uppercase text-gray-400 tracking-wider">Products</span>
            </div>
             <div className="text-center border-r border-white/10">
               <span className="block font-heading font-bold text-2xl">10k+</span>
               <span className="text-xs uppercase text-gray-400 tracking-wider">Happy Customers</span>
            </div>
             <div className="text-center">
               <span className="block font-heading font-bold text-2xl">100%</span>
               <span className="text-xs uppercase text-gray-400 tracking-wider">Quality Guarantee</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Hero;
