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


// paul's solution:
// https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2870310/javascript-easy-to-read-code-with-explanation-70-faster-98-less-mem/?q=paultman&orderBy=most_relevant

//https://leetcode.com/problems/determine-if-two-strings-are-close/submissions/853436592/

function word2hash(word) {
    const hash = new Map();
    for (let i = 0; i<word.length; i++)
        hash.set(word[i], (hash.get(word[i])|| 0) + 1);
    return hash; 
}

function checkSameChars(word1, word2) {
    if (word1.length != word2.length) return false;
    for (let i = 0; i<word1.length; i++)
        if (!word2.includes(word1[i])) return false;
    return true;
}

function checkSameCounts(word1, word2) {
    if (word1.length != word2.length) return false;
    for (let index, i = 0; i<word1.length; i++) {
      index = word2.indexOf(word1[i]);
      // i=0, word1[i]='a'=>1, indexOf(word1[i]) =0, 
      console.log(i, word1[i], word2.indexOf(word1[i]), word2[index])
      if (index === -1) return false;
    // ie does word1[i] exist in word2? if it does not then returns -1
      word2[index] = -2;
    }
    return true;
}

var closeStrings = function(word1, word2) {
    console.log(word1, word2)
    if (word1.length != word2.length) return false;
    word1 = word2hash(word1);
    console.log(word1)
    word2 = word2hash(word2);
    console.log(word2)
    return checkSameChars([...word1.keys()], [...word2.keys()]) && checkSameCounts([...word1.values()], [...word2.values()]);
}


/*
Hi Paul, I revisited this today and I think I get almost all of it, but I have some questions. Can you spare some time to answer?

1) In `function word2hash(word)`, I see you're building a hashmap, but why set it to `hash.set(word[i], (hash.get(word[i])|| 0) + 1);`? I know `word[i]` is the key, but where are you drawing the the value from?

2) Later, when I'm able to see these hashmaps printed as `word1 = word2hash(word1);` and `word2 = word2hash(word2);`, what are you doing? For words `abc` and `bca`, I see:

```
Map(3) { 'a' => 1, 'b' => 1, 'c' => 1 }
Map(3) { 'b' => 1, 'c' => 1, 'a' => 1 }
```

I've only seen hashmaps as objects, I've never see the key value pair separated by a `=>` before.

3) Finally, I'm puzzled by `function checkSameCounts(word1, word2)`. I have a feeling the numbers in your hash map might be related. In the `for` loop, you have 

for (let index, i = 0; i<word1.length; i++) {
      index = word2.indexOf(word1[i]);
      if (index === -1) return false;
      word2[index] = -2;

I understand `index = word2.indexOf(word1[i]);` and `if (index === -1) return false;` checks if the element from `word1` in `word2`.

But what purpose does `word2[index] = -2;`?

And why, on each round of the loop, when I `console.log(i, word1[i], word2.indexOf(word1[i]), word2[index])`, I get numbers instead of letters? 

```
0 1 0 1
1 1 1 1
2 1 2 1
```
I would have expected `word1[0]` to be `a` instead of `1` since `word1` is `{ 'a' => 1, 'b' => 1, 'c' => 1 }`. Everything is `1` so how do you use this to check if the counts are the same?

I got it now with the associative arrays instead of his linked lists... with his explanation. He went to linked lists because it's faster: */

function word2hash(word) {
    const hash = {};
    for (let i = 0; i<word.length; i++)
        hash[word[i]] = (hash[word[i]] || 0) +1;
        // this gives the counts for each letter in the word
    return hash; 
}

function checkSameChars(word1, word2) {
    // this is easy, just checks if word1[i] is in word2
    if (word1.length != word2.length) return false;
    for (let i = 0; i<word1.length; i++)
        if (!word2.includes(word1[i])) return false;
    return true;
}

function checkSameCounts(word1, word2) {
    if (word1.length != word2.length) return false;
    for (let index, i = 0; i<word1.length; i++) {
      index = word2.indexOf(word1[i]);
// index checks if word2 object has the *value* of word1
// so if i=0, word1[i] is 1 from pair `a:1`
// this is bc he's turned them into arrays with Object.keys or Object.values
// 1 is in the first pair of word2, so index is 0
      console.log(i, word1[i], word2.indexOf(word1[i]), word2[index])
      if (index === -1) return false;
      word2[index] = -2;
// word2[0] becomes -2 so it isn't counted again
    }
    console.log(word1, word2)
    return true;
}

var closeStrings = function(word1, word2) {
    if (word1.length != word2.length) return false;
    word1 = word2hash(word1);
    console.log(word1)
    word2 = word2hash(word2);
    console.log(word2)
    return checkSameChars(Object.keys(word1), Object.keys(word2)) && checkSameCounts(Object.values(word1), Object.values(word2));
};

