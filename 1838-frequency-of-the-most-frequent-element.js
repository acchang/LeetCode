/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let left = 0
    let ans = 1
    for (let right=nums.length-1; right>-1; right--){
      let target = nums[right]
      let total = nums.slice(left, right).reduce((acc, cV)=>acc+cV, 0)
      while ( (((right-left)*target-total) > k) && right !=left){
        left++
        total = nums.slice(left, right).reduce((acc, cV)=>acc+cV, 0)
      }
      if ((right-left+1) > ans){ans = right-left+1} 
  }
  return ans
};

