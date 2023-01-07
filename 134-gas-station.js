// https://leetcode.com/problems/gas-station/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function(gas, cost) {
  let n = gas.length;
    let start = 0;
    let currentTank = 0;
    for(let i=0; i<2*n; i++){
      currentTank += gas[i%n]-cost[i%n];
        if (currentTank < 0){
        currentTank = 0;
        start = i+1;
      }
      else{
        if (i-start+1==n){
        return start
      }
    }
    }
return -1
};