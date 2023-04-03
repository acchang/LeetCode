/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    let answer = []
    for (element of spells){
        let left = potions[0]
        let right = potions[length-1]
            while right > left {
            let mid = Math.floor(right-left/2)
            if (mid * element === success){answer.push(potions[length]-mid)}
            // binary search until found
            }
   } 
return answer
};
