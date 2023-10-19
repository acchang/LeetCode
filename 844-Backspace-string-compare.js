/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(s, t) {
    return finalWord(s) === finalWord(t)
};


var finalWord = function(word) {
    let endWord = []
    for (let i=0; i<word.length; i++){
        if (word[i] != "#"){endWord.push(word[i])}
        else if (word[i] == "#" && endWord.length>0){endWord.pop()} 
        else continue
    }
    return endWord.join("")
};