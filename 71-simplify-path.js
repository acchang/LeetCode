/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let answer = ""
    if (path[path.length]="/"){answer = path.slice(0, -1)}
    for (let i=answer.length;i>0;i--){
        if (answer[i] == "." && answer[i-1] == "."){answer = answer.slice([i-2])
        }
    }
    answer = answer.split("").filter((x) => x != ".")
    for (let j=0;j<answer.length;j++){
        if (answer[j] == "/" && answer[j+1] == "/"){answer.splice([j],1)
        j--
        }
    }
    answer = answer.join("")
    // for (let j=answer.length;j>0;j--){
    //     if (answer[j] == "/"){answer = answer.slice(j)}
    // }
    return answer
};

// "/a/./b/../../c/" should be "/c"
// "/home//foo/" should be "/home/foo"

