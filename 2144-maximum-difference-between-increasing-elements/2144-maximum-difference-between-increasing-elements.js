/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function(nums) {
      let res=-1
    for(let i=0;i<nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[j]>nums[i]&&nums[j]-nums[i]>res){
                res=nums[j]-nums[i]
            }
        }
    }
    return res
};