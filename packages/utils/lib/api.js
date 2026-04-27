/**
 * Typed API error that carries the HTTP status code.
 */
export class ApiError extends Error {
  /** @param {string} message @param {number} status */
  constructor(message, status) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
  }
}

/**
 * Thin fetch wrapper with error handling.
 *
 * @template T
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns {Promise<T>}
 */
export async function apiFetch(url, options = {}) {
  let res;

  try {
    res = await fetch(url, options);
  } catch (err) {
    throw new ApiError(`Network error: ${err.message}`, 0);
  }

  if (!res.ok) {
    let message = `Request failed: ${res.status} ${res.statusText}`;
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch {
      // ignore parse errors, keep default message
    }
    throw new ApiError(message, res.status);
  }

  return res.json();
}

/**
 * Build a full API URL from a path, using NEXT_PUBLIC_API_URL or a fallback.
 *
 * @param {string} path  e.g. '/shops'
 * @param {string} [base]
 * @returns {string}
 */
export function apiUrl(path, base) {
  const root =
    base ||
    (typeof process !== 'undefined' && process.env?.NEXT_PUBLIC_API_URL) ||
    'http://localhost:3000';
  return `${root}${path}`;
}
