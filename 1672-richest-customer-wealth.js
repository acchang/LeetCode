// https://leetcode.com/problems/richest-customer-wealth/submissions/1160581881/

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ansbox = []
    for (account of accounts){
        ansbox.push(account.reduce((acc, cv)=> acc+cv))
    }
    return Math.max(...ansbox)
};

// faster:
/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let ans = 0
    for (account of accounts){
        let temp = account.reduce((acc, cv)=> acc+cv)
        ans = Math.max(temp, ans)
    }
    return ans
};