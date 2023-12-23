/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let curLoc = [0,0]
    let locList = ["0-0"]
    for (let i=0;i<path.length;i++){
        if (path[i]==="N"){curLoc[1]=curLoc[1]+1;}
        if (path[i]==="S"){curLoc[1]=curLoc[1]-1;}
        if (path[i]==="E"){curLoc[0]=curLoc[0]+1;}
        if (path[i]==="W"){curLoc[0]=curLoc[0]-1;}
        let addToList = curLoc[0]+"-"+curLoc[1]
        if (locList.includes(addToList)){return true} else {locList.push(curLoc[0]+"-"+curLoc[1])}
    }
    return false
};

// use hash, with "has"

var isPathCrossing = function(path) {
    let moves = {
        'N': [0, 1], 
        'S': [0, -1], 
        'W': [-1, 0],
        'E': [1, 0]
    };

    let visited = new Set();
    visited.add("0,0");
    let x = 0;
    let y = 0;

    for (let c of path) {
        let curr = moves[c];
        let dx = curr[0]; 
        let dy = curr[1];

        x += dx;
        y += dy;

        let hash = `${x},${y}`;

        if (visited.has(hash)) {
            return true;
        }
        visited.add(hash);
    }

    return false;
};
