/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function(s, p) {
    let answer = []
    let pMap = {}
    for let (i=0;i<p.length;i++){
        if (!pMap[p[i]]){pMap[p[i]]=1} else {pMap[p[i]]+1}
    }
    for (let i=0; i<s.length-p.length; i++){
        let chunk = s.substring(i,i+p.length)
        let temp = [...pMap]
        for (let j=0; j<chunk.length; j++){
            pMap[chunk[i]]--
        }
        if (object.keys(temp)).every(x => x=0)){answer.push[i]}
    }
    return answer
};