import React, { useContext, useState, useRef } from 'react';
import { ChevronLeft, Share2, Bookmark, ShoppingBag } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import { SpecsGrid } from '../../components/SpecsGrid/SpecsGrid';
import { Footer } from '../../components/Footer/Footer';
import '../../styles/animations.css';

export function ProductPage() {
  const { selectedProduct, setCurrentView, addToCart } = useContext(AppContext);
  const [flyingImage, setFlyingImage] = useState(null);
  const [animStyle, setAnimStyle] = useState({});
  const imageRef = useRef(null);

  if (!selectedProduct) return null;

  const handleAddToCart = () => {
    const cartIcon = document.getElementById('cart-icon');
    if (imageRef.current && cartIcon && !flyingImage) {
      const imgRect = imageRef.current.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      setFlyingImage(selectedProduct.image);
      setAnimStyle({
        left: imgRect.left,
        top: imgRect.top,
        width: imgRect.width,
        height: imgRect.height,
        opacity: 1,
        transform: 'scale(1)',
        transition: 'none',
      });

      setTimeout(() => {
        setAnimStyle({
          left: cartRect.left + cartRect.width / 4,
          top: cartRect.top + cartRect.height / 4,
          width: cartRect.width / 2,
          height: cartRect.height / 2,
          opacity: 0,
          transform: 'scale(0.5) rotate(15deg)',
          transition: 'all 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        });
      }, 50);

      addToCart(selectedProduct);
      setTimeout(() => {
        setFlyingImage(null);
      }, 600);
    } else {
      addToCart(selectedProduct);
    }
  };

  return (
    <>
    <div className="flex-1 overflow-y-auto pb-28 px-6 pt-12 no-scrollbar animate-slide-in relative bg-[#0a0c10]">
      <header className="flex justify-between items-center mb-6 animate-stagger-1 relative z-20">
        <button
          onClick={() => setCurrentView('home')}
          className="w-10 h-10 bg-[#1C1F26] rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors border border-gray-800"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-[#1C1F26] rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors border border-gray-800">
            <Share2 size={18} />
          </button>
          <button 
            id="cart-icon"
            onClick={() => setCurrentView('cart')}
            className="w-10 h-10 bg-[#1C1F26] rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors border border-gray-800 relative"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </header>

      <div className="relative flex justify-center items-center py-8 mb-4 animate-stagger-2">
        <div className="absolute w-64 h-64 bg-[#34E0A1]/5 rounded-full blur-3xl"></div>
        <img
          ref={imageRef}
          src={selectedProduct.image}
          alt={selectedProduct.name}
          className="w-72 h-72 object-cover rounded-full drop-shadow-[0_30px_40px_rgba(0,0,0,0.8)] relative z-10 blend-screen scale-110"
        />
      </div>

      <div className="animate-stagger-3">
        <h1 className="text-3xl font-bold mb-3">{selectedProduct.name}</h1>
        <div className="inline-block px-4 py-1.5 bg-[#34E0A1]/20 border border-[#34E0A1]/30 rounded-full mb-8">
          <span className="text-[#34E0A1] font-bold tracking-wide">RM{selectedProduct.price.toFixed(2)}</span>
        </div>

        <div className="mb-8">
          <h3 className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-3">Overview</h3>
          <p className="text-gray-400 leading-relaxed text-sm">{selectedProduct.desc}</p>
        </div>

        <SpecsGrid product={selectedProduct} />
      </div>
      <Footer />
    </div>

    <div className="w-full bg-[#1C1F26] p-6 border-t border-gray-800/50 z-50">
      <div className="flex gap-4 items-center max-w-md mx-auto">
        <button className="w-14 h-14 bg-[#12141A] border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0">
          <Bookmark size={24} />
        </button>
        <button
          id="add-to-cart-btn"
          onClick={handleAddToCart}
          className="flex-1 bg-[#34E0A1] text-black font-bold text-lg h-14 rounded-xl flex items-center justify-center gap-2 hover:bg-[#2bc98e] transition-all shadow-[0_0_20px_rgba(52,224,161,0.3)] relative overflow-hidden"
        >
          <span>Add to Cart</span> <ShoppingBag size={20} className="ml-1" />
        </button>
      </div>
    </div>
    
    {flyingImage && (
      <div 
        className="fixed z-[100] pointer-events-none drop-shadow-2xl flex items-center justify-center"
        style={animStyle}
      >
        <img
          src={flyingImage}
          className="w-full h-full object-cover rounded-full blend-screen"
          alt="floating product"
        />
      </div>
    )}
    </>
  );
}
