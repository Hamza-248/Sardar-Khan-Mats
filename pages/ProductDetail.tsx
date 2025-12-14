import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useStore } from '../context/StoreContext';
import { Star, ShieldCheck, Truck, Phone, ChevronRight, ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { products } = useStore();
  
  const product = products.find(p => p.id === id);
  const [activeImage, setActiveImage] = useState(product?.image);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product Not Found</h2>
          <Link to="/shop" className="text-brand-red hover:underline mt-4 block">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleOrderNow = () => {
    addToCart(product);
    navigate('/checkout');
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-brand-red">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/category/${product.category}`} className="hover:text-brand-red">{product.category}</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-gray-900 font-medium">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden border border-gray-200 group">
              <img 
                src={activeImage || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out cursor-zoom-in"
              />
            </div>
            {/* Thumbnail Mockup */}
            <div className="grid grid-cols-4 gap-4">
               {[product.image, product.image, product.image].map((img, idx) => (
                 <button 
                  key={idx} 
                  onClick={() => setActiveImage(img)}
                  className={`aspect-square rounded-md overflow-hidden border-2 ${activeImage === img ? 'border-brand-red' : 'border-transparent hover:border-gray-300'}`}
                 >
                   <img src={img} className="w-full h-full object-cover" alt="thumbnail"/>
                 </button>
               ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="flex gap-2 mb-4">
               <span className="text-brand-red font-bold tracking-widest text-xs uppercase bg-red-50 px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-green-700 font-bold tracking-widest text-xs uppercase bg-green-50 px-3 py-1 rounded-full flex items-center gap-1">
                <Truck size={12}/> In Stock
              </span>
            </div>
           
            <h1 className="font-heading font-black text-3xl md:text-4xl text-gray-900 mt-2 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex text-yellow-400 text-sm">
                {[...Array(5)].map((_, i) => (
                   <Star key={i} size={16} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-sm text-gray-500 underline cursor-pointer">{product.reviewCount} Reviews</span>
            </div>

            <div className="mb-8">
               <p className="text-3xl font-bold text-brand-red">
                 {product.isCustomPrice ? 'Contact for Price' : `Rs. ${product.price.toLocaleString()}`}
               </p>
               {product.isCustomPrice && <p className="text-sm text-gray-500 mt-1">Custom sizing available</p>}
            </div>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.fullDescription}
            </p>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                onClick={handleOrderNow}
                className="flex-1 bg-brand-red text-white py-4 px-6 rounded font-bold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg shadow-red-100 flex items-center justify-center gap-2"
              >
                <Truck size={20}/> Order Now
              </button>
              <button 
                onClick={handleAddToCart}
                className="flex-1 border-2 border-gray-200 text-gray-900 py-4 px-6 rounded font-bold uppercase tracking-wide hover:border-brand-black hover:bg-brand-black hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <ShoppingCart size={20}/> Add to Cart
              </button>
            </div>
             
             {/* WhatsApp Button */}
             <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="block w-full text-center text-sm text-green-600 font-bold hover:underline mb-8">
               <Phone size={14} className="inline mr-1"/> Need help? Chat on WhatsApp
             </a>

            {/* Trust Badges - Delivery Specifics */}
            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-gray-100">
               <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                 <ShieldCheck className="text-brand-red shrink-0 mt-1" size={24} />
                 <div>
                   <h4 className="font-bold text-sm text-gray-900">Warranty Protection</h4>
                   <p className="text-sm text-gray-500">Includes {product.warranty} official shop warranty against manufacturing defects.</p>
                 </div>
               </div>
               
               <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                 <Truck className="text-brand-red shrink-0 mt-1" size={24} />
                 <div>
                   <h4 className="font-bold text-sm text-gray-900">Delivery Information</h4>
                   <div className="mt-1 space-y-1">
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span> 
                        <span className="font-semibold">Lahore:</span> Same Day Delivery
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                        <span className="font-semibold">Nationwide:</span> 2-3 Working Days
                      </p>
                   </div>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Technical Specs Tab Mockup */}
        <div className="bg-gray-50 rounded-lg p-8">
          <h3 className="font-heading font-bold text-2xl mb-6">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
             {Object.entries(product.specs).map(([key, value]) => (
               <div key={key} className="flex justify-between py-3 border-b border-gray-200">
                 <span className="font-medium text-gray-600">{key}</span>
                 <span className="font-bold text-gray-900">{value}</span>
               </div>
             ))}
          </div>
        </div>
        
        {/* Placeholder for Google Reviews */}
        <div className="mt-16 text-center py-12 border-2 border-dashed border-gray-200 rounded-lg bg-gray-50/50">
          <div className="flex justify-center mb-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Google Reviews</h3>
          <p className="text-gray-500 font-medium">See what our customers are saying on Google Maps.</p>
          <a href="#" className="inline-block mt-4 text-brand-red font-bold hover:underline">View All Reviews on Google</a>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
