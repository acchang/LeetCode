/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let n = nums.length;
    let dp =  new Array;
    dp[0] = 0
    dp[1] = nums[0]

    for (let i=1; i<nums.length; i++){
        console.log(dp)
        dp[i+1] = Math.max(dp[i], dp[i-1] + nums[i])
    }
    return dp[nums.length]
};

/* 
for each house, rob current and skip next or skip current and rob next
https://medium.com/outco/how-to-solve-the-house-robber-problem-f3535ebaef1b

nums [2, 1, 1, 2]
ans: [0, 2, 2, 3, 4]

- you pick between the first two nums as to where to start (0 and 2)
- you pick the bigger one (2) 
- ans begins with 0, then 2 ... so ans is [0, 2]
- then look at nums: do you want the previous ans (0) and the current nums (1)? Or do you stay with the current ans (2)
- you pick 2, ans is [0, 2, 2,]
- then look at nums: do you want the previous ans (2) and the current nums (1)? Or do you stay with the current ans (2)
- you pick 3, ans is [0, 2, 2, 3]

basically you see if current nums plus previous ans is better total 
if not, then current ans remains and you skip the current and get a new ans.
then you look at ans again and evaluate nums again.






dp: [0, 2, ?] 
dp[2] = dp[1] (2) or 0 + 1
... this means start with nums[0] or nums[1] ie max of 2 or 1. Obviously choose 2. 
2 1 1 2
start with 2 or 1
choose 2, total is 2, skip 1a
next 1a or 1b, choose 2+1b for highest, skip 1a, high is 3
next 1b or 2, 3 or 4, skip 1b, high is 4



choice is 2
dp[3] = dp[2] (2) or 2 + ]




// nums: [1, 2, 3, 1]
// dp: [0, 1, ?] 1 or 0 + 2

// dp[2] is the max of dp[1], which is 1 or dp[i-1] = 0 + nums[i] 2 ==> 2
// so it's asking 1 or 0+2, which is 2
// so dp: [0, 1, 2]
// dp[3] is the max of dp[2], which is 2 or dp[i-1] = 1 + nums[2] = 3 = 4
// so dp: [0, 1, 2, 4]
// then dp[4] is max of dp[3] (4) OR 2 + 1 = 3
// so dp: [0, 1, 2, 4, 4]










// https://leetcode.com/problems/house-robber/description/
// evens and odds don't work bc something like 2, 1, 1, 2

var rob = function(nums) {
    let evens = 0
    let odds = 0
for (let i=0;i<nums.length;i+=2){
    evens += nums[i]
}
for (let i=1;i<nums.length;i+=2){
    odds += nums[i]
}
return Math.max(evens, odds)