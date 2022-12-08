/**
 * @param {string} s
 * @return {number}
 */
//  PREP
//  lay it down, if next is bigger than subtract smaller until prev bigger
//  create a holder before adding
var romanToInt = function(s) {
    let answer = 0
    let holder = 0
    let hash = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000}

    for (let i=0;i<s.length;i++){
        console.log(hash[s[i]], hash[s[i+1]])
        if ( hash[s[i]] >= hash[s[i+1]] || typeof hash[s[i+1]] == 'undefined') {
            answer += hash[s[i]]};
        
    }
    return answer   
};