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
objectOfUniques[uniques[i]]
