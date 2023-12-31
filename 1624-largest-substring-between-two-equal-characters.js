/**
 * @param {string} s
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function(s) {
    let uniques = new Set(s)
    let output = -1
    console.log(uniques)
    for (unique of uniques){
        console.log(unique)
        console.log(s.indexOf(unique), s.lastIndexOf(unique), s.lastIndexOf(unique)-1-s.indexOf(unique), output)
        if (s.indexOf(unique) != s.lastIndexOf(unique)){
            if ((s.lastIndexOf(unique)-1 - s.indexOf(uniques)) > output){
                output = (s.lastIndexOf(unique) - 1 - s.indexOf(unique))
            }
        }
    }
    return output
};