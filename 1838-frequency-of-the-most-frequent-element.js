/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let left = 0
    let ans = 0
    let curr = 0
    for (let i=nums.length-1; i>-1; i--){
      let target = nums[i]
      curr += target
      while ( ((nums[i]-left+1)*target-curr) > k){
        left++
      }
      if ((nums[i]-left+1) > ans){ans = (nums[i]-left+1)} 
      curr = 0
  }
  return ans
};