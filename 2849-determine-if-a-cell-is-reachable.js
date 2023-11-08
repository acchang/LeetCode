/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} fx
 * @param {number} fy
 * @param {number} t
 * @return {boolean}
 */
var isReachableAtTime = function(sx, sy, fx, fy, t) {
    let steps = Math.abs(fx-sx)+Math.abs(fy-sy)-2
    return steps <= t 
}
    //     // xy to xy in t seconds
//     gap between sx and fx is horizontal movement
//     gap between sy and fy is vertical movement
//     save time with diagonals
//     example 5 across, 3 down
//     singles when they overlap except for 1st and last (minus 2 on y axis)
//     8 no diagonals, with diags is 6

// example two
//     across: 7-3 = 4
//     down: 1-3 = 2
//     6-2 = 4,
// // figured out the logic

};