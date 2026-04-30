import { Button } from '@monorepo/ui';

export default function HomePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-6">
      <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
        npm workspaces monorepo
      </span>
      <h1 className="text-5xl font-bold tracking-tight leading-tight">
        Browse shops &amp; products
      </h1>
      <p className="text-lg text-gray-500 max-w-sm">
        A full-stack monorepo with Next.js, Express, and shared packages.
      </p>
      <div className="flex gap-3 mt-2">
        <a href="/shops">
          <Button size="lg">Browse Shops</Button>
        </a>
        <a href="/products">
          <Button variant="secondary" size="lg">View Products</Button>
        </a>
      </div>
    </main>
  );
}
