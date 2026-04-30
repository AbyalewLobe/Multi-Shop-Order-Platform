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
    { label: 'Total Shops',    value: totalShops,    icon: '🏪' },
    { label: 'Total Products', value: totalProducts, icon: '📦' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Dashboard</h2>
      <p className="text-sm text-gray-500 mb-6">Overview of your store data.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg">
        {stats.map(({ label, value, icon }) => (
          <Card key={label} className="p-6 flex items-center gap-4">
            <span className="text-3xl">{icon}</span>
            <div>
              <p className="text-sm text-gray-500">{label}</p>
              <p className="text-3xl font-bold">{value}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
