// https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


// slide window, hashmap and compare
var checkInclusion = function(s1, s2) {
    let mapS1 = {}
    for (let i=0; i<s1.length; i++){
        if (!mapS1[s1[i]]){mapS1[s1[i]]=1} else (mapS1[s1[i]]++)
    }
    
    for (let i=0; i<s2.length-s1.length+1; i++){
        let chunk = (s2.substring(i, i+s1.length))
        let temp = {...mapS1}
        for (let j=0; j<chunk.length; j++){
            if (temp[chunk[j]]) {temp[chunk[j]]--}
        }
        if (Object.values(temp).every((count) => count === 0)){return true}
        else continue}
    return false
};


// sort is too timeconsuming for long s1 and s2s
var checkInclusion = function(s1, s2) {
    let target = s1.split("").sort().join("")
    for (let i=0; i<s2.length; i++){
        let chunk = (s2.substring(i, i+s1.length)).split("").sort().join("")
        if (chunk === target){return true} else continue 
    }
    return false
};