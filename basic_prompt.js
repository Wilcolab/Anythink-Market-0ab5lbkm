/**
 * Convert snake_case to camelCase.
 * Example: 'some_database_field' -> 'someDatabaseField'
 *
 * @param {string} str
 * @returns {string}
 */
function toCamelCase(str) {
    if (typeof str !== 'string') throw new TypeError('Expected a string');

    return str
        .split('_')
        .filter(Boolean) // remove empty segments from consecutive/leading/trailing underscores
        .map((seg, idx) => {
            seg = seg.toLowerCase();
            if (idx === 0) return seg;
            return seg.charAt(0).toUpperCase() + seg.slice(1);
        })
        .join('');
}

module.exports = toCamelCase;