import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowRight } from 'lucide-react';

const Cart: React.FC = () => {
  const { cart, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-20 flex flex-col items-center justify-center">
        <h2 className="font-heading font-bold text-3xl mb-4 text-gray-900">Your Cart is Empty</h2>
        <p className="text-gray-500 mb-8">Looks like you haven't added any mats yet.</p>
        <Link 
          to="/shop" 
          className="bg-brand-red text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-red-700 transition-colors"
        >
          Browse Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-heading font-black text-3xl mb-8">SHOPPING CART</h1>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="flex-grow space-y-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col sm:flex-row gap-6 p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden shrink-0">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg text-gray-900">{item.name}</h3>
                      <p className="text-sm text-brand-red font-medium">{item.category}</p>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={20} />
                    </button>
                  </div>
                  <div className="mt-4 flex justify-between items-end">
                    <div className="text-sm text-gray-500">
                      Quantity: <span className="font-bold text-gray-900">{item.quantity}</span>
                    </div>
                    <div className="text-lg font-bold">
                       {item.isCustomPrice ? 'Contact' : `Rs. ${(item.price * item.quantity).toLocaleString()}`}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 sticky top-24">
              <h3 className="font-heading font-bold text-xl mb-6">Order Summary</h3>
              <div className="space-y-4 mb-6 border-b border-gray-200 pb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>Rs. {cartTotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="text-green-600 font-medium">Calculated at Checkout</span>
                </div>
              </div>
              <div className="flex justify-between text-xl font-bold text-gray-900 mb-8">
                <span>Total</span>
                <span>Rs. {cartTotal.toLocaleString()}</span>
              </div>
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-brand-black text-white py-4 rounded font-bold uppercase tracking-wide hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
              >
                Proceed to Checkout <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
