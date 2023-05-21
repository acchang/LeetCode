/**
 * @param {number[][]} grid
 * @return {number}
 */

// from https://leetcode.com/problems/shortest-bridge/solutions/3547387/beats-95-explained-js-using-bfs-and-dfs/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var shortestBridge = function(grid) {
const DIRECTIONS = [[-1, 0], [1, 0], [0, -1], [0, 1]];

const rows = grid.length;
const cols = grid[0].length;

  let queue = [];

  const exploreIslandDFS = (row, col) => {
    // this starts with "activate function" at the end
    if (row < 0 || row >= rows || col < 0 || col >= cols || grid[row][col] !== 1) {
      return false;
    // this stops or ignores if it goes out of bounds or if it is 0 or 2
    }
    // but if it's a 1, then
    queue.push([row, col]);
    // it's added to the queue
    grid[row][col] = 2;
    // and marks them as 2

    exploreIslandDFS(row - 1, col);
    exploreIslandDFS(row + 1, col);
    exploreIslandDFS(row, col - 1);
    exploreIslandDFS(row, col + 1);
    // and continues looking at adjacents

    return true;
    // returning the true satisfies the if condition to buildBridgeBFS
  };

  const buildBridgeBFS = () => {
    let distance = -1;
    // distance is set at -1 because it doesn't want you to count the final match
    let currentQueue = [];

    while (queue.length) {
      currentQueue = queue;
    // why do you need to change queue to currentQueue
      queue = [];

      for (let [row, col] of currentQueue) {
        for (let [dx, dy] of DIRECTIONS) {
          const nextRow = row + dx;
          const nextCol = col + dy;

          if (
            nextRow >= 0 &&
            nextRow < rows &&
            nextCol >= 0 &&
            nextCol < cols &&
            grid[nextRow][nextCol] !== 2
          ) {
            if (grid[nextRow][nextCol] === 1) {
              return distance + 1;
    // if it's a 1, then add 1 to distance
            }
            queue.push([nextRow, nextCol]);
            grid[nextRow][nextCol] = 2;
    // set adjacent place to 2?
          }
        }
      }

      distance++;
    }
// how does it find the shortest?
// why is it looking for 1s and not 2s if the grid has changed 1 to 2 when checked?

    return -1;
    // not really necessary?
  };

// activate functions --

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (exploreIslandDFS(i, j)) {
        // if island found
        return buildBridgeBFS();
        // build bridge
      }
    }
  }

  return -1;
  // this is not even necessary?
};