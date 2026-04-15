import React, { useContext } from 'react';
import { PRODUCTS } from '../../constants/products';
import { Header } from '../../components/Header/Header';
import { SearchBar } from '../../components/SearchBar/SearchBar';
import { CategoryBubbles } from '../../components/CategoryBubbles/CategoryBubbles';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { Footer } from '../../components/Footer/Footer';
import { AppContext } from '../../context/AppContext';
import '../../styles/animations.css';

export function HomePage() {
  const { activeCategory } = useContext(AppContext);

  const filteredProducts = PRODUCTS.filter(p =>
    activeCategory === 'Headphones' ? true : p.category === activeCategory
  );

  return (
    <>
      <div className="flex-1 overflow-y-auto pb-24 px-6 no-scrollbar relative">
      <Header />
      <SearchBar />

      {/* Hero Section Banner */}
      <div className="relative bg-gradient-to-br from-[#1C1F26] to-[#0a0c10] rounded-[2rem] p-6 mb-8 overflow-hidden border border-gray-800/50 flex items-center justify-between animate-stagger-3 group cursor-pointer">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#34E0A1]/10 blur-3xl rounded-full group-hover:bg-[#34E0A1]/20 transition-colors"></div>

        <div className="z-10 relative">
          <span className="text-[#34E0A1] text-[10px] font-bold tracking-widest uppercase mb-2 block">
            New Era
          </span>
          <h2 className="text-2xl font-bold text-white mb-1 leading-tight">
            Sonic<br />
            Max Pro
          </h2>
          <p className="text-xs text-gray-400 mb-4">Spatial Audio Redefined.</p>
          <button className="bg-white text-black px-5 py-2 rounded-full text-xs font-bold hover:bg-[#34E0A1] transition-colors shadow-lg">
            Shop Now
          </button>
        </div>

        <img
          src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=400&h=400"
          alt="Hero Headphone"
          className="w-36 h-36 object-cover rounded-full absolute -right-6 top-1/2 -translate-y-1/2 blend-screen drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <CategoryBubbles />

      {/* Featured Products Carousel */}
      <div className="animate-stagger-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-sm font-bold">Featured Products</h3>
          <button className="text-[10px] text-gray-400 font-bold uppercase tracking-wider hover:text-white transition-colors">
            See All
          </button>
        </div>

        <div className="flex gap-5 overflow-x-auto no-scrollbar pb-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}
