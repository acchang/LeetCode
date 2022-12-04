var minimumAverageDifference = function(nums) {
    console.log(nums)
    let lowest = Infinity;
    let lowestIndex = ""
    for (let i=nums.length-1; i>-1; i--){
        let first = nums.slice(0,i+1);
        let firstAvg = first.reduce((a, b) => a + b, 0) / first.length;
        let second = nums.slice(i+1);
        let secondAvg = second.reduce((a, b) => a + b, 0) / second.length;
        let result = Math.abs(Math.floor(firstAvg - secondAvg));
        console.log("r:" + result)
        if (result<=lowest){lowest=result, lowestIndex=i}
        console.log("L:" + lowest, lowestIndex)
    }
    return lowestIndex
};
