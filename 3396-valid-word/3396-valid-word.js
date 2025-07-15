/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function (word) {
     if (word.length < 3) return false;

    let hasVowel = false;
    let hasConsonant = false;

    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

    for (let i = 0; i < word.length; i++) {
        const ch = word[i];

        if (!/[a-z0-9]/i.test(ch)) return false;

        if (/[a-z]/i.test(ch)) {
            const lower = ch.toLowerCase();
            if (vowels.has(lower)) {
                hasVowel = true;
            } else {
                hasConsonant = true;
            }
        }
    }

    return hasVowel && hasConsonant;
};