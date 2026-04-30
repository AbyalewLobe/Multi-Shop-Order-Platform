import { apiFetch, apiUrl } from '@monorepo/utils';
import ProductForm from './components/ProductForm';

export default async function ProductsPage() {
  const { data: shops } = await apiFetch(apiUrl('/shops'), { cache: 'no-store' });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-1">Add Product</h2>
      <p className="text-sm text-gray-500 mb-6">Fill in the details to add a new product.</p>
      <ProductForm shops={shops} />
    </div>
  );
}
