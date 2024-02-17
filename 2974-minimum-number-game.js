/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    let arr = []
    nums.sort((a,b)=>a-b)
    for (let i=0; i<nums.length; i=i+2){
        arr.push(nums[i+1])
        arr.push(nums[i])
    }
    return arr
};