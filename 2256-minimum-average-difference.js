var minimumAverageDifference = function(nums) {
    let lowest = Infinity;
    let lowestIndex = -1
    for (let i=nums.length-1; i>-1; i--){
        let first = nums.slice(0,i+1);
        let firstAvg = Math.floor(first.reduce((a, b) => a + b, 0) / first.length);
        let second = nums.slice(i+1);
        second == 0 ? secondAvg = 0 : secondAvg = Math.floor(second.reduce((a, b) => a + b, 0) / second.length)
        let result = Math.abs(firstAvg - secondAvg);
        if (result<=lowest){lowest=result, lowestIndex=i}
    }
    return lowestIndex
};

// Why does the above time out and these do not?

const minimumAverageDifference = function(nums) {
	const n = nums.length;
	const leftSum = new Array(n).fill(0);
	const rightSum = new Array(n).fill(0);
	
	leftSum[0] = nums[0];
	for (let i = 1; i < n; i++) 
		leftSum[i] = leftSum[i - 1] + nums[i];
	
	rightSum[n - 1] = nums[n - 1];
	for (let i = n - 2; i >= 0; i--)
		rightSum[i] = rightSum[i + 1] + nums[i];
	
	let minAvgDiff = Infinity;
	let answer = -1;
	
	for (let i = 0; i < n; i++) {
		const leftAvg = Math.floor(leftSum[i] / (i + 1));
		const rightAvg = i == n - 1  ? 0 : Math.floor(rightSum[i + 1] / (n - i - 1));
		const avgDiff = Math.abs(leftAvg - rightAvg);
		
		if (avgDiff < minAvgDiff) {
			minAvgDiff = avgDiff;
			answer = i;
		}
	}
	
	return answer;
};


const minimumAverageDifference = function(nums) {
	const n = nums.length;
	let leftSum = 0;
	let rightSum = 0;

	for (let i = 0; i < n; i++) 
		rightSum += nums[i];

	let minAvgDiff = Infinity;
	let answer = -1;

	for (let i = 0; i < n; i++) {
		leftSum += nums[i];
		rightSum -= nums[i];

		const leftAvg = Math.floor(leftSum / (i + 1));
		const rightAvg = i == n - 1  ? 0 : Math.floor(rightSum / (n - i - 1));
		const avgDiff = Math.abs(leftAvg - rightAvg);
		
		if (avgDiff < minAvgDiff) {
			minAvgDiff = avgDiff;
			answer = i;
		}
	}

	return answer;
};