/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let uniques = new Set(s)
    let output = -1
    for (unique of uniques){
        if (s.indexOf(unique) != s.lastIndexOf(unique)){
            let diff = s.lastIndexOf(unique) - (s.indexOf(unique)+1)
            if (diff > output){
                output = diff
            }
        }
    }
    return output
};

// no need to use a set, can just go backwards and use index of!
// still slow, slightly faster -- 


/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let out=-1
          for(let i=s.length-1;i>0;i--){
              let holder=s.indexOf(s[i])
              out=Math.max(out,i-(holder+1))
          }
  
    
          return out
      
  };

// hashmap method:


/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let ans = -1
    let firstIndex = new Map();
    for (let i=0; i<s.length; i++){
        console.log(i, firstIndex)
        if (firstIndex.has(s[i])){
            console.log("two", ans, i - firstIndex[s[i]] - 1);
            ans = Math.max(ans, i - firstIndex[s[i]] - 1)} 
        else {firstIndex.set([s[i]], i)}
        console.log(i, firstIndex)
    }
    return ans
};