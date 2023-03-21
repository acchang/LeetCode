// https://leetcode.com/problems/number-of-zero-filled-subarrays/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let answer = 0
    let counter = 0
    for (let i = nums.length-1; i>-1; i--){
        if (nums[i] === 0){counter++}
        if (nums[i] != 0){
            while (counter > 0) {
                answer += counter
                counter--
            }
        }
    }
    if (counter >0){
        while (counter > 0) {
                answer += counter
                counter--}
    }
    return answer
  };
      

  