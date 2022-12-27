/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let totals = [0]
    let answer = []
    nums = nums.sort((a,b) => a-b)
    for (let i=0; i<nums.length; i++){
        totals.push(nums[i]+totals[i])
    }
    for (let j=0; j<queries.length; j++){
        for (let k=0; k<totals.length; k++){
            if (totals[k]>queries[j]){
                answer.push(k-1)
            }
        }
    }
    return answer
};

