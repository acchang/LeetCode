/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let output = 0
    let gSort = g.sort((a,b)=> b-a)
    let sSort = s.sort((a,b)=> b-a)
    for (let i=0;i<sSort.length;i++){
        for (let j=0; j<gSort.length;j++){
            if (sSort[i]>=gSort[j]){output++; gSort[j] = Infinity; break}
        }
    }
    return output
};

// book solution
// must sort ascending bc want smallest to satisfy minimal
// increment with `contentChildren` to pick up from last satisfied
// not much faster at 6.9%

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    let gSort = g.sort((a,b)=> a-b)
    let sSort = s.sort((a,b)=> a-b)
    let contentChildren = 0
    let cookieIndex = 0
    while (cookieIndex < s.length && contentChildren < g.length){
        if (sSort[cookieIndex]>=gSort[contentChildren]){contentChildren++}
        cookieIndex++
    }
    return contentChildren
};