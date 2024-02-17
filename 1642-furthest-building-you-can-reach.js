/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function(heights, bricks, ladders) {
    for (let i=0; i<heights.length; i++){
        console.log("i",i)
        if ((heights[i+1]-heights[i]>bricks) && ladders == 0){return i}
        if (heights[i]>heights[i+1]){console.log(i); continue}
        else if (heights[i+1]-heights[i]<=bricks){
            bricks -= (heights[i+1]-heights[i]);
                        console.log("br", bricks, i)}
        else if (ladders>0){ladders--;
        console.log("lad", ladders, i)}
    }
    return heights.length-1
};