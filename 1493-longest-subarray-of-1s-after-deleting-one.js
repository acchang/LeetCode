/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    if (nums.indexOf(0) == -1){return nums.length -1}

    let firstSet = nums.indexOf(0) - 0
    let counter = 0
    let secondSet = 0
    let highest = 0
    for (let i = nums.indexOf(0)+1; i<nums.length; i++){
        if (nums[i]===0){ secondSet=counter;
                    if (firstSet+secondSet>highest){highest=firstSet+secondSet}
        secondSet = 0
        firstSet = counter
        counter = 0;
                    }
        else {counter++};
        }
        if (nums[nums.length-1] == 1){
        secondSet = counter;
        if (firstSet+secondSet>highest){highest=firstSet+secondSet}
    }
    return highest
};