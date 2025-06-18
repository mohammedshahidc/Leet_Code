/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function(nums, k) {
     let res=[]
    if(nums.length%3!==0) return []
    nums.sort((a,b)=>a-b)
    for(let i=0;i<nums.length;i+=3){
        let arr=[nums[i],nums[i+1],nums[i+2]]
        if(arr[2]-arr[0]>k) return []
        res.push(arr)
    }
    return res
};