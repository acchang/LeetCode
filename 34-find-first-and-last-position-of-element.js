/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    var searchRange = function(nums, target) {
        return [nums.indexOf(target), nums.lastIndexOf(target)]
    };

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    var searchRange = function(nums, target) {
      const start = findStart(nums, target)
      if(start === -1) return [-1, -1]
      const end = findEnd(nums, target)
      return [start, end]
    };
    
    function findStart(nums, target){
      let l=0, r = nums.length-1
      while(l <= r){
        const mid = Math.floor((l+r) / 2)
        if(nums[mid] < target){
          l = mid+1
        }else{
          r = mid-1
        }
      }
      if(nums[l] === target) return l
      return -1
    }
    
    function findEnd(nums, target){
      let l=0, r = nums.length-1
      while(l <= r){
        const mid = Math.floor((l+r) / 2)
        if(nums[mid] > target){      
          r = mid-1 
        }else{      
          l = mid+1
        }
      }
      if(nums[r] === target) return r
      return -1
    }

// my own version


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    left = findLeft(nums, target)
    right = findRight(nums, target)
    return [left, right]
};

function findLeft(nums, target){
        let l=0; r=nums.length-1
    while (l<=r){
        const mid=Math.floor((l+r)/2)
        if (nums[mid]<target){l=mid+1}
        else {r=mid-1}
    }
    if (nums[l]==target){return l}
    else return -1
}

function findRight(nums, target){
        let l=0; r=nums.length-1
    while (l<=r){
        const mid=Math.floor((l+r)/2)
        if (nums[mid]>target){r=mid-1}
        else {l=mid+1}
    }
    if (nums[r]==target){return r}
    else return -1
}