var minimumAverageDifference = function(nums) {
    let averages = []
    for (let i=0; i<nums.length; i++){
        let first = nums.slice(0,i+1);
        let firstAvg = Math.floor(first.reduce((a, b) => a + b, 0) / first.length);
        let second = nums.slice(i+1);
        second == 0 ? secondAvg = 0 : secondAvg = Math.floor(second.reduce((a, b) => a + b, 0) / second.length)
        averages.push(Math.abs(firstAvg - secondAvg))        
    }
    return averages.indexOf(Math.min(...averages))
};