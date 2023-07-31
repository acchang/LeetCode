/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function(nums) {
    const n = nums.length;
    const max_diff = new Array(n).fill(0);

    for (let i = n - 1; i >= 0; i--) {
        max_diff[i] = nums[i];
        console.log("i", i, max_diff)
        // starts off with max_diff[i] as nums[i]
        for (let j = i + 1; j < n; j++) {
        // loops from i+1 to the end
            max_diff[j] = Math.max(nums[i] - max_diff[j], nums[j] - max_diff[j - 1]);
            console.log(j, max_diff)
        //  max_diff[j] is the max of nums[i]-current md[j] OR current nums[j]-previous
        // WHY?
        }
    }

    return max_diff[n - 1] >= 0;    
};



var PredictTheWinner = function (nums) {
    let n = nums.length;
    let choose = true;

    const validate = (nums, i, j, choose) => {
        if (i > j) return 0;
        // terminal condition

        let res = 0;

        // recursive if one way then the other
        if (choose) res = Math.max(nums[i] + validate(nums, i + 1, j, false), nums[j] + validate(nums, i, j - 1, false));
        else res = Math.min(-nums[i] + validate(nums, i + 1, j, true), -nums[j] + validate(nums, i, j - 1, true));
        return res;
    }

    let maxScore = validate(nums, 0, n - 1, choose);
    return maxScore >= 0;
};