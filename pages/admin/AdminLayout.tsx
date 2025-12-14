import React from 'react';
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, ShoppingBag, LogOut } from 'lucide-react';
import { useStore } from '../../context/StoreContext';

const AdminLayout: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { adminLogout } = useStore();

  const handleLogout = () => {
    adminLogout();
    navigate('/admin/login');
  };

  const navItems = [
    { label: 'Dashboard', path: '/admin', icon: <LayoutDashboard size={20} /> },
    { label: 'Products', path: '/admin/products', icon: <Package size={20} /> },
    { label: 'Orders', path: '/admin/orders', icon: <ShoppingBag size={20} /> },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-black text-white flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="font-heading font-black text-xl">SKM ADMIN</h2>
          <p className="text-xs text-gray-400 mt-1">Sardar Khan Mats</p>
        </div>
        
        <nav className="flex-grow p-4 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center space-x-3 px-4 py-3 rounded transition-colors ${
                location.pathname === item.path || (item.path !== '/admin' && location.pathname.startsWith(item.path))
                  ? 'bg-brand-red text-white'
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button
            onClick={handleLogout}
            className="flex items-center space-x-3 px-4 py-3 w-full rounded text-gray-400 hover:bg-gray-800 hover:text-white transition-colors"
          >
            <LogOut size={20} />
            <span className="font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm h-16 flex items-center px-8 justify-between">
           <h1 className="font-bold text-lg text-gray-800">
             {navItems.find(i => location.pathname === i.path)?.label || 'Administration'}
           </h1>
           <div className="text-sm text-gray-500">
              Logged in as Admin
           </div>
        </header>
        <main className="flex-grow overflow-auto p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
