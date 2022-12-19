/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
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