// https://leetcode.com/problems/minimum-number-of-vertices-to-reach-all-nodes/description/

// 16% time, 8% memory

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function(n, edges) {
    const config = {};
    for (const [from, to] of edges) {
        if (!config[to]) {
            config[to] = [];
            // if `config[to]` doesn't exist, `config[to]` is empty
        }
        config[to].push(from);
        // edges originally show `from` and `to`
        // change to get a hashmap of `to`s which have a `from`, ignore these bc they are reached by elsewhere
    }

    const output = [];
    for (let index = 0; index < n; index++) {
    // look at each vertice, numbered 0 to n-1
        if (!config[index]) {
            output.push(index);
    // if the vertice does not exist, nothing goes to it, so it's part of the answer
        }
    }
    return output;
};
