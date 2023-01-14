// https://leetcode.com/problems/pascals-triangle/

// from: https://leetcode.com/problems/pascals-triangle/solutions/38117/javascript-solution/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let answer = [];
    for(let i = 0; i < numRows; i++){
        let subAnswer = [];
        // i is the i+1th row
        for(let j = 0;j < i+1; j++){
            // so j will have i+1 spaces
            if(i == j){subAnswer.push(1);}
            // i=0, subAnswer = 1 (or last of each subanswer is 1 again)
            // this must come first to prevent the false condition of ternary from failing
            else{
                subAnswer.push(subAnswer == 0 ? answer[i-1][j] : answer[i-1][j-1]+answer[i-1][j]);
            // i=1, subAnswer is empty or has nothing so push [0] of the line before
            // if subAnswer has something then add current plus one before
            }

        }
        answer.push(subAnswer);
    }
    return answer;
};