// https://leetcode.com/problems/binary-search/description/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
        while (high >= low){
            let mid = Math.floor((low + high) /2)
            if (nums[mid] === target){return mid}
            if (nums[mid] > target){high = mid - 1}
            if (nums[mid] < target){low = mid + 1} 
        }
    return -1
    };

// ok too:
var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
    while (high >= low) {
      const mid = Math.floor((low + high) / 2)
      if (nums[mid] === target) {return mid}
      if (nums[mid] > target) {high = mid - 1} 
      if (nums[mid] < target) {low = mid + 1}
    }
    return -1
  }

// also ok:

var search = function(nums, target) {
    let low = 0
    let high = nums.length-1
        while (high > low){
            let mid = Math.ceil((low + high) /2)
            if (nums[mid] === target){return mid}
            if (nums[mid] > target){high = mid - 1}
            if (nums[mid] < target ){low = mid} 
        }
    return -1
    };


// +1 and -1 are good to consider:
// https://stackoverflow.com/questions/27655955/why-does-binary-search-algorithm-use-floor-and-not-ceiling-not-in-an-half-open

// why must add 1?
// https://stackoverflow.com/questions/47256647/binary-search-python-why-do-we-use-mid-1-or-mid-1
// Because wе avoid overlapping searches; places the boundary of the search ranges on the items that have not been checked yet; eliminates an option

/*  also results in infinite loop if array is even:

Array = [8, 9,   11, 13]; target = 10
         0  1    2   3 
         l  m        r   m = (0 + 3)/2 = 1.5 or 1, arr[m] < target (coz 9 < 10), make l = m, 
            l    m   r   m = (1+3)/2 = 2, arr[m] > target (coz 11 > 10), make r = m, 
            l(m) r       m = (1+2)/2 = 1.5 or 1, arr[m] < target (coz 9 < 10), make l = m
            l    r(m)    m = (1+3)/2 = 2, arr[m] > target (coz 11 > 10), make r = m.
            l(m) r       m = (1+2)/2 = 1.5 or 1, arr[m] < target (coz 9 < 10), make l = m
            l    r(m)    m = (1+3)/2 = 2, arr[m] > target (coz 11 > 10), make r = m.
            ...
            ...

*/

// why doesn't this break out? How did target get redefined?
// It got redefined bc it's the next test, dummy. still need to do +1/-1 on the high and lows.

var search = function(nums, target) {
    let low = 0
    let high = nums.length - 1
  
    while (low <= high) {
      const mid = Math.floor((low + high) / 2)
      console.log(low, mid, high)
      if (nums[mid] === target) {return mid}
      if (nums[mid] > target) {high = mid}
      if (nums[mid] < target) {low = mid}
    }
    return -1
  }

  /* 
0 2 5 9
2 3 5 9
3 4 5 9 (should end here)
0 2 5 2
0 1 2 2
