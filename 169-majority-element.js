/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const Numbers = {};
    for (num of nums){
        if (!Numbers[num]) {Numbers[num]=1}
        else {Numbers[num] ++}
    }
    return Object.keys(Numbers).find(key => Numbers[key] > nums.length/2);
};

