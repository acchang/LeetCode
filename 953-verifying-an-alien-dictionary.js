// https://leetcode.com/problems/verifying-an-alien-dictionary/

/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    let alpha = "abcdefghijklmnopqrstuvwxyz"
    let translated = {}
    for (let i=0; i<order.length; i++){
        translated[alpha[i]]=order[i]
    }
    console.log(translated)
    // order of words follow order
    // create a hashmap of order
    // use hashmap to translate words
    // sort translated words, if change, then false
};

