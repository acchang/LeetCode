/**
 * @param {number[]} nums
 * @return {number[][]}
 */
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