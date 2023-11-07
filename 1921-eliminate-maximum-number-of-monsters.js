/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */


// done:

var eliminateMaximum = function(dist, speed) {
    let arrival = []
    for (let i=0; i<dist.length; i++){
        arrival.push(dist[i]/speed[i])
    }
    arrival.sort((a,b) => a-b)
    let dead = 1
    for (let j=1; j<arrival.length;j++){
        if (arrival[j]<=[j]){break}
        else dead++
    }
    return dead
};

// uses map but slower:

var eliminateMaximum = function(dist, speed) {
    let arrival = dist.map((e,index)=> e/speed[index]);
    arrival.sort((a,b) => a-b)
    let dead = 1
    for (let j=1; j<arrival.length;j++){
        if (arrival[j]<=[j]){break}
        else dead++
    }
    return dead
};




// passes tests but eliminates monsters in order

var eliminateMaximum = function(dist, speed) {
    let dead = 0
    const aboveZeroOrX = (ele) => ele > 0 || ele == "X"

    while ((dead <speed.length) && (dist.every(aboveZeroOrX))) {
        for (let i=0; i<dist.length;i++){
            if (dist[i] == "X"){continue}
            else {dist[i] = "X"; dead++; break}
        }
        for (let i=0; i<dist.length;i++){
            if (dist[i] == "X"){continue}
            else {
                dist[i] -= speed[i];
                if (dist[i]<0){break}
            }
        }
    }
    return dead
};
