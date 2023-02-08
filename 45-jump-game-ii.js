/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    console.log(nums)
    let start = 0;
    let jumps = 0;
    let maxOfSubstring = 0;
    let chunk = nums.slice(start,maxOfSubstring+1);
    while (start < nums.length) {
        // console.log("chunk", chunk)
        greatestJump = Math.max(chunk)
        // console.log("gj", "greatestJump")
        chunk = nums.slice(start,greatestJump+1);
        // console.log("new chunk", chunk)
        start = greatestJump
        jumps++
    }
    return jumps
}