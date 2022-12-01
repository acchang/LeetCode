var halvesAreAlike = function(s) {
    let a = s.slice(0,Math.floor(s.length/2))
    let b = s.slice(Math.floor(s.length/2))
    let aTotal = a.split("").filter((x)=> x === 'a' ||  x === 'e' ||  x === 'i' ||  x === 'o' ||  x === 'u' || x === 'A' ||  x === 'E' ||  x === 'I' ||  x === 'O' ||  x === 'U' ).length
    let bTotal = b.split("").filter((x)=> x === 'a' ||  x === 'e' ||  x === 'i' ||  x === 'o' ||  x === 'u' || x === 'A' ||  x === 'E' ||  x === 'I' ||  x === 'O' ||  x === 'U' ).length
    return aTotal === bTotal ? true : false
};

/* https://leetcode.com/problems/determine-if-string-halves-are-alike/

