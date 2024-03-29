// https://leetcode.com/problems/number-of-zero-filled-subarrays/

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    let answer = 0
    let counter = 0
    for (let i = nums.length-1; i>-1; i--){
        if (nums[i] === 0){counter++}
        if (nums[i] != 0){
            while (counter > 0) {
                answer += counter
                counter--
            }
        }
    }
    if (counter >0){
        while (counter > 0) {
                answer += counter
                counter--}
    }
    return answer
  };
      

  
// more efficient alt solution: https://leetcode.com/problems/number-of-zero-filled-subarrays/solutions/2330736/javascript-counting/?q=javascript&orderBy=most_relevant
// helper function uses math trick instead of factorializing with addition
// did not have to count backwards, works the same way

  var zeroFilledSubarray = function(nums) {
    function getOutcome(n) {
        return n * (n + 1) / 2
    }
    
    let result = 0
    let count = 0
    for (const val of nums.values()) {
        if (val === 0) {
            count++
        } else {
            const outcome = getOutcome(count)
            result += outcome
            count = 0
        }
    }
    if (count) {
        const outcome = getOutcome(count)
        result += outcome
        count = 0
    }  
    return result
};

// Refactoring my code:

/**
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function(nums) {
    function summedCounter(n) {return n * (n + 1) / 2}
    let answer = 0
    let counter = 0
    for (let i = 0; i<nums.length; i++){
        if (nums[i] === 0){counter++}
        if (nums[i] != 0){
            answer += summedCounter(counter)
            counter = 0
            }
        }
    answer += summedCounter(counter)
    return answer
  };


// One more refactor with my version of summed counter as a helper function

var zeroFilledSubarray = function(nums) {
    function summedCounter(n) {
        let total = 0
        while (n>0){
            total += n
            n--
        }
        return total
    }; 

    let answer = 0
    let counter = 0
    for (let i = 0; i<nums.length; i++){
        if (nums[i] === 0){counter++}
        if (nums[i] != 0){
                answer += summedCounter(counter)
                counter = 0
            }
        }

    answer += summedCounter(counter)
    return answer
  };

