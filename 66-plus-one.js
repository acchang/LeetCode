/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let concatted = ""
    for (let i=0; i<digits.length; i++){
        concatted += digits[i].toString()
    }
    let answer = parseInt(concatted) + 1
    return answer.toString().split("")
};