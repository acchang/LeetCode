// https://leetcode.com/problems/can-place-flowers/description/

/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (flowerbed[0]===0 && flowerbed.length===1){
        return true
    }

    if (flowerbed[0]===0 && flowerbed[1]===0){
        flowerbed.splice(0, 1, 1);
                n--
    }
    
    for (let i=1; i<flowerbed.length; i++){
        if (flowerbed[i-1] === 0 && 
            flowerbed[i] === 0 &&
            flowerbed[i+1] === 0) {
                flowerbed.splice(i, 1, 1);
                n--
            }
    }

    if (flowerbed[flowerbed.length-1]===0 && flowerbed[flowerbed.length-2]===0){
        flowerbed.splice(flowerbed.length-1, 1, 1);
                n--
    }

    if (n<1){return true} else {return false}
};


// better, using nots, start at zero.

var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length && n !== 0; i++) {
      if (
        flowerbed[i] === 0 &&
        flowerbed[i - 1] !== 1 &&
        flowerbed[i + 1] !== 1
      ) {
        n--;
        i++;
      }
    }
    return n === 0;
  };
