/**
 * @param {number} num
 * @return {number}
 */
var maximum69Number = function (num) {
    let str = num.toString().replace("6", "9")
    return Number(str)
};