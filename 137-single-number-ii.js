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
    for (let i in obj){
        if (obj[i]===1){return i}
    }
};


/* 
bit manipulation
https://www.youtube.com/watch?v=jO7uGdvGGC4
https://www.youtube.com/watch?v=cOFAmaMBVps
