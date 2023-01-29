// https://leetcode.com/problems/single-number/
// some help: https://www.youtube.com/watch?v=4niJ0_SUi-c

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const Numbers = {};
    for (let i=0; i<nums.length;i++){
        if (!Numbers[nums[i]]) {Numbers[nums[i]]=1}
        else {Numbers[nums[i]] ++}
    }
    return Object.keys(Numbers).find(key => Numbers[key] === 1);
};


// alt solutions, clever:
// https://github.com/sejal710/javaScript_DSA/blob/main/problem4.js
// sort and go by 2, if n is not the same as the next when jumping by 2, then n is it
// but bc every two are looked at, edge case takes the very last one


/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums = nums.sort(function(a,b){
        return b-a;
    })
    for(let i=0;i<=nums.length-2;i+=2){
        if(nums[i]!==nums[i+1]){
            return nums[i]
        } 
    }
    return nums[nums.length-1];
}
