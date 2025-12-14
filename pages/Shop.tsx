import React from 'react';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

const Shop: React.FC = () => {
  const { products } = useStore();
  
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10 text-center">
          <h1 className="font-heading font-black text-4xl text-gray-900 mb-4">ALL PRODUCTS</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Browse our complete collection of high-quality PVC mats suitable for every need.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
