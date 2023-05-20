//https://leetcode.com/problems/evaluate-division/description/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

// I understand about 75% of this one, get thrown off by DFS

var calcEquation = function(equations, values, queries) {
    const adjList = new Map();
    
    // Initialize the graph
    for (let i = 0; i < equations.length; i++) {
        adjList.set(equations[i][0], []);
        adjList.set(equations[i][1], []);
    }

    // Build the graph
    for (let i = 0; i < equations.length; i++) {
        const u = equations[i][0];
        const v = equations[i][1];
        const weight = values[i];
        
        // u to v
        adjList.get(u).push([v,weight]);
        
        // v to u
        adjList.get(v).push([u, 1/weight]);
    }
// this produces a map of each of its nodes and its relationship

    const res = [];
// Then we initialize a results array to process each query

    for (let i = 0; i < queries.length; i++) {
        // divisor
        const src = queries[i][0];
        
        // dividend
        const dest = queries[i][1];
        const seen = new Set();
        const val = dfs(adjList, src, src, dest, 1, seen);
// use a dfs to process the queries        
        
        if (val === false) {
            res.push(-1);
        } else {
            res.push(val);
        }
    }
    console.log(res)
    return res;
}


// In the case that there are other multiple valid paths from source to destination, ultimately, the quotient is the same
// returning the first then works.
var dfs = function(adjList, src, curr, dest, quotient, seen) {
    console.log("AL", adjList, "src", src, "curr", curr, "dest", dest, "quo",quotient, "seen", seen)
    //destination or source is non existent
    if (!adjList.has(dest) || !adjList.has(src)) {
        return -1;
    }
    //source is same as destination i.e. self-loop.
    if (src === dest) {
        return 1;
    }
    // Reached destination
    if (curr === dest) {
        return quotient;
    }
    seen.add(curr);
    const neighbors = adjList.get(curr);

    for (let i = 0; i < neighbors.length; i++) {
        if (seen.has(neighbors[i][0])) {
            continue;
        }
        const val = dfs(adjList, src, neighbors[i][0], dest, quotient * neighbors[i][1], seen);
        // if any value was found we return because the only other cases would be having a cycle, or reaching our destination or path.
        if (val !== false) return val;
    }
    // We only return false if we've searched all neighbors and there's no path to destination; however we know that src and dest are in adjList, thus it may just be disconnected, but this may return from different levels of recursion.
    return false;
}





// works but not fully understood:

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
var calcEquation = function(equations, values, queries) {
    /* Create all variables map from `equations` array, and establish relationship betweem 2 variables */
    const map = {};    
    
    for(let i = 0; i < equations.length; i++) {
        const [eqA, eqB] = equations[i];
        const val = values[i];
        map[eqA] ? map[eqA] : (map[eqA] = {});
        map[eqB] ? map[eqB]: (map[eqB] = {});
// if it doesn't exist, make it a {}
        map[eqA][eqB] = val;
// assign the value to the part of the query
        map[eqB][eqA] = 1 / val;
    }
    let visitedMap = Object.keys(map).reduce((r, eq) =>  ({ ...r, [eq]: false }), {});
 console.log(visitedMap)
    let visitedMapCurrent = {};
    
    const output = [];
    
    const checkChain = (source, dest, product = 1) => {
        /* Mark current source as visited to handle cyclic refs */
        visitedMapCurrent[source] = true;
        
        /**
        * x1/x2 = 3, x2/x3 = 4, x3/x4 = 5, x4/x5 = 6;
        *
        * Lets say, to find relation between x1 and x5, we need to assess the entire relation equations chain
        * x1 = 3 * x2. x2 = 4 * x3, x3 = 5 * x4, x4 = 6 * x5;
        *
        * To have direct corelation betweeen x1 and x5
        * x1 = 3 * ( 4 * x3 ) => x2 repplaced
        * x1 = 3 * ( 4 * ( 5 * x4 )) => x3 replaced
        * x1 = 3 * ( 4 * ( 5 * ( 6 * x5 ))) => x4 replaced;
        * x1 = 3 * 4 * 5 * 6 * x5
        * x1 = 360 * x5
        *
        * If source = x1, dest = x5 => we recursively established relationship between them
        **/
        const otherEqs = map[source];
        
        if (dest in otherEqs) {
            return map[source][dest] * product;
        }
        
        for (let currRelation in otherEqs) {
            if (visitedMapCurrent[currRelation]) {
                continue;
            }
            
            const resultcheck = checkChain(currRelation, dest, map[source][currRelation] * product);            
            if (resultcheck !== -1) {
                return resultcheck;
            }
        }
        
        /* No relationship could be established */
        return -1;
    }
    
    for(let i = 0; i < queries.length; i++) {
        const [qEqA, qEqB] = queries[i];
        
        if (!map[qEqA] || !map[qEqB]) {
            output.push(-1);
            continue;
        }
        
         if (map[qEqA][qEqB]) {
            output.push(map[qEqA][qEqB]);
            continue;
        }
        
         if (map[qEqB][qEqA]) {
            output.push(map[qEqB][qEqA]);
            continue;
        }
        
        /* Reset visited equation Map */
        visitedMapCurrent = { ...visitedMap };
        output.push(checkChain(qEqA, qEqB));
    }
    
    return output;
};

/**

equations: [["x1","x2"],["x2","x3"],["x3","x4"],["x4","x5"]];
values   : [3.0, 4.0, 5.0, 6.0];
queries. : [["x1","x5"],["x5","x2"],["x2","x4"],["x2","x2"],["x2","x9"],["x9","x9"]]

*/

