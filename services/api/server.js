const express = require('express');
const cors = require('cors');
const shops = require('./data/shops');
const products = require('./data/products');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
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

// Create product
app.post('/products', (req, res) => {
  const { name, price, shopId } = req.body;

  if (!name || price == null || !shopId) {
    return res.status(400).json({ error: 'name, price, and shopId are required' });
  }

  const shop = shops.find((s) => s.id === parseInt(shopId));
  if (!shop) {
    return res.status(404).json({ error: 'Shop not found' });
  }

  const product = {
    id: products.length + 1,
    shopId: parseInt(shopId),
    name,
    price: parseFloat(price),
    stock: 0,
  };

  products.push(product);
  res.status(201).json(product);
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
