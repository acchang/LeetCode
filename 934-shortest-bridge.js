/**
 * @param {number[][]} grid
 * @return {number}
 */

// from https://leetcode.com/problems/shortest-bridge/solutions/3547387/beats-95-explained-js-using-bfs-and-dfs/
// see discussion in side panel
// also in 100 devs
// https://discord.com/channels/735923219315425401/1109894689596915773

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

/*

Redcon1 — Yesterday at 4:22 PM
Ok, so there's a lot going on here, and keep in mind its always a little funky to read someone else's code and try to understand their thoughts. 

We assign currentQueue all of the values of queue, and then re-establish queue as an empty queue. This allows us to use all the values that were initially in the queue by using currentQueue, but prepare for the next iteration of the while loop by pushing to the initial queue. So when we start queue is full of data, currentQueue takes on that data, and we iterate all of the data in currentQueue while at the same time pushing data into queue. At the end of these loops currentQueue has been completely exhausted and perhaps queue has new data. If so we repeat the entire while loop again, assigning currentQueue the next set of data and setting queue to an empty array again. Rinse repeat until queue ends the loop with no items.

As I understand it only the 1's in the first island were changed to 2's. So you should have a 2D array of 0's for water, 2's for the first island, and 1's for the second island. This allows you to search from all positions of 2 for the nearest position of a 1 and just completely ignore all 0's.

The reason for that particular if statement is to ensure that we don't waste time. Its a weird if to help with efficiency. Is there ever any instance where there can be a shorter bridge than a length of 1? If the islands are touching then there wouldn't be two island, it would just be one island, so there can be no such thing as a bridge of 0. But a bridge of 1 is possible, and its the absolutely smallest length of bridge possible, so if you ever come across a bridge of length 1 you don't need to do any more comparisons. Thats the smallest possible, we've found it, so we return it.

Hope this helps, let me know if there's still any confusion. Good luck! 
BigPugNaps — Yesterday at 7:34 PM
3) Why build a bridge when you can just make "2 Island" bigger!
They build a ring of 2s around "2 Island", distance++
another ring, distance++
another, distance++
anot... until they hit "1 Island", return the distance!
At each step existing "2" land gets ignored so we just need to count how many rings
Redcon1 — Yesterday at 8:53 PM
Ahh. I think this is more accurate. I glanced at the code and  assumed they mutated the array to have island 2 and island 1 and then checked distances between points. Growing rings is a makes a lot more sense I think, and is probably what they were doing in this solution. Thanks for the correction. 
acchang
OP
 — Yesterday at 10:01 PM
Thanks @Redcon1  for taking the time to explain all that! (and @BigPugNaps  for the clarification) and @GC  for taking a glance

The explanations helped a lot. I think I got it.

(3) was the easiest to get. We don't need to keep updating the distance to find the shortest precisely because it's a Breadth-First Search. Every vertice just goes out by one, and we check if it hits land represented by a 1. If not, then the vertices all go out by another 1.

(2) confused me for a bit because the app actually executes on

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (exploreIslandDFS(i, j)) {
        // if island found
        return buildBridgeBFS();
        // build bridge
      }

And since we're iterating through all rows and all columns, I thought every 1 would be changed into 2. But I see now that once exploreIslandDFS() finds a 1, it moves on to buildBridgeBFS()

(1) was the hardest for me to get, but I think I see it now. (It's hard to believe I could ever come up with this though!) The explanation that currentQueue takes in queue so that queue can be empty was helpful. 

I'm still console.logging my way through some of the simler grids to see how queue is used. Notable that the coordinates from queue come from exploreIslandDFS and represent the vertice that's been examined and marked with a 2. That vertice is then checked for adjacents via the next function, buildBridgeBFS.
acchang
OP
 — Today at 5:03 AM
The guy who wrote the answer responded, y'all were basically right, but he added some insights:
`Hi @acchang4 answers to your question

By assigning currentQueue to queue, we ensure that the next iteration of the BFS starts from the cells that were discovered in the previous iteration. This allows the BFS to continue exploring the neighboring cells of the previously visited cells before moving on to cells that are further away.
If we didn't assign currentQueue to queue, and instead used the same queue array throughout the loop, we would end up exploring the newly added cells along with the cells that were already in the queue. This would result in incorrect and inefficient traversal of the grid.

By using a separate currentQueue array to store the cells discovered in the current iteration, we can iterate over it to find the neighbors of each cell and then assign it back to queue at the end of the loop. This ensures that the BFS continues with the correct set of cells in each iteration until the bridge to the other island is found.
`
The purpose of checking for 1 in the buildBridgeBFS function is to find cells that belong to the other island, which have not been visited during the island exploration process. The 2 value represents the cells that have already been visited as part of the first island.
So, in the buildBridgeBFS function, when we encounter a cell with the value 1, it means that we have found a cell belonging to the other island, and we return the current distance + 1 as the shortest distance to the other island.

The line if (grid[nextRow][nextCol] === 1) in the buildBridgeBFS function checks if the neighboring cell is part of the other island (represented by 1), and if so, it returns the distance + 1.

The cells that have been marked as 2 during the exploreIslandDFS process are not considered in the buildBridgeBFS process, as they belong to the same island that is being explored.

You are correct, the current implementation of the buildBridgeBFS function does not ensure that the shortest distance is found. It only returns the distance + 1 when it encounters the first cell belonging to the other island. But I guess it worked!! ;D
`


