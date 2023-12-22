/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ones 
    s.match(/1/g) == null ? ones = 0 : ones = s.match(/1/g).length
    let zeroes = 0
    let max = 0
    for (let i=0; i<s.length-1;i++){
        if (s[i] == 0){zeroes++}
        if (s[i] == 1){ones--}
        let total = zeroes + ones
        if (total>max){max=total}
    }
    return max
};

/// this is one pass, pretty fancy, a bit faster

/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let ones = 0
    let zeroes = 0
    let max = -Infinity
    for (let i=0; i<s.length-1;i++){
        if (s[i] == 1){ones++} else zeroes++
        console.log(s[i], zeroes, ones, zeroes-ones)
        if ( (zeroes-ones) > max){max= (zeroes-ones)}
    }
    if (s[s.length-1] == 1){ones++}
    return max + ones
};

