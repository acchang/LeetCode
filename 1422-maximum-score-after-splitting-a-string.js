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
    // you're counting ones as you go
    // top score is Zeroes on the Left PLUS Total Zeros minus Ones on the Left
    // OR Zeros(left)+Ones(total)-Ones(Left)
    // since Ones(total) is a constant, we maximize Zeros(left) minus Ones(left)
    // ones on left will disappear from total
        if ( (zeroes-ones) > max){max= (zeroes-ones)}
    // you don't count last one bc you want a split of at least one
    }
    if (s[s.length-1] == 1){ones++}
    // you add to ones if the last is 1
    return max + ones
};

