/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let res=1
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i++){
        if(nums[i]==res){
            res++
        }
    }
    return res
};