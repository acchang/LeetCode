/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let answer = ""
    if (path[path.length]="/"){answer = path.slice(0, -1)}
    answer = answer.split("").filter((x) => x != ".")
    return answer.join("")
};