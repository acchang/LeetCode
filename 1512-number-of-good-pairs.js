/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let ans = 0
    for (let i=0;i<nums.length;i++){
        for (let j=i+1;j<nums.length;j++){
            if (nums[i]==nums[j]){ans++}
        }
    }
    return ans
};

// or, better:

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function(nums) {
    let ans = 0
    let counts = {}
    for (num of nums){
        if (counts[num]){ans=ans+counts[num]; counts[num]++} else (counts[num] = 1)
    }
    return ans
};

// best way to see this:

// nums = [1,1,1,1]

// { '1': 1 } 0 -- first 1 doesn't exist in map so it's added
// { '1': 2 } 1 -- second 1 means 1 is in map, so first the value is added, and then updated (one pair)
// { '1': 3 } 3 -- third 1, add the value (2) total is 3, update to 3. When you have three 1s, you can make 3 pairs. 
// { '1': 4 } 6 -- fourth 1 is all those pairs, plus 1 for each in [1,1,1]
// if there was a fifth, it would be 4 + 6 = 10

// or look at it this way:

// { '1': 1 } 0
// { '1': 2 } 1
// { '1': 3 } 3
// { '1': 4 } 6

// after there is one pair, you can pair it with the number of new sames. 
// when there are 3 of the same you get 1 pair + 2 other matches.
// when there are 4 of the same you get the old 3 pairs + 3 other matches.
