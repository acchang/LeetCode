// https://leetcode.com/problems/daily-temperatures/

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let output = []
    for (let i=0; i<temperatures.length; i++){
        let add = 1
        for (j=i+1; j<temperatures.length; j++){
            console.log(temperatures[i], temperatures[j], add)
            if (temperatures[j]>=temperatures[i]){output.push(add); break}
            else if (j===temperatures.length-1){output.push(0); break}
            else {add += 1}
        }
    }
    output.push(0)
    return output
};
