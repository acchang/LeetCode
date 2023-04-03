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