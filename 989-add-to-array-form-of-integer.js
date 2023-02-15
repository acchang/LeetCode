//https://leetcode.com/problems/add-to-array-form-of-integer/

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function(num, k) {
    let joinedNum = num.join("") 
    return joinedNum.length < 15 ? (+joinedNum +k).toString().split("") :
    (BigInt(joinedNum) + BigInt(k)).toString().split("")
};

// official solution involves carrying:
// https://leetcode.com/problems/add-to-array-form-of-integer/solutions/234456/add-to-array-form-of-integer/?orderBy=most_relevant
