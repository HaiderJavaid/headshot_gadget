import React from 'react';
import { Battery, Wifi } from 'lucide-react';
import '../../styles/animations.css';

export function SpecsGrid({ product }) {
  return (
    <div className="grid grid-cols-2 gap-4 mb-8">
      <div className="bg-[#1C1F26] border border-gray-800/50 p-4 rounded-2xl flex flex-col items-start">
        <Battery className="text-[#34E0A1] mb-2" size={20} />
        <span className="text-[10px] font-bold text-gray-500 uppercase">Battery</span>
        <span className="text-sm font-semibold">{product.specs.battery}</span>
      </div>
      <div className="bg-[#1C1F26] border border-gray-800/50 p-4 rounded-2xl flex flex-col items-start">
        <Wifi className="text-[#34E0A1] mb-2" size={20} />
        <span className="text-[10px] font-bold text-gray-500 uppercase">Wireless</span>
        <span className="text-sm font-semibold">{product.specs.wireless}</span>
      </div>
    </div>
  );
}
