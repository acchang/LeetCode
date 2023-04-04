/**
 * @param {string} s
 * @return {number}
 */
var partitionString = function(s) {
//    try greedy approach, from left to right, extend as far as possible
//    return min num of strings 
    let counter = 0
    let left = 0
    let right = 1
    while (right<s.length+1){
        if (s[left] != s[right]){right++}
        if (s[left] == s[right]){
            console.log(left, right)
            console.log(s.slice(left, right), s);
            counter++
            left = right
            console.log(left, right)
            right = ++right
            console.log(left, right)
        }
}
return counter

};
