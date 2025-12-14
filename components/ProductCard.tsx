import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Truck } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="block h-full group">
      <div className="bg-white rounded-lg border border-gray-100 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col h-full relative cursor-pointer">
        {/* Image Container with Zoom Effect */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
          />
          
          {/* Top Left Badges: Category & Warranty */}
          <div className="absolute top-3 left-3 flex flex-col gap-2 items-start z-10">
            <span className="bg-brand-black/90 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm backdrop-blur-sm shadow-md">
              {product.category}
            </span>
            <span className="bg-brand-red/90 text-white text-[10px] font-bold px-2 py-1 rounded-sm flex items-center gap-1 backdrop-blur-sm shadow-md">
              <ShieldCheck size={10} strokeWidth={3} /> {product.warranty} Warranty
            </span>
          </div>

          {/* Bottom Right Badge: Fast Delivery */}
          <div className="absolute bottom-3 right-3 z-10">
             <span className="bg-green-600/90 text-white text-[10px] font-bold px-2 py-1 rounded-sm flex items-center gap-1 backdrop-blur-sm shadow-md">
                <Truck size={10} strokeWidth={3} /> Fast Delivery
             </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col flex-grow">
          <h3 className="font-heading font-bold text-gray-900 text-lg mb-2 line-clamp-2 group-hover:text-brand-red transition-colors">
            {product.name}
          </h3>
          
          {/* Rating Mockup */}
          <div className="flex items-center space-x-1 mb-3">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} fill={i < Math.floor(product.rating) ? "currentColor" : "none"} strokeWidth={2} />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>

          <p className="text-gray-500 text-sm line-clamp-2 mb-4 flex-grow">
            {product.shortDescription}
          </p>

          <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 font-medium uppercase">Price</span>
              <span className="font-heading font-bold text-xl text-brand-red">
                {product.isCustomPrice ? (
                  <span className="text-lg">Contact Us</span>
                ) : (
                  `Rs. ${product.price.toLocaleString()}`
                )}
              </span>
            </div>
            <div
              className="h-10 w-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 group-hover:bg-brand-red group-hover:text-white transition-all duration-300"
            >
              <ArrowRight size={18} />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;