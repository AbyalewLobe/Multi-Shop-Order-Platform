// shopId references shops[].id
const products = [
  { id: 1, shopId: 1, name: 'Espresso', price: 3.50, stock: 100 },
  { id: 2, shopId: 1, name: 'Cappuccino', price: 4.50, stock: 80 },
  { id: 3, shopId: 2, name: 'Wireless Headphones', price: 89.99, stock: 25 },
  { id: 4, shopId: 2, name: 'USB-C Hub', price: 34.99, stock: 40 },
  { id: 5, shopId: 3, name: 'Organic Apples', price: 2.99, stock: 200 },
  { id: 6, shopId: 3, name: 'Sourdough Bread', price: 5.49, stock: 30 },
  { id: 7, shopId: 4, name: 'Denim Jacket', price: 59.99, stock: 15 },
  { id: 8, shopId: 4, name: 'Cotton T-Shirt', price: 19.99, stock: 60 },
  { id: 9, shopId: 5, name: 'The Great Gatsby', price: 12.99, stock: 50 },
  { id: 10, shopId: 5, name: 'Clean Code', price: 34.99, stock: 20 },
];

module.exports = products;
