// https://leetcode.com/problems/squares-of-a-sorted-array/description/?envType=daily-question&envId=2024-03-02
// DQ 3/1/24

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let ans = []
    for (num of nums){ans.push(num**2)}
    return ans.sort((a,b)=>(a-b))
};

// pointers solution 40% better than previous 28%

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    let start = 0
    let end = nums.length - 1
    let index = end
    let newSortArr =[]

    while (index>-1){
        if (Math.abs(nums[start]) > Math.abs(nums[end])){
            newSortArr[index--] = (nums[start]**2);
            start++;
        } else {
            newSortArr[index--] = (nums[end]**2)
            end--;
        }
    }
    return newSortArr
};

