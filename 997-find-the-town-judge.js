// https://leetcode.com/problems/find-the-town-judge/description/?envType=daily-question&envId=2024-02-22
// DQ 2/21/24

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    let trusted=trust[0][1]
    const allTrustedSame = (currentValue) => currentValue[1] == trusted;
    if (trust.every(allTrustedSame) && !trust[trusted]){return trusted}
    else return -1
    };
// doesn't work bc [[1,3],[1,4],[2,3],[2,4],[4,3]]


/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
    if (n==1){return 1}
    let hashMap = new Map()
    for (ratings of trust){
        if (hashMap.get(ratings[1])){hashMap.set(ratings[1], hashMap.get(ratings[1])+1)}
        else hashMap.set(ratings[1], 1)
        if (hashMap.get(ratings[0])){hashMap.set(ratings[0], hashMap.get(ratings[0])-1)}
        else hashMap.set(ratings[0], -1)
    }
    for (let i=1; i<n+1; i++){
        if (hashMap.get(i) == n-1){return i}
        }
    return -1
};

// the above works
// https://www.youtube.com/watch?v=2AdzmA1IC1k
// passed 54%



// OLD attempt:

// https://leetcode.com/problems/find-the-town-judge/
// tried this easy to practice graphs.

/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */

var findJudge = function(N, trust) {
    let peeps = [...Array(N).keys()]
    for (let h=0; h<peeps.length; h++){
        id = h+1
        peeps[h] = ([id, 0])
    }

    for (let i = 0; i < trust.length; i++) {
        for (let j=0; j<peeps.length; j++) {
            if (peeps[j][0] == trust[i][0]){peeps.splice(j,1)}
        }
    }

    if (peeps.length === 0) {
            return -1; 
    } else {
        let judge = peeps[0][0];
        let count = 0; 
        for (let i = 0; i < trust.length; i++) {
            if (trust[i][1] === judge) { 
                count += 1;
            }
        }
        if (count == (N-1)) {
            return judge; // if [[1,2],[2,3]] and n=3, then there is a remainder but not all trust him, count would have to be 2.
        } else {
            return -1;
        }
    }      
  };

//above insired by below bc unfamiliar with maps: https://leetcode.com/problems/find-the-town-judge/solutions/976803/javascript-solution

var findJudge = function(N, trust) {
    let peeps = new Map();  // each person (up to N) is a key in a map
    for (let i = 1; i <= N; i++) {
      peeps.set(i, 0);
    }
  
    for (let i = 0; i < trust.length; i++) {
        peeps.delete(trust[i][0]); // if the person trusts someone, delete the person from map
    }
  
    if (peeps.size === 0) {
            return -1; // if map is empty, return -1
    } else {
        let judge = peeps.keys().next().value; // get the only key remaining in the map
        let count = 0; // used to count how many times the judge was trusted
        for (let i = 0; i < trust.length; i++) {
            if (trust[i][1] === judge) { // if judge is found in the array, increment the map value
                count += 1;
            }
        }
        if (count == (N-1)) {
            return judge; // # of needed trusts for the judge must be N-1 (judge can't trust judge)
        } else {
            // if [[1,2],[2,3]] and n=3, then there is a remainder but no one trusts him
            return -1;
        }
    }
      
  };




// This does not work bc people can trust multiple [[1,3],[1,4],[2,3],[2,4],[4,3]]
// also n=4, so 3 is the one answer
// 

var findJudge = function(n, trust) {
    let notJudges = trust.filter(array => array[1] != trust[0][1]).length
    return notJudges ? -1 : trust[0][1]
};
