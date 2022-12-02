/*
https://leetcode.com/problems/determine-if-two-strings-are-close/

hint: 
condition1 : we need the size of both strings to be same
condition2 : we need freq of char in strings to be same, irrespective of the order
If above 2 conditions are satisfied then just swapping will get us the word2 from word1
*/


var closeStrings = function(word1, word2) {
    let word1Uniques = [... new Set(word1)].sort();
    let word2Uniques = [... new Set(word2)].sort();
    let objectOfWord1Uniques = {};
    let objectOfWord2Uniques = {};
    for (let i=0;i<word1Uniques.length;i++){ objectOfWord1Uniques[word1Uniques[i]] = word1.split("").filter((x) => x == word1Uniques[i]).length }
    for (let i=0;i<word2Uniques.length;i++){ objectOfWord2Uniques[word2Uniques[i]] = word2.split("").filter((x) => x == word2Uniques[i]).length }
    if (Object.keys(objectOfWord1Uniques).join("") != Object.keys(objectOfWord2Uniques).join("")) {return false};
    if (Object.values(objectOfWord1Uniques).sort().join("") != Object.values(objectOfWord2Uniques).sort().join("")) {return false};
    return true
};

// It won't allow this on "abc, cba" maybe bc alters word, also would fail in frequency mismatch
// ie abbccc, caabbb

var closeStrings = function(word1, word2) {
    let new1 = word1.split("").sort()
    let new2 = word2.split("").sort()
    return new1 == new2
}

