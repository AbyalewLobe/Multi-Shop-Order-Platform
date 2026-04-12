const express = require('express');
const shops = require('./data/shops');
const products = require('./data/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health check route
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Shops route
app.get('/shops', (req, res) => {
  res.json({ data: shops, total: shops.length });
});

// Products route — optional ?shopId filter
app.get('/products', (req, res) => {
  const { shopId } = req.query;
  const filtered = shopId
    ? products.filter((p) => p.shopId === parseInt(shopId))
    : products;

  res.json({ data: filtered, total: filtered.length });
});

// Products by shop (nested route)
app.get('/shops/:shopId/products', (req, res) => {
  const shopId = parseInt(req.params.shopId);
  const shop = shops.find((s) => s.id === shopId);

  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  const shopProducts = products.filter((p) => p.shopId === shopId);
  res.json({ shop, data: shopProducts, total: shopProducts.length });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

module.exports = app;
