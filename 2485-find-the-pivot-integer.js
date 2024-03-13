/**
 * @param {number} n
 * @return {number}
 */
/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let rightTotal = n
    let leftTotal = 0
    let right = n
    let left = 0
    while (right >= left){
        if (leftTotal == rightTotal && right == left){return left}
        if (leftTotal == rightTotal){return ++left}
        if (rightTotal > leftTotal){
            left++
            leftTotal +=left
        }
        if (leftTotal > rightTotal){
            right--
            rightTotal +=right
        }
    }
    return -1
};
