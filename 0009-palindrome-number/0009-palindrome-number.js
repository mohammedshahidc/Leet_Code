/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const string=x.toString()
    const reverse=string.split('').reverse().join('')
return string===reverse

};