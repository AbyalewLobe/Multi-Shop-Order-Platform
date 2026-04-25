'use client';

import { useState } from 'react';
import { Button, Card } from '@monorepo/ui';

export default function ProductForm({ shops }) {
  const [form, setForm] = useState({ name: '', price: '', shopId: '' });
  const [status, setStatus] = useState(null); // 'success' | 'error' | null

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'}/products`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) {
        const { error } = await res.json();
        throw new Error(error || 'Failed to create product');
      }

      setForm({ name: '', price: '', shopId: '' });
      setStatus('success');
    } catch (err) {
      setStatus(err.message);
    }
  }

  return (
    <Card className="p-6 max-w-md">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Product name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="e.g. Espresso"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
            Price ($)
          </label>
          <input
            id="price"
            name="price"
            type="number"
            required
            min="0"
            step="0.01"
            value={form.price}
            onChange={handleChange}
            placeholder="0.00"
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <div>
          <label htmlFor="shopId" className="block text-sm font-medium text-gray-700 mb-1">
            Shop
          </label>
          <select
            id="shopId"
            name="shopId"
            required
            value={form.shopId}
            onChange={handleChange}
            className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-black bg-white"
          >
            <option value="">Select a shop</option>
            {shops.map((shop) => (
              <option key={shop.id} value={shop.id}>
                {shop.name}
              </option>
            ))}
          </select>
        </div>

        {status === 'success' && (
          <p className="text-sm text-green-600 font-medium">Product created successfully.</p>
        )}
        {status && status !== 'success' && (
          <p className="text-sm text-red-500">{status}</p>
        )}

        <Button type="submit" className="w-full" size="lg">
          Add Product
        </Button>
      </form>
    </Card>
  );
}
