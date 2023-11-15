/**
 * @param {number[]} arr
 * @return {number}
 */
var maximumElementAfterDecrementingAndRearranging = function(arr) {
    let ans = 1
    arr.sort((a,b)=> a-b)
    for (let i=1; i<arr.length; i++){
        if (arr[i] >= ans+1){ans++}
    }
    return ans
}
