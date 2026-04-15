import React from 'react';
import '../../styles/animations.css';

export function IntroAnimation({ introState = 'playing' }) {
  return (
    <div className="relative flex flex-col items-center">
      <div className="absolute inset-0 bg-[#34E0A1] blur-[50px] opacity-20 rounded-full animate-pulse-glow"></div>
      <div className="w-28 h-28 rounded-2xl flex items-center justify-center mb-6 relative z-10">
        <img src="/headshot-trans.png" alt="Headshot Logo" className="w-full h-full object-contain" />
      </div>
      <h1 className="text-3xl font-bold tracking-tighter text-white z-10 relative">
        <span className="text-[#34E0A1]">Headshot</span> Gadget
      </h1>
      <p className="text-gray-500 mt-3 text-[10px] font-bold tracking-[0.3em] uppercase">Shop Premium Tech</p>
    </div>
  );
}
