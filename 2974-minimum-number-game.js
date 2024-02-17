// https://leetcode.com/problems/minimum-number-game/description/
// 85%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = []
    nums.sort((a,b)=>a-b)
    for (let i=0; i<nums.length; i=i+2){
        arr.push(nums[i+1])
        arr.push(nums[i])
    }
    return arr
};

// 23%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const numberGame = (nums) => {
    nums.sort((a, b) => b - a);
  
    const arr = [];
  
    while (nums.length) {
      const alice = nums.pop();
      const bob = nums.pop();
  
      arr.push(bob, alice);
    }
  
    return arr;
  };

// heap, 52%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let bobMin = 0;
    let aliMin = 0;
    let arr = [];
    while(nums.length){
        aliMin = Math.min(...nums);
        let index = nums.indexOf(aliMin)
        let aliRemoved = nums.splice(index, 1)[0];
        bobMin = Math.min(...nums);
        index = nums.indexOf(bobMin)
        let bobRemoved = nums.splice(index, 1)[0];
        arr.push(bobRemoved);
        arr.push(aliRemoved);
    }
    return arr;
};