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

// test alt solution - 56 speed /45 memory; mine is 57 speed/ 52 memory
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(arr) {
    let max = 0;
    let deleted = 0;
    let l = 0;
    let r = 0; 

    while(r < arr.length) {
        if(arr[r] === 1 || deleted === 0) {
            if(arr[r] === 0) deleted = 1;
            max = Math.max(max, r - l + 1 - deleted);
            r++;
        } else {
            if(arr[l] === 0) deleted = 0;
            l++;
        }
    }

    return max === arr.length ? max - 1 : max;
};