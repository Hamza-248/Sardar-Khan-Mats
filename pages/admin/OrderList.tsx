import React from 'react';
import { useStore } from '../../context/StoreContext';
import { OrderStatus } from '../../types';
import { Trash2, ChevronDown } from 'lucide-react';

const OrderList: React.FC = () => {
  const { orders, updateOrderStatus, deleteOrder } = useStore();

  const getStatusColor = (status: OrderStatus) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Processing': return 'bg-blue-100 text-blue-800';
      case 'Shipped': return 'bg-purple-100 text-purple-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="font-heading font-bold text-2xl text-gray-900">Orders</h2>

      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="p-4 text-sm font-bold text-gray-700">Order ID</th>
                <th className="p-4 text-sm font-bold text-gray-700">Customer</th>
                <th className="p-4 text-sm font-bold text-gray-700">Items</th>
                <th className="p-4 text-sm font-bold text-gray-700">Total</th>
                <th className="p-4 text-sm font-bold text-gray-700">Status</th>
                <th className="p-4 text-sm font-bold text-gray-700 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-mono text-sm text-gray-600">
                    {order.id}<br/>
                    <span className="text-xs text-gray-400">{order.date}</span>
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-gray-900">{order.customerName}</p>
                    <p className="text-xs text-gray-500">{order.phone}</p>
                    <p className="text-xs text-gray-500 max-w-xs truncate">{order.address}</p>
                  </td>
                  <td className="p-4">
                    <ul className="text-sm text-gray-600 space-y-1">
                      {order.items.map((item, idx) => (
                        <li key={idx} className="flex gap-2">
                          <span className="font-bold">{item.quantity}x</span> {item.name}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4 font-bold text-gray-900">
                    Rs. {order.total.toLocaleString()}
                  </td>
                  <td className="p-4">
                     <div className="relative inline-block group">
                        <select 
                          value={order.status}
                          onChange={(e) => updateOrderStatus(order.id, e.target.value as OrderStatus)}
                          className={`appearance-none pl-3 pr-8 py-1 rounded-full text-xs font-bold border-none cursor-pointer focus:ring-2 ring-opacity-50 ${getStatusColor(order.status)}`}
                        >
                          <option value="Pending">Pending</option>
                          <option value="Processing">Processing</option>
                          <option value="Shipped">Shipped</option>
                          <option value="Delivered">Delivered</option>
                          <option value="Cancelled">Cancelled</option>
                        </select>
                        <ChevronDown size={12} className="absolute right-2 top-1.5 pointer-events-none opacity-50" />
                     </div>
                  </td>
                  <td className="p-4 text-right">
                    <button 
                      onClick={() => {
                        if(window.confirm('Delete this order record?')) deleteOrder(order.id);
                      }}
                      className="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
                      title="Delete Order Record"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
              {orders.length === 0 && (
                <tr>
                  <td colSpan={6} className="p-8 text-center text-gray-500">
                    No orders received yet.
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

export default OrderList;
