// idea from https://www.youtube.com/watch?v=cjWnW0hdF1Y&t=10s

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let listOfLIS = new Array(nums.length).fill(0);
    for (let i=nums.length-1;i>=0;i--){
        let currentChoices = [1]
        for (let j=i; j<nums.length;j++){
            if (nums[i] < nums[j]){currentChoices.push(1+listOfLIS[j])}
        }
        let LIS = Math.max(...currentChoices)
        listOfLIS[i] = LIS
    }
    return Math.max(...listOfLIS)
};

// alt: 16% run 72% memory, about the same

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let listOfLIS = new Array(nums.length).fill(1);
    let longest = 1
    for (let i=nums.length-1;i>=0;i--){
        for (let j=i; j<nums.length;j++){
            if (nums[i] < nums[j]){listOfLIS[i] = Math.max(listOfLIS[i], listOfLIS[j]+1)}
            longest= Math.max(longest, listOfLIS[i])
        }

    }
    return longest
};

// from solutions: 25% run 45% memory


const lengthOfLIS = (nums) => {
	let dp = new Array(nums.length).fill(1);
	let longest = 1;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[i], dp[j]+1);
				longest = Math.max(longest, dp[i]);
			}
		}
	}
	return longest;
}

