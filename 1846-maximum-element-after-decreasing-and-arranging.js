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

    // reduce any
    // rearrange all
    // if the first element must be 1 and difference is max of 1
    // then max is length if any element is bigger than length
    // but they need elements to be within 1 of each other
    // OR if all elements smaller than length
    // 2 4 1 2 1 is not 4 bc every element must be no diff than 1, would be 3
    // so then sort 1 1 2 2 4
    // if it includes 1 then lead with it
    // if not
