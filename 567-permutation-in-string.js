// https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    for (let i=0; i<s2.length; i++){
        let chunk = (s2.substring(i, i+s1.length)).split("");
        let target = s1.split("");
        console.log(i, chunk, s1.split(""))
        if (chunk.every(x => target.includes(x))){
            return true} else continue 
    }
    return false
};
