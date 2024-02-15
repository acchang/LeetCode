// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/description/?envType=daily-question&envId=2024-02-15
// DQ 2/14/24
// 25%

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>(b-a))
    for (let i=0; i<nums.length;i++){
        let remainder = nums.slice(i+1).reduce((acc, cv)=>acc+cv, 0)
        if (nums[i]<remainder){
            return remainder+nums[i]
        } else continue
    }
    return -1
};

// book solution is 80%

/**
 * @param {number[]} nums
 * @return {number}
 */

var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    let previousElementsSum = 0;
    let ans = -1;
    for (let num of nums) {
        if (num < previousElementsSum) {
            console.log("true", ans, num, previousElementsSum)
            ans = num + previousElementsSum;
        }
        previousElementsSum += num;
        console.log(num, ans, previousElementsSum)
    }
    return ans;
};

/*
console.log(num, ans, previousElementsSum)
ans is set at -1 bc that's the default, nothing found.
longest side must be less than all other sides combined

1 -1 1 -> for num = 1, ans stays -1, num is not < 0 so add to previousElementsSum
1 -1 2 -> 1 again, ans same, 1 is not less than 1, so PES =2
2 -1 4 -> 2, num = 2, ans still -1, PES =4
true -1 3 4 -> now num = 3, num<PES, so ans is now PES + num or 7
3 7 7
true 7 5 7 -> 5>7, so ans is 12
5 12 12 -> No more, but cannot break or earlier would fail
12 12 24
*/

/* played with this, breaking doesn't work bc
"According to the problem description, a valid polygon consists of sides where the longest side is smaller than the sum of its other sides."
so you could have something like:

[ 1,  1,  2, 3, 5, 12, 13]

if the longest side is 12, then total is 12 and not valid bc 12 = 12
But if longest side is 13, then total is 25 and 25 > 13.

So you must compute it all.

/**
 * @param {number[]} nums
 * @return {number}
 */

var largestPerimeter = function(nums) {
    nums.sort((a, b) => a - b);
    console.log(nums)
    let previousElementsSum = 0;
    let ans = -1;
    let attained
    for (let num of nums) {
        if (num < previousElementsSum) {
            console.log("true", ans, num, previousElementsSum)
            ans = num + previousElementsSum;
            attained = true
        }
        if (attained == true && num >= previousElementsSum){
            console.log("att"); 
            break
            }
        previousElementsSum += num;
        console.log(num, ans, previousElementsSum)
        }
    return ans;
};