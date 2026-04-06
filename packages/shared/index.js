/**
 * Shared utility used across apps and services
 * @param {string} name
 * @returns {string}
 */
function greet(name) {
  return `Hello from ${name}!`;
}

module.exports = { greet };
