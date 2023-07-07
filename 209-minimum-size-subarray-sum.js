// this python explanation helped: https://www.youtube.com/watch?v=aYqYMIqZx5s

/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    let left = 0
    let sumCurrent = 0
    let res = Infinity
    let length = 1
    for (let right = 0; right<nums.length; right++){
        sumCurrent += nums[right]
        length = right - left + 1
        if (sumCurrent >= target && length<=res){res=length} 
        while (sumCurrent >=target){
            sumCurrent -= nums[left]
            left++
            length = right - left + 1
            if (sumCurrent >= target && length<=res){res=length}
        }
    }
    return res === Infinity ? 0 : res
};