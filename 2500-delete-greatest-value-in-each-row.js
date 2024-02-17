// https://leetcode.com/problems/delete-greatest-value-in-each-row/description/
// MaxPriorityQueue is unique to JS
// https://stackoverflow.com/questions/72791367/maxpriorityqueue-is-not-defined
// need to master trees and classes first


/**
 * @param {number[][]} grid
 * @return {number}
 */
var deleteGreatestValue = function(grid) {
    var pqs = [], res = 0
  // init Max heap for each row
  for (let row of grid) {
      let pq = new MaxPriorityQueue()
      console.log(pq)
      for (let val of row) pq.enqueue(val)
      console.log(pq)
      pqs.push(pq)
  }

  // dequeu the max value of each row
  // calculate the max of each iteration and add it to the result
  while (pqs[0].size() > 0) {
      let max = 0
      for (let pq of pqs) max = Math.max(pq.dequeue().element, max)
      res += max
  }
  return res
};
