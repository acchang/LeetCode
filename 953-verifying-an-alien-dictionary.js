// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let dictionary = {}
    let translatedWords = []
    for (let i=0; i<order.length; i++){
        dictionary[order[i]]=alpha[i]
    }
    for (word of words) {
        let translatedWord = "";
        for (let j=0; j<word.length; j++){
            translatedWord = translatedWord.concat(dictionary[word[j]])
        }
        translatedWords.push(translatedWord)
    }
    let sortedTranslatedWords = [...translatedWords].sort();
    return sortedTranslatedWords.every((val, index) => val === translatedWords[index])
};



// improved:
// from: https://www.youtube.com/watch?v=DJHPBFmDtTw

var isAlienSorted = function(words, order) {
    let key= {}
    for (let i=0; i<order.length; i++){
        key[order[i]]=i
    }
    for (let i=0; i<words.length-1; i++) {
        for (let j=0; j<words[i].length; j++){
            // if one word is before another, the next cannot come before.
            if (j>=words[i+1].length){return false}
            // if the latter word is longer (everything else same), false
            if (words[i][j] === words[i+1][j]){continue}
            // if letter of first word is same as next word, continue
            if (key[words[i][j]]<key[words[i+1][j]]){break} else {return false}
            // the letter of first word should be before the letter of second word, if not return false
            // you break because once the letter of first word is before letter of second, you examine next word. continue would examine every letter.
        }
    }
    return true
}

