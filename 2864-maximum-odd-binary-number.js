// https://leetcode.com/problems/maximum-odd-binary-number/?envType=daily-question&envId=2024-03-01
// Daily Q 3/1/24

/**
 * @param {string} s
 * @return {string}
 */
var maximumOddBinaryNumber = function(s) {
    const ones = '1' , zeroes = '0'
    let onesCount = 0
    for (num of s){
        if (num == 1){onesCount++}
    }
    return ones.repeat(onesCount-1) + zeroes.repeat(s.length-onesCount) + "1"

};

