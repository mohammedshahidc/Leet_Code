var findMaxConsecutiveOnes = function(nums) {
    let result=0
    let count=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==1){
            count++
            if(count>result){
                result=count
            }
        }else{
            count=0
        }
    }
    return result
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));