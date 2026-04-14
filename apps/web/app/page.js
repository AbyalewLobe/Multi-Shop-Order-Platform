export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Welcome to Monorepo Web</h1>
      <p className="text-lg text-gray-500 max-w-md text-center">
        A Next.js app running inside an npm workspaces monorepo.
      </p>
      <div className="flex gap-4">
        <a
          href="/shops"
          className="px-5 py-2.5 rounded-lg bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Browse Shops
        </a>
        <a
          href="/products"
          className="px-5 py-2.5 rounded-lg border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
        >
          View Products
        </a>
      </div>
    </main>
  );
}
