/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canBeIncreasing = function(nums) {
      let arr1=[...nums].sort((a,b)=>a-b)
    let count=0
    for(let i=1;i<nums.length;i++){
        if (nums[i - 1] >= nums[i]) {
            count++
            if (i > 1 && nums[i - 2] >= nums[i]) {
                nums[i] = nums[i - 1]
            }
        }
    }
    return count<2?true:false
};