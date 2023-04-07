// https://leetcode.com/problems/minimize-maximum-of-array/description/

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
    }gi
return answer
}

/* Return the minimum possible value of the maximum integer of nums after performing any number of operations.

minimum possible value means you average things out
maximum integer of nums means the greatest between average of each pair

From discussion -- 

"Here's one way to interpret the goal: the only operation that we can run on the array transfers a unit toward elements on the left without affecting the overall sum. If you think about each array entry as a pile of rocks, the only allowed operation is to take a rock from one pile and move it to the pile on its left. The goal of the problem is to rearrange the rocks by applying this operation as many times as you want to make it so that the tallest pile is as low as possible."

Imagine having two number 5 10 . We need to decrease one and increase other, how would we minimize the maximum number among them? By Evenly distributing them! We can then take the ceiling of their average (10+5)/2 = 7.5 = 8 .

If there are three numbers, we need to take average of all of them and update our ans if it's bigger than the previously achieved answer, same for the whole array.

Take a prefix sum variable, an ans variable, iterate through the array from 1st index, keep finding the ceiling of average until current iteration and update the answer as ans = max(ans, (total+i)/(i+1)).

To summarize, we are evenly distributing all the elements so as to make the maximum[ceil of average] among them minimum, and keeping track of the maximum value as answer to return it.



explanation:
https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381500/very-easy-solution-100-explained-o-n-javascript-python/

/*
tested: 3716

@3
PFS = 3
A = (0 or 3/1) => 3
@7
PFS = 10
A = (3, 10/2 ) => 5
@1
PFS = 11
A = (5, 11/3) => 5
@6
PFS = 17
A = (5, 16/4) => 5

Perform a binary search over the minimum value that can be achieved for the maximum number of the array.
In each binary search iteration, iterate through the array backwards, greedily decreasing the current element until it is within the limit.

We need the minimum value in the array that will be the largest. It means
For ex. We have this array [3,7,1,6] , here max. value is 7 but can we obtain a value less than 7 by performing the operations mentioned in the question. So we perform the op.
[3, 7, 1, 6] -> [4, 6, 1, 6] now max. value is 6. Can we obtain less than 6. Lets check
[4, 6, 1, 6] -> [5, 5, 1, 6] -> [5, 5, 2, 5] now max. value is 5.
So, we obtained min. value that will be largest in array is 5. Now if we do any op. in this array it will result in increasing the max value but our goal is to minimize.

