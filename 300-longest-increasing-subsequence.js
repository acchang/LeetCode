/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let listOfLIS = [1]
    for (let i=nums.length-2;i<=0;i--){
        let currentChoices = []
        for (let j=i; j<nums.length-1;j++){

        }
        if (nums[i]<nums[i+1]){}
        let LIS = Math.max(...currentChoices)
        listOfLIS.unshifft(LIS)
    }

    }
    
};