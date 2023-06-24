// https://leetcode.com/problems/longest-arithmetic-subsequence/editorial/
// https://www.youtube.com/watch?v=sQznNULe2J0
// used this visualzatiom https://www.youtube.com/watch?v=JBfm8h3eCMw


/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let visitedObj={}
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
            visitedObj[diff] ? visitedObj[diff] +=1 : visitedObj[diff] = 2
        }
    }
    let count = Object.values(visitedObj)
    return Math.max(...count)
};

