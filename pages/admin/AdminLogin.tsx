import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../../context/StoreContext';
import { Lock } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const [pin, setPin] = useState('');
  const [error, setError] = useState('');
  const { adminLogin, isAdminLoggedIn } = useStore();
  const navigate = useNavigate();

  // Redirect if already logged in
  React.useEffect(() => {
    if (isAdminLoggedIn) {
      navigate('/admin');
    }
  }, [isAdminLoggedIn, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminLogin(pin)) {
      navigate('/admin');
    } else {
      setError('Invalid PIN code');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-brand-black rounded-full flex items-center justify-center mx-auto mb-4">
             <Lock className="text-brand-red" size={32} />
          </div>
          <h1 className="font-heading font-black text-2xl text-gray-900">ADMIN LOGIN</h1>
          <p className="text-gray-500 text-sm mt-2">Enter your security PIN to access the dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="password"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              className="w-full text-center text-3xl tracking-[1em] font-bold border-2 border-gray-200 rounded-lg p-4 focus:border-brand-red focus:outline-none transition-colors"
              placeholder="••••"
              maxLength={4}
              autoFocus
            />
          </div>
          
          {error && (
            <div className="text-red-500 text-sm text-center font-medium bg-red-50 p-2 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-brand-red text-white py-3 rounded font-bold uppercase hover:bg-red-700 transition-colors"
          >
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
