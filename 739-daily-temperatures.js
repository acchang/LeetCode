// https://leetcode.com/problems/daily-temperatures/

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