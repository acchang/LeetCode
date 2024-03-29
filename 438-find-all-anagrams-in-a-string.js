// https://leetcode.com/problems/find-all-anagrams-in-a-string/

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */

// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/3143433/sliding-window-two-pointers/
// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/3118127/
// https://leetcode.com/problems/find-all-anagrams-in-a-string/solutions/1025753/


// sort of like the advanced solution here: 
// https://leetcode.com/problems/permutation-in-string/solutions/3140957/

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
        if (neededChars[s[right]] > 0){count--;}
        // count only lowers when char found
        neededChars[s[right]]--;
        // changes the map no matter what
        right++;
        // start from zero, keep going right and checking.
        if (count === 0) output.push(left);
        // if you reach count === 0, then you have an anagram.
        if (right - left == p.length) {
        // if the space between left and right is the length of the anagram
            if (neededChars[s[left]]>= 0) {count++;}
        // AND if the leftmost in S in the map is greater or equal 0, then count goes up
        // count only goes back up when the window moves on and the one left behind is in the map
        // must be '>= 0' cannot be just exists because 0 would evaluate to false
            neededChars[s[left]]++;
        // regardless, the value of that key goes up (if it can be incremented)
            left++;
        // then left moves over.
        }
    }
    return output;
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