import { Button } from '@monorepo/ui';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Monorepo Web</h1>
      <p className="text-lg text-gray-500 max-w-md text-center">
        A Next.js app running inside an npm workspaces monorepo.
      </p>
      <div className="flex gap-4">
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
