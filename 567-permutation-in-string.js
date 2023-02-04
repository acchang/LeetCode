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
        // we have a temp, and we have a chunk
        for (let j=0; j<chunk.length; j++){
        // iterate through chunk
            console.log(chunk, [chunk[j]], temp[chunk[j]])
            if (temp[chunk[j]]) {temp[chunk[j]]--} else break
        }
    }
    return true
};

// write a function that takes a string and sees if it contains same elements as another

// https://stackoverflow.com/questions/29672847/how-to-compare-contents-of-javascript-array-but-not-the-order-of-them




// sort is too timeconsuming for long s1 and s2s
var checkInclusion = function(s1, s2) {
    let target = s1.split("").sort().join("")
    for (let i=0; i<s2.length; i++){
        let chunk = (s2.substring(i, i+s1.length)).split("").sort().join("")
        if (chunk === target){return true} else continue 
    }
    return false
};