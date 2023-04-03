// https://leetcode.com/problems/successful-pairs-of-spells-and-potions/description/
// * forgot to sort potions when doing a binary search, I need to do this so binary search works
// * no need for a mid = target condition because not looking for a number but or max or min
// * subtract low since that's the highest number when it violates the `while (low <= high)` condition.

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    potions.sort((a,b) => a - b);
    
    let answer = []
    for (element of spells){
        let low = 0
        let high = potions.length-1
            while (low <= high) {
            let mid = Math.floor((high+low)/2)
            let product = element * potions[mid]
            if (product >= success){high = mid - 1} else {low = mid + 1}
            }
        {answer.push(potions.length-low)}
   } 
return answer
};


