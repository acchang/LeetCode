// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/?envType=daily-question&envId=2024-02-15
// DQ 2/14/24
// 25%

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>(b-a))
    for (let i=0; i<nums.length;i++){
        let remainder = nums.slice(i+1).reduce((acc, cv)=>acc+cv, 0)
        if (nums[i]<remainder){
            return remainder+nums[i]
        } else continue
    }
    return -1
};

// book solution is 80%

var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let previousElementsSum = 0;
    let ans = -1;
    for (let num of nums) {
        if (num < previousElementsSum) {
            ans = num + previousElementsSum;
        }
        previousElementsSum += num;
    }
    return ans;
};

