import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="font-heading font-black text-4xl mb-6">ABOUT SARDAR KHAN MATS</h1>
        <p className="text-xl text-gray-500 mb-12">Building trust since 1998.</p>
        
        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center mb-12">
           <span className="text-gray-400">Shop Interior / Team Photo Placeholder</span>
        </div>

        <div className="text-left space-y-6 text-gray-700 leading-relaxed">
           <p>
             Welcome to Sardar Khan Mats. For over 25 years, we have been a cornerstone of the local community, providing high-quality flooring solutions for homes, businesses, and vehicles.
           </p>
           <p>
             What started as a small shop has grown into a trusted name known for durability, honesty, and expert advice. We don't just sell mats; we provide solutions that protect your floors and enhance your spaces.
           </p>
        </div>
      </div>
    </div>
  );
};

export default About;
