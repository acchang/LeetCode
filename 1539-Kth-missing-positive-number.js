// https://leetcode.com/problems/kth-missing-positive-number/


/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let counter = 0
    for (let i=0; i<Infinity; i++){
        if (!arr.includes(i)){
            if (counter == k){return i}
            counter++
            }
        }
};