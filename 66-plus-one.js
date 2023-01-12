/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let answer = []
    let carry = 1
    for (let i=digits.length-1; i>=0; i--){
        if ( (digits[i] + carry) > 9) {answer.unshift(0)}
        else {
                answer.unshift(arr[i] + carry)
                carry = 0  
            }
    }
    if (answer[0]==0){answer.unshift(1)}
    return answer
};
