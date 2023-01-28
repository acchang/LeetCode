// Jan 21 2023: https://leetcode.com/problems/palindrome-partitioning/
// https://www.youtube.com/watch?v=cWNEl4HE2OE

// these were helpful:
// https://medium.com/@alexanderpavlov_18884/javascript-algorithms-backtracking-222cde11842c
// backtracking template:
// https://www.youtube.com/watch?v=4paR1cZx9Tg

// discord help:
// https://discord.com/channels/735923219315425401/1067179273477173298

// didn't use monu solution
// https://www.youtube.com/watch?v=cS6SiU2NQq8

// asked Reddit, then figured it out.
// https://www.reddit.com/r/learnjavascript/comments/10myw4v/im_struggling_with_just_one_aspect_of_this/

// see also:
// https://codepen.io/acchang/pen/NWBYWEM?editors=0011


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
            if (isPalindrome(s, i, j)){
                stack.push(s.slice(i, j+1));
                dfs(j+1, s, stack)
                stack.pop()
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

