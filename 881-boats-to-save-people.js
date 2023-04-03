/**
 * @param {number[]} people
 * @param {number} limit
 * @return {number}
 */
var numRescueBoats = function(people, limit) {
    people.sort((a,b) => a - b);
    let counter = 0
    while (people.length > 0){
        let low = 0
        let high = people.length-1
        if (people[low] + people[high] <= limit){people.pop(), people.shift(), counter++} else {people.pop(), counter++}
    }
    return counter
};