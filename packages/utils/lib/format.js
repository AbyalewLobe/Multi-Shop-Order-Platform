/**
 * @param {Date} date
 * @returns {string}
 */
export function formatDate(date) {
  return date.toISOString().split('T')[0];
}

/**
 * @param {string} str
 * @returns {string}
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
