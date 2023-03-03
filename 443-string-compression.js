https://leetcode.com/problems/string-compression/description/


/**
 * @param {character[]} chars
 * @return {number}
 */


/* from: https://www.youtube.com/watch?v=Zq2S5VBeU_g
tested this on "compress(["a","b","b","b","b","b","b","b","b","b","b","b","b","c","c","c","c"])"
It even works there but mainly because it's returning "len"
"chars" does not change the way it should but I suppose it's just a matter of splicing.
*/

var compress = function(chars) {
    let i = 0, len = 0
    while (i<chars.length){
        let curChar = chars[i]
        chars[len++] = curChar
// make chars[len] = curChar, and then increment (it starts at 1)

        let count = 0
        while (i < chars.length && curChar == chars[i]){
            count++
            i++
        }
        if (count > 1){
            count = count.toString().split('')
            for (let c of count){
                chars[len++] = c
// again, len increases after each digit.
            }
        }
    }
    return len
}

/* doesn't work bc I need to alter chars */

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