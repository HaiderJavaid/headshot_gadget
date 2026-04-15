import React, { useContext } from 'react';
import { Heart, Plus } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import '../../styles/animations.css';

export function ProductCard({ product }) {
  const { setSelectedProduct, setCurrentView, addToCart } = useContext(AppContext);

  return (
    <div
      onClick={() => {
        setSelectedProduct(product);
        setCurrentView('product');
      }}
      className="min-w-[220px] relative bg-gradient-to-b from-[#1C1F26] to-[#12141A] p-5 rounded-[2rem] border border-gray-800/50 shadow-lg cursor-pointer group flex flex-col"
    >
      <div className="flex justify-between items-start mb-2">
        <div className="px-2.5 py-1 text-[9px] font-bold tracking-widest uppercase text-[#34E0A1] bg-[#34E0A1]/10 rounded-full border border-[#34E0A1]/20">
          {product.tag}
        </div>
        <button
          className="text-gray-600 hover:text-[#34E0A1] transition-colors z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Heart size={20} />
        </button>
      </div>

      <div className="flex justify-center items-center py-4 relative flex-1">
        <div className="absolute w-24 h-24 bg-[#34E0A1]/5 rounded-full blur-xl group-hover:bg-[#34E0A1]/10 transition-colors"></div>
        <img
          src={product.image}
          alt={product.name}
          className="w-32 h-32 object-cover rounded-full drop-shadow-[0_15px_25px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-500 blend-screen"
        />
      </div>

      <div className="mt-auto">
        <h2 className="text-lg font-semibold mb-1 truncate">{product.name}</h2>
        <p className="text-[10px] text-gray-500 mb-3">{product.category}</p>
        <div className="flex justify-between items-center">
          <span className="text-white text-lg font-bold tracking-wide">RM{product.price.toFixed(0)}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              addToCart(product);
            }}
            className="w-9 h-9 bg-[#34E0A1] rounded-full flex items-center justify-center text-black hover:bg-[#2bc98e] hover:scale-110 transition-all shadow-[0_0_15px_rgba(52,224,161,0.3)]"
          >
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
