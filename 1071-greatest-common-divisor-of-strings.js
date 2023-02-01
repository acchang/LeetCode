// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let short, long, testPhrase
    if (str1.length < str2.length) {short = str1, long = str2}
    else {short = str2, long = str1};

    for (let i=0; i<short.length; i++){
        if (long.length % short.length-i === 0){
            testPhrase = short.repeat(long.length/short.length)
            console.log(long.length, short.length-i, testPhrase)
        }
        if (testPhrase === long){return short.slice(-i)} else {console.log(testPhrase, 'no')}
    };
}

