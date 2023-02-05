// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// too time consuming
var findAnagrams = function(s, p) {
    let answer = []
    let pMap = {}
    for (let i=0;i<p.length;i++){
        if (!pMap[p[i]]){pMap[p[i]]=1} else {pMap[p[i]]++}
    }

    for (let i=0; i<s.length-p.length+1; i++){
        let chunk = s.substring(i,i+p.length)
        let temp = {...pMap}
        for (let j=0; j<chunk.length; j++){
            if(temp[chunk[j]]){temp[chunk[j]]-- }
        }
        if (Object.values(temp).every((x) => x === 0)){answer.push(i)}
    }
    return answer
};