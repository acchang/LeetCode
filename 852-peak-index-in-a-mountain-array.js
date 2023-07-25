/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    for (let i= 1; i<arr.length-1; i++){
        if (arr[i-1]<arr[i] && arr[i] >arr[i+1]){return i}
    }
};

// also by binary search, find the highest number

var peakIndexInMountainArray = function (arr) {
    let start = 0, end = arr.length - 1, mid;
    while (start < end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] < arr[mid + 1]) {
            start = mid + 1
        }
        else {
            end = mid;
        }
    }
    return start;
};

