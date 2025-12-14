import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { Category, Product } from '../../types';
import { ArrowLeft, Plus, Trash2 } from 'lucide-react';

const ProductForm: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { products, addProduct, updateProduct } = useStore();
  const isEditMode = !!id;

  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    category: Category.AUTOMOTIVE,
    price: 0,
    isCustomPrice: false,
    image: '',
    shortDescription: '',
    fullDescription: '',
    warranty: '1 Year',
    specs: {}
  });

  const [specsList, setSpecsList] = useState<{ key: string; value: string }[]>([]);

  useEffect(() => {
    if (isEditMode && id) {
      const product = products.find(p => p.id === id);
      if (product) {
        setFormData(product);
        setSpecsList(Object.entries(product.specs).map(([key, value]) => ({ key, value })));
      }
    }
  }, [isEditMode, id, products]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  const handleSpecChange = (index: number, field: 'key' | 'value', value: string) => {
    const newSpecs = [...specsList];
    newSpecs[index][field] = value;
    setSpecsList(newSpecs);
  };

  const addSpecRow = () => {
    setSpecsList([...specsList, { key: '', value: '' }]);
  };

  const removeSpecRow = (index: number) => {
    setSpecsList(specsList.filter((_, i) => i !== index));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Convert specs array back to object
    const specsObject: Record<string, string> = {};
    specsList.forEach(item => {
      if (item.key.trim()) {
        specsObject[item.key] = item.value;
      }
    });

    const finalProductData = {
      ...formData,
      price: Number(formData.price),
      specs: specsObject
    } as Product; // safe casting as we ensure required fields

    if (isEditMode && id) {
      updateProduct(id, finalProductData);
    } else {
      addProduct(finalProductData);
    }
    navigate('/admin/products');
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-6">
        <button onClick={() => navigate('/admin/products')} className="text-gray-500 hover:text-gray-900">
          <ArrowLeft size={24} />
        </button>
        <h2 className="font-heading font-bold text-2xl text-gray-900">
          {isEditMode ? 'Edit Product' : 'Add New Product'}
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Info */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">Basic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">Product Name</label>
              <input required name="name" value={formData.name} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none" />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select name="category" value={formData.category} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none">
                {Object.values(Category).map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Warranty</label>
              <input required name="warranty" value={formData.warranty} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price (Rs.)</label>
              <input required name="price" value={formData.price} onChange={handleChange} type="number" className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none" />
            </div>

            <div className="flex items-center pt-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  name="isCustomPrice" 
                  checked={formData.isCustomPrice} 
                  onChange={handleChange}
                  className="w-4 h-4 text-brand-red rounded border-gray-300 focus:ring-brand-red" 
                />
                <span className="text-sm font-medium text-gray-700">Display as "Contact for Price"</span>
              </label>
            </div>
          </div>
        </div>

        {/* Media & Description */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <h3 className="font-bold text-lg mb-4 border-b pb-2">Media & Description</h3>
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
              <input required name="image" value={formData.image} onChange={handleChange} type="url" className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none" placeholder="https://..." />
              {formData.image && (
                <div className="mt-2 w-32 h-32 bg-gray-100 rounded overflow-hidden">
                   <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Short Description (Card)</label>
              <input required name="shortDescription" value={formData.shortDescription} onChange={handleChange} type="text" className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none" maxLength={100} />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Description (Page)</label>
              <textarea required name="fullDescription" value={formData.fullDescription} onChange={handleChange} rows={5} className="w-full border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none" />
            </div>
          </div>
        </div>

        {/* Dynamic Specs */}
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-lg">Technical Specifications</h3>
            <button type="button" onClick={addSpecRow} className="text-sm text-brand-red font-bold flex items-center gap-1 hover:underline">
              <Plus size={16} /> Add Spec
            </button>
          </div>
          
          <div className="space-y-3">
             {specsList.map((spec, index) => (
               <div key={index} className="flex gap-4">
                 <input 
                   type="text" 
                   placeholder="Key (e.g. Material)" 
                   value={spec.key} 
                   onChange={(e) => handleSpecChange(index, 'key', e.target.value)}
                   className="flex-1 border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none"
                 />
                 <input 
                   type="text" 
                   placeholder="Value (e.g. PVC)" 
                   value={spec.value} 
                   onChange={(e) => handleSpecChange(index, 'value', e.target.value)}
                   className="flex-1 border border-gray-300 rounded p-2 focus:border-brand-red focus:outline-none"
                 />
                 <button 
                   type="button" 
                   onClick={() => removeSpecRow(index)}
                   className="text-gray-400 hover:text-red-600"
                 >
                   <Trash2 size={20} />
                 </button>
               </div>
             ))}
             {specsList.length === 0 && <p className="text-sm text-gray-500 italic">No specifications added yet.</p>}
          </div>
        </div>

        <div className="flex justify-end pt-4">
          <button type="submit" className="bg-brand-red text-white px-8 py-3 rounded font-bold uppercase tracking-wide hover:bg-red-700 transition-colors shadow-lg">
            {isEditMode ? 'Update Product' : 'Create Product'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
