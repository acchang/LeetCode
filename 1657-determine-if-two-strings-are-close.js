/*
https://leetcode.com/problems/determine-if-two-strings-are-close/

hint: 
condition1 : we need the size of both strings to be same
condition2 : we need freq of char in strings to be same, irrespective of the order
If above 2 conditions are satisfied then just swapping will get us the word2 from word1
*/

var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length){return false}
    let word1Uniques = [... new Set(word1)];
    console.log(word1Uniques)
    let word2Uniques = [... new Set(word2)];
    let objectOfWord1Uniques = {};
    let objectOfWord2Uniques = {};
    for (let i=0;i<word1Uniques.length;i++){ objectOfWord1Uniques[word1Uniques[i]] = word1.split("").filter((x) => x == word1Uniques[i]).length }
    for (let i=0;i<word2Uniques.length;i++){ objectOfWord2Uniques[word2Uniques[i]] = word2.split("").filter((x) => x == word2Uniques[i]).length }
    console.log(objectOfWord1Uniques)
    console.log(objectOfWord2Uniques)
    return objectOfWord1Uniques === objectOfWord2Uniques ? true : false
};

