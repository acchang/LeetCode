// https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=daily-question&envId=2024-01-16

// You must implement the functions of the class such that each function works in average O(1) time complexity.
// so we use a map and an array, map functions are quicker.

// we use classes: Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.


var RandomizedSet = function() {
    this.map = new Map()
    this.array = new Array()
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)){return false};
    this.map.set(val, this.array.length)
    this.array.push(val)
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.has(val)){return false}
    else {
        let idx = this.map.get(val)
        this.map.set(this.array[this.array.length-1], idx)
        this.array[idx] = this.array[this.array.length-1]
        this.array.pop()
        this.map.delete(val)
        return true
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    
};