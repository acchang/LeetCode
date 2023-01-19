// https://leetcode.com/problems/subarray-sums-divisible-by-k/description/

// https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/2913063/subarray-sums-divisible-by-k/
// https://leetcode.com/problems/subarray-sums-divisible-by-k/solutions/3070525/100-time-space-c-easy-to-understand-remainders-modulo-prefix-sum/?q=prefix+remainder&orderBy=most_relevant

// good explanation: https://www.youtube.com/watch?v=10wbS3uk2F8
// less useful: https://www.youtube.com/watch?v=u9m-hnlcydk&t=1s
// also good (JS): https://www.youtube.com/watch?v=gDEfAqJ8cGA


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    console.log(nums, k)
    let prefixRem = 0, res = 0
    let map = {}
    for (let i = 0; i < k; i++) {
        map[i] = 0
    }
    map[0] = 1

    for (let num of nums) {
        prefixRem = (prefixRem + num % k + k) % k
        // this just gets the remainder of the current num. Add k and % k eliminates any negative value you might get without it, because % is not modulo, but remainder, see note below.
        res += map[prefixRem]
        // add to res the value of the `prefixRem` key in your map.
        map[prefixRem]++
        // add one to the `prefixRem` key (this is important bc only when the key has two points does the result get 1. We don't add it before bc the numbers with only one instance of a remainder would not make any valid subarrays.)
    }
    return res

};

/*
EXPLANATION
From video 3:30-4:30
https://www.youtube.com/watch?v=10wbS3uk2F8

- add each in the array to get an array of the sums before it
- if two sums have the same remainder of k, then the difference between them will be divisible by k evenly because otherwise they would not have the same remainder.
3 % 5 = 3; 23 % 5 = 3; 23-2 = 20 % 5 = 0
OR
23 % 7 = 2; 44 % 7 = 2; 44 - 23 = 21 % 7 = 0
- so with   [4,5,0,-2,-3,1]:
    summed  [4,9,9, 7, 4,5]
- 4 % 5 is 4, so map is {4 => 1} Map denotes {remainder => # of times}
- Next in summed: 9 % 5 is 4, you so have two points in summed when %5 = 4. The difference between them % 5 = 0. That difference is 5 so map is {4 => 2} and result (arrays divisible by k)= 1. That one array is [5]
- Next in summed: 9 % 5 is 4, you so have three points in summed when %5 = 4. Map is updated to {4 => 3} and you add two more to result. [0] and [4,5,0,-2,-3,1], result = 3
- Next in summed: 7 % 5 is 2. Map adds {2=>1}
- Next in summed: 4 % 5 is 4. Map becomes {4=>4} Result is [-2,-3], [-2,-3,0], [-2,-3, 0, 5]. You add the current plus everything before. So if there was another X%5=4, it would be [x], [x,-2,-3], [x, -2, -3, 0] and [z, -2, -3, 0, 5], Result = 6.
- Next in summed: 5 % 5 is 0. Map becomes {0=>2} (0 is intialized at 1 because if it shows up just once there should be a difference.) Add one more to Result, which is [4,5,0,-2,-3,1]
*/


/* 
WHY YOU NEED TO MANIPULATE %
prefixRem = (prefixRem + num % k + k) % k 
prefixRemWrong = (prefixRem + num % k)

Modulo is the same as division
so if num is negative that's an issue.
- so with   [4,5,0,-2,-3,1]
    summed  [4,9,9, 7, 4,5]
    prefix  [4,4,4, 2, 4,0]
    wrong   [4,4,4, 2,-1,0]

prefixRem = (prefixRem + num % k + k) % k 
prefixRemWrong = (prefixRem + num % k) 

It's because % is not modulo but remainder.
so: 
I put 2 + -3 % 5 into Google, it interprets it at (2 + (-3) modulo 5) = 4. But when I put console.log(2 + -3 % 5) into the console, I get -1. 
2 + -3 = -1 divided by 5, remainder is -1

Technically, "modulo" and "remainder" are different mathematical operations.  JavaScript does not have a modulo operator, "%" is the remainder operator.  See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder


