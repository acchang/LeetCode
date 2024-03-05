// https://leetcode.com/problems/minimum-length-of-string-after-deleting-similar-ends/?envType=daily-question&envId=2024-03-05
// DQ 3/5/24

// use pointers

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let begin = 0
    let end = s.length-1
    while ((begin < end) && (s[begin] == s[end])){
        let c = s[begin]
        while ((begin <= end) && (s[begin] == c)){
            begin++
        }
        while ((end > begin) && (s[end]==c)){end--}
    }
        return end - begin +1
};

// also tail recursion

/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    return deleteSimilarEnds(s, 0, s.length - 1);
}

function deleteSimilarEnds(s, begin, end) {
    // The ends differ or meet in the middle
    if (begin >= end || s[begin] != s[end]) {
        return end - begin + 1;
    } else {
        let c = s[begin];

        while (begin <= end && s[begin] == c) {
            begin++;
        }

        // Delete consecutive occurrences of c from suffix
        while (end > begin && s[end] == c) {
            end--;
        }

        return deleteSimilarEnds(s, begin, end);
    }
}




// failed attempt
/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    let prefix = 0, suffix = 0
    while (s[0]===s[s.length-1] || s>-1){
        for (let i=0; i<s.length; i++){
            if (s[i]===s[0]){prefix++} else break
        }
        for (let j=s.length-1; j>-1; j--){
            if (s[j]===s[s.length-1]){suffix++} else break
        } 
        if ( prefix == suffix){
            let equivalent = ((prefix+suffix)/2)
            s = s.slice(equivalent, s.length-(equivalent));
            console.log("equals", s);
        }

        else if ( prefix + suffix < s.length){
            s = s.slice(prefix);
            console.log("spre", s);
            s = s.slice(0, s.length-suffix);
            console.log("ssuf", s);
        } else break
        prefix = 0, suffix = 0
    }
    return s.length
};