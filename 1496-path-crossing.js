/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
    let curLoc = [0,0]
    let locList = ["0-0"]
    for (let i=0;i<path.length;i++){
        console.log(path[i])
        if (path[i]==="N"){curLoc[1]=curLoc[1]+1;}
        if (path[i]==="S"){curLoc[1]=curLoc[1]-1;}
        if (path[i]==="E"){curLoc[0]=curLoc[0]+1;}
        if (path[i]==="W"){curLoc[0]=curLoc[0]-1;}
        let addToList = curLoc[0]+"-"+curLoc[1]
        if (locList.includes(addToList)){return true} else {locList.push(curLoc[0]+"-"+curLoc[1])}
    }
    return false
};