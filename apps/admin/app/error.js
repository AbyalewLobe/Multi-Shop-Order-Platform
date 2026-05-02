'use client';

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-64 gap-4 text-center">
      <p className="text-3xl">⚠️</p>
      <h2 className="text-lg font-semibold">Failed to load data</h2>
      <p className="text-sm text-gray-500 max-w-sm">
        {error?.message?.includes('Network error')
          ? 'Could not reach the API. Make sure the API server is running on port 3000.'
          : error?.message ?? 'An unexpected error occurred.'}
      </p>
      <button
        onClick={reset}
        className="text-sm underline text-gray-500 hover:text-gray-800"
      >
        Try again
      </button>
    </div>
  );
}
