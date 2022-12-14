/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let evens = 0
    let odds = 0
for (let i=0;i<nums.length;i+=2){
    evens += nums[i]
}
for (let i=1;i<nums.length;i+=2){
    odds += nums[i]
}
return Math.max(evens, odds)

