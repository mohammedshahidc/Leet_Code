/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let obj = {}
    for (let ch of s) {
        obj[ch] = (obj[ch] || 0) + 1
    }
    let maxVowels = 0
    let maxNonVowels = 0
    for (let ch in obj) {
        if (vowels.includes(ch) && obj[ch] > maxVowels) {
            maxVowels = obj[ch]
        } else {
            if (!vowels.includes(ch) && maxNonVowels < obj[ch]) {
                maxNonVowels = obj[ch]
            }
        }
    }
    return maxNonVowels + maxVowels
};