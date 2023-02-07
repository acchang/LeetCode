/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function(fruits) {
    let l = 0;
    const surveyed = new Map();
    let max = 0;

    for(let right = 0; right<fruits; right ++){
        let rightChar = fruits[right]
        if (!surveyed.get(rightChar)){surveyed.set(rightChar, 1)};
        else {surveyed.set(rightChar, surveyed.get(rightChar)+1)};


        
    }

    // two fruits
    // in the array, which two combinations occur most?
    // sliding window with look ahead 
    // if next 2 
// https://medium.com/theleanprogrammer/js-longest-substring-with-k-distinct-characters-sliding-window-technique-7585a0d34ee4

};