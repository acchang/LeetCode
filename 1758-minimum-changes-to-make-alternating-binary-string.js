/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let zeroCount = 0
    let onesCount = 0
    //start 0
    let testEle
    for (let i=0; i<s.length; i++){
        if (i%2 == 0){testEle = 0} else {testEle = 1}
        if (s[i] != testEle){zeroCount++}
    }

    // start 1
    for (let i=0; i<s.length; i++){
        if (i%2 == 0){testEle = 1} else {testEle = 0}
        if (s[i] != testEle){onesCount++}
    }
    
    return Math.min(zeroCount, onesCount)
};


// one pass, superfast


/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    let zeroCount = 0

    let testEle
    for (let i=0; i<s.length; i++){
        if (i%2 == 0){testEle = 0} else {testEle = 1}
        if (s[i] != testEle){zeroCount++}
    }

    return Math.min(zeroCount, s.length - zeroCount)
};

