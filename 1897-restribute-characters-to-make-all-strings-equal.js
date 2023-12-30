/**
 * @param {string[]} words
 * @return {boolean}
 */

var makeEqual = function(words) {
    let dictionary = {}
    let numberOfWords = words.length
    const giantWord = words.join("")
    for (let i=0; i<giantWord.length; i++){
        if (dictionary[giantWord[i]]){dictionary[giantWord[i]]++} else {dictionary[giantWord[i]]=1}
    }
    let objValues = Object.values(dictionary)
    for (val of objValues){
        if (val%numberOfWords != 0){return false}
    }
    return true
};


// book solution, slightly better:

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function(words) {
    const hashmap = new Map();
    let sum = 0;

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        sum += word.length;

        for (let j = 0; j < word.length; j++) {
            const character = word[j];

            if (hashmap.has(character)) {
                hashmap.set(character, hashmap.get(character) + 1);
            } else {
                hashmap.set(character, 1);
            }
        }
    }
    if (sum%(words.length)) return false;

    let output = true;
    hashmap.forEach((value) => {
        if (value%(words.length)) output = false;
    });

    return output;
};





// *** fails for ["abc","cba"] bc every equal with any number of operations!

/**
 * @param {string[]} words
 * @return {boolean}
 */

var makeEqual = function(words) {
    if (words.length == 1 || words.every((cv) => cv == words[0])){return true}
    words.sort((a, b) => a.length - b.length);
    let missingLink
    if (words[words.length-1].length - words[0].length != 2){return false}
    for (let i=0; i<words[words.length-1].length; i++){
        if (words[0].indexOf(words[words.length-1][i]) < 0){missingLink = (words[words.length-1][i])}
        words[0] += missingLink;
        words[words.length-1] = words[words.length-1].substring(0,i-1)+words[words.length-1].substring(i+1)
        break
    }

    for (let j=0; j<words[0].length; j++){
        if (words.every((cv) => cv.includes(words[0][j])) == false){return false}
    }
    return true
};