import React from 'react';
import { useStore } from '../../context/StoreContext';
import { ShoppingBag, Package, DollarSign, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { products, orders } = useStore();

  const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
  const pendingOrders = orders.filter(o => o.status === 'Pending').length;

  const stats = [
    { label: 'Total Sales', value: `Rs. ${totalRevenue.toLocaleString()}`, icon: <DollarSign size={24} />, color: 'bg-green-100 text-green-600' },
    { label: 'Total Orders', value: orders.length, icon: <ShoppingBag size={24} />, color: 'bg-blue-100 text-blue-600' },
    { label: 'Products', value: products.length, icon: <Package size={24} />, color: 'bg-purple-100 text-purple-600' },
    { label: 'Pending Orders', value: pendingOrders, icon: <TrendingUp size={24} />, color: 'bg-orange-100 text-orange-600' },
  ];

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex items-center space-x-4">
            <div className={`p-3 rounded-full ${stat.color}`}>
              {stat.icon}
            </div>
            <div>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
              <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Recent Orders */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-lg text-gray-900">Recent Orders</h3>
            <Link to="/admin/orders" className="text-sm text-brand-red font-medium hover:underline">View All</Link>
          </div>
          <div className="space-y-4">
            {orders.slice(0, 5).map((order) => (
              <div key={order.id} className="flex justify-between items-center p-4 bg-gray-50 rounded border border-gray-100">
                <div>
                   <p className="font-bold text-gray-900">{order.customerName}</p>
                   <p className="text-xs text-gray-500">{order.items.length} items • {order.date}</p>
                </div>
                <div className="text-right">
                   <p className="font-bold text-gray-900">Rs. {order.total.toLocaleString()}</p>
                   <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                     order.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                     order.status === 'Delivered' ? 'bg-green-100 text-green-700' :
                     'bg-gray-200 text-gray-700'
                   }`}>
                     {order.status}
                   </span>
                </div>
              </div>
            ))}
            {orders.length === 0 && <p className="text-gray-500 text-center py-4">No orders received yet.</p>}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
          <h3 className="font-bold text-lg text-gray-900 mb-6">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/admin/products/new" className="p-4 border border-dashed border-gray-300 rounded hover:border-brand-red hover:bg-red-50 transition-colors flex flex-col items-center justify-center text-center group">
               <Package className="text-gray-400 group-hover:text-brand-red mb-2" size={32} />
               <span className="font-medium text-gray-700 group-hover:text-brand-red">Add New Product</span>
            </Link>
            <Link to="/admin/orders" className="p-4 border border-dashed border-gray-300 rounded hover:border-brand-red hover:bg-red-50 transition-colors flex flex-col items-center justify-center text-center group">
               <ShoppingBag className="text-gray-400 group-hover:text-brand-red mb-2" size={32} />
               <span className="font-medium text-gray-700 group-hover:text-brand-red">Process Orders</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
