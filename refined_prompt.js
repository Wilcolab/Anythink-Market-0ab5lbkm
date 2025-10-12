/**
 * Convert a string to camelCase.
 * Handles spaces, underscores, hyphens, and mixed case input.
 *
 * Examples:
 *   toCamelCase('first name')     // 'firstName'
 *   toCamelCase('user_id')        // 'userId'
 *   toCamelCase('SCREEN_NAME')    // 'screenName'
 *   toCamelCase('mobile-number')  // 'mobileNumber'
 *
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
    if (!input && input !== 0) return '';
    const str = String(input).trim();
    if (str === '') return '';

    // Split on any non-alphanumeric characters (spaces, underscores, dashes, punctuation).
    const parts = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (parts.length === 0) return '';

    // Single token: preserve existing camelCase but normalize all-uppercase to lowercase first.
    if (parts.length === 1) {
        const word = parts[0];
        if (word === word.toUpperCase()) return word.toLowerCase();
        return word.charAt(0).toLowerCase() + word.slice(1);
    }

    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join('');

    return first + rest;
}

module.exports = toCamelCase;