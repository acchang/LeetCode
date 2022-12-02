
var isPalindrome = function(x) {
    let y = x.toString().split("").reverse().join("")
    return x.toString() === y ? true : false
};
