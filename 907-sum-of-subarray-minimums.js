/**
 * @param {number[]} arr
 * @return {number}
 */
/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        res += currentMin
        let j = i+1
        while (j<arr.length){
            if (currentMin > arr[j]){
                currentMin = arr[j]
            }
            res += currentMin
            j++
        }
}
    return res % (Math.pow(10,9) + 7)
};

OR 

var sumSubarrayMins = function(arr) {
    let res = 0
    for (let i=0; i<arr.length; i++){
        let currentMin = arr[i]
        res += currentMin
        for (let j=i+1; j<arr.length; j++){
            currentMin = Math.min(currentMin, arr[j])
            res += currentMin
            }
        }
    return res % (Math.pow(10,9) + 7)
};