/**
 * @param {number[]} dist
 * @param {number[]} speed
 * @return {number}
 */

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
