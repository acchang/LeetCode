/**
 * @param {string[]} strs
 * @return {string}
 */

  var longestCommonPrefix = function(strs) {
     let prefix = ""
     for (let i=0;i<strs[0].length; i++){
         if (strs.every((x) => x[i] === strs[0][i] )){
             prefix += strs[0][i]
         }
         else break
     }
         return prefix
 };



// above is best: 98/47

 var longestCommonPrefix = function(strs) {
    let prefix = ""
    let shortest =   strs.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  })
    for (let i=0;i<shortest.length; i++){
        if (strs.every((x) => x[i] === shortest[i] )){
            prefix += shortest[i]
        }
        else break
    }
        return prefix
};

// mine is 30% runtime, 60% memory
// this claims 83/92 but I get 15/64
// it's a nested loop so unlikely so high
// https://leetcode.com/problems/longest-common-prefix/solutions/2844536/javascript/?q=javascript&orderBy=most_relevant
// but it's a good idea to avoid the sort

var longestCommonPrefix = function(strs) {
    if(!strs.length)return ''
    let prefix =''
    const firstElement = strs[0]
    for(let i = 0; i < firstElement.length;i++){
        let pfx = !prefix ? firstElement[i] : prefix + firstElement[i] 
        for(let j = 1; j < strs.length; j++){
            if(!strs[j].startsWith(pfx)){
                return prefix;
            }
        }
        prefix = pfx;
    }
    
    return prefix;
};