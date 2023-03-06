// https://leetcode.com/problems/kth-missing-positive-number/
// my solution is not too off the top ones.

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

// slightly more optimized, it will never start at zero because that is not a positive number:

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let counter = 0
    for (let i=1;; i++){
        if (!arr.includes(i)){counter++}
        if (counter == k){return i}
        }
};