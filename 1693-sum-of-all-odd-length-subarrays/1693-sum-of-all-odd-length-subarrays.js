/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let totalSum = 0
    for (let i = 0; i < arr.length; i++) {
        let subarr = []
        sum = 0
        for (let j = i; j < arr.length; j++) {
            console.log("i", arr[i])
            console.log("j", arr[j])


            subarr.push(arr[j])
            sum += arr[j]
            if (subarr.length % 2 == 1) {
                totalSum += sum
            }
        }

    }
    return totalSum
};