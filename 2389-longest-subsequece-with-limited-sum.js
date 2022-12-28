/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    let answer = [];
    let totals = [];
    nums = nums.sort((a,b) => a-b)
    totals.push(nums[0])
    for (let i=1; i<nums.length; i++){
        totals.push(nums[i]+totals[i-1])
    }

// 1 3 7 12
// 3 10 21

    for (let j=0; j<queries.length; j++){
        for (let k=0; k<totals.length; k++){
            console.log(queries[j], totals[k], answer)
            if (totals[k]>queries[j]){
                answer.push(k)
            }
        }
    }

return answer

};

