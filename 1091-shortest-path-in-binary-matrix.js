/**
 * @param {number[][]} grid
 * @return {number}
 */

// from: https://www.youtube.com/watch?v=qqIA4_bmpzk


/**
 * @param {number[][]} grid
 * @return {number}
 */

var shortestPathBinaryMatrix = function(grid) {
    if(grid[0][0] === 1) return -1;
    let dirs = [[-1,-1],[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]];
    let queue = [[0,0,1]];

    while (queue.length){
        let [currX, currY, count] = queue.shift();
        if (currX === grid.length-1 && currY === grid[0].length-1){
            return count;
        }

        for (let [x,y] of dirs){
            let [nextX, nextY] = [currX+x,currY+y]
            if (nextX<0 || nextX>grid.length-1 || nextY < 0 || nextY>grid[0].length-1 || grid[nextX][nextY] === 1) continue;
            queue.push([nextX,nextY,count+1])
            grid[nextX][nextY] = 1;
        }
    }
    return -1
};