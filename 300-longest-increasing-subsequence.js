/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let listOfLIS = new Array(nums.length).fill(0);
    for (let i=nums.length-1;i<=0;i--){
        let currentChoices = [1]
        for (let j=i; j<nums.length-1;j++){
            if (i < nums[j]){currentChoices.push(1+listOfLIS[j])}
        }
        let LIS = Math.max(...currentChoices)
        listOfLIS[i] = LIS
    }
    return Math.max(listOfLIS)
};