/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let first = []
    let second = []
    // for all pairs, find the one in #2 that doesn't have a #1
    for (let i=0;i<paths.length;i++){
        first.push(paths[i][0])
        second.push(paths[i][1])
    }

    for (let j=0;second.length;j++){
        if (first.includes(second[j]) == false){return second[j]}
            // the second that's not in first
    }
};

// also, faster:

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
    let hashMap = new Map()
    for(let i = 0; i < paths.length; i++){
        hashMap.set(paths[i][0], paths[i][1])
    }

    for(const city of hashMap.values()){
        if(!hashMap.has(city)){
            return city
        }
    }
};