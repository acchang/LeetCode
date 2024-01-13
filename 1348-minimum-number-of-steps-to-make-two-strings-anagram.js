/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
    // make t have same letters as s
    // hashmap the two and determine differences 
    // or just use includes and remove
    for (let i=0; i<s.length; i++){
        console.log(s[i], t.includes(s[i]))
        if (t.includes(s[i])){
            let a = t.slice(0,t.indexOf(s[i]))
            console.log(a)
            let b = t.slice(t.indexOf(s[i])+1)
            console.log(b)
            t = a + b
            console.log(t)
        }
    }
    return t.length

};