var frequencySort = function(s) {
    s = s.split("").sort().join("")
    let answerArray = []
    let answerArrayBlock = []
    let counter = 1
    
    for (let i=0;i<s.length;i++){
        if (s[i] == s[i+1]){counter += 1;}
        if (s[i] != s[i+1]){answerArrayBlock.push(s[i], counter); answerArray.push(answerArrayBlock); counter = 1; answerArrayBlock = [];}
    }

    let sortedArray = answerArray.sort( (a,b) => (b[1] - a[1]))
    let answer = ""
    for (let j=0;j<sortedArray.length;j++){ answer += sortedArray[j][0].repeat(sortedArray[j][1])
    }
    
    return answer  
};

// https://leetcode.com/problems/sort-characters-by-frequency/submissions/
// https://leetcode.com/submissions/detail/853874436/

    // Parameters: uppercase and lowercase English letters and digits.
    // Returns: same letters as input s
    // Examples: Given
    // PseudoCode:
    // create hashmap of letters
    // sort by value in descending order, return keys times repeat


    // this one is pretty neat:

    var frequencySort = function(s) {
    
        const charMap = s.split('').reduce((acc, cur) => {acc[cur] = (acc[cur] || 0) + 1; return acc} , {})
        // creates object
        const sortedArr = Object.keys(charMap).sort((a, b) => charMap[b] - charMap[a]);
        // sorts object
        return sortedArr.reduce((acc, cur) => acc + cur.repeat(charMap[cur]) ,'')
        // output with repeat
    };

// paul's solution:
// https://leetcode.com/problems/determine-if-two-strings-are-close/solutions/2870310/javascript-easy-to-read-code-with-explanation-70-faster-98-less-mem/?q=paultman&orderBy=most_relevant

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

Why is the hash =>
