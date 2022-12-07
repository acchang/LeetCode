/**
 * @param {string[]} strs
 * @return {string}
 */

 var longestCommonPrefix = function(strs) {
    let prefix = ""
    let shortest =   strs.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
    for (let i=0;i<shortest.length; i++){
        console.log(i)
        if (strs.every((x) => x[i] === shortest[i] )){
            prefix += shortest[i]
            console.log(shortest[i], prefix)
        }
        else break
    }
        return prefix
};

