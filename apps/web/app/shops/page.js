import { Card } from '@monorepo/ui';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function getShops() {
  const res = await fetch(`${API_URL}/shops`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch shops');
  return res.json();
}

export default async function ShopsPage() {
  const { data: shops } = await getShops();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Shops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <Card key={shop.id} className="p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-2">
              <h2 className="font-semibold text-lg leading-tight">{shop.name}</h2>
              <span className="text-sm font-medium text-yellow-500">★ {shop.rating}</span>
            </div>
            <p className="text-sm text-gray-500 capitalize">{shop.category}</p>
            <p className="text-sm text-gray-400 mt-1">{shop.city}</p>
          </Card>
        ))}
      </div>
      <a href="/" className="inline-block mt-10 text-sm text-gray-500 hover:text-gray-800 transition-colors">
        ← Back home
      </a>
    </main>
  );
}
