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
            // console.log(children)
            //[ [ 1, 2 ], [ 0, 4, 5 ], [ 0, 3, 6 ], [ 2 ], [ 1 ], [ 1 ], [ 2 ] ]
    let dfs = function (node, parent) {
        let val = false
        for (let child of children[node]) {
            // for 1 or 2 of 0
            // round 2: for [0,4,5] of 1
            console.log("test", children[node], node)
            if (child === parent) {console.log("no"); continue}
            // don't proceed if it's the same
            console.log("yes")
            res++
            // add one to result
            console.log (child, parent, res)
            // 1 undefined 1
            // round 2 is 4, 0, 2
            let bol = dfs(child, node)
            // run dfs again of 1,0, where 1 is now the node and parent is zero
            /// round 2: dfs again, 4 is node, parent is 1 


            console.log("bol", bol, child, node)
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



