// fastest:

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let counter = 0
    let baseArray = [1]
    let newArray = []
    while (counter<rowIndex){
        for (let i=0; i<baseArray.length-1;i++){
            newArray.push(baseArray[i]+baseArray[i+1])
        }
        newArray.push(1)
        newArray.unshift(1)
        counter++
        baseArray = newArray
        newArray = []
    }
    return baseArray
};

// book solution:

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    let row = [1];

    for (let i = 0; i < rowIndex; i++) {
        row = row.map((val, index) => 
        (row[index - 1] || 0) + (row[index] || 0));
       // for each entry in the array, add the one before to the current if it exists
        console.log(i, row)
// 0 [ 1 ]
// 1 [ 1, 2 ]
// 2 [ 1, 3, 3 ]
        row.push(1);
        // add a final 1
    }
    return row;    
};

// No need to build hashmap, too long

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    const rowMap = {}
    rowMap[0] = [1]
    rowMap[1] = [1,1]
    let rowMapCounter = 1
    while (rowMapCounter<rowIndex){
        let newArray = []
        for (let i=0; i<rowMap[rowMapCounter].length-1;i++){
            newArray.push(rowMap[rowMapCounter][i]+rowMap[rowMapCounter][i+1])
        }
        newArray.push(1)
        newArray.unshift(1)
        rowMapCounter++
        rowMap[rowMapCounter] = newArray 
    }
    return rowMap[rowIndex]
};

