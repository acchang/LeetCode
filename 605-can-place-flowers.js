/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    for (let i=1; i<flowerbed.length; i++){
        if (flowerbed[i-1] === 0 && 
            flowerbed[i] === 0 &&
            flowerbed[i+1] === 0) {
                n--
            }
    }
    if (n<1){return true} else {return false}
};
