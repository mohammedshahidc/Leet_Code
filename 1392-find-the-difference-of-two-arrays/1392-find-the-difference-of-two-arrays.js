/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
   let res=[]
    let arr1=new Set(nums1.filter((item)=>!nums2.includes(item)))
    let arr2=new Set(nums2.filter((item)=>!nums1.includes(item)))
    res.push([...arr1],[...arr2])
    return res
};