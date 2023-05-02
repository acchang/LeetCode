// https://leetcode.com/problems/sign-of-the-product-of-an-array/submissions/942972647/

/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function(nums) {
    let product
    nums.includes(0) ? product = 0 : product = nums.reduce( (a,c) => a * c)
    return signFunc(product)
};

var signFunc = function(x){
    if (x > 0){return 1}
    else if (x < 0){return -1}
    else if (x == 0){return 0}
};

// faster, per "book" solution, but first still the best.

var arraySign = function(nums) {
    let negs = 0
    if (nums.includes(0)){return 0}
    for (num of nums){
        if (num<0){negs++}
    }
    return signFunc(negs)
};

var signFunc = function(x){
    return x % 2 == 0 ? 1 : -1
};

// or this, but still not as fast as first

var arraySign = function(nums) {
    let negs = 0
    if (nums.includes(0)){return 0}
    for (num of nums){
        if (num<0){negs++}
    }
    return signFunc(negs)
};

var signFunc = function(x){
    return x % 2 == 0 ? 1 : -1
};
