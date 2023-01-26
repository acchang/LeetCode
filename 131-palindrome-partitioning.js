// Jan 21 2023: https://leetcode.com/problems/palindrome-partitioning/
// https://www.youtube.com/watch?v=cWNEl4HE2OE

/**
 * @param {string} s
 * @return {string[][]}
 */

var partition = function(s) {
    let result = []
    const dfs = (i, s, stack) => {
        if (i === s.length){
            result.push(stack.slice())
            return;
        }
        for (let j = i; j < s.length; j++) {
            // start here
            if (isPalindrome(s, i, j)){
                stack.push(s.slice(i, j+1));
                dfs(j+1, s, stack)
                    // after stack = ['a' ], then stack = ['a','a'], then [ 'a', 'a', 'b' ]
                stack.pop();
                    // last dfs call ends, pop so stack is now [ 'a', 'a' ], then [ 'a' ] to []
            }
            // then i moves on to next, ie ['aa']
        }
    }
    dfs(0, s, []);
    return result
}

const isPalindrome = (s, start, end) => {
    while(start < end) {
        if (s[start] !== s[end]) return false;
        start++
        end--
    }
    return true
}

/* cannot just clear stack with stack = [] because
Output
[["c","d","d"],["dd"]]
Expected
[["c","d","d"],["c","dd"]]
*/




// run depth first search
// partition first, evaluate, eliminate
// partition again, 

// var isPalindrome = function(word) {
// for (let i=0; i<Math.floor(word.length/2); i++){
//     if (word[i] === word[word.length-1-i]){
//         continue
//     } else break
//     }
// return word
// }






// this is what happens with stack = [], there is no stepping back
no
1 [ 'c' ]
no
1 [ 'c', 'd' ]
no
1 [ 'c', 'd', 'd' ]
3 [ 'c', 'd', 'd' ]
2 []
2 []
1 [ 'dd' ]
3 [ 'dd' ]
2 []
2 []


// this is how it should go:

"no"
1 ["c"]
"no"
1 ["c","d"]
"no"
1 ["c","d","d"]
"3" ["c","d","d"] -- it is palindromes to the end so it's pushed
"2" ["c","d"] -- popped off last
"2" ["c"] -- pop off another
"1" ["c","dd"] -- this is the turning point
"3" ["c","dd"]
"2" ["c"]
"2" []


There was no "no end condition" log after "popped" ["c","d"] because that loop reached its end, so it returned to the calling function which had another .pop() before continuing its loop


"no" x
"new for" 0 x
"1j" 0 ["c"] x
"no" x
"new for" 1 x
"1j" 1 ["c","d"] x
"no"
"new for" 2
"1j" 2 ["c","d","d"]
"3" ["c","d","d"]
"2" ["c","d"]
"2" ["c"]
// why doesn't j backtrack to []?
"new for" 2
"1j" ["c","dd"]
"3" ["c","dd"]
"2" ["c"]
"2" []
"new for" 1
"new for" 2



var partition = function(s) {
    let result = []
    const dfs = (i, s, stack) => {
        if (i === s.length){
            result.push(stack.slice())
            console.log("ended", result)
            return;
        } else {console.log('no end condition')}
        for (let j = i; j < s.length; j++) {
          console.log("new for loop", j)
            if (isPalindrome(s, i, j)){
                stack.push(s.slice(i, j+1));
                dfs(j+1, s, stack)
                 // "c", 'd', "d"
                 // "aa" "b"
                stack.pop()
                // every one pushed is popped
                console.log("popped", stack)
            } 
          
        }
    }
    dfs(0, s, []);
    return result
}

const isPalindrome = (s, start, end) => {
    while(start < end) {
        if (s[start] !== s[end]) return false;
        start++
        end--
    }
    return true
}

console.log(partition("aab"))
//try