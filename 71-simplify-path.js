/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {

    // get rid of '..'
    for (let i=path.length;i>0;i--){
        if (path[i] == "." && path[i-1] == "."){path = path.slice([i-2])}
    }
    console.log("1: " + path)

    // eliminate final '/'
    if (path[path.length-1]==="/"){path = path.slice(0, -1)}
    console.log("2: " + path)

    // get rid of '.'
    answer = path.split("").filter((x) => x != ".")
    console.log("3: " + answer)

    // reduce '//' to '/'
    for (let j=0;j<answer.length;j++){
        if (answer[j] == "/" && answer[j+1] == "/"){answer.splice([j],1)
        j--
        }
    }
    answer = answer.join("")
    console.log("4: " + answer)

    // once again eliminate final '/'
    if (answer.length != 1 && answer[answer.length-1]==="/"){answer = answer.slice(0, -1)}
    console.log("5: " + answer)

    return answer
};

/*
"/a//b////c/d//././/.."


Output
"/"
Expected
"/a/b/c"
Stdout
1: /..
2: /..
3: /
4: /
5: /





/*
"/a/../../b/../c//.//"
"/c/"