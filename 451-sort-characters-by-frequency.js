var frequencySort = function(s) {
    s = s.split("").sort().join("")
    
    let answerObj = {}
    for (let i=0;i<s.length;i++){
        if (s[i] != s[i-1]){ answerObj[s[i]] = 1 }
        if (s[i] == s[i-1]){ newValue = answerObj[s[i]] +1
        answerObj[s[i]] = newValue }
    }
    
    let objIntoArray = []
    for (var letter in answerObj) {
    objIntoArray.push([letter, answerObj[letter]])};
    let sortedArray = objIntoArray.sort( (a,b) => (b[1] - a[1]))

    let answer = ""
    for (let j=0;j<sortedArray.length;j++){
        answer += sortedArray[j][0].repeat(sortedArray[j][1])
    }
    return answer
    
};


    // Parameters: uppercase and lowercase English letters and digits.
    // Returns: same letters as input s
    // Examples: Given
    // PseudoCode:
    // create hashmap of letters
    // sort by value in descending order, return keys times repeat
