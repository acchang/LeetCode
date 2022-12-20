/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */

// from https://www.youtube.com/watch?v=qhmdBndZnk0
// this was tough. I don't think I'd be able to get it on my own.

var validPath = function(n, edges, source, destination) {
    let graph = new Map();
    let visited = new Set();
// start with graph: Map(0) {}
// visited: Set(0) {} (only uniques)
// Edges is a given parameter

// Then go through edges. Graph is empty so it will initially use the else statements and set for the first links, then get and push for the second link.
    for (let [v,e] of edges){
        if (graph.has(v)){
            graph.get(v).push(e);
        } else {
            graph.set(v,[e]);
        }
        if (graph.has(e)){
            graph.get(e).push(v)
        } else {
            graph.set(e, [v])
        }
    }
// the result will be like
/* 
Map(1) { 0 => [ 1 ] }
Map(2) { 0 => [ 1 ], 1 => [ 0 ] }
Map(2) { 0 => [ 1 ], 1 => [ 0, 2 ] }
Map(3) { 0 => [ 1 ], 1 => [ 0, 2 ], 2 => [ 1 ] }
Map(3) { 0 => [ 1 ], 1 => [ 0, 2 ], 2 => [ 1, 0 ] }
Map(3) { 0 => [ 1, 2 ], 1 => [ 0, 2 ], 2 => [ 1, 0 ] } 
visited will still be Set(0) {}
*/

    function dfs(vertex){
// the initial input into this functon will be source
        visited.add(vertex)
// source is the first in the set visited
        let neighbors = graph.get(vertex);
// look at graph, what does vertex point to?, put it in neighbors
        console.log("vertex", vertex, "points to N", neighbors, )
        if (neighbors && neighbors.length > 0){
            for (let i=0; i<neighbors.length; i++){
// look at each element of neighbors
                console.log("Is N[i]", neighbors[i], "in visited set", visited)
                if (!visited.has(neighbors[i])){
// if neighbors[i] not is in visited, 
                    dfs(neighbors[i])
// then neighbors[i] goes back into dfs
                } 
            }
        }
    }
    dfs(source)
// when neighbors[i] is all in visited, go to return statement and see if true.
    return visited.has(destination);
}




//

`var validPath = function(n, edges, source, destination) {
    
    let length = edges.length;
    if(length == 0) return true;
    
    let visited = [];
        let queue = [source];
        while(queue.length > 0) {
            let element = queue.shift();
            visited[element] = true;
            let i = 0;
            while(i < edges.length) {
                let index = (edges[i]).indexOf(element);
                if(index != -1) {
                    let secondElement = edges[i][1-index];
                    if(secondElement == destination) {
                            return true;
                    } else {
                        if(!visited[secondElement]) {
                            queue.push(secondElement);
                        }
                    }   
                }
                i++;
            }
        }
        return false;
};`




// this works but I don't fully understand.

var validPath = function(n, edges, source, destination) {
    if(source === destination) {
        return true;
    }
    
    const getNeighbors = (index) => {
        const result = [];
        
        // nodes could be connected in both directions
        for (const [a, b] of edges) {
            if(a === index) {
                result.push(b)
            }
            
            if(b === index) {
                result.push(a)
            }
        }
            
        return result;
    }
    
    const bfs = (start) => {
        // queue the first item
        const queue = [start];
        // keep track of the visited nodes
        const visited = new Set();
        // add current node
        visited.add(start);
        
        while(queue.length > 0) {
            const node = queue.shift();
            // we found a path
            if(node === destination) {
                return true;
            }
            
            // build the graph on the fly
            for(neighbor of getNeighbors(node)) {
                // skip visited node
                if(visited.has(neighbor)) {
                    continue;
                }
                
                // enqueue the node and mark it as visited
                queue.push(neighbor);
                visited.add(neighbor)
            }
        }
        
        // if we make it here there was no path
        return false
    }
    
    // start from source
    return bfs(source);
};