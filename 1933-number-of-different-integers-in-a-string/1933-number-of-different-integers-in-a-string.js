/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function (word) {
    const matches = word.match(/\d+/g)
    const set = new Set()
    if (matches) {
        for (let num of matches) {
            num = num.replace(/^0+/, '')
            if (num === "") num = "0"
            set.add(num)
        }
    }

    return set.size
};