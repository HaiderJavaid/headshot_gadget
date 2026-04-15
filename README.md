# HeadShot Gadget - React Web App

A modern, mobile-first e-commerce web app for premium tech gadgets. Built with React, Tailwind CSS, and Lucide icons. Designed for deployment on Netlify with Shopify headless CMS integration (coming soon).

## 🚀 Quick Start

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
src/
├── components/          # Reusable UI components
│   ├── Header/
│   │   └── Header.js           # Top navigation with menu & notifications
│   ├── SearchBar/
│   │   └── SearchBar.js        # Search input component
│   ├── CategoryBubbles/
│   │   └── CategoryBubbles.js  # Category filter navigation
│   ├── ProductCard/
│   │   └── ProductCard.js      # Individual product display
│   ├── Cart/
│   │   └── CartItem.js         # Shopping cart item component
│   ├── IntroAnimation/
│   │   └── IntroAnimation.js   # Splash screen animation
│   ├── SpecsGrid/
│   │   └── SpecsGrid.js        # Product specifications grid
│   ├── PromoCode/
│   │   └── PromoCode.js        # Promo code input component
│   └── BottomNav/
│       └── BottomNav.js        # Mobile bottom navigation
│
├── pages/               # Full page components
│   ├── Home/
│   │   └── HomePage.js         # Main product listing page
│   ├── Product/
│   │   └── ProductPage.js      # Product detail page
│   ├── Cart/
│   │   └── CartPage.js         # Shopping cart page
│   └── Menu/
│       └── MenuPage.js         # Side menu page
│
├── context/             # State management
│   └── AppContext.js           # Global app state & cart logic
│
├── hooks/               # Custom React hooks
│   └── useIntroAnimation.js    # Intro animation lifecycle
│
├── constants/           # Static data & configurations
│   ├── products.js             # Product data
│   └── categories.js           # Category definitions
│
├── styles/              # Global styles
│   └── animations.css          # Keyframe animations
│
├── App.js              # Main app component with routing
├── index.js            # App entry point with context provider
└── index.css           # Global styles with Tailwind
\`\`\`

## 🏗️ Architecture

### State Management (Context API)

The app uses React Context API for global state management:

\`\`\`
AppContext provides:
- currentView        // Current page (home, product, cart, menu)
- activeCategory     // Selected product category
- selectedProduct    // Currently viewed product
- cart              // Shopping cart items array
- Cart functions    // addToCart, updateQty, removeItem, cartSubtotal
\`\`\`

### Component Organization

**Pages** - Full-screen views that handle routing
- HomePage: Product listing, search, categories
- ProductPage: Product details & specs
- CartPage: Shopping cart management
- MenuPage: Side navigation menu

**Components** - Reusable UI building blocks
- Header: Navigation & notifications
- ProductCard: Compact product display
- CartItem: Cart row item with qty controls
- CategoryBubbles: Category filter buttons
- BottomNav: Mobile navigation bar

**Constants** - Static data
- Products array with details
- Categories with icons
- Easy to connect to Shopify product feed

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom Animations** - Stagger, fade, slide effects  
- **Lucide Icons** - Consistent icon set
- Dark theme with \`#34E0A1\` accent color

## 🔧 Shopify Integration (Standby)

The app is structured for easy Shopify headless CMS integration:

1. **Replace static product data** with Shopify Storefront API calls
2. **Cart state** can sync with Shopify cart
3. **Checkout** redirect to Shopify checkout (see \`CartPage.js\` TODO)
4. **Products** fetch from Shopify product collection

### Next Steps for Shopify Integration

\`\`\`javascript
// In context/AppContext.js - Add Shopify API calls
// - useEffect to fetch products from Shopify
// - Handle variant selection
// - Sync cart with Shopify checkout

// In CartPage.js - Replace handlePayment
// - Redirect to Shopify checkout URL
// - Pass cart items to Shopify

// Environment variables needed:
// REACT_APP_SHOPIFY_STORE_URL
// REACT_APP_SHOPIFY_ACCESS_TOKEN
\`\`\`

## 🎨 Colors & Theme

\`\`\`
Primary Accent:     #34E0A1 (Teal Green)
Background Dark:    #0E1015
Card Background:    #1C1F26
Light Background:   #12141A
Text Primary:       White
Text Secondary:     #999999
\`\`\`

## 📦 Dependencies

- **react** - UI framework
- **react-dom** - React DOM rendering
- **tailwindcss** - Utility CSS
- **postcss** - CSS processing
- **autoprefixer** - CSS vendor prefixes
- **lucide-react** - Icon library

## ✨ Features

- ✅ Product browsing with categories
- ✅ Product detail view with specs
- ✅ Shopping cart with add/remove/quantity
- ✅ Promo code input field
- ✅ Smooth animations & transitions
- ✅ Mobile-optimized layout
- ✅ Dark theme UI
- ✅ Bottom navigation (mobile)
- ✅ Intro splash animation
- 🚧 Shopify integration (ready for setup)
- 🚧 Real product feed from Shopify
- 🚧 Checkout integration

## 📝 Development Workflow

1. **Add new component**
   \`\`\`bash
   # Create component directory in src/components/
   # Create component file with named export
   # Import in parent component
   \`\`\`

2. **Add new page**
   \`\`\`bash
   # Create page directory in src/pages/
   # Set route in AppContext + App.js
   # Add navigation trigger
   \`\`\`

3. **Update product data**
   - Edit \`src/constants/products.js\`
   - Or connect to Shopify API

4. **Modify styles**
   - Use Tailwind classes in JSX
   - Add custom CSS in \`src/styles/animations.css\`

## 🚀 Deployment

### Netlify

1. Connect GitHub repository
2. Build command: \`npm run build\`
3. Publish directory: \`build\`
4. Set environment variables if using Shopify

### Environment Variables

Create \`.env\` file in root:

\`\`\`
REACT_APP_SHOPIFY_STORE_URL=your-store.myshopify.com
REACT_APP_SHOPIFY_ACCESS_TOKEN=your_access_token
\`\`\`

## 📄 License

Proprietary - HeadShot Gadget

## 🤝 Future Enhancements

- [ ] Shopify product sync
- [ ] User authentication
- [ ] Wishlist/favorites
- [ ] Order history
- [ ] Product reviews & ratings
- [ ] Multiple color/size variants
- [ ] Real payment processing
- [ ] Inventory management
- [ ] Admin dashboard
