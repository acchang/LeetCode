// https://leetcode.com/problems/permutation-in-string/description/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */


// slide window, hashmap and compare: 14 run, 32 memory
var checkInclusion = function(s1, s2) {
    let mapS1 = {}
    for (let i=0; i<s1.length; i++){
        if (!mapS1[s1[i]]){mapS1[s1[i]]=1} else (mapS1[s1[i]]++)
    }
    
    for (let i=0; i<s2.length-s1.length+1; i++){
        let chunk = (s2.substring(i, i+s1.length))
        let temp = {...mapS1}
        for (let j=0; j<chunk.length; j++){
            if (temp[chunk[j]]) {temp[chunk[j]]--}
        }
        if (Object.values(temp).every((count) => count === 0)){return true}
        else continue}
    return false
};

// not much better, to make faster would have to use map: 17 run, 40 memory

var checkInclusion = function(s1, s2) {
    let mapS1 = {}
    for (let i=0; i<s1.length; i++){
        if (!mapS1[s1[i]]){mapS1[s1[i]]=1} else (mapS1[s1[i]]++)
    }
    
    for (let i=0; i<s2.length-s1.length+1; i++){
        let temp = {...mapS1}
        for (let j=i; j<i+s1.length; j++){
            if (temp[s2[j]]) {temp[s2[j]]--}
        }
        if (Object.values(temp).every((count) => count === 0)){return true}
        else continue}
    return false
};

// https://leetcode.com/problems/permutation-in-string/solutions/3138433
// 22% run, 46% mem
// only slightly better, basically the same but with maps.

var checkInclusion = function(s1, s2) {
    let map = new Map()
    for (let c of s1) {
        if (!map.has(c)) map.set(c, 0)
        map.set(c, map.get(c)+1)
    }

    let n = s1.length
    let m = s2.length
    for (let i = 0; i <= m - n; i++) {
        let tmp = new Map(map)
        let j = 0
        for (j = i; j < i + n; j++) {
            let c = s2[j]
            if (tmp.has(c) && tmp.get(c) > 0) {
                tmp.set(c, tmp.get(c)-1)
            }
            else break
        }
        if (j == i + n) return true
        // when at the end of the section, j will be equal to the moving starting point i plus the length of the string to be compared n
    }

    return false
};



// 82% run, 72% memory
// https://leetcode.com/problems/permutation-in-string/solutions/3140957/

var checkInclusion = function(s1, s2) {
    let n = s1.length
    let m = s2.length
    let map = {}
    for (let c of s1) {
        map[c] = (map[c] ? map[c] : 0) + 1
    }
    // make a map of s1

    let l = 0, r = 0, c = 0
    while (r < m) {
    // while r is less than length of m, count up
        if (map[s2[r]] > 0) c++
    // if element of s2 
        map[s2[r]]--
        r++
        if (c == n) return true
    // if count equals s1.length
        if (r - l == n) {
    // if window is the 
            if (map[s2[l]] >= 0) c--
            map[s2[l]]++
            l++
        }
    }
    return false
};




// sort is too timeconsuming for long s1 and s2s
var checkInclusion = function(s1, s2) {
    let target = s1.split("").sort().join("")
    for (let i=0; i<s2.length; i++){
        let chunk = (s2.substring(i, i+s1.length)).split("").sort().join("")
        if (chunk === target){return true} else continue 
    }
    return false
};