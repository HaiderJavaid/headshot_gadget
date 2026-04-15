import React, { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useIntroAnimation } from './hooks/useIntroAnimation';
import { HomePage } from './pages/Home/HomePage';
import { ProductPage } from './pages/Product/ProductPage';
import { CartPage } from './pages/Cart/CartPage';
import { MenuPage } from './pages/Menu/MenuPage';
import { IntroAnimation } from './components/IntroAnimation/IntroAnimation';
import './styles/animations.css';

function AppContent() {
  const { currentView } = useContext(AppContext);
  const introState = useIntroAnimation();

  return (
    <div className="min-h-screen bg-[#0E1015] text-white font-sans flex justify-center">
      {/* Mobile App Container Constraint */}
      <div className="w-full max-w-md bg-[#12141A] relative h-screen overflow-hidden shadow-2xl flex flex-col border-x border-gray-900/50">
        {/* Intro Animation - Rendered INSIDE the mobile view */}
        {introState !== 'done' && (
          <div
            className={`absolute inset-0 z-[100] bg-[#12141A] flex flex-col items-center justify-center ${
              introState === 'fading' ? 'animate-fade-out' : ''
            }`}
          >
            <IntroAnimation />
          </div>
        )}

        {/* Dynamic Page Rendering */}
        {introState !== 'playing' && (
          <>
            {currentView === 'home' && <HomePage />}
            {currentView === 'product' && <ProductPage />}
            {currentView === 'cart' && <CartPage />}
            {currentView === 'menu' && <MenuPage />}
          </>
        )}
      </div>
    </div>
  );
}

export default AppContent;
