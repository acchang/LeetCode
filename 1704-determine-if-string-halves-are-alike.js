// New attempt 1/11/24
// https://leetcode.com/problems/determine-if-string-halves-are-alike/description/?envType=daily-question&envId=2024-01-12

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let count = 0
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    for (let i=0; i<s.length/2; i++){
        if (vowels.includes(s[i])){count++}
    }
    for (let i=s.length-1; i>s.length/2-1; i--){
        if (vowels.includes(s[i])){count--}
    }
    return count == 0
};


// also:

// https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/solutions/4555349/9653easy-solutionwith-explanation/

var minSteps = function(s, t) {
    const countS = new Array(26).fill(0);
    const countT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    // subtract 'a' bc want the response to fit into array of 26
        countT[t.charCodeAt(i) - 'a'.charCodeAt(0)]++;
    }

    let steps = 0;
    for (let i = 0; i < 26; i++) {
        steps += Math.abs(countS[i] - countT[i]);
    }

    return Math.floor(steps / 2);  
};



//-------
var halvesAreAlike = function(s) {
    let a = s.slice(0,Math.floor(s.length/2))
    let b = s.slice(Math.floor(s.length/2))
    let aTotal = a.split("").filter((x)=> x === 'a' ||  x === 'e' ||  x === 'i' ||  x === 'o' ||  x === 'u' || x === 'A' ||  x === 'E' ||  x === 'I' ||  x === 'O' ||  x === 'U' ).length
    let bTotal = b.split("").filter((x)=> x === 'a' ||  x === 'e' ||  x === 'i' ||  x === 'o' ||  x === 'u' || x === 'A' ||  x === 'E' ||  x === 'I' ||  x === 'O' ||  x === 'U' ).length
    return aTotal === bTotal ? true : false
};


// Also, a little better:


var halvesAreAlike = function(s) {
    let a = s.slice(0,s.length/2)
    let b = s.slice(s.length/2)
    const vowels = "aeiouAEIOU"
    let aTotal = 0, bTotal=0
    for (let i=0;i<a.length;i++){
        if (vowels.includes(a[i])){aTotal +=1}
    }
    for (let j=0;j<b.length;j++){
        if (vowels.includes(b[j])){bTotal +=1}
    }
    return aTotal === bTotal ? true : false
};



/* https://leetcode.com/problems/determine-if-string-halves-are-alike/

this is smart to use includes:


const vowels = "aeiouAEIOU"

var halvesAreAlike = function(S) {
    let mid = S.length / 2, ans = 0
    // set a mid point
    for (let i = 0, j = mid; i < mid; i++, j++)
    // loop from zero to midpoint (i), just moves correspondingly
        ans += vowels.includes(S.charAt(i)) - vowels.includes(S.charAt(j))
    // go through vowels, if the first of one half is true, becomes 1
    // go through vowels, if the first of other half is true, becomes 1
    // then if the same number of vowels then ans is 0
    return ans === 0
};

There is no need for a floor bc it will always be even.
"Split this string into two halves of equal lengths, and let a be the first half and b be the second half."

