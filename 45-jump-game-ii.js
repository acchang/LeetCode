/**
 * @param {number[]} nums
 * @return {number}
 */




// Just got lucky with this, for some reason the spread operator for chunk slows things a lot.

var jump = function(nums) {
    if (nums[0]===0){return 0}
    if (nums.length===1){return 0}
    let start = 0;
    let jumps = 0;
    let chunk = nums.slice(start,1);
    while (start <= nums.length) {
        jumps++
        // (console.log(jumps))
        greatestJump = Math.max(...chunk)
        // console.log("chunk", chunk)
        // console.log("gj", greatestJump)
        chunk = nums.slice(start,greatestJump+1);
        // console.log("new chunk", chunk)
        start = greatestJump
        // console.log("-----")
    }
    return jumps
}