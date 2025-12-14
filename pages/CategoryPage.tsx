import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useStore } from '../context/StoreContext';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName: string }>();
  const { products } = useStore();
  
  // Filter products based on URL parameter
  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === categoryName?.toLowerCase()
  );

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Header */}
        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row justify-between items-center">
          <div>
            <span className="text-brand-red font-bold text-sm tracking-widest uppercase mb-1 block">Category</span>
            <h1 className="font-heading font-black text-4xl text-gray-900 uppercase">
              {categoryName} MATS
            </h1>
          </div>
          <div className="mt-4 md:mt-0 text-right">
             <span className="text-gray-500 font-medium">Showing {filteredProducts.length} results</span>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h3 className="text-xl font-bold text-gray-400">No products found in this category.</h3>
            <p className="text-gray-400">Please try another category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
