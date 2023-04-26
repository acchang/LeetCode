// https://leetcode.com/problems/add-digits/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let numString = num.toString()
    if (numString.length < 2){return num}
    let answer 
    while (numString.length > 1){
        answer = 0
        for (let i=0; i<numString.length; i++){
            answer += +numString[i]
            }
        numString = answer.toString()
    }
    return answer
};

// better faster solution:

var addDigits = function(num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

// if num is a multiple of 9, it becomes 9, ie 18 or 27 or 99.
// otherwise return the modulo of 9, ie 32 = 5 or 32/9= 5 remainder
