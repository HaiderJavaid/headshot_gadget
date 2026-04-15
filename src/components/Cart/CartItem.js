import React, { useContext } from 'react';
import { Trash2, Minus, Plus } from 'lucide-react';
import { AppContext } from '../../context/AppContext';

export function CartItem({ item }) {
  const { removeItem, updateQty } = useContext(AppContext);

  return (
    <div className="flex gap-4 items-center p-3 bg-[#1C1F26]/50 rounded-2xl border border-gray-800/30">
      <div className="w-20 h-20 bg-black/40 rounded-xl flex items-center justify-center flex-shrink-0 relative overflow-hidden">
        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover blend-screen" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm mb-1">{item.name}</h3>
        <p className="text-[10px] text-gray-500 mb-2">{item.color}</p>
        <div className="text-[#34E0A1] font-bold text-sm">RM{item.price.toFixed(2)}</div>
      </div>
      <div className="flex flex-col items-end gap-3">
        <button
          onClick={() => removeItem(item.id)}
          className="text-gray-600 hover:text-red-500 transition-colors"
        >
          <Trash2 size={16} />
        </button>
        <div className="flex items-center gap-3 bg-[#12141A] rounded-full px-2 py-1 border border-gray-800">
          <button
            onClick={() => updateQty(item.id, -1)}
            className="text-gray-400 hover:text-white"
          >
            <Minus size={14} />
          </button>
          <span className="text-xs font-semibold w-3 text-center">{item.qty}</span>
          <button
            onClick={() => updateQty(item.id, 1)}
            className="text-gray-400 hover:text-white"
          >
            <Plus size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
