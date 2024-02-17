// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/submissions/1177371945/?envType=daily-question&envId=2024-02-16
// feb 16 2024 DQ

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findLeastNumOfUniqueInts = function(arr, k) {
    const freqMap = new Map();
    arr.forEach(num => {
        if (freqMap.get(num)){freqMap.set(num, freqMap.get(num)+1)}
        else (freqMap.set(num, 1))
    });

    const sortedFreq = Array.from(freqMap.entries()).sort((a, b) => a[1] - b[1]);

console.log(sortedFreq)
console.log(freqMap)

    for (let [num, freq] of sortedFreq) {
        if (k >= freq) {
            k -= freq;
            freqMap.delete(num);
            console.log(freqMap);
        } else {
            break;
        }
    }
    return freqMap.size;
};

/*
[ [ 4, 1 ], [ 2, 1 ], [ 1, 2 ], [ 3, 3 ] ]
Map(4) { 4 => 1, 3 => 3, 1 => 2, 2 => 1 }
Map(3) { 3 => 3, 1 => 2, 2 => 1 }
Map(2) { 3 => 3, 1 => 2 }

don't have to go to k = 0, just need k to be less than the frequency of the remaining numbers
*/

// book answer:

var findLeastNumOfUniqueInts = function(arr, k) {
    const freqMap = new Map();
    arr.forEach(num => {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    });

    const sortedFreq = Array.from(freqMap.entries()).sort((a, b) => a[1] - b[1]);

    for (let [num, freq] of sortedFreq) {
        if (k >= freq) {
            k -= freq;
            freqMap.delete(num);
        } else {
            break;
        }
    }
    return freqMap.size;
};

// previous attempt:

var findLeastNumOfUniqueInts = function(arr, k) {
    let freqMap = {}
    for (ele of arr){
        if (freqMap[ele]){freqMap[ele]++} else {freqMap[ele]=1}
    }
    console.log(freqMap)

    const sortedFreq = Array.from(freqMap.values()).sort((a, b) => a[1] - b[1]);

console.log(sortedFreq)
};


