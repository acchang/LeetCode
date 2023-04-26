// https://leetcode.com/problems/add-digits/


/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numString = num.toString()
    let answer = 0
    while (numString.length > 1){
        answer = 0
        for (let i=0; i<numString.length; i++){
            answer += +numString[i]
            }
        numString = answer.toString()
    }
    return answer
};
