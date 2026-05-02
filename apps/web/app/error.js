'use client';

export default function Error({ error, reset }) {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 flex flex-col items-center text-center gap-4">
      <p className="text-4xl">⚠️</p>
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <p className="text-sm text-gray-500 max-w-sm">
        {error?.message?.includes('Network error')
          ? 'Could not reach the API. Make sure the API server is running on port 3000.'
          : error?.message ?? 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        className="mt-2 text-sm underline text-gray-500 hover:text-gray-800"
      >
        Try again
      </button>
    </main>
  );
}
