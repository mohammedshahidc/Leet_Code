/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function(grid) {
     let count=0
    let arr= grid.flat()
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count++
        }
    }
     return count
};