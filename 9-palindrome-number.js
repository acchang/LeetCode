
var isPalindrome = function(x) {
    let y = x.toString().split("").reverse().join("")
    return x.toString() === y ? true : false
};


/*

https://leetcode.com/problems/palindrome-number/

clever and very mathy

var isPalindrome = function(x) {
  if (x < 0) return false

  let rev = 0
  for(let i = x; i >= 1; i = Math.floor(i/10)) rev = rev*10 + i%10
  return rev === x
};

this is great, shift and pop:

var isPalindrome = function(x) {
    const arr = String(x).split('');
        
    while (arr.length > 1) {
        if (arr.shift() !== arr.pop()) {
            return false;
        }
    }
    
    return true;
};
