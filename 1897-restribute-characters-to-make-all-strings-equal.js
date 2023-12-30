/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    words.sort((a, b) => a.length - b.length);
    let missingLink
    if (words[words.length-1].length - words[0].length != 2){return false}
    for (let i=0; i<words[words.length-1].length; i++){
        if (words[0].indexOf(words[words.length-1][i]) < 0){missingLink = (words[words.length-1][i])}
        words[0] += missingLink;
        words[words.length-1] = words[words.length-1].substring(0,i-1)+words[words.length-1].substring(i+1)
        break
    }
    const containsLetter = (letter) => currentValue < 40;
    for (let j=0; j<words[0].length; j++){
        if words.every(words[0][j]){return false}
    }
    return true
};