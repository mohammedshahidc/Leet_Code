/**
 * @param {number[][]} dimensions
 * @return {number}
 */
var areaOfMaxDiagonal = function (dimensions) {
    let arr = [];

    for (let i = 0; i < dimensions.length; i++) {
        let l = dimensions[i].reduce((acc, crr) => acc + Math.pow(crr, 2), 0);
        arr.push(Math.sqrt(l));
    }

    let maxDiagonalLength = Math.max(...arr);
    let maxArea = 0;

    for (let i = 0; i < dimensions.length; i++) {
        if (arr[i] === maxDiagonalLength) {
            let area = dimensions[i].reduce((acc, crr) => acc * crr, 1);
            maxArea = Math.max(maxArea, area);
        }
    }

    return maxArea;

};