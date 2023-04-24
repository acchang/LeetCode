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

// clever way without splice:

var lastStoneWeight = function(stones) {
    while(stones.length>1){
        stones.sort((a,b)=>b-a); //sort the remaining stones in decending order;
        stones[1]=stones[0]-stones[1]; //smash the first and second stones ie the stones with largest weight ans assign the remaining stone weight to 1st index
        stones.shift();//shift the array to get rid of the 0 index
    }
    return stones[0] //return the 0 index value ie the result
};


