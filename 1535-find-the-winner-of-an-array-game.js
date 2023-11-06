/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let wincount = 0
    let prevWin = null
    let loser
    while (wincount < k){
        loser = Math.min(arr[0], arr[1])
        arr.splice(arr.indexOf(loser), 1)
        arr.push(loser)
        if (arr[0] == prevWin){wincount++} else {wincount = 1; prevWin = arr[0]}
        }
    return arr[0]
};

// better:

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var getWinner = function(arr, k) {
    let maxElement = Math.max(...arr)
    let curr = arr[0]
    arr.shift()
    let queue = arr
    let winstreak = 0
    while (queue){
        let opponent = arr.shift()
        if (curr > opponent){arr.push(opponent); winstreak++}
        else {arr.push(curr); curr = opponent; winstreak = 1}
        if (winstreak == k || curr == maxElement){return curr}
    }
};

