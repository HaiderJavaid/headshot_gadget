# Shopify Integration Guide for HeadShot Gadget

This guide explains how to connect your HeadShot Gadget React app to Shopify as a headless CMS.

## Prerequisites

1. Shopify store (any plan that supports Storefront API)
2. Shopify admin access
3. Node.js and npm installed

## Step 1: Create Shopify App

1. Go to Shopify Admin Dashboard
2. Navigate to **Settings → Apps and integrations → Develop apps**
3. Click **Create an app**
4. Name it "HeadShot Gadget Web"
5. Choose **Admin API** access scopes:
   - `read_products`
   - `read_orders` 
   - `read_discounts`
   - `write_draft_orders`

## Step 2: Get API Credentials

1. In your app page, click **Configuration**
2. Under **Admin API tokens**, generate a new token
3. Copy and save your tokens (you'll need them for backend)

For frontend Storefront API:
1. Go **API credentials**
2. Create a **Storefront access token**
3. Copy the token

## Step 3: Configure Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Update `.env` with your Shopify credentials:

```
REACT_APP_SHOPIFY_STORE_URL=your-store.myshopify.com
REACT_APP_SHOPIFY_ACCESS_TOKEN=your_storefront_access_token
REACT_APP_SHOPIFY_API_VERSION=2024-01
```

## Step 4: Install Shopify SDK

```bash
npm install shopify-buy
```

## Step 5: Create Shopify Service

Create `src/services/shopifyClient.js`:

```javascript
import Client from 'shopify-buy';

const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_STORE_URL,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN,
});

export default client;
```

## Step 6: Update Products Context

Update `src/context/AppContext.js` to fetch from Shopify:

```javascript
import shopifyClient from '../services/shopifyClient';

useEffect(() => {
  // Fetch products from Shopify
  shopifyClient.product.fetchAll().then(products => {
    // Map Shopify products to your format
    setProducts(products);
  });
}, []);
```

## Step 7: Update Cart to Use Shopify

Modify cart operations in `AppContext.js`:

```javascript
const createCheckout = async (items) => {
  const checkout = await shopifyClient.checkout.create({
    lineItems: items.map(item => ({
      variantId: btoa(`gid://shopify/ProductVariant/${item.variantId}`),
      quantity: item.qty,
    })),
  });
  
  return checkout.webUrl; // Redirect to Shopify checkout
};
```

## Step 8: Update Checkout Button

In `src/pages/Cart/CartPage.js`, replace payment handler:

```javascript
const handlePayment = async () => {
  const checkoutUrl = await createCheckout(cart);
  window.location.href = checkoutUrl; // Redirect to Shopify
};
```

## Testing

1. Create test products in Shopify admin
2. Verify they appear in your app
3. Test adding to cart
4. Test checkout flow

## Deployment

When deploying to Netlify:

1. Set environment variables in Netlify dashboard
2. **Site settings → Build & deploy → Environment**
3. Add your Shopify credentials

## GraphQL Alternative (Advanced)

For more control, use GraphQL queries instead of shopify-buy:

```javascript
const query = `
  {
    products(first: 10) {
      edges {
        node {
          id
          title
          priceRange {
            minVariantPrice {
              amount
            }
          }
          images(first: 1) {
            edges {
              node {
                url
              }
            }
          }
        }
      }
    }
  }
`;
```

## Troubleshooting

**Products not loading:**
- Verify Shopify credentials in .env
- Check CORS is enabled in Shopify
- Ensure Storefront API access token has read_products scope

**Checkout redirect fails:**
- Verify Shopify store URL format
- Check redirect URL is whitelisted in Shopify settings

**Cart sync issues:**
- Ensure variant IDs are correct format
- Check line item quantity limits in Shopify

## Resources

- [Shopify Storefront API Docs](https://shopify.dev/api/storefront)
- [shopify-buy Library](https://github.com/Shopify/js-buy-sdk)
- [Netlify Environment Variables](https://docs.netlify.com/configure-builds/environment-variables/)
