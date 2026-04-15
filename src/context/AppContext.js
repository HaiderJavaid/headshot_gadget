import React, { createContext, useState, useCallback } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [currentView, setCurrentView] = useState('home');
  const [activeCategory, setActiveCategory] = useState('Headphones');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  // Cart actions
  const addToCart = useCallback((product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }, []);

  const updateQty = useCallback((id, delta) => {
    setCart(prev =>
      prev.map(item => {
        if (item.id === id) {
          const newQty = Math.max(1, item.qty + delta);
          return { ...item, qty: newQty };
        }
        return item;
      })
    );
  }, []);

  const removeItem = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const cartSubtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  const value = {
    currentView,
    setCurrentView,
    activeCategory,
    setActiveCategory,
    selectedProduct,
    setSelectedProduct,
    cart,
    setCart,
    addToCart,
    updateQty,
    removeItem,
    cartSubtotal
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
