import React, { useContext } from 'react';
import { AppContext } from '../../context/AppContext';

export function Footer() {
  const { currentView } = useContext(AppContext);

  // Only show footer on home, cart and product pages
  if (!['home', 'cart', 'product'].includes(currentView)) return null;

  return (
    <footer className="bg-[#0E1015] border-t border-gray-800/50 px-6 py-12 mt-8">
      {/* Newsletter Section */}
      <div className="mb-12 pb-8 border-b border-gray-800/30">
        <h3 className="text-lg font-bold mb-3">Subscribe to Our Newsletter</h3>
        <div className="flex gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 bg-[#1C1F26] text-sm text-white rounded-lg py-3 px-4 border border-gray-800 focus:outline-none focus:border-[#34E0A1]/50 transition-colors"
          />
          <button className="bg-[#34E0A1] text-black font-bold px-6 py-3 rounded-lg hover:bg-[#2bc98e] transition-colors">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Links Grid */}
      <div className="grid grid-cols-2 mdgrid-cols-4 gap-8 mb-8">
        {/* Shop */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#34E0A1]">Shop</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">All Products</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Headphones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Laptops</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Wearables</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Audio</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#34E0A1]">Support</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Shipping Info</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#34E0A1]">Company</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-[#34E0A1]">Legal</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Accessibility</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Info */}
      <div className="border-t border-gray-800/30 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>&copy; 2026 Headshot Gadget. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Refunds</a>
        </div>
      </div>
    </footer>
  );
}
