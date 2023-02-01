// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let short, long, testPhrase, testSeg
    if (str1.length < str2.length) {short = str1, long = str2}
    else {short = str2, long = str1};

    for (let i=0; i<short.length; i++){
        if (long.length % short.length-i === 0){
            testSeg = short.slice(-i)
            testPhrase = testSeg.repeat(long.length/(short.length-i))
            if (testPhrase === long){return testSeg}
        };
    };
    return ""
};


