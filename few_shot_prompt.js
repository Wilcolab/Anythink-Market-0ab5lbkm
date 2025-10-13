// few_shot_prompt.js
// Convert various identifier styles to camelCase.
// Examples:
// "first name" -> "firstName"
// "user_id" -> "userId"
// "SCREEN_NAME" -> "screenName"
// "mobile-number" -> "mobileNumber"

function toCamelCase(input) {
    if (input == null) return '';
    const str = String(input).trim();
    if (str.length === 0) return '';

    // Split on any non-alphanumeric character (spaces, underscores, hyphens, punctuation).
    const tokens = str.split(/[^A-Za-z0-9]+/).filter(Boolean);
    if (tokens.length === 0) return '';

    // If there was no separator, handle single-token cases:
    if (tokens.length === 1) {
        const token = tokens[0];
        // If the token is ALL CAPS (e.g. "SCREEN"), lowercase it entirely.
        if (token === token.toUpperCase()) return token.toLowerCase();
        // Otherwise, lowercase only the first character to preserve existing internal casing (e.g. "userId" -> "userId").
        return token[0].toLowerCase() + token.slice(1);
    }

    const first = tokens[0].toLowerCase();
    const rest = tokens
        .slice(1)
        .map(t => {
            if (t.length === 0) return '';
            // Lowercase the whole token then uppercase its first character.
            const lower = t.toLowerCase();
            return lower[0].toUpperCase() + lower.slice(1);
        })
        .join('');

    return first + rest;
}

// Exports for CommonJS and ES Modules environments
if (typeof module !== 'undefined' && module.exports) {
    module.exports = toCamelCase;
}
export default typeof window === 'undefined' ? undefined : toCamelCase;

// Quick tests
if (require && require.main === module) {
    const cases = [
        'first name',
        'user_id',
        'SCREEN_NAME',
        'mobile-number',
        ' already--trimmed__value ',
        'XMLHttpRequest',
        'userID',
        '',
        null,
    ];
    cases.forEach(s => console.log(JSON.stringify(s), '->', toCamelCase(s)));
}