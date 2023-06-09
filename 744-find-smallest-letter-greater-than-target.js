// https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/

// Answer understood but not exactly done on my own, saving

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
    // set ends
    while (left <= right) {
// as long as right does not go less than left
// needs = bc without it, would only stop at mid === left
// ["c","f","j"], c
        const mid = left + Math.floor((right - left) / 2);
// l0, r3, m1,
// 2) l0, r0, m0
            if (letters[mid] <= target)
            left = mid + 1;
        } else {
            right = mid - 1;
// if mid is less than target then left must go higher to push mid higher
// f>c, so r=0
// c=c, so l=1 (l>r, so it ends)
        }
    }
    if (left === letters.length) {
        return letters[0];
    } else {
        return letters[left];
    }
};