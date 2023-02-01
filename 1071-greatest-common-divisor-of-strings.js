// https://leetcode.com/problems/greatest-common-divisor-of-strings/description/

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    let short, long, testSeg
    if (str1.length < str2.length) {short = str1, long = str2}
    else {short = str2, long = str1};

    for (let i=0; i<short.length; i++){
        if (long.length % (short.length-i) === 0){
            testSeg = short.slice(0,short.length-i)
            if ((testSeg.repeat(long.length/testSeg.length) === long) && 
                (testSeg.repeat(short.length/testSeg.length) === short)
                 ){return testSeg}
        };
    }
    return ""
}


// faster: https://www.youtube.com/watch?v=KZxEvHd0VaY
// also from: https://leetcode.com/problems/greatest-common-divisor-of-strings/solutions/3024822/greatest-common-divisor-of-strings/?orderBy=most_relevant


/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */


var gcdOfStrings = function(str1, str2) {
    if (str1+str2 != str2+str1){return ""}
    let a = str1.length
    let b = str2.length

    var gcd = function(a, b) {
        if (b) {
            return gcd(b, a % b);
        } else {
            return Math.abs(a);
        }
    }
    return str1.slice(0,gcd(a,b))
} 
