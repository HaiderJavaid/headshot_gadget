import React, { useContext } from 'react';
import { CATEGORIES } from '../../constants/categories';
import { AppContext } from '../../context/AppContext';
import '../../styles/animations.css';

export function CategoryBubbles() {
  const { activeCategory, setActiveCategory } = useContext(AppContext);

  return (
    <div className="mb-8 animate-stagger-4">
      <h3 className="text-sm font-bold mb-4">Categories</h3>
      <div className="flex gap-5 overflow-x-auto no-scrollbar pb-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setActiveCategory(cat.name)}
            className="flex flex-col items-center gap-3 min-w-[72px] group"
          >
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                activeCategory === cat.name
                  ? 'bg-[#34E0A1] text-black shadow-[0_0_20px_rgba(52,224,161,0.3)]'
                  : 'bg-[#1C1F26] text-gray-400 border border-gray-800 hover:border-gray-600'
              }`}
            >
              <cat.icon size={24} className={activeCategory === cat.name ? 'fill-black/10' : ''} />
            </div>
            <span
              className={`text-[11px] font-medium ${
                activeCategory === cat.name ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'
              }`}
            >
              {cat.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
