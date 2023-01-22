var findSubsequences = function(nums) {
    let answer = []
    let helper = function (i, subset) {
        let unique = new Set()
        for (let j = i; j < nums.length; j++) {
// i comes from a parameter of the helper function
            if (unique.has(nums[j]) || subset.length > 0 && subset[subset.length - 1] > nums[j]) continue
// we skip current if it's in unique OR
// subset length is > 0 AND the last in the subset is greater than the current (like 4,5,6,1,2,3,4)
// every time there is a new i, there is a new unique set, so it does not pull from before
// then go on to the next j, otherwise...
            unique.add(nums[j])
// add current to unique; cannot push bc unique is a set, you can only add
            subset.push(nums[j])
// push current to subset
            if (subset.length >= 2) answer.push([...subset])
// if subset is longer than 2, push it to answer
            helper(j+1, subset)
// recursively run helper again on next in nums array 
// this starts helper at the next in nums, with the subset as [4] when evaluating [6] or [4,6] at [7]
            subset.pop()
// but then also remove last from subset so that with [4,6,7,8, 9], it pops [4,6,7] to [4,6] then looks at [4,6] with [8]
// and in parallel, helper(j+1, subset) looks at [6,7,8] and then [6,7,9] when 8 is popped
// j is the start, it moves down the line looking for increases
// pop allows skipping of elements in the array until the loop ends
        }
// for loop ends with last digit of nums
    }
    helper(0, [])
    return answer
};