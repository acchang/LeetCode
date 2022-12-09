/**
 * @param {string} s
 * @return {boolean}
 */
// the key to the problem is recognizing behavior. One bracket always closes, a right cannot stand on its own. No '([)])'

var isValid = function(s) {
    if (s.length === 0 || s === ""){return true}
    if ( (s.length > 0) && (!s.includes("()")) && (!s.includes("[]")) && (!s.includes("{}")) ){return false}
    let newParens = s.replace('()','').replace('[]','').replace('{}','')
    return isValid(newParens)
};

// 57/5 on runtime/memory

// or this, slower but similar:

var isValid = function(s) {
    let newBraces = s.replace('()','').replace('{}','').replace('[]','')
    if (newBraces.length === 0 || newBraces === ""){return true}
    if (newBraces.includes("()") || newBraces.includes("{}") || 
        newBraces.includes("[]")){return isValid(newBraces)}
    else return false
    }

// this fails, bc [(])

var isValid = function(s) {
    let p=0,c=0,b=0
    s.split("").forEach(x => {
        if (x == '(') p++;
        if (x == ')') p--;
        if (x == '{') c++;
        if (x == '}') c--;
        if (x == '[') b++;
        if (x == ']') b--;
});
return p== 0 && b == 0 && c == 0? true : false
}

// This is supposed to be a fast solution, but I get 194 (6%) and 50 (5%)

var isValid = function(s) {
    while (
      s.indexOf("{}") !== -1 ||
      s.indexOf("[]") !== -1 ||
      s.indexOf("()") !== -1
    ) {
      s = s.replace("()", "");
      s = s.replace("{}", "");
      s = s.replace("[]", "");
    }
    return s === "";
  };

// This is good: 504 ms (5%), 52 (5%)

var isValid = function(s) {
        
    if (s.length ==0 || s.length%2 != 0){
        return false;
    }
    
    const closingParentheses = Object.freeze({
        "(": ")",
        "{": "}",
        "[": "]"
    });
    
    const stack = [];
    
    for (let i=0; i<s.length; i++) {
        console.log(closingParentheses, stack)
        if (s[i] in closingParentheses) {
            stack.push(s[i]);
        // put the match from closingP into stack
        }else if( s[i] != closingParentheses[stack.pop()]) {
        // if current of s is not a left, and the right does not immediately match the left, then it fails
        // the first right bracket needs to close or it fails
            return false;
        }
    }
    
    return stack.length == 0;
};



/* https://leetcode.com/problems/valid-parentheses/
parameters - only brackets
returns - true or false
examples
psuedo code



