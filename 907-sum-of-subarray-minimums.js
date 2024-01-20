// https://leetcode.com/problems/sum-of-subarray-minimums/submissions/1151165986/?envType=daily-question&envId=2024-01-20
// https://www.youtube.com/watch?v=dS3siRzXAbc

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        res += currentMin
        let j = i+1
        while (j<arr.length){
            if (currentMin > arr[j]){
                currentMin = arr[j]
            }
            res += currentMin
            j++
        }
}
    return res % (Math.pow(10,9) + 7)
};

OR 

var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        res += currentMin
        for (let j=i+1; j<arr.length; j++){
            if (currentMin > arr[j]){currentMin = arr[j]}
            res += currentMin
            }
        }
    return res % (Math.pow(10,9) + 7)
};