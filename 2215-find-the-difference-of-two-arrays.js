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
