/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let res = 0
        for (let i=0; i<arr.length; i++){
            for (let j=i+1; j<arr.length+1; j++){
                let section = arr.slice(i, j);
                res = res + Math.min(...section);
            }
        }
    return res % (Math.pow(10,9) + 7)
};