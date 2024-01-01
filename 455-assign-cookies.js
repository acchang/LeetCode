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