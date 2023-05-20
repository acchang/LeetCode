/**
 * @param {number[][]} graph
 * @return {boolean}
 */

// Union find, BFS and DFS solution
// This is DFS
// I basically understand it but not sure if I could replicate
// it makes an array the same length as the graph and calls it color
// first element in the graph is colored 1
// every element in the first element gets 2 and the color array is filled out
// the second element in the graph 

var isBipartite = function(graph) {
    console.log(graph)
    const n = graph.length;
    const color = Array(n).fill(0);
// create an array with length of graph, 0 means unchecked
    
    for(let i = 0; i < n; i++) {
        console.log("step", i)
// loop the length of the graph, i is the node
        if(color[i]) continue;
// if color i is not 0 or filled in then go to the next element in the graph
        const queue = [i];
// set queue to i of the graph length loop
        color[i] = 1;
// color of that first node is now 1
        while(queue.length) {
            console.log("q", queue)
// while there is something in the queue
            const curr = queue.shift();
            console.log(curr, "and", queue)
// removes first element from queue
            for(let next of graph[curr]) {
// go through each element of the subarray and check the color
                if(color[next] === color[curr]) return false;
// if the color of the connected nodes is the same as the current as denoted by color[curr] then it's false
                if(!color[next]) {
                    color[next] = color[curr] === 1 ? 2 : 1;
                    queue.push(next);
// if the color is 0, then set the color as 1 or 2
// and then push the newly colored element into the queue
console.log(color, queue)
                }
            }
        }
    }
    return true;    
};

