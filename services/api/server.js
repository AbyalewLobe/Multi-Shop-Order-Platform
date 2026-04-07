const express = require('express');
const shops = require('./data/shops');

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

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});

module.exports = app;
