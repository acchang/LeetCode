// https://leetcode.com/problems/reducing-dishes/description/

var maxSatisfaction = function(satisfaction) {
    const size = satisfaction.length;
    let total = 0;
    let res = 0;
    satisfaction.sort((a, b) => b - a);
    for (let i = 0; i < size; i++) {
            if (satisfaction[i] + total <= 0) {
            break;
        }
        total += satisfaction[i];
        res += total;
    }
    return res;
};

/* sort from high to low, then keep a "res" that adds the total to it each time.
- There's a math trick in that the highest goes first and keeps repeating in the res for the number of times it's most effective.
- so for example, 

console.log(maxSatisfaction([ -1, -1, -1, -1, 1000 ]))

1000 does not need to be the 5th element to be repeated five times. 
It becomes part of the total and is repeated each time as long as this isn't true:

satisfaction[i] + total <= 0