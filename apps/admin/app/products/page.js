import ProductForm from './components/ProductForm';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

async function getShops() {
  const res = await fetch(`${API_URL}/shops`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch shops');
  const { data } = await res.json();
  return data;
}

export default async function ProductsPage() {
  const shops = await getShops();

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Add Product</h2>
      <ProductForm shops={shops} />
    </div>
  );
}
