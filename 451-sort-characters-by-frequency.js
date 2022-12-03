var frequencySort = function(s) {
        console.log(s)
        let answerObj = {}
        for (let i=0;i<s.length;i++){
            if (s[i] != s[i-1]){ answerObj[s[i]] = 1 }
            if (s[i] == s[i-1]){ newValue = answerObj[s[i]] +1
            answerObj[s[i]] = newValue }
        }
        console.log(answerObj);
    };


    // Parameters: uppercase and lowercase English letters and digits.
    // Returns: same letters as input s
    // Examples: Given
    // PseudoCode:
    // create hashmap of letters
    // sort by value in descending order, return keys times repeat
