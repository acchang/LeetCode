// https://leetcode.com/problems/determine-if-a-cell-is-reachable-at-a-given-time/description/?envType=daily-question&envId=2023-11-08

/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    if (sx == fx && sy == fy && t == 1){return false}
    else if (sx == fx && sy == fy && t != 1){return true}
    else {return Math.max(Math.abs(fx-sx), Math.abs(fy-sy))<= t}
}

// the edge cases are to deal with the fact that you have to reach it in exactly that number of steps. 1 is the edge case when starting and ending in the same spot because you need at least 2 steps.

