/**
 * Convert a string to camelCase.
 * - Trims whitespace
 * - Treats space, underscore (_) and dash (-) as separators
 * - Multiple separators are treated as one
 * - Converts to lower-case except the first letter of subsequent words is capitalized
 * - Returns "" for empty input (after trimming and removing separators)
 * - Throws Error if input is not a string
 *
 * Examples:
 *   toCamelCase("  hello world  ") => "helloWorld"
 *   toCamelCase("FOO_BAR-baz")     => "fooBarBaz"
 *   toCamelCase("multiple   --__ separators") => "multipleSeparators"
 *   toCamelCase("") => ""
 *
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim whitespace
    const trimmed = input.trim();
    if (trimmed === '') return '';

    // Split on spaces, underscores or dashes (one or more), ignore empty segments
    const parts = trimmed.split(/[ _-]+/).filter(Boolean);
    if (parts.length === 0) return '';

    const first = parts[0].toLowerCase();
    const rest = parts
        .slice(1)
        .map(p => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
        .join('');

    return first + rest;
}

module.exports = toCamelCase;

// Quick example runs (uncomment to test)
// console.log(toCamelCase("  hello world  ")); // "helloWorld"
// console.log(toCamelCase("FOO_BAR-baz"));     // "fooBarBaz"
// console.log(toCamelCase("multiple   --__ separators")); // "multipleSeparators"