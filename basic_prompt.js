/**
 * Convert a string to camelCase.
 * Examples:
 *   toCamelCase("hello world") // "helloWorld"
 *   toCamelCase("Hello World") // "helloWorld"
 *   toCamelCase("hello-world") // "helloWorld"
 *   toCamelCase("snake_case_example") // "snakeCaseExample"
 *   toCamelCase("PascalCase") // "pascalCase"
 *
 * @param {string} input
 * @returns {string}
 */
function toCamelCase(input) {
    if (typeof input !== 'string') return '';
    const str = input.trim();
    if (!str) return '';

    // If the string contains separators (spaces, hyphens, underscores or other non-alphanumerics),
    // split into words and convert.
    if (/[\s\-_]|[^A-Za-z0-9]/.test(str)) {
        const words = str.match(/[A-Za-z0-9]+/g) || [];
        if (words.length === 0) return '';
        const first = words[0].toLowerCase();
        const rest = words
            .slice(1)
            .map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
            .join('');
        return first + rest;
    }

    // No obvious separators: if it looks like PascalCase, lowercase the first character.
    // Otherwise assume it's already camelCase or a single word and return as-is.
    return str.charAt(0).toLowerCase() + str.slice(1);
}

module.exports = toCamelCase;