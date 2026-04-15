import React from 'react';
import { Search } from 'lucide-react';
import '../../styles/animations.css';

export function SearchBar() {
  return (
    <div className="relative mb-8 animate-stagger-2">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
        <Search size={18} className="text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search gadgets..."
        className="w-full bg-[#1C1F26] text-sm text-white rounded-full py-3.5 pl-12 pr-4 border border-gray-800 focus:outline-none focus:border-[#34E0A1]/50 transition-colors"
      />
    </div>
  );
}
