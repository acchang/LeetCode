// helpful:
// https://dev.to/kevin074/leetcode-diary-983-minimum-cost-for-tickets-3m0g
// https://www.codiwan.com/posts/leetcode/minimum-cost-for-tickets/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */

var mincostTickets = function(days, cost) {
    // Initilize dp array to be the size of the last day plus 1
      let dp = new Array(days[days.length - 1] + 1);
      // Base case
      dp[0] = 0;
      // Loop through all the days
      for (let i = 1; i < dp.length; i++) {
      // If 'i' isn't in the days array we let it equal to the previous day because we don't need to buy a ticket for that day
        if (!days.includes(i)) {
          dp[i] = dp[i - 1];
          // if dp[i] is in the days array we find the min value between our 3 cost possibilities
        } else {
          dp[i] = Math.min(
            dp[Math.max(0, i - 1)] + cost[0],
            dp[Math.max(0, i - 7)] + cost[1],
            dp[Math.max(0, i - 30)] + cost[2]
          );
        }
      }
      // last element of dp will be our answer
      return dp[dp.length - 1];
    };

    


// one solution
var mincostTickets = function(days, costs) {
    const [one, seven, thirty] = costs;
    const memo = new Map()

    function recurse(curr, idx) {
        if(memo.has(curr)) return memo.get(curr);
        if(idx >= days.length) return 0;
        if(curr >= days[idx]) return recurse(curr, idx+1);

        const buy1 = recurse(days[idx], idx) + one;
        const buy7 = recurse(days[idx]+6, idx) + seven;
        const buy30 = recurse(days[idx]+29, idx) + thirty;
        const min = Math.min(buy1, buy7, buy30);
        memo.set(curr, min);
        return min;
    }
    return recurse(0, 0);
};