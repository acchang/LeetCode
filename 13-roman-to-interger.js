/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let hash = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
     for (let i=0 ;i<s.length-1; i++){
        if ( hash[s[i]] >= hash[s[i+1]]){ answer += hash[s[i]] };
        if ( hash[s[i]] < hash[s[i+1]] ){ answer += hash[s[i]] * -1 };
    }
    return answer + hash[s[s.length-1]]
};