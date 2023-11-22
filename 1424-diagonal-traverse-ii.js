/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var findDiagonalOrder = function(nums) {
    let baseRow = 0
    let atColumn = 0
    let output = []
    let atRow = baseRow
    while (baseRow < nums.length){
        if (nums[atRow][atColumn] == undefined){continue}
        else {output.push(nums[atRow][atColumn]);
        atColumn++;
        atRow--;
        if (atRow<0){baseRow++; atColumn = 0; atRow = baseRow}
            }
        }
    
        let baseColumn = 1
        atRow = nums.length-1
        atColumn = baseColumn
        
// while (output.length < nums[nums.length - 1][nums[nums.length-1].length - 1])

    while (baseColumn<nums[nums.length-1].length)
        {
            if (nums[atRow][atColumn]){
                output.push(nums[atRow][atColumn]);
                console.log("add", "AR", atRow, "AC", atColumn,"num", nums[atRow][atColumn])
                atColumn++;
                atRow-- } 
            else {atColumn++; atRow--}
            if (atRow<0){
                baseColumn++; 
                atColumn=baseColumn; 
                atRow = nums.length-1
                console.log("renew")
                }
        console.log("end", "BC", baseColumn, "AR", atRow, "AC", atColumn)
        }
    console.log("out")
    return output
}

