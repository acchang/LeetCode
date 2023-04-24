// https://leetcode.com/problems/last-stone-weight/


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
    while (stones.length > 1){
        stones.sort( (a,b) => b-a);
        if (stones[0]==stones[1]){stones.splice(0,2)}
        else if (stones[0]>stones[1]){stones.splice(0,2, stones[0]-stones[1])}
    }
    return stones
};

