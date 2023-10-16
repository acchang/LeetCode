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

