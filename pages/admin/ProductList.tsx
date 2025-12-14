import React from 'react';
import { Link } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const ProductList: React.FC = () => {
  const { products, deleteProduct } = useStore();
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      deleteProduct(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="font-heading font-bold text-2xl text-gray-900">Products</h2>
        <Link 
          to="/admin/products/new" 
          className="bg-brand-red text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-red-700 transition-colors"
        >
          <Plus size={20} /> Add Product
        </Link>
      </div>

      <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..." 
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:border-brand-red focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 text-sm font-bold text-gray-700">Image</th>
                <th className="p-4 text-sm font-bold text-gray-700">Name</th>
                <th className="p-4 text-sm font-bold text-gray-700">Category</th>
                <th className="p-4 text-sm font-bold text-gray-700">Price</th>
                <th className="p-4 text-sm font-bold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4">
                    <img src={product.image} alt="" className="w-12 h-12 object-cover rounded bg-gray-100" />
                  </td>
                  <td className="p-4 font-medium text-gray-900">{product.name}</td>
                  <td className="p-4">
                    <span className="px-2 py-1 text-xs font-bold bg-gray-100 text-gray-600 rounded-full uppercase">
                      {product.category}
                    </span>
                  </td>
                  <td className="p-4 text-gray-900">
                    {product.isCustomPrice ? 'Custom' : `Rs. ${product.price.toLocaleString()}`}
                  </td>
                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link 
                        to={`/admin/products/edit/${product.id}`} 
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </Link>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (
                <tr>
                  <td colSpan={5} className="p-8 text-center text-gray-500">
                    No products found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
