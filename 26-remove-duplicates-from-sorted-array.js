var removeDuplicates = function(nums) {
    let i = 0
    while (nums[i] == nums[i+1]){
    nums.splice(i,1)
    i++
}
    return nums.length
};    

