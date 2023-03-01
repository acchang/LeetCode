/**
 * @param {number[]} nums
 * @return {number[]}
 */






// too slow: 
var sortArray = function(nums) {
    let temp = 0
    for (let i=0; i<nums.length; ++i){
        for (let j=1; j<nums.length-1;j++){
            if (nums[j-1]>nums[j]){
                temp = nums[j]
                nums[j] = nums[j-1]
                nums[j-1] = temp
            }
        }
    }
    return nums
};


let tmp = 0;
const n = nums.length;
for (let i = 0; i < n; ++i) {
    for (let j = 1; j < n - i; ++j) {
        if (nums[j-1] > nums[j]) {
            tmp = nums[j];
            nums[j] = nums[j-1];
            nums[j-1] = tmp;
        }
    }
}
return nums;
};


const sortArray = (nums) => {
    let tmp = 0;
    for (let i = 0; i < nums.length; ++i) {
        for (let j = 1; j < nums.length - i; ++j) {
            if (nums[j-1] > nums[j]) {
                tmp = nums[j];
                nums[j] = nums[j-1];
                nums[j-1] = tmp;
            }
        }
    }
    return nums;
};