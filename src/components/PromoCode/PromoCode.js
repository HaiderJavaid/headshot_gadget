import React from 'react';
import '../../styles/animations.css';

export function PromoCode() {
  return (
    <div className="mt-8 animate-stagger-3">
      <h4 className="text-[10px] font-bold tracking-widest text-gray-500 uppercase mb-3">Promo Code</h4>
      <div className="flex bg-[#1C1F26] border border-gray-800 rounded-2xl overflow-hidden p-1">
        <input
          type="text"
          placeholder="Enter code"
          className="bg-transparent border-none outline-none text-sm px-4 flex-1 text-white placeholder-gray-600"
        />
        <button className="bg-gray-800 text-xs font-bold px-4 py-3 rounded-xl hover:bg-gray-700 transition">
          APPLY
        </button>
      </div>
    </div>
  );
}
