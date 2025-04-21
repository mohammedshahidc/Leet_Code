var divide = function(dividend, divisor) {
    let div=Math.trunc(dividend / divisor)
    return Math.max(Math.min(div, 2147483647), -2147483648);

};

console.log(divide(7,-3));