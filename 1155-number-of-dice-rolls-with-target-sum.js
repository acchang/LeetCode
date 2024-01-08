// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/?envType=daily-question&envId=2023-12-26

// bottom-up, dp approach:
// Neetcode: https://www.youtube.com/watch?v=hfUxjdjVQN4
// 14:33 "only need previos row to fill in next row"





// Memoized -- top down approach
// start with n = n and reduce until n=0

function numRollsToTarget(n, k, target) {
    MOD = 10**9 + 7
    cache = {}
    
      function helper(n, t){
          if (n == 0) {
            return t == 0 ?  1 : 0}
          if (cache[(n, t)]){
            console.log("n",n, "t", t, "together", (n, t))
            console.log(cache)
            return cache[(n, t)]}
        
          let count = 0
          for (let i = 1; i<=k; i++){
              count = (count + helper(n-1, t-i)) % MOD
          }
        // console.log("n", n, "t", t, cache)
        cache[(n, t)] = count
        return count
      }
      return helper(n, target)
  };

console.log(numRollsToTarget(5, 6, 7))

// why does this simple memoization only show the t and not the n as part of the key?
// below memoized, it works with map but when using object it's too slow.
// from: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/773197/javascript-solution-top-down-with-memoization-and-bottom-up-approach-dp/?envType=daily-question&envId=2023-12-26


function numRollsToTarget(n, k, target) {
    MOD = 10**9 + 7
    const cache = new Map()
    
      function helper(n, t){
          const key = `${n}#${t}`;

          if (n == 0) {
            return t == 0 ?  1 : 0}
          if (cache.has(key)){
            return cache.get(key)}
        
          let count = 0
          for (let i = 1; i<=k; i++){
              count = (count + helper(n-1, t-i)) % MOD
          }
        cache.set(key,count)
        return count
      }
      return helper(n, target)
  };









// Many stepped solution https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/4274303/javascript-1155-number-of-dice-rolls-with-target-sum/?envType=daily-question&envId=2023-12-26





// Monu: https://www.youtube.com/watch?v=sqgpQP4_tTY

// Neetcode: https://www.youtube.com/watch?v=hfUxjdjVQN4

// this works but it's hard for me to conceptualize the recursion
// use an object and an array: https://discord.com/channels/735923219315425401/1193386012588638229

var numRollsToTarget = function (n, k, target) {
    if (n > target) return 0;
    // if number of dice greater than target
    if (n * k < target) return 0;
    // if number of dice times max face less than target
    const MOD = 10 ** 9 + 7;
    // establish modulo
    let memo = Array.from({ length: n + 1 }, () => new Array());
  // make an array from lemgth specified and each one a new array
  // see array.fom MDN entry
  
    function numofways(n, target) {
      if (memo[n][target] !== undefined) return memo[n][target];
      if (n === 0 && target === 0) return 1;
      if (n <= 0) return 0;
      if (target <= 0) return 0;
      let count = 0;
      for (let i = 1; i <= Math.min(k, target); i++) {
        count = (count + numofways(n - 1, target - i)) % MOD;
      }
      memo[n][target] = count;
      return count;
    }
    
    return numofways(n, target);
  };





// essentially we need to calculate all possibilities using a recursive function, when total equals target and n becomes zero with no nice left.


var numRollsToTarget = function(n, k, target) {
    const MOD = Math.pow(10,9) + 7;

    var helper = function (n,t) {
        if (t == 0){return n == 0}
        let count = 0
        for (let i=1; i<=k; i++){
            count = count + (helper(n-1, t-i)) %  MOD
        }
        return count
    }
    return helper(n,target)
};











/////// ---------- book explanation:

var numRollsToTarget = function(n, k, target) {
    const mod = 10**9 + 7;

    // Initialize two arrays to store the current and previous rows of dynamic programming table
    let dp1 = new Array(target + 1).fill(0);  // Current row
    let dp2 = new Array(target + 1).fill(0);  // Previous row

    // Base case: there is one way to achieve a sum of 0 with 0 dice rolls
    dp1[0] = 1;

    // Dynamic programming loop for each die
    // n dice, k faces
    for (let i = 1; i <= n; ++i) {
        // for each of the dice
        let prev = dp1[0];  // Initialize the previous value for the first element, prev starts at 1
        for (let j = 1; j <= target; ++j) {
        // go up until the target
            dp2[j] = prev;  // Update dp2 based on the previous value
        //
            prev = (prev + dp1[j]) % mod;  // Update prev for the next iteration

            // If the current sum has more faces than the number of faces on the die, adjust prev
            if (j >= k) {
                prev = (prev - dp1[j - k] + mod) % mod;
            }
        }

        // Swap dp1 and dp2 for the next iteration
        [dp1, dp2] = [dp2, dp1];

        // Reset the first element of dp2 for the next iteration
        dp2[0] = 0;
    }

    // The result is in dp1[target], representing the number of ways to achieve the target sum
    return dp1[target];
};