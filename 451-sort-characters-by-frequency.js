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

//https://leetcode.com/problems/sort-characters-by-frequency/submissions/




    // Parameters: uppercase and lowercase English letters and digits.
    // Returns: same letters as input s
    // Examples: Given
    // PseudoCode:
    // create hashmap of letters
    // sort by value in descending order, return keys times repeat
