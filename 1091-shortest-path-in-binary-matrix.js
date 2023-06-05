/**
 * @param {number[][]} grid
 * @return {number}
 */

// from: https://www.youtube.com/watch?v=qqIA4_bmpzk


/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1;
    // if first in nxn matrix is 1, return -1
    let dirs = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    let queue = [[0,0,1]];

    while (queue.length){
        console.log(queue)
        let [currX, currY, count] = queue.shift();
    // take it off the queue and assign it as current
        if (currX === grid.length-1 && currY === grid[0].length-1){
            return count;
        }
    // if it's the last square, return the count
        for (let [x,y] of dirs){
            let [nextX, nextY] = [currX+x,currY+y]
    // from current calculate next
            if (nextX<0 || nextX>grid.length-1 || nextY < 0 || nextY>grid[0].length-1 || grid[nextX][nextY] === 1) continue;
    // if any of the next is out of bounds or a "1", ignore it.
            queue.push([nextX,nextY,count+1])
    // if they're ok, push it on to the queue
            grid[nextX][nextY] = 1;
    // and cancel out the space it came from
        }
    }
    return -1
};



// BFS with queue:
// https://www.youtube.com/watch?v=2arIqB3HtTU

/*

pop [ 0, 0, 1 ]
now queue is 0 1  and  [ [ 0, 1, 2 ] ] - go right
pop [ 0, 1, 2 ]  - at this point options are:
now queue is 0 1  and  [ [ 0, 2, 3 ] ]  go right
now queue is 1 1  and  [ [ 0, 2, 3 ], [ 1, 2, 3 ] ] go down + right
now queue is 0 -1  and  [ [ 0, 2, 3 ], [ 1, 2, 3 ], [ 0, 0, 3 ] ] go left
pop [ 0, 2, 3 ] look at right, no options
pop [ 1, 2, 3 ] look at down right
now queue is 1 0  and  [ [ 0, 0, 3 ], [ 2, 2, 4 ] ] down right can go down only
pop [ 0, 0, 3 ] look at option from [0,1] fails
pop [ 2, 2, 4 ] answer



pop [ 0, 0, 1 ]
now queue is 0 1  and  [ [ 0, 1, 2 ] ] - go right
pop [ 0, 1, 2 ]  - at this point options are:
now queue is 1 1  and  [ [ 1, 2, 3 ] ] go down + right
now queue is 0 1  and  [ [ 1, 2, 3 ], [ 0, 2, 3 ] ] go right
now queue is 0 -1  and  [ [ 1, 2, 3 ], [ 0, 2, 3 ], [ 0, 0, 3 ] ] go left
pop [ 1, 2, 3 ] look at down right
now queue is 1 0  and  [ [ 0, 2, 3 ], [ 0, 0, 3 ], [ 2, 2, 4 ] ] at 1,2 add down option
pop [ 0, 2, 3 ] above has no extra moves
pop [ 0, 0, 3 ] back no
pop [ 2, 2, 4 ] down yes