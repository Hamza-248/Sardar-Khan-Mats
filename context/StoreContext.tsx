import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, Order, OrderStatus } from '../types';
import { INITIAL_PRODUCTS } from '../constants';

interface StoreContextType {
  products: Product[];
  orders: Order[];
  isAdminLoggedIn: boolean;
  addProduct: (product: Omit<Product, 'id' | 'rating' | 'reviewCount'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  addOrder: (order: Omit<Order, 'id' | 'date' | 'status'>) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  deleteOrder: (id: string) => void;
  adminLogin: (pin: string) => boolean;
  adminLogout: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from LocalStorage or Constants
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('sardar_products');
    return saved ? JSON.parse(saved) : INITIAL_PRODUCTS;
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('sardar_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('sardar_admin_auth') === 'true';
  });

  // Persistence Effects
  useEffect(() => {
    localStorage.setItem('sardar_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('sardar_orders', JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem('sardar_admin_auth', String(isAdminLoggedIn));
  }, [isAdminLoggedIn]);

  // Actions
  const addProduct = (productData: Omit<Product, 'id' | 'rating' | 'reviewCount'>) => {
    const newProduct: Product = {
      ...productData,
      id: `prod-${Date.now()}`,
      rating: 0,
      reviewCount: 0,
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updates } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  const addOrder = (orderData: Omit<Order, 'id' | 'date' | 'status'>) => {
    const newOrder: Order = {
      ...orderData,
      id: `ORD-${Date.now().toString().slice(-6)}`,
      date: new Date().toLocaleDateString('en-GB', {
        day: 'numeric', month: 'short', year: 'numeric'
      }),
      status: 'Pending'
    };
    setOrders([newOrder, ...orders]);
  };

  const updateOrderStatus = (id: string, status: OrderStatus) => {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  };
  
  const deleteOrder = (id: string) => {
    setOrders(orders.filter(o => o.id !== id));
  };

  const adminLogin = (pin: string) => {
    if (pin === '1234') {
      setIsAdminLoggedIn(true);
      return true;
    }
    return false;
  };

  const adminLogout = () => {
    setIsAdminLoggedIn(false);
  };

  return (
    <StoreContext.Provider value={{
      products,
      orders,
      isAdminLoggedIn,
      addProduct,
      updateProduct,
      deleteProduct,
      addOrder,
      updateOrderStatus,
      deleteOrder,
      adminLogin,
      adminLogout
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
