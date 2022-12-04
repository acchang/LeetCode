for (let i=nums.length-1; i>-1; i--){
    let first = nums.slice(0,i+1);
    let firstAvg = Math.floor(first.reduce((a, b) => a + b, 0) / first.length);
    let second = nums.slice(i+1);
    let secondAvg = Math.floor(second.reduce((a, b) => a + b, 0) / second.length);
    let result = Math.abs(firstAvg - secondAvg);
    console.log("r:" + i, result, firstAvg, secondAvg)
    if (result<=lowest){lowest=result, lowestIndex=i}
    console.log("L:" + lowest, lowestIndex)
}
return lowestIndex
};
