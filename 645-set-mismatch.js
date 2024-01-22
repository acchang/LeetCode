/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    let missing
    let dupe = nums.filter((val, idx)=> nums.indexOf(val) != idx)
    let arrayGuide = Array(nums.length).fill(0)
    nums.sort((a,b)=> a-b)
    let numsSet = new Set (nums)
    numsSet = Array.from(numsSet)
    for (let i=0; i<arrayGuide.length; i++){
        arrayGuide[i] = i+1;
        if (arrayGuide[i] != numsSet[i]){
            missing = arrayGuide[i];
            return [dupe, missing]}
        }
};