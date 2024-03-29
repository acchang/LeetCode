/**
 * @param {number} n
 * @return {number[][]}
 */

// https://leetcode.com/problems/spiral-matrix-ii/description/
// figured out how to pointers like LC #54
// decided it was possible after looking at https://www.youtube.com/watch?v=NO1zLdOwgR0


var generateMatrix = function(n) {
    let output = Array(n).fill().map(()=>Array(n).fill())
    let counter = 1
    let left = 0, right = n, top = 0, bottom = n;
    while (left<right && top<bottom){
// top row
        for (let i=left; i<right; i++){(output[top]).splice(i,1,counter); counter++}
        top++
// right column
        for (let j=top; j<bottom;j++){output[j].splice(right-1,1,counter); counter++}
        right--

// no need for `if (left>=right || top>=bottom){break}` bc I'm not creating a single array, I'm replacing elements in a matrix

// bottom row
        for (let k=right-1; k>left-1; k--){(output[bottom-1]).splice(k,1,counter); counter++}
        bottom--
// left column
        for (let l=bottom-1; l>top-1; l--){output[l].splice(left,1,counter); counter++}
        left++
    }
    return output
};  

// From the editorial, changing the while loop to a different kind of for loop:
// uses insight that layers is n+1/2, slightly faster

var generateMatrix = function(n) {
    let output = Array(n).fill().map(()=>Array(n).fill())
    let counter = 1
    let left = 0, right = n, top = 0, bottom = n;
    for (let i=0; i< (n+1)/2; i++){
// top row
        for (let i=left; i<right; i++){(output[top]).splice(i,1,counter); counter++}
        top++
// right column
        for (let j=top; j<bottom;j++){output[j].splice(right-1,1,counter); counter++}
        right--
// bottom row
        for (let k=right-1; k>left-1; k--){(output[bottom-1]).splice(k,1,counter); counter++}
        bottom--
// left column
        for (let l=bottom-1; l>top-1; l--){output[l].splice(left,1,counter); counter++}
        left++
    }
    return output
};  


