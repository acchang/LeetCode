// trying mine without the slice.

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



// lol I found Paul: https://leetcode.com/problems/minimum-average-difference/discuss/1994789/Javascript-straightforward-with-explanation

var minimumAverageDifference = function(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let index = 0;
    for (let i = 0, left=0, right=nums.reduce((sum, curr)=>sum+curr, 0), curr; i<nums.length; i++) {
        left+=nums[i];
        right-=nums[i];
        curr = Math.abs(Math.floor(left/(i+1))-Math.floor(right/(nums.length-i-1)||0))
        if (min >curr) {
            min = curr
            index = i;
        }
    }
    return index; 
 };



// Tried this, are the fills the issue or the slice?

const minimumAverageDifference = function(nums) {
	const n = nums.length;
	
    let leftSumsArray = []
    for (let i=1; i<=n; i++){
        leftend = nums.slice(0,i);
        leftSumsArray.push(leftend.reduce((a,b) => a+b, 0))
    }

    let rightSumsArray = []
    for (let i=0; i<n; i++){
        rightend = nums.slice(i,n);
        rightSumsArray.push(rightend.reduce((a,b) => a+b, 0))
    }
    
    let minAvgDiff = Infinity
    
    for (let i = 0; i < n; i++) {
		const leftAvg = Math.floor(leftSumsArray[i] / (i + 1));
		const rightAvg = i == n - 1  ? 0 : Math.floor(rightSumsArray[i + 1] / (n - i - 1));
		const avgDiff = Math.abs(leftAvg - rightAvg);
		
		if (avgDiff < minAvgDiff) {
			minAvgDiff = avgDiff;
			answer = i;}
    }
        
        return answer;
    };

// why does the below time out?

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

// Why does the above time out and these do not? Was it done for memory? What lessons can I take, break it up?
// https://leetcode.com/problems/minimum-average-difference/discuss/2875404/JavaScript-or-2-Approaches-with-Explanation-Clean-Code

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