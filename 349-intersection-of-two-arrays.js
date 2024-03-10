// https://leetcode.com/problems/intersection-of-two-arrays/description/?envType=daily-question&envId=2024-03-10
// 3/9/24 DQ

// using hashmap, 65%

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let seen = {}
    let res = []
    for (num of nums1){seen[num] = 1}
    for (num of nums2){
        if (seen[num]== 1){
            res.push(num);
            seen[num] = 0
            }
    }
    return res
};



// using sort and pointers, 19%

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    nums1 = nums1.sort((a,b)=> a-b)
    nums2 = nums2.sort((a,b)=> a-b)
    let ans = new Set()
    let nums1Pointer = 0 
    let nums2Pointer = 0
    while (nums1Pointer<nums1.length && nums2Pointer<nums2.length){
        if (nums1[nums1Pointer] == nums2[nums2Pointer]){
            ans.add(nums1[nums1Pointer])
            nums1Pointer++
            nums2Pointer++
            }
        else if (nums1[nums1Pointer]<nums2[nums2Pointer]){nums1Pointer++}
        else if (nums2[nums2Pointer]<nums1[nums1Pointer]){nums2Pointer++}
    }
    return [...ans]
};



// below gets 15%
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let ans = []
    let nums1Set = new Set(nums1)
    let nums2Set = new Set(nums2)
    for (num of nums1Set){
        if (nums2Set.has(num)){ans.push(num)}
    }
    return ans
};

