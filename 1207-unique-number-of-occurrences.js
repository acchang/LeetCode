var uniqueOccurrences = function(arr) {
    console.log(arr)
    // use newSet to get all uniques
        let uniques = [... new Set(arr)];
        const object = {};
    // for each set, filter, get instances
        for (let i=0;i<uniques.length;i++){
            object[uniques[i]] = arr.filter((x) => x == uniques[i]).length
        }
    console.log(object)
    return object
};