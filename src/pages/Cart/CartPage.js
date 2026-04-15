import React, { useContext } from 'react';
import { ChevronLeft, ShoppingBag, ArrowRight } from 'lucide-react';
import { AppContext } from '../../context/AppContext';
import { CartItem } from '../../components/Cart/CartItem';
import { PromoCode } from '../../components/PromoCode/PromoCode';
import { Footer } from '../../components/Footer/Footer';
import '../../styles/animations.css';

export function CartPage() {
  const { cart, setCurrentView, cartSubtotal } = useContext(AppContext);

  const handlePayment = () => {
    alert('Processing Payment... Shopify integration coming soon!');
    // TODO: Integrate with Shopify checkout
  };

  return (
    <>
      <div className="flex-1 overflow-y-auto pb-32 px-6 pt-12 no-scrollbar animate-slide-in relative bg-[#12141A]">
      <header className="flex justify-between items-center mb-8 animate-stagger-1">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center text-gray-300 hover:text-white transition-colors"
        >
          <ChevronLeft size={20} className="mr-2" />
          <h1 className="text-lg font-semibold">Shopping Bag</h1>
        </button>
        <span className="text-sm text-gray-500">{cart.length} items</span>
      </header>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 text-gray-500 animate-stagger-2">
          <ShoppingBag size={48} className="mb-4 opacity-50" />
          <p>Your bag is currently empty.</p>
          <button
            onClick={() => setCurrentView('home')}
            className="mt-6 px-6 py-2 border border-gray-700 rounded-full text-white hover:bg-gray-800 transition"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="space-y-6 animate-stagger-2">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}

          <PromoCode />

          <div className="mt-8 space-y-3 animate-stagger-4 border-t border-gray-800/50 pt-6">
            <div className="flex justify-between text-sm text-gray-400">
              <span>Subtotal</span>
              <span>RM{cartSubtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <span>Shipping</span>
              <span className="text-[#34E0A1]">Free</span>
            </div>
            <div className="flex justify-between text-lg font-bold text-white pt-2">
              <span>Total</span>
              <span className="text-[#34E0A1]">RM{cartSubtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      <Footer />
      </div>
      
      {cart.length > 0 && (
        <div className="w-full bg-[#12141A] p-6 border-t border-gray-800/50 z-50">
          <button
            onClick={handlePayment}
            className="w-full bg-[#34E0A1] text-black font-bold text-lg h-14 rounded-2xl flex items-center justify-center hover:bg-[#2bc98e] transition-all shadow-[0_0_20px_rgba(52,224,161,0.2)]"
          >
            Pay Now <ArrowRight size={20} className="ml-2" />
          </button>
        </div>
      )}
    </>
  );
}
