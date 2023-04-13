// https://leetcode.com/problems/removing-stars-from-a-string/description/

/**
 * @param {string} s
 * @return {string}
 */

// use stack to pass over only once, "*" means you pop off the latest that was moved to stack

var removeStars = function(s) {
    const stackArr = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === "*" && stackArr.length){
            stackArr.pop();
        } else {
            stackArr.push(s[i]);
        }
    }
    return stackArr.join("");
};

// new stack strategy using reverse
// abc*def*g*
// loop from end, when *, shift and cut the one before, push otherwise 






// too slow:
var removeStars = function(s) {
    s = s.split("")
    while (s.includes("*")){
        for (let i=0; i<s.length; i++){
            if (s[i]==="*"){s.splice(i-1,2); break}
        }
    }
    return s.join("")
};