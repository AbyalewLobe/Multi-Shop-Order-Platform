import Link from 'next/link';

export default function Nav() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-bold text-base tracking-tight">
          Smart Shop
        </Link>
        <nav className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/shops" className="hover:text-gray-900 transition-colors">Shops</Link>
          <Link href="/products" className="hover:text-gray-900 transition-colors">Products</Link>
        </nav>
      </div>
    </header>
  );
}
