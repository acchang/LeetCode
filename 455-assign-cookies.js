/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    // maximize number of gratified kids
    // maximize number of s>=g
    // sort? they are really long
    // 3 2 1
    // 1 1
    // if just match from end will be O(n)^2
    let output = 0
    let gSort = g.sort((a,b)=> b-a)
    let sSort = s.sort((a,b)=> b-a)
    for (let i=0;i<sSort.length;i++){
        for (let j=0; j<gSort.length;j++){
            if (sSort[i]>=gSort[j]){output++, gSort[j] = Infinity}
        }
    }
    return output
};