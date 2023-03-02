/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let s = []
    let count = 1
    for (let i=0; i<chars.length;i++){
        if (chars[i] != chars[i+1]){s.push(chars[i])}
        if (chars[i] == chars[i+1])


        if (chars[i+1] == chars[i]){count = count+1}
        else {s.push(chars[i], count), count = 1}
    }
    return s.length
};