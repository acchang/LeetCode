/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);
    let counter = 0
    while (people[0]){
        if (people[0] + people[people.length-1] <= limit){people.pop(), people.shift(), counter++} else {people.pop(), counter++}
    }
    return counter
};

// faster without pop and shift:
// remember to sort (a - b) not just sort()

var numRescueBoats = function (people, limit) {
    people.sort((a, b) => a - b);
    let boats = 0;
    let i = 0;
    let j = people.length - 1;
  
    while (i <= j) {
      boats++;
      if (people[i] + people[j] <= limit) {
        i++;
      }
      j--;
    }
  
    return boats;
  };
