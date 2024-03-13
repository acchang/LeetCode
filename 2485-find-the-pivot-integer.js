/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function(n) {
    let right = n-1
    let left = 1
    let rightTotal = n
    let leftTotal = 0
    while (right >= left){
        if (rightTotal > leftTotal){
            left++
            leftTotal +=left
        }
        if (leftTotal > rightTotal){
            right--
            rightTotal +=right
        }
        if (leftTotal = rightTotal){return left++}
    }
    return -1
};
