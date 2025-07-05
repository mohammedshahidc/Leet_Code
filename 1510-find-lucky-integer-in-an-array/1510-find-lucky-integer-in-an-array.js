/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
    let freq={}
    let result=-1
    for(let num of arr){
        freq[num]=(freq[num]||0)+1
    }
    for(let key in freq){
        let num=Number(key)
        if(num==freq[key]){
            result=Math.max(result,num)
        }
    }
    return result
};