// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/submissions/1156954773/


/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    let ans = []
    let hash = {}
    for (let i=0; i<groupSizes.length; i++){
        if (hash[groupSizes[i]]){hash[groupSizes[i]].push(i)} else (hash[groupSizes[i]] =[i])
        if (hash[groupSizes[i]].length == groupSizes[i]){
            ans.push(hash[groupSizes[i]])
            hash[groupSizes[i]] = []
        }
    }
return ans
};


