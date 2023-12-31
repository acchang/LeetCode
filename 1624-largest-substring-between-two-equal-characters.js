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