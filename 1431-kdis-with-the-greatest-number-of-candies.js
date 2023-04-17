/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let answer = []
    let currentMax = Math.max(...candies)
    for (const kid of candies){
        answer.push(kid + extraCandies >= currentMax)
    }
    return answer
};