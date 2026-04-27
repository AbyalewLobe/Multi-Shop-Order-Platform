import { Card } from '@monorepo/ui';
import { apiFetch, apiUrl } from '@monorepo/utils';

async function getStats() {
  const [{ total: totalShops }, { total: totalProducts }] = await Promise.all([
    apiFetch(apiUrl('/shops'), { cache: 'no-store' }),
    apiFetch(apiUrl('/products'), { cache: 'no-store' }),
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
