/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let answer = 0;
    let hash = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000};
     for (let i=0 ;i<s.length-1; i++){
        if ( hash[s[i]] < hash[s[i+1]] ){ answer += hash[s[i]] * -1 } else {answer += hash[s[i]]}
    }
    return answer + hash[s[s.length-1]]
};


/**
 * Runtime: 128 ms, faster than 95.62% of JavaScript online submissions for Roman to Integer.
 * Memory Usage: 39.7 MB, less than 61.70% of JavaScript online submissions for Roman to Integer.
 */
var romanToInt = function(s) {
    let hash ={I:1, V:5, X:10, L:50, C:100, D:500, M:1000}
    let ans = 0, cur = 0, prev = 0, j = s.length - 1
    for( ; j >= 0; j-=1){
        cur = hash[s[j]]
        cur < prev ? ans -= cur : ans += cur
        prev = cur
    }
    return ans;    
};
