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

// faster, per "book" solution

var arraySign = function(nums) {
    let negs = 0
    for (num of nums){
        if (num<0){negs++}
        else if (num == 0){return 0}
    }
    return signFunc(negs)
};

var signFunc = function(x){
    return x % 2 == 0 ? 1 : -1
};

