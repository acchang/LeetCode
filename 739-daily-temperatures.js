// https://leetcode.com/problems/daily-temperatures/
// Daily question Jan 30 2024

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let stack = [];
    let ans = Array(temperatures.length).fill(0);
// fill ans with zeroes for when it ends

    for (let i=0; i<temperatures.length; i++){
// go through temperatures
        while(stack.length && temperatures[stack[stack.length - 1]] < temperatures[i]) {
// while there's something in the stack and temp at stack length is less than current temp
        let index = stack.pop();
// pop it off the top of the stack and call it index
        ans[index] = i - index;
// put into ans of index, the current minus that which you poppped.
console.log(stack)
console.log(ans)
        }
        stack.push(i);
// nevertheless, push the curent index into stack
    }
    return ans;
};











/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = []
    for (let i=0; i<temperatures.length; i++){
        let add = 1
        for (let j=i+1; j<temperatures.length; j++){
            if (temperatures[j]>temperatures[i]){output.push(add); break}
            else if (j===temperatures.length-1){output.push(0); break}
            else {add += 1}
        }
    }
    output.push(0)
    return output
};

// above is too slow, try:

var dailyTemperatures = function(T) {
    const result = [];
    for(let i = 0; i < T.length; i++){
        let nextDay = 0;
        for(let j = i + 1; j < T.length; j++){
            if(T[j] > T[i]){
                nextDay = j - i;
                break;
            } 
        }
        result.push(nextDay);
    }
    return result;
};

// refining my solution, not that hard:

var dailyTemperatures = function(T) {
    const result = [];
    for (let  i= 0; i < T.length; i++){
        let nextDay = 0;
        for (let j=i+1; j<T.length; j++){
            if (T[j]>T[i]){
                nextDay = j-i; 
                break;
            }
        }
        result.push(nextDay)
    }
    return result;
};

// just forgetting the let in the second loop slowed things immensely