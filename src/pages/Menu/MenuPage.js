import React, { useContext } from 'react';
import { Plus } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import '../../styles/animations.css';

export function MenuPage() {
  const { setCurrentView } = useContext(AppContext);

  return (
    <div className="flex-1 flex flex-col bg-[#12141A] px-8 pt-16 animate-slide-in relative z-50">
      <header className="flex justify-between items-center mb-12">
        <h1 className="text-2xl font-bold">Menu</h1>
        <button
          onClick={() => setCurrentView('home')}
          className="p-2 bg-[#1C1F26] rounded-full text-gray-400 hover:text-white"
        >
          <Plus size={24} className="transform rotate-45" />
        </button>
      </header>
      <nav className="flex flex-col gap-6 text-xl font-medium text-gray-400">
        <button
          onClick={() => setCurrentView('home')}
          className="text-left hover:text-white transition"
        >
          Home
        </button>
        <button className="text-left hover:text-white transition">Shop All Categories</button>
        <button className="text-left hover:text-white transition">New Arrivals</button>
        <button className="text-left hover:text-white transition">Order History</button>
        <button className="text-left hover:text-white transition flex items-center justify-between">
          Settings <span className="w-2 h-2 rounded-full bg-[#34E0A1]"></span>
        </button>
      </nav>
    </div>
  );
}
