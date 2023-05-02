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