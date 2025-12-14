import React from 'react';
import { Phone, MapPin, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
           <h1 className="font-heading font-black text-4xl mb-4">GET IN TOUCH</h1>
           <p className="text-gray-600">Visit our shop or send us a message for custom orders.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
             <h2 className="font-heading font-bold text-2xl mb-8">Contact Information</h2>
             <div className="space-y-8">
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center shrink-0">
                   <MapPin size={24}/>
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Visit Us</h3>
                   <p className="text-gray-500">Shop #12, Old Market Road, Saddar, Karachi, Pakistan.</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center shrink-0">
                   <Phone size={24}/>
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Call Us</h3>
                   <p className="text-gray-500">+92 300 1234567</p>
                   <p className="text-gray-500">+92 21 34567890</p>
                 </div>
               </div>

                <div className="flex items-start space-x-4">
                 <div className="w-12 h-12 bg-red-50 text-brand-red rounded-full flex items-center justify-center shrink-0">
                   <Mail size={24}/>
                 </div>
                 <div>
                   <h3 className="font-bold text-lg">Email Us</h3>
                   <p className="text-gray-500">info@sardarpvcmats.com</p>
                 </div>
               </div>
             </div>
          </div>

          {/* Form Skeleton */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h2 className="font-heading font-bold text-2xl mb-8">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-brand-red focus:outline-none"/>
                </div>
                 <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                  <input type="text" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-brand-red focus:outline-none"/>
                </div>
              </div>
              <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input type="email" className="w-full border border-gray-300 rounded px-4 py-2 focus:border-brand-red focus:outline-none"/>
              </div>
               <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea rows={4} className="w-full border border-gray-300 rounded px-4 py-2 focus:border-brand-red focus:outline-none"></textarea>
              </div>
              <button className="w-full bg-brand-black text-white font-bold uppercase py-3 rounded hover:bg-gray-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
