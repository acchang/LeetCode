/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    return s.split("").sort().join("") == t.split("").sort().join("")
};

// this is an official solution, which is the same speed

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const ss = s.split('').sort();
    const tt = t.split('').sort();
    return ss.join('') === tt.join('');
};
