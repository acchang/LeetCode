// https://leetcode.com/problems/find-the-town-judge/

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */



// This does not work bc people can trust multiple [[1,3],[1,4],[2,3],[2,4],[4,3]]

var findJudge = function(n, trust) {
    let notJudges = trust.filter(array => array[1] != trust[0][1]).length
    return notJudges ? -1 : trust[0][1]
};
