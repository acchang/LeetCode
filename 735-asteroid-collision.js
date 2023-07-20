// https://leetcode.com/problems/asteroid-collision/description/

/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

// best, uses by length/index instead of at
// 92% speed, 50% memory

var asteroidCollision = function(asteroids) {
    let flag = true
    let astStack = [asteroids[0]]
    for (let i=1; i<asteroids.length; i++){
        flag=true
        if (asteroids[i]<0){
            while (
                (-(asteroids[i]) > astStack[astStack.length-1])
                &&
                (astStack[astStack.length-1]>0) ){astStack.pop()};
        if ((astStack[astStack.length-1] + (asteroids[i])) === 0 ){astStack.pop();flag=false};
        if ((astStack[astStack.length-1] + asteroids[i]) > 0){flag=false}
        };
        if (flag == true){astStack.push(asteroids[i])}
    }
    return astStack
};







// 44% run, 25% mem

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

// alt: 25% run 60% mem

const asteroidCollision = asteroids => {
    let stack = []
    for ( let a of asteroids ) {
        // for each of the array
        if ( a < 0 ) {
        // if it's negative
            while ( stack.at(-1) > 0 && stack.at(-1) < -a ) stack.pop()
        // while the last in stack is positive and it's less than neg of neg current, pop
            if ( stack.at(-1) + a == 0 && stack.pop() ) continue
        // if last in stack plus current is zero, and last in stack can be popped, continue
            if ( stack.at(-1) > 0 && stack.at(-1) > -a ) continue
        // if last in stack is positive and it's bigger than current, continue
        }
        stack.push(a)
    }
    return stack
}


// rewrite with what I learned: 17% run, 60% memory

var asteroidCollision = function(asteroids) {
    let flag = true
    let astStack = [asteroids[0]]
    for (let i=1; i<asteroids.length; i++){
        flag=true
        if (asteroids[i]<0){
            while (
                (-(asteroids[i]) > astStack.at(-1))
                &&
                (astStack.at(-1)>0) ){astStack.pop()};
        if ((astStack.at(-1) + (asteroids[i])) === 0 ){astStack.pop();flag=false};
        if ((astStack.at(-1) + asteroids[i]) > 0){flag=false}
        };
        if (flag == true){astStack.push(asteroids[i])}
    }
    return astStack
};


