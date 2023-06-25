// https://leetcode.com/problems/longest-arithmetic-subsequence/editorial/
// https://www.youtube.com/watch?v=sQznNULe2J0
// used this visualzatiom https://www.youtube.com/watch?v=JBfm8h3eCMw


/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestArithSeqLength = function(nums) {
    let visitedObj={}
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
            // visitedObj[diff] ? visitedObj[diff] +=1 : visitedObj[diff] = 2
            if (visitedObj[diff]){
            // if the difference is the same AND left is the same to ensure multiple
                visitedObj[diff]+=1;
                console.log("exists", nums[r], nums[l],diff)
                } else {
                    visitedObj[diff] =2;
                    console.log("new", nums[r], nums[l],diff)
                    }
        
        }
    }
    console.log(visitedObj)
    let count = Object.values(visitedObj)
    return Math.max(...count)
};



var longestArithSeqLength = function(nums) {
    let visitedObj={}
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
            if (!visitedObj[(nums[l],diff)]){visitedObj[(nums[r],diff)] = 2}
            else if (visitedObj[(nums[l],diff)]){
                visitedObj[(nums[r],diff)] = visitedObj[(nums[l],diff)] + 1
            }        
        }
    }
    console.log(visitedObj)
    let count = Object.values(visitedObj)
    return Math.max(...count)
};


// object can't use array as key so need to use map
// can't use array as key either in map
// use string num-diff as key with object?

/* Using objects as keys is one of the most notable and important Map features. The same does not count for Object. String as a key in Object is fine, but we can’t use another Object as a key in Object.
*/

var longestArithSeqLength = function(nums) {
    const visitedMap = new Map();
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
            if (!visitedMap.get(nums[l], diff)){visitedMap.set((nums[r],diff),2)}
            else if (visitedMap.get(nums[l], diff)){
                visitedMap.set(visitedMap.set((nums[r],diff),visitedMap.get(nums[l], diff)+1))}
            }
    }
    console.log(visitedMap)
    let count = Object.values(visitedMap)
    return Math.max(...count)
};


const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

