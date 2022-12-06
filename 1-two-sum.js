/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 var twoSum = function(nums, target) {
    let matches = []
    let pair = []
    let answer = []
    for (i=0;i<nums.length;i++){
        pair.push(nums[i], target-nums[i])
        matches.push(pair)
        pair = []
    }
    console.log(matches)
    for (j=0;matches.length;j++) {

        if (matches[j].every(x => {return nums.includes(x)})){
            answer.push(nums.indexOf(matches[j][0]), nums.lastIndexOf(matches[j][1]))
            break
        }
        
    }
    return answer
 }
