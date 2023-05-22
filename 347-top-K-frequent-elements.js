// https://leetcode.com/problems/top-k-frequent-elements/

var topKFrequent = function(nums, k) {
    let hashobj = {};
    for (num of nums){
        if (hashobj[num]){hashobj[num]++}
        else {hashobj[num] = 1}
    }
    let sortable = [];
    for (obj in hashobj){
        sortable.push([obj, hashobj[obj]]);
    }
    sortable.sort((a, b) => b[1]-a[1])
    let ans = []
    for (let i=0;i<k;i++){
        ans.push(sortable[i][0])
    }
    return ans
};

