/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let n = nums.length
    let jumps = 0
    let left = 0, right = 0

    while (right < n-1){
        let max = 0
        for (let i = 0; i<=right; i++){
            max = Math.max(max, i + nums[i])
        }
        left = right + 1
        right = max
        jumps ++
    }
return jumps
};

// Kind of, but really. Intuition is right but coding is off
var jump = function(nums) {
    let left = 0;
    let jumps = 0; right = 0;
    let chunk = nums.slice(left,1);
    while (right <= nums.length) {
        // you need the i because you need to know which index to add to
        for (let i=0; i<chunk.length; i++){
            max = Math.max(max, chunk[i])
        }
        chunk = nums.slice(i, i+chunk[i])
        // can't do it this way bc won't know where to Stop as right in while condition.
        left = right+1
        right = max
        jumps++
    }
    return jumps
}