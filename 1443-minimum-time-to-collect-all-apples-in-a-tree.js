// https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/description/
// from: https://leetcode.com/problems/minimum-time-to-collect-all-apples-in-a-tree/solutions/3033250/dfs-detailed-explanation/?orderBy=most_relevant


/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let children = new Array(n)
// make array of n length
    for (let i = 0; i < n; i++) {
        children[i] = new Array()
    }
// each space in array gets an array

    for (let edge of edges) {
        children[edge[0]].push(edge[1])
        children[edge[1]].push(edge[0])
    }
// for each edge, first of two is the index, second is the value
// then also, second is index, first is the value
// children is [1,2,0,4,5,0,3,6,2,1,1,2] but that obscures children[0] is [ 1, 2 ] and children[2] is [ 0, 3, 6 ]

    let res = 0;
    let dfs = function (node, parent) {
        let val = false
        for (let child of children[node]) {
            if (child === parent) continue
            res++
            let bol = dfs(child, node)
            if (bol) res++
            else res--
            val = val || bol
        }
        if (hasApple[node]) return true
        return val
    }
    dfs(0)
    return res
};
