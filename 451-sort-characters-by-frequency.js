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

