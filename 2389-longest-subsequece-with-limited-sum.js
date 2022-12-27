/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let totals = []
    let answer = []
    nums = nums.sort((a,b) => a-b)
    for (let i=0; i<nums.length; i++){
        // totals.push(nums[i]+totals[i])
        nums.reduce((a,c) => (a+c; totals.push(c)))
    }
    console.log(totals)
    // go through totals, the index of the number before the total, push into answer
    
};

0, 1, 3, 7, 12
1,2,4,5
3, 10, 21