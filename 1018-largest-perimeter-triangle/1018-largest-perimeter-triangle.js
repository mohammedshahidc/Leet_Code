/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
       nums.sort((a,b)=>b-a)

    for(let i=0;i<nums.length;i++){
        let a=nums[i]
        let b=nums[i+1]
         let c=nums[i+2]
         if(a+b>c&&b+c>a&&a+c>b){
             return a+b+c
         }
       
    }
      return 0
};