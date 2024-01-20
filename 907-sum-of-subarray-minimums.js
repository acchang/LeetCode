// https://leetcode.com/problems/sum-of-subarray-minimums/submissions/1151165986/?envType=daily-question&envId=2024-01-20
// https://www.youtube.com/watch?v=dS3siRzXAbc

// iterate, for each number, how many numbers on the left, right is bigger (counting urself)
// https://www.youtube.com/watch?v=vjxBVzVB-mE
// 3,1,2,4
// (3 * 1 * 1) + (1*2*3) + (2 * 1 * 2) + (4 * 1 * 1)
// (3, itself) + (1 has 1 greater L, 2 greater R) + (2 has 0, 1) + (4, itself)
// to determine how many numbers smaller than current, use a stack

// https://leetcode.com/problems/sum-of-subarray-minimums/?envType=daily-question&envId=2024-01-20
// https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4597289/beats-100-c-java-java-script-explained-monotonic-stack

// 1/20 DQ -- Figured out how it works, can't say I can solve on my own.

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
    const stack = [];
    let result = 0;
    for (let i = 0; i <= arr.length; i++) {
      while (stack.length && (i === arr.length || 
      arr[stack[stack.length - 1]] >= arr[i])) {
        const mid = stack.pop();
    // move along index of arr
    // pop when arr[stack latest] (top of stack) > arr[i]
    /* 3124
    i=0, stack is 0
    i=1, arr[i] is 1 and 3 > 1, so pop, stack is now []
    left is -1 bc nothing in stack, right = 1, 1 is added to stack [1]
    result is 3 bc
    i=2, arr[2] is 2 and 1 < 2, no pop, stack is [1,2]
    i=3, stack is [1,2,3]
    i=4, pop the 3, stack is [1,2]
    i=4 and there's still stuff in stack so stack is [1]
    i=4, stack is [], stop
    */
        const left = stack.length ? stack[stack.length - 1] : -1;
        const right = i;
// get the result by digits to left and right of index
        const count = ((mid - left) * (right - mid));
        console.log(mid, "minus", left, "times", right, "minus", mid)
        result += (count * arr[mid]);
        console.log(left, right, mid, result)
      }
      stack.push(i);
      console.log(stack)
    }
    return result % (1e9 + 7);
};





/**
 * @param {number[]} arr
 * @return {number}
 */
// use monotonic stack
// for each number, go left and right until you hit a smaller number
// multiplying the possibilities of each side gets you all the combinations where the middle is the smallest number
// from:
// https://www.youtube.com/watch?v=77ENoZ9eCo4
// https://leetcode.com/problems/sum-of-subarray-minimums/solutions/4595335/beats-100-c-java-python-js-explained-with-video-monotonic-stack

var sumSubarrayMins = function(arr) {
    const length = arr.length;
    const left = new Array(length).fill(-1);
    // left = [-1, -1 , -1, -1]
    const right = new Array(length).fill(length);
    // right = [4, 4, 4, 4]
    const stack = [];

    for (let i = 0; i < length; ++i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
/* iterate through the indexes: 3,1,2,4: 
i=0; arr[i]=3; stack is empty, add to stack
i=1; arr[i]=1; end of stack is 0, arr[0] is 3; 3>1; so pop 0 and stack is 1
i=2; arr[i]=2; end of stack is 1, arr[1] is 1; 1<2; so keep 2, stack is 1, 2
i=3; arr[i]=4; end of stack is 2, arr[2] is 2; 2<4; so keep 3, stack is 1,2,3

as i goes right it asks if the current i has everything smaller to the left
so at 3124, valid substrings are 1 12 124
and from left, valid substrings are 31
*/
        }
        if (stack.length > 0) {
            left[i] = stack[stack.length - 1];
// move the stack top into left, ends at [ -1, -1, 1, 2 ]
        }
// but first push i or INDEX into stack, start with 1
        stack.push(i);
    }

    console.log(stack)
    stack.length = 0;
    console.log(stack)

    for (let i = length - 1; i >= 0; --i) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }
        if (stack.length > 0) {
            right[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }
    console.log(stack)
    console.log(left, right)

    let sum = 0;

    for (let i = 0; i < length; ++i) {
        sum += (i - left[i]) * (right[i] - i) * arr[i] % (1e9 + 7);
        sum %= 1e9 + 7;
    }

    return sum;
};


/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        res += currentMin
        let j = i+1
        while (j<arr.length){
            if (currentMin > arr[j]){
                currentMin = arr[j]
            }
            res += currentMin
            j++
        }
}
    return res % (Math.pow(10,9) + 7)
};

OR 

var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        res += currentMin
        for (let j=i+1; j<arr.length; j++){
            if (currentMin > arr[j]){currentMin = arr[j]}
            res += currentMin
            }
        }
    return res % (Math.pow(10,9) + 7)
};

