/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let ans = []
    let range = ""

    if (nums.length === 1) {ans.push(nums[0]+range); return ans}

    let counter = 0
    for (let i=0;i<nums.length;i++){
        if (range.length === 1 && nums[i]-1 == nums[i-1]){
            counter++;
            }
        if (range.length === 0){ range += nums[i]; counter++ }
        if (range.length === 1 && nums[i]+1 != nums[i+1] && counter > 1){
            range+= "->" + nums[i]
            ans.push(range)
            range = ""
            counter = 0
            }
        if (range.length === 1 && nums[i]+1 != nums[i+1] && counter === 1){
            ans.push(range)
            range = ""
            counter = 0}
        console.log(i, range, nums[i])
    }
    return ans
};