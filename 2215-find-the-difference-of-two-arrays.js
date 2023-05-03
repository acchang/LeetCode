// https://leetcode.com/problems/find-the-difference-of-two-arrays/description/
// https://www.youtube.com/watch?v=NbEW6Li_h94

// brute force is O(N^2) bc go through each array for each component
// if you use sets, .has is O(N) * 2 = O(2N)

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let set2 = new Set(nums2);
    let ans1 = []
    let ans2 = []
    let final = []
    for (num of set1){
        if (!set2.has(num)){ans1.push(num)}
    }
    final.push(ans1)
    for (num of set2){
        if (!set1.has(num)){ans2.push(num)}
    }
    final.push(ans2)
    return final
};


// alt solution avoids using num and has, creates one long for loop, accounts for undefined.
// slower but less memory.

function findDifference(nums1, nums2){
    const len = Math.max(nums1.length, nums2.length)
    let ans1 = new Set()
    let ans2 = new Set()
    for(let i = 0; i < len; i++){
        if(nums1[i] !== undefined){
            if(!nums2.includes(nums1[i])){
                ans1.add(nums1[i])
            }
        }
        if(nums2[i] !== undefined){
            if(!nums1.includes(nums2[i])){
                ans2.add(nums2[i])
            }
        }
    }

    return [Array.from(ans1), Array.from(ans2)]
};

// or, this deletes:

const findDifference = function(nums1, nums2) {
    const s1 = new Set(nums1)
    const s2 = new Set(nums2)

    for (let item of nums1){
        if (s2.has(item)) {
            s1.delete(item)
            s2.delete(item)
        }
    }
    return [Array.from(s1),Array.from(s2)]
};

