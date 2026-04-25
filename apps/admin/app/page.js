import { Card } from '@monorepo/ui';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function getStats() {
  const [shopsRes, productsRes] = await Promise.all([
    fetch(`${API_URL}/shops`, { cache: 'no-store' }),
    fetch(`${API_URL}/products`, { cache: 'no-store' }),
  ]);

  const [{ total: totalShops }, { total: totalProducts }] = await Promise.all([
    shopsRes.json(),
    productsRes.json(),
  ]);

  return { totalShops, totalProducts };
}

export default async function DashboardPage() {
  const { totalShops, totalProducts } = await getStats();

  const stats = [
    { label: 'Total Shops',    value: totalShops },
    { label: 'Total Products', value: totalProducts },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        {stats.map(({ label, value }) => (
          <Card key={label} className="p-6">
            <p className="text-sm text-gray-500 mb-1">{label}</p>
            <p className="text-4xl font-bold">{value}</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
