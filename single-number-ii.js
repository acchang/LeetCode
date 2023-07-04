https://leetcode.com/problems/single-number-ii/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let obj = {}
    for (let num of nums){
        if (obj[num]){obj[num]+=1} else {obj[num]=1}
    }
    console.log(obj)
    for (let i in obj){
        if (obj[i]===1){return i}
    }
};
