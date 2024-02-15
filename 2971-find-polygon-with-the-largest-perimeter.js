/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function(nums) {
    nums.sort((a,b)=>(b-a))
    for (let i=0; i<nums.length;i++){
        let remainder = nums.slice(i+1).reduce((acc, cv)=>acc+cv, 0)
        if (nums[i]<remainder){
            return remainder+nums[i]
        } else continue
    }
    return -1
};