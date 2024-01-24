// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/2573133/javascript-solution/?envType=daily-question&envId=2024-01-24
// https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/editorial/?envType=daily-question&envId=2024-01-24
// worked through the code but did not solve.
// another explanation: https://leetcode.com/problems/pseudo-palindromic-paths-in-a-binary-tree/solutions/4619137/very-beginner-friendly-step-by-step-and-diagram-recursion-and-map-based-solution-cpp-easy/?envType=daily-question&envId=2024-01-24


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var pseudoPalindromicPaths  = function(root) {
    let res = { count : 0 };
    // set your result to be an object with count : 0
    let counter = new Array(10).fill(0);
	// create an Array of 10 and fill it with zeroes
    // this is bc 1 <= Node.val <= 9 plus null

    dfs(root, res, counter);
    return res.count;
};

// function will take in counter
const isValid = (nums) => {
    console.log("nums", nums)
    let odd = 0;
    for (let n of nums) {
// for each element in the counter that's odd will be remembered
// counter records frequency, looking for odd frequencies
        if (n > 0 && n % 2 === 1)
            odd++;
    }
    return odd < 2;
// But only ONE bc path is pseudo-palindromic "if it has at most one digit with an odd frequency."
}

const dfs = (root, res, counter) => {
    console.log(root, res, counter)
    if (!root) return;
    // if root doesn't exist, return and end.
    counter[root.val]++;
    console.log("rootval", root.val)
    
    if (!root.left && !root.right) {
        console.log("no left right")
// if there is no left and and right, then its a leaf and run isValid
        if (isValid(counter)) res.count += 1;
// if (isValid(counter) is true, res increments
        return;
    }

console.log("left", root.left, "right", root.right)

    dfs(root.left, res, counter);
    if (root.left){
        console.log("counter reduce left", counter)
        counter[root.left.val]--;}
// if root.left exists, reduce counter
    dfs(root.right, res, counter);
    if (root.right){
            console.log("counter reduce right", counter)
        counter[root.right.val]--;}
};


/* semi-self explained:
walking my way through the console.logs

START DFS
[2,3,1,3,1,null,1] { count: 0 } [
  0, 0, 0, 0, 0,
  0, 0, 0, 0, 0
]

ADD ROOTVAL TO COUNTER
rootval 2

ROOT LEFT AND RIGHT EXIST SO DFS EACH
left [3,3,1] right [1,null,1]

NEW DFS
[3,3,1] { count: 0 } [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0
]

ADD ROOTVAL TO COUNTER
rootval 3

ROOT LEFT AND RIGHT EXIST SO DFS EACH
left [3] right [1]

NEW DFS
[3] { count: 0 } [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0
]

ADD ROOTVAL TO COUNTER
rootval 3

LEAF NODE SO USE ISVALID FUNCTION, ADDS TO COUNTER AND ENDS
no left right
nums [
  0, 0, 1, 2, 0,
  0, 0, 0, 0, 0
]


BACK TO DFS
at root.left=[3],remove it from counter
[3] counter reduce left [
  0, 0, 1, 2, 0,
  0, 0, 0, 0, 0
]

NOW WE ARE AT DFS[1]
[1] { count: 1 } [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0
]

ADD ROOTVAL 1 TO COUNTER
rootval 1

NO LEFT RIGHT SO ITS A LEAF, RUN ISVALID
no left right
nums [
  0, 1, 1, 1, 0,
  0, 0, 0, 0, 0
]

AND REDUCE THE COUNTER AGAIN WITH THE 1
[1] counter reduce right [
  0, 1, 1, 1, 0,
  0, 0, 0, 0, 0
]



CONTINUE FROM PREVIOUS DFS [3,3,1]
THE ROOT IS 3, SO REMOVE IT

[3,3,1] counter reduce left [
  0, 0, 1, 1, 0,
  0, 0, 0, 0, 0
]

CONTINUE ON TO DFS [1, null, 1]

[1,null,1] { count: 1 } [
  0, 0, 1, 0, 0,
  0, 0, 0, 0, 0
]

ADD ROOTVAL TO COUNTER
rootval 1

DFS LEFT AND RIGHT
left null right [1]

ROOT IS NULL SO IT RETURNS
null { count: 1 } [
  0, 1, 1, 0, 0,
  0, 0, 0, 0, 0
]

DFS [1] WITH 1 PREVIOUSLY ADDED TO COUNTER
[1] { count: 1 } [
  0, 1, 1, 0, 0,
  0, 0, 0, 0, 0
]

DFS[1] ADDS 1 TO COUNTER AGAIN
rootval 1

LEAF NODE
no left right

RUN ISVALID
nums [
  0, 2, 1, 0, 0,
  0, 0, 0, 0, 0
]

REMOVE RIGHT NODE FROM COUNT
[1] counter reduce right [
  0, 2, 1, 0, 0,
  0, 0, 0, 0, 0
]

BACK UP TO DFS [2,3,1] WHERE THE RIGHT NODE IS [1, null, 1]
[1,null,1] counter reduce right [
  0, 1, 1, 0, 0,
  0, 0, 0, 0, 0
]

HOW DOES IT KNOW TO END HERE? There is nothing else to go down.

The hints both mention that a psuedo-palindrome is "if at most one digit has an odd frequency" and most of the solutions I looked at checks from root to leaf and to see if one digit has an odd frequency.

But it can account for "2244" because no digits have an odd frequency.
But 333444 has two with odd frequencies, 343-434, no way to make it a palindrome

*/