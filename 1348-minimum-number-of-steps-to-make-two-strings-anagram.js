// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/description/?envType=daily-question&envId=2024-01-13

// passes but slow:

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    for (let i=0; i<s.length; i++){
        if (t.includes(s[i])){
            let a = t.slice(0,t.indexOf(s[i]))
            let b = t.slice(t.indexOf(s[i])+1)
            t = a + b
        }
    }
    return t.length
};

// better, per solution:

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    const mainMap = new Map();
    for (let i=0; i<s.length; i++){
        if (mainMap.has(s[i])){
            mainMap.set(s[i], mainMap.get(s[i])+1)}
        else {mainMap.set(s[i], 1)}

        if (mainMap.has(t[i])){
            mainMap.set(t[i], mainMap.get(t[i])-1)}
        else {mainMap.set(t[i], -1)}
    }

    let ans = 0
    
    for (val of mainMap.values()) {
        if (val >0){ans += val}
        }

    return ans
};

// superfast:
// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555349/96-53-easy-solution-with-explanation/?envType=daily-question&envId=2024-01-13


var minSteps = function(s, t) {
    const countS = new Array(26).fill(0);
    const countT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
        countT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let steps = 0;
    for (let i = 0; i < 26; i++) {
        steps += Math.abs(countS[i] - countT[i]);
    }

    return Math.floor(steps / 2);  
};