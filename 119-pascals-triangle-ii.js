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


/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    // create hash map?
    let rowMap
    rowMap[1] = [1[]
    if (rowIndex == 0){ans.push(1)}
    if (rowIndex == 1){ans.push(1,1)}
    else {
        let focus = [1,1]
        let counter = 1
        while (counter<rowIndex){
            for (let i=0;i<focus.length-1;i++){
                ans.push(focus[i]+focus[i+1])
            }
            ans.push(1)
            ans.unshift(1)
            focus = ans
            counter++
        }
    }
    return ans
};