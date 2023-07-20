// https://leetcode.com/problems/asteroid-collision/description/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let astStack = [asteroids[0]]
    for (let i=1; i<asteroids.length; i++){
        console.log(i)
        if (asteroids[i]<0 && astStack[astStack.length-1]>0){
            while (Math.abs(asteroids[i]) > Math.abs(astStack[astStack.length-1])){astStack.pop()}
        if (Math.abs(asteroids[i]) == astStack[astStack.length-1]){astStack.pop(); continue} 
        if (asteroids[i] == astStack[astStack.length-1]){astStack.push(asteroids[i]); continue} 

        }
        else {astStack.push(asteroids[i])}
        console.log(astStack)
    }
    return astStack
};