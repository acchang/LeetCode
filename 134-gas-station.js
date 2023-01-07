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
// this works because 0/5 = 0, and 5/5 = 0. Similarly 1/5 = 1 and 6/5 = 1. Could also be 15/5 and 16/5. So loop forever.
        if (currentTank < 0){
          currentTank = 0;
          start = i+1;
// if tank goes negative, then set Tank to zero and set new loop.
        }
        if (i-start+1==n){
// if tank is not negative, see if i am at the end of the loop... i minust start plus 1.`
          return start}
    }
return -1
};