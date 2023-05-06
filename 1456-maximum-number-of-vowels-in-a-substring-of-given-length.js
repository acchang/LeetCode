/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let counter = 0
    let max = 0
    for (let i=0; i<k; i++){
         if (s[i]=='a' || s[i]=='e' || s[i]=='i' || s[i]=='o'|| s[i]=='u'){counter++}
    }
    for (let j=k;j<s.length;j++){
        if (s[j]=='a' || s[j]=='e' || s[j]=='i' || s[j]=='o'|| s[j]=='u'){counter++}
        if (s[j-k]=='a' || s[j-k]=='e' || s[j-k]=='i' || s[j-k]=='o'|| s[j-k]=='u'){counter--}
    if (counter > max){max = counter}
    }
    return max
};gi