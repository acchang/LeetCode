// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/3143433/sliding-window-two-pointers/
// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/3118127/
// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1025753/


const findAnagrams = (s, p) => {
    const output = [];
    const neededChars = {};

    for (let char of p) {
        if (char in neededChars) {
            neededChars[char]++
        } else neededChars[char] = 1
    }
    let left = 0;
    let right = 0; 
    let count = p.length;

    while (right < s.length) {
        if (neededChars[s[right]] > 0) count--;
        neededChars[s[right]]--;
        right++;
        // start from zero, keep going right and checking.
        if (count === 0) output.push(left);
        // if you reach count === 0, then you have an anagram.
        if (right - left == p.length) {
        // if the space between left and right is the length of the anagram
            if (neededChars[s[left]] >= 0) count++;
        // AND if the leftmost in S in the map is greater or equal 0, then count goes up
            neededChars[s[left]]++;
        // AND add on the value of that key too.
            left++;
        // then move over.
        }
    }
    return output;
};




var checkInclusion = function(s1, s2) {
    let n = s1.length
    let m = s2.length
    let map = {}
    for (let c of s1) {
        map[c] = (map[c] ? map[c] : 0) + 1
    }
    // make a map of s1

    let l = 0, r = 0, c = 0
    while (r < m) {
    // while r is less than length of m, count up
        if (map[s2[r]] > 0) c++
    // if element of s2 
        map[s2[r]]--
        r++
        if (c == n) return true
    // if count equals s1.length
        if (r - l == n) {
    // if window is the 
            if (map[s2[l]] >= 0) c--
            map[s2[l]]++
            l++
        }
    }
    return false
};






// too time consuming 
var findAnagrams = function(s, p) {
    let answer = []
    let pMap = {}
    for (let i=0;i<p.length;i++){
        if (!pMap[p[i]]){pMap[p[i]]=1} else {pMap[p[i]]++}
    }

    for (let i=0; i<s.length-p.length+1; i++){
        let chunk = s.substring(i,i+p.length)
        let temp = {...pMap}
        for (let j=0; j<chunk.length; j++){
            if(temp[chunk[j]]){temp[chunk[j]]-- }
        }
        if (Object.values(temp).every((x) => x === 0)){answer.push(i)}
    }
    return answer
};