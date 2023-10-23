// https://leetcode.com/problems/design-hashmap/description/?envType=daily-question&envId=2023-10-04
// helpful to understand this

var MyHashMap = function() {
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    
};


// from: https://www.youtube.com/watch?v=dHLbQiy2td8
// also: https://www.youtube.com/watch?v=gvicrj31JOM


var MyHashMap = function() {
    this.hashMap = []
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    this.hashMap[key] = [key, value]
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    console.log(this.hashMap)
    return this.hashMap[key] ? this.hashMap[key][1] : -1
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    delete this.hashMap[key]    
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

// other solution, somewhat more complicated.
// https://leetcode.com/problems/design-hashmap/solutions/4126935/easy-to-understand-beginner/?envType=daily-question&envId=2023-10-04
// https://leetcode.com/problems/design-hashmap/solutions/4127606/beats-99-easy-implementation-using-array/

class MyHashMap {
    constructor() {
        this.size = 10;
        this.mp = new Array(this.size).fill(null).map(() => []);
    }

    hash(key) {
        return key % this.size;
    }

    put(key, value) {
        const i = this.hash(key);
        const bucket = this.mp[i];

        for (let j = 0; j < bucket.length; j++) {
            if (bucket[j][0] === key) {
                bucket[j][1] = value;
                return;
            }
        }

        bucket.push([key, value]);
    }

    get(key) {
        const i = this.hash(key);
        const bucket = this.mp[i];

        for (let j = 0; j < bucket.length; j++) {
            if (bucket[j][0] === key) {
                return bucket[j][1];
            }
        }

        return -1;
    }

    remove(key) {
        const i = this.hash(key);
        const bucket = this.mp[i];

        for (let j = 0; j < bucket.length; j++) {
            if (bucket[j][0] === key) {
                bucket.splice(j, 1);
                return;
            }
        }
    }
}

// Usage
const hashMap = new MyHashMap();
hashMap.put(1, 1);
hashMap.put(2, 2);
console.log(hashMap.get(1)); // Output: 1
console.log(hashMap.get(3)); // Output: -1
hashMap.put(2, 1);
console.log(hashMap.get(2)); // Output: 1
hashMap.remove(2);
console.log(hashMap.get(2)); // Output: -1