https://leetcode.com/problems/unique-number-of-occurrences/?envType=daily-question&envId=2024-01-17

// Daily Q 24/01/16

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const arrMap = new Map()
    for (entry of arr){
        if (arrMap.has(entry)){arrMap.set(entry, arrMap.get(entry)+1)}
        else arrMap.set(entry, 1)
    }
    let values = Array.from(arrMap.values())
    let uniques = [...new Set(arrMap.values())]
    
    return values.length === uniques.length
};


/////// I did the one below earlier, it's slower. Makes sense why, so many operations.


var uniqueOccurrences = function(arr) {
    // use newSet to get all uniques
        let uniques = [... new Set(arr)];
        const objectOfUniques = {};
    // for each set, filter, get instances
        for (let i=0;i<uniques.length;i++){
            objectOfUniques[uniques[i]] = arr.filter((x) => x == uniques[i]).length
        }
    // use Object.values to turn object into array
    let valuesArr = Object.values(objectOfUniques)
    // use indexOf/lastIndexOf to find dupes
    let passing = true
        valuesArr.forEach((x) => {
        if (valuesArr.indexOf(x) != valuesArr.lastIndexOf(x)) {passing = false; }
        });
    return passing
};

/*
https://leetcode.com/problems/unique-number-of-occurrences/submissions/

lessons:
cannot return in the middle of forEach, better to set a variable.

Object.values can turn object into array of values.

Use brackets to assign object keys when working with variables:
objectOfUniques[uniques[i]].
