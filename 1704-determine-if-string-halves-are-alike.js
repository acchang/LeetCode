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

