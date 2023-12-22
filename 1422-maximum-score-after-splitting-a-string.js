/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ones = s.match(/1/g).length;
    let zeroes = 0
    let max = 0
    for (let i=0; i<s.length-1;i++){
        if (s[i] == 0){zeroes++}
        if (s[i] == 1){ones--}
        let total = zeroes + ones
        if (total>max){max=total}
    }
    return max
};