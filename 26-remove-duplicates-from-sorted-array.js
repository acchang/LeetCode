var removeDuplicates = function(nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i+1]) {
            nums.splice(i, 1);
            i--;
            // steps it back to the first
            console.log(nums)
        }
    }
};


/* 

https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/

