/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 
 var twoSum = function(nums, target) {
    let answer = []
   const map = {}
   for (const num of nums){
       map[num] = target-num
   }
   // hashmap of nums and diffs
   console.log(map)

   for (const num of nums){
       if (nums.includes(map[num]) && 
       nums.indexOf(num) != nums.lastIndexOf(map[num])){
           answer.push( nums.indexOf(num), nums.lastIndexOf(map[num]))
           return answer
       }
   }
};

 
// alternatives:

var twoSum = function(nums, target) {
    const indices = {};

    nums.forEach((item, index) => {
        indices[item] = index
    });
    console.log(indices)
// each nums is paired with its index

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];
        // as you loop through nums, get the complement

        if (indices[complement] !== undefined && indices[complement] !== index) {
        // if the complement exists in the object indices, that is, if it is assigned an index, and that index is not the current index 
            return [index, indices[complement]]
        }
    }
};


// uses has, set, get:
//  The has() method returns a boolean indicating whether an element with the specified key exists or not

// In JavaScript, a setter can be used to execute a function whenever a specified property is attempted to be changed. Setters are most often used in conjunction with getters to create a type of pseudo-property. It is not possible to simultaneously have a setter on a property that holds an actual value.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set




var twoSum = function(nums, target) {
    const indices = new Map();

    for (let index = 0; index < nums.length; index++) {
        const complement = target - nums[index];

        if (indices.has(complement)) {
            return [indices.get(complement), index]
        }

        indices.set(nums[index], index)
    }
};

