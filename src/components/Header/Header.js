import React, { useContext } from 'react';
import { Menu, ShoppingBag } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import '../../styles/animations.css';

export function Header() {
  const { setCurrentView } = useContext(AppContext);

  return (
    <header className="flex items-center mb-6 animate-stagger-1 sticky top-0 z-50 bg-[#12141A]/95 backdrop-blur-md -mx-6 px-6 pt-10 pb-4">
      <button
        onClick={() => setCurrentView('menu')}
        className="text-gray-300 hover:text-white transition-colors"
      >
        <Menu size={24} />
      </button>

      <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-2">
        <img src="/headshot-trans.png" alt="Logo" className="w-10 h-10 object-contain -my-2 scale-125" />
        <h1 className="text-lg font-bold tracking-wide">Headshot Gadget</h1>
      </div>

      <button 
        id="header-cart-icon"
        onClick={() => setCurrentView('cart')}
        className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center hover:bg-gray-800 transition-colors relative bg-[#1C1F26] ml-auto"
      >
        <ShoppingBag size={18} className="text-gray-300" />
        <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-[#34E0A1] rounded-full shadow-[0_0_8px_#34E0A1]"></span>
      </button>
    </header>
  );
}
