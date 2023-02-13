/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    let output = 0
    if (low%2!=0 && high%2!=0){output = ((high-low)/2) +1} else 
    {output = (high-low)/2}
    return output
};
