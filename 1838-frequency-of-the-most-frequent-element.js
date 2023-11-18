/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// gets to 45/71 but time limit exceeded.

var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let ans = 1
    for (let right=nums.length-1; right>-1; right--){
      let left = 0
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

// instead of calculating the difference every time the pointers move and using slice and reduce, you can just add and subtract
// gets hung up on 26/71

var maxFrequency = function(nums, k) {
    nums.sort((a,b)=>a-b)
    let ans = 1
    for (let right=nums.length-1; right>-1; right--){
      let left = 0
      let target = nums[right]
      let total = nums.slice(0, right).reduce((acc, cV)=>acc+cV, 0)
      while ( (((right-left)*target-total) > k) ){
        left++
        total -= nums[left]
      }
      if ((right-left+1) > ans){ans = right-left+1} 
  }
  return ans
};

// book solution
// https://leetcode.com/problems/frequency-of-the-most-frequent-element/solutions/4300738/more-than-one-way-detail-explanation-java-c-python-javascript-c/?envType=daily-question&envId=2023-11-18


var maxFrequency = function(nums, k) {
    let ans = 1
    let total = 0
    nums.sort((a, b) => a - b);
    for (let left = 0, right = 0; right < nums.length; ++right) {
        total += nums[right]; 
        // Include the current element in the subarray sum
        // Check if the current subarray violates the condition (sum + k < nums[right] * length)
        while (total + k < nums[right] * (right - left + 1)) {
            total -= nums[left]; 
            // Adjust the subarray sum by removing the leftmost element
            left++; 
            // Move the left pointer to the right
        }

        // Update the maximum frequency based on the current subarray length
        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}

