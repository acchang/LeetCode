/**
 * @param {string[]} nums
 * @return {string}
 */


// recursive backtracking algo:

/**
 * @param {string[]} nums
 * @return {string}
 */
/**
 * @param {string[]} nums
 * @return {string}
 */
function findDifferentBinaryString(nums) {
    const n = nums[0].length
    return backtrack("", nums, n)
  }
// starts here, with currentStr = ""

// then it keeps building and testing, adding a "1" or "0"
const backtrack = (currentStr, results, n) => {
    if (currentStr.length === n) {
      if (!results.includes(currentStr)) return currentStr
      return false
    }
    return backtrack(currentStr+"0", results, n) ||
      backtrack(currentStr+"1", results, n)
// The OR function is a short-circuit OR evaluation - it returns the first element that is not false, or the last false element otherwise.
  }
  

  





var findDifferentBinaryString = function(nums) {
    // cantors goes through the array and takes the opposite each digit of the index of the number?
        let ans = ""
        for (let i=0; i<nums.length; i++){
            if (nums[i][i] == 1){ans +=0} else {ans+=1}
        }
        return ans
    // ans will differ from every string in at least one position. 
    // if you differ from every string in at least one position, then you are not in the set
    }


// this passed but is wrong as the loop only works single 1s.
var findDifferentBinaryString = function(nums) {
    let n = nums.length
    let template = new Array(n).fill(0)
        let testValue = template.join("");
        console.log("FTV", testValue)
        if (!nums.includes(testValue)){return testValue}
    for (let i=0; i<template.length;i++){
        if (template[i] == 0){template[i]=1}
        testValue = template.join("");
        console.log("FTV", testValue)
        if (!nums.includes(testValue)){return testValue}
    }
};
