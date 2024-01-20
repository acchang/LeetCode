/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        for (let j=i+1; j<arr.length; j++){
            currentMin = Math.min(currentMin, arr[j])
            res = res+currentMin
            }
        }
    res = res + arr.reduce((acc, cv) => acc+ cv)
    return res % (Math.pow(10,9) + 7)
};