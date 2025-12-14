import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useStore } from '../context/StoreContext';
import { ShieldCheck, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, cartTotal, clearCart } = useCart();
  const { addOrder } = useStore();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create and save the order
    addOrder({
      customerName: formData.name,
      phone: formData.phone,
      email: formData.email,
      address: formData.address,
      items: cart,
      total: cartTotal,
    });

    setIsSubmitted(true);
    clearCart();
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20 px-4">
        <div className="bg-white p-8 md:p-12 rounded-lg shadow-xl max-w-lg w-full text-center border-t-4 border-brand-red">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} className="text-green-600" />
          </div>
          <h2 className="font-heading font-black text-3xl mb-4 text-gray-900">Order Received!</h2>
          <p className="text-gray-600 mb-8">
            Thank you for choosing Sardar Khan Mats. We have received your details. Our team will contact you shortly to confirm your order and arrange delivery.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-brand-black text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
         <p>Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Checkout Form */}
          <div>
             <h1 className="font-heading font-black text-3xl mb-8">CHECKOUT</h1>
             <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
                <h3 className="font-bold text-xl mb-6 pb-2 border-b border-gray-100">Contact Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" 
                      placeholder="Enter your full name" 
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        name="phone" 
                        value={formData.phone} 
                        onChange={handleChange} 
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" 
                        placeholder="0300 1234567" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email (Optional)</label>
                      <input 
                        type="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        className="w-full border border-gray-300 rounded px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" 
                        placeholder="you@example.com" 
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Shipping Address</label>
                    <textarea 
                      required 
                      rows={3} 
                      name="address" 
                      value={formData.address} 
                      onChange={handleChange} 
                      className="w-full border border-gray-300 rounded px-4 py-3 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red" 
                      placeholder="House #, Street, City, etc."
                    ></textarea>
                  </div>
                </div>

                {/* Important Message Box */}
                <div className="mt-8 bg-blue-50 border border-blue-100 p-6 rounded-lg">
                   <h4 className="font-heading font-bold text-brand-black mb-2 flex items-center gap-2">
                     <ShieldCheck size={20} className="text-brand-red" />
                     Payment & Confirmation Process
                   </h4>
                   <p className="text-sm text-gray-700 leading-relaxed">
                     Submit your details and we will contact you shortly to confirm your order. You can pay via <strong>Cash on Delivery (COD)</strong> or <strong>Digital Transfer</strong> upon product delivery.
                   </p>
                </div>

                <button type="submit" className="w-full mt-8 bg-brand-red text-white py-4 rounded font-bold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg shadow-red-100">
                  Place Order
                </button>
             </form>
          </div>

          {/* Order Preview */}
          <div className="lg:pl-8">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-heading font-bold text-xl mb-6">Your Order</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 border-b border-gray-100 pb-4">
                    <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-medium text-gray-900 text-sm line-clamp-2">{item.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                        <span className="font-bold text-sm">
                           {item.isCustomPrice ? 'Contact' : `Rs. ${(item.price * item.quantity).toLocaleString()}`}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
                 <div className="flex justify-between text-gray-600">
                   <span>Subtotal</span>
                   <span>Rs. {cartTotal.toLocaleString()}</span>
                 </div>
                 <div className="flex justify-between text-gray-600">
                   <span>Delivery</span>
                   <span className="text-xs bg-gray-100 px-2 py-1 rounded">Calculated after confirmation</span>
                 </div>
                 <div className="flex justify-between text-xl font-bold text-gray-900 pt-4">
                   <span>Total</span>
                   <span>Rs. {cartTotal.toLocaleString()}</span>
                 </div>
              </div>

               <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                  <Truck size={14} /> Secure Delivery Guaranteed
               </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Checkout;
