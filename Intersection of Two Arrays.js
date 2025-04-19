var intersection = function (nums1, nums2) {
    let set1 = [...new Set(nums1)]
    let set2 = [...new Set(nums2)]
    let response = []
    let limit = set1.length > set2.length ? set1.length : set2.length
    for (let i = 0; i < limit; i++) {
        if (set1.includes(set2[i])) {
            response.push(set2[i])
        }
    }
    return response
};
console.log(intersection([1,2,2,1],[2,2]));