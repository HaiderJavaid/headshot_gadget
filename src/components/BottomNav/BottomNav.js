import React, { useContext } from 'react';
import { Home, Search, ShoppingBag } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import '../../styles/animations.css';

export function BottomNav() {
  const { currentView, setCurrentView, cart } = useContext(AppContext);
  const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);

  if (currentView !== 'home') return null;

  return (
    <div className="absolute bottom-0 w-full bg-[#12141A]/95 backdrop-blur-md border-t border-gray-800 px-6 py-5 z-40 animate-fade-in">
      <div className="flex justify-between items-center max-w-sm mx-auto">
        <button onClick={() => setCurrentView('home')} className="flex flex-col items-center text-white relative">
          <Home size={24} />
          <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-[#34E0A1] rounded-full"></div>
        </button>
        <button className="flex flex-col items-center text-gray-500 hover:text-white transition-colors">
          <Search size={24} />
        </button>
        <button
          onClick={() => setCurrentView('cart')}
          className={`flex flex-col items-center transition-colors relative ${
            cartCount > 0 ? 'text-white' : 'text-gray-500 hover:text-white'
          }`}
        >
          <ShoppingBag size={24} />
          {cartCount > 0 && (
            <span className="absolute -top-1.5 -right-2 bg-[#34E0A1] text-black text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#12141A]">
              {cartCount}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
