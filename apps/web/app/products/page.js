const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function getData() {
  const [productsRes, shopsRes] = await Promise.all([
    fetch(`${API_URL}/products`, { cache: 'no-store' }),
    fetch(`${API_URL}/shops`, { cache: 'no-store' }),
  ]);

  if (!productsRes.ok || !shopsRes.ok) throw new Error('Failed to fetch data');

  const [{ data: products }, { data: shops }] = await Promise.all([
    productsRes.json(),
    shopsRes.json(),
  ]);

  // Build a lookup map for O(1) shop name resolution
  const shopMap = Object.fromEntries(shops.map((s) => [s.id, s]));

  return products.map((p) => ({ ...p, shop: shopMap[p.shopId] ?? null }));
}

export default async function ProductsPage() {
  const products = await getData();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
          >
            <h2 className="font-semibold text-lg leading-tight mb-1">{product.name}</h2>
            <p className="text-xl font-bold text-black mb-3">
              ${product.price.toFixed(2)}
            </p>
            {product.shop && (
              <div className="flex items-center gap-1.5 text-sm text-gray-500">
                <span className="capitalize">{product.shop.category}</span>
                <span>·</span>
                <span>{product.shop.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
      <a href="/" className="inline-block mt-10 text-sm text-gray-500 hover:text-gray-800 transition-colors">
        ← Back home
      </a>
    </main>
  );
}
