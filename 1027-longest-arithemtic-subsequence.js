// https://leetcode.com/problems/longest-arithmetic-subsequence/editorial/
// https://www.youtube.com/watch?v=sQznNULe2J0
// used this visualzatiom https://www.youtube.com/watch?v=JBfm8h3eCMw

// FINAL ANSWER:

/**
 * @param {number[]} nums
 * @return {number}
 */

var longestArithSeqLength = function(nums) {
    let maxCount = 0
    const dp = new Array(nums.length).fill(0).map(ele => ele = {});
    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            let diff = nums[j]-nums[i]
            if (dp[j][diff]) {dp[i][diff] = dp[j][diff]+1} else {dp[i][diff] = 2}
            if (dp[i][diff] > maxCount){maxCount=dp[i][diff]}
            }
    }
    return maxCount
}

// much chaos below



// issue 1: can't just take differences bc two numbers may have same differences, but not from same starts

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

--------
// issue 2 -- object doesn't work for changing keys, so used a string but when numbers repeat there is an issue

// https://discord.com/channels/735923219315425401/1084551836817698906/threads/1122532164894986393

var longestArithSeqLength = function(nums) {
    const visitedMap = new Map();
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
            let keyLeft = {[nums[l]]: diff}
            let keyRight = {[nums[r]]: diff}
            console.log(keyLeft, visitedMap.get(keyLeft), visitedMap)
            if (!visitedMap.get(keyLeft)){
                visitedMap.set((keyRight),2)
                console.log(visitedMap.get(keyRight))
                }
            else if (visitedMap.get(keyLeft)){
                visitedMap.set((keyRight), visitedMap.get(keyLeft)+1)

            }
        }
    }
    const count = [...visitedMap.values()];
    return Math.max(...count)
};

var longestArithSeqLength = function(nums) {
    const visitedObj = {};
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
            if (!(visitedObj[nums[l].toString()+":"+diff.toString()])){
                visitedObj[nums[r].toString()+":"+diff.toString()] = 2
                }
            else if (visitedObj[nums[l].toString()+":"+diff.toString()]){
                visitedObj[nums[r].toString()+":"+diff.toString()] = (visitedObj[nums[l].toString()+":"+diff.toString()] + 1)}
        }
    }
    const count = Object.values(visitedObj)
    return Math.max(...count)
};

// using `hasOwnProperty`

var longestArithSeqLength = function(nums) {
    const visitedObj = {};
    for (let r=1; r<nums.length; r++){
        for (let l=r-1; l>=0; l--){
            let diff = nums[r]-nums[l]
        if (visitedObj.hasOwnProperty( nums[l].toString()+":"+diff.toString() ) === false ){visitedObj[nums[r].toString()+":"+diff.toString()] = 2}
        else if (visitedObj[nums[l].toString()+":"+diff.toString()]){
                visitedObj[nums[r].toString()+":"+diff.toString()] = (visitedObj[nums[l].toString()+":"+diff.toString()] + 1)}
        }
    }
    console.log(visitedObj)
    const count = Object.values(visitedObj)
    return Math.max(...count)
};

// translating from Python, why fails in JS?

var longestArithSeqLength = function(nums) {
    const dp = {};
    for (let r=1; r<nums.length; r++){
        for (let l=0; l<r; l++){
            let diff = nums[r]-nums[l]
            if (dp[nums[l].toString()+":"+diff.toString()] === undefined){
                dp[nums[r].toString()+":"+diff.toString()] = 2
            }
            else {dp[nums[r].toString()+":"+diff.toString()] = dp[nums[l].toString()+":"+diff.toString()] + 1}
        }
    }
    console.log(dp)
    const count = Object.values(dp)
    return Math.max(...count)
};

// JS solutions use an array of hashmaps bc I'm getting repeat 53 at 0 likely bc the diff of zero is happening to different right pointers

var longestArithSeqLength = function(nums) {
    const n = nums.length;
    if(n<=2) return n;

    let longest = 2;
    dp = Array(n).fill().map(() => new Map()) 
    // Create array of hashmaps the length of n
    
console.log(dp)

    for(let i=0; i<n; ++i) {
        for(let j=0; j<i; ++j) {
            // Get diff
            const diff = nums[i] - nums[j];

            // Set subsequence length (with d = diff) = prev + 1 (set 2 in prev not exist)
            dp[i].set(diff, (dp[j].get(diff) || 1) + 1);
            console.log(dp)
            // Update longest subsequence
            longest = Math.max(longest, dp[i].get(diff));
        }
    }

    return longest;
};

for [20,1,15,3,10,5,8]

[
  Map(0) {},
 //   dp[i].set(diff, (dp[j].get(diff) || 1) + 1);
   Map(1) { -19 => 2 },
// dp[1] set it as (diff = -10 ) , if dp[j or 0].get(-19) exists and add 1 OR 1 + 1 .. dp[left pointer]
   Map(2) { -5 => 2, 14 => 2 },
// second in nums: same
   Map(3) { -17 => 2, 2 => 2, -12 => 2 },
// third in nums: same
   Map(4) { -10 => 2, 9 => 2, -5 => 3, 7 => 2 },
// DONT USE NUMS, USE ORDER
// dp[j] rises through the set, checks if it has diff; if yes[+1], if not, is 2
   Map(5) { -15 => 2, 4 => 2, -10 => 2, 2 => 3, -5 => 4 },
   Map(6) { -12 => 2, 7 => 2, -7 => 2, 5 => 2, -2 => 2, 3 => 2 }
  ]
// so one must trace the left pointer of current back to an earlier map.
// we use `dp[i].set(diff, (dp[j].get(diff) || 1) + 1);` so that even if i rep

// and finally:

var longestArithSeqLength = function(nums) {
    const dp = new Array(nums.length);
    for (let r=1; r<nums.length; r++){
        for (let l=0; l<r; l++){
            let diff = nums[r]-nums[l]
            if (!dp[r]){dp[r].push}

            if (dp[nums[l].toString()+":"+diff.toString()] === undefined){
                dp[nums[r].toString()+":"+diff.toString()] = 2
            }
            else {dp[nums[r].toString()+":"+diff.toString()] = dp[nums[l].toString()+":"+diff.toString()] + 1}
        }
    }
    console.log(dp)
    const count = Object.values(dp)
    return Math.max(...count)
};

// ask, why does this repeat the fill? Bc It's a reference, see:
// https://discord.com/channels/735923219315425401/1084551836817698906/threads/1122643921902768148


var lASL = function(nums) {
    const dp = new
    Array(nums.length).fill([])
    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            let diff = nums[j]-nums[i]
            dp[i].push(diff)
            console.log(...dp)
        }
    }
    console.log(dp)
}

console.log(lASL([3,6,9,12]))

// this works as expected


// switch from arrays to objects

var longestArithSeqLength = function(nums) {
    const dp = new Array(nums.length).fill(0).map(ele => ele = []);
    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            let diff = nums[j]-nums[i]
            console.log(dp[i])
            if (dp[j][diff])
            {dp[i].push({[diff]:dp[j][diff]+1})}
            else {dp[i].push({[diff]:2})}
    }
    console.log("final", dp)
    }
}

// FINALLY! THE SECRETS WERE
// 1) USE JUST THE INDEX AND NOT THE NUMBER BC IT CANNOT BE CONFUSED BY MULTIPLE APPEARANCES
// 2) YOU CAN'T JUST TAKE THE DIFFERENCES BC THE NUMBERS FROM WHICH THE DIFFERENCES COME MATTERS

var longestArithSeqLength = function(nums) {
    let maxCount = 0
    const dp = new Array(nums.length).fill(0).map(ele => ele = {});
    for (let i=1; i<nums.length; i++){
        for (let j=0; j<i; j++){
            let diff = nums[j]-nums[i]
            if (dp[j][diff]) {dp[i][diff] = dp[j][diff]+1} else {dp[i][diff] = 2}
            if (dp[i][diff] > maxCount){maxCount=dp[i][diff]}
            }
    }
    return maxCount
}



