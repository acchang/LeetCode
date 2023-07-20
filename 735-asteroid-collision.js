// https://leetcode.com/problems/asteroid-collision/description/


/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
    let flag = true
    let astStack = [asteroids[0]]
    for (let i=1; i<asteroids.length; i++){
        flag=true
        if (astStack[astStack.length-1]>0 && asteroids[i]<0){
            while (
                (Math.abs(asteroids[i]) > (astStack[astStack.length-1]))
                &&
                (astStack[astStack.length-1]>0 && asteroids[i]<0)
                ){astStack.pop()};
        if (Math.abs(asteroids[i]) == astStack[astStack.length-1]){astStack.pop();flag=false};
        if (Math.abs(asteroids[i]) < astStack[astStack.length-1]){flag=false}
        };
        if (flag == true){astStack.push(asteroids[i])}
    }
    return astStack
};