/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    s = s.split("")
    while (s.includes("*")){
        for (let i=0; i<s.length; i++){
            if (s[i]==="*"){s.splice(i-1,2); break}
        }
    }
    return s.join("")
};