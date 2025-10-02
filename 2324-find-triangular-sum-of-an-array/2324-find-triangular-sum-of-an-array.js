/**
 * @param {number[]} nums
 * @return {number}
 */
var triangularSum = function(nums) {
      while(nums.length>1){
        let newarr=[]
        for(let i=0;i<nums.length-1;i++){
            newarr.push((nums[i]+nums[i+1])%10)
        }
         nums=newarr
    }
    return nums[0]
    
};