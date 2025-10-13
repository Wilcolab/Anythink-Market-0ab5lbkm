// refined_prompt.js
// CommonJS export used by test.js

function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Invalid input: expected a non-empty string');
    }

    const parts = input
        .trim()
        .split(/[^A-Za-z0-9]+/) // split on any non-alphanumeric sequence (spaces, underscores, hyphens, etc.)
        .filter(Boolean);

    if (parts.length === 0) {
        throw new TypeError('Invalid input: expected a non-empty string');
    }

    const [first, ...rest] = parts.map(p => p.toLowerCase());
    return first + rest.map(w => w[0].toUpperCase() + w.slice(1)).join('');
}

module.exports = { toCamelCase };