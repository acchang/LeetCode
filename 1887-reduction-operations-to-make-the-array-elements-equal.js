/**
 * @param {number[]} nums
 * @return {number}
 */

// Passes initial tests but runs out of time on 62/78

var reductionOperations = function(nums) {
    let counter = 0
    nums.sort((a,b)=>b-a)

function allSame(num) {return num === nums[nums.length-1]}

    while (!nums.every(allSame)){
        for (let i=0; i<nums.length; i++){
            if (nums[i] != nums[i+1] && nums[i+1]){
                nums[i]=nums[i+1]
                counter++
                }
        }
    }

    return counter
};

// better:

/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function(nums) {
    let ans = 0
    let up = 0
    nums.sort((a,b)=>a-b)
    
    for (let i=1; i<nums.length; i++){
        if (nums[i] != nums[i-1]){up++}
        ans += up
        // when nums[i] == nums[i-1], up stays the same but still added to ans
    }
    return ans
};

