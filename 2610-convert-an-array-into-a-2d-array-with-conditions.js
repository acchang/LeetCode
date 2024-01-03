
// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/?envType=daily-question&envId=2024-01-02

// others' answer taken from:
// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/editorial/?envType=daily-question&envId=2024-01-02

// fastest, uses frequency counter solution from editorial


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const frequency = []
    for(let index=0; index<=nums.length+1; index++)
        frequency.push(0);
    // push 0 into the array as many times as length of nums + 1
    // the array is as long as nums bc the components never go longer than the length
    // 1 <= nums[i] <= nums.length

    const result = [];

    for(let num of nums){
        if(frequency[num] >= result.length) 
    // for each num, if that num in frequency is greater than result.length
            result.push([]);
    // push a new subarray into result, increasing result.length
            result[frequency[num]].push(num);
    // push the current num into the appropriate subarray for its frequency
            frequency[num]++
    // and update frequency 
    }
    return result;
};




/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    let numCount = {}
    for (let i=0; i<nums.length; i++){
        if (numCount[nums[i]]){
        numCount[nums[i]]=numCount[nums[i]]+1}
        else {numCount[nums[i]]=1}
        }
    let sortedNumCount = Object.entries(numCount).sort(([,a],[,b]) => b-a)
    let ans = []
    for (let k=0; k<sortedNumCount[0][1];k++){
    ans.push([])
    }
    for (let j=0; j<sortedNumCount.length; j++){
        for (let k=0; k<sortedNumCount[j][1]; k++){
            ans[k].push(sortedNumCount[j][0])
        }
    }
    return ans
};

// book answer, a little faster at 38%

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function(nums) {
    const res = [],
        freq = {}
    for (let i = 0; i < nums.length; i++) {
        const n = nums[i],
            numCount = (freq[n] || 0) + 1
        freq[n] = numCount
        if (!res[numCount - 1]) res[numCount - 1] = [n]
        else res[numCount - 1].push(n)        
    }
    return res
};



// This one doesn't work bc of the issue with fill explained here:
// https://discord.com/channels/735923219315425401/1191586410172534824
// https://stackoverflow.com/questions/41121982/strange-behavior-of-an-array-filled-by-array-prototype-fill

var findMatrix = function(nums) {
    // iterate and find number of instances
    // pull out everything that shows once
    // and continue until nothing
    // use map

    let numCount = {}
    for (let i=0; i<nums.length; i++){
        if (numCount[nums[i]]){
        numCount[nums[i]]=numCount[nums[i]]+1}
        else {numCount[nums[i]]=1}
        }
    let sortedNumCount = Object.entries(numCount).sort(([,a],[,b]) => b-a)
    console.log(sortedNumCount)
    let firstArray = [sortedNumCount[0][0]]
    let ans = new Array(sortedNumCount[0][1]).fill(firstArray)
    console.log(ans)

    for (let j=1; j<sortedNumCount.length; j++){
        for (let k=0; k<sortedNumCount[j][1]; k++){
            console.log(k, "adds", sortedNumCount[j][0])
            console.log(ans)
        }
    }
};