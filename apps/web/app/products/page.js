import { Card, Badge } from '@monorepo/ui';
import { apiFetch, apiUrl } from '@monorepo/utils';

async function getData() {
  const [{ data: products }, { data: shops }] = await Promise.all([
    apiFetch(apiUrl('/products'), { cache: 'no-store' }),
    apiFetch(apiUrl('/shops'), { cache: 'no-store' }),
  ]);

  const shopMap = Object.fromEntries(shops.map((s) => [s.id, s]));
  return products.map((p) => ({ ...p, shop: shopMap[p.shopId] ?? null }));
}

export default async function ProductsPage() {
  const products = await getData();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-2">Products</h1>
      <p className="text-gray-500 mb-8">{products.length} products available</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Card key={product.id} className="p-5 hover:shadow-md transition-shadow flex flex-col gap-3">
            <div className="flex items-start justify-between gap-2">
              <h2 className="font-semibold text-base leading-tight">{product.name}</h2>
              <span className="text-base font-bold text-black shrink-0">
                ${product.price.toFixed(2)}
              </span>
            </div>
            {product.shop && (
              <div className="flex items-center justify-between">
                <Badge label={product.shop.category} />
                <span className="text-xs text-gray-400">{product.shop.name}</span>
              </div>
            )}
          </Card>
        ))}
      </div>
    </main>
  );
}
