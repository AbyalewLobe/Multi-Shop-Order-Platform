import { Card, Badge } from '@monorepo/ui';
import { apiFetch, apiUrl } from '@monorepo/utils';

export default async function ShopsPage() {
  const { data: shops } = await apiFetch(apiUrl('/shops'), { cache: 'no-store' });

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Shops</h1>
      <p className="text-gray-500 mb-8">{shops.length} shops available</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {shops.map((shop) => (
          <Card key={shop.id} className="p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="flex items-start justify-between">
              <h2 className="font-semibold text-base leading-tight">{shop.name}</h2>
              <span className="text-sm font-semibold text-yellow-500 shrink-0 ml-2">
                ★ {shop.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Badge label={shop.category} />
              <span className="text-xs text-gray-400">{shop.city}</span>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
