/**
 * @param {number[]} nums
 * @return {number}
 */
var minimizeArrayValue = function(nums) {
    let answer = 0
    let prefixSum = 0
    for (let i=0; i<nums.length; i++){
        prefixSum += nums[i]
        answer = Math.max(answer, Math.ceil(prefixSum / (i + 1)))
    }
    return answer
};

3 7 1 6





Perform a binary search over the minimum value that can be achieved for the maximum number of the array.
In each binary search iteration, iterate through the array backwards, greedily decreasing the current element until it is within the limit.

We need the minimum value in the array that will be the largest. It means
For ex. We have this array [3,7,1,6] , here max. value is 7 but can we obtain a value less than 7 by performing the operations mentioned in the question. So we perform the op.
[3, 7, 1, 6] -> [4, 6, 1, 6] now max. value is 6. Can we obtain less than 6. Lets check
[4, 6, 1, 6] -> [5, 5, 1, 6] -> [5, 5, 2, 5] now max. value is 5.
So, we obtained min. value that will be largest in array is 5. Now if we do any op. in this array it will result in increasing the max value but our goal is to minimize.

