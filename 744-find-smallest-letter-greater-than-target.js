// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    let left = 0
    let right = letters.length
    while (left<=right){
        const mid = Math.floor((left+right)/2)
        if (letters[mid]>=target){right = mid-1} else {left = mid+1}
    }
    /*
    ["c","f","j"] t=c
    l0 m1 r2
    m=f>c 
    l0 m0 r1
    m=c>=c, m=0



   */ 
        return letters[left]
    };
    

    


// No charcode needed!

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function(letters, target) {
    if (letters.length === 1) {
        return letters[0];
    }

    let left = 0;
    let right = letters.length;
    
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
        console.log(left,mid,right)
        console.log(letters[mid], target, letters[mid] <= target)
    }
    if (left === letters.length) {
        return letters[0];
    } else {
        return letters[left];
    }
};
