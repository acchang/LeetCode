// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/?envType=daily-question&envId=2023-12-26

const { AxiosHeaders } = require("axios");

// bottom-up, dp approach:
// Neetcode: https://www.youtube.com/watch?v=hfUxjdjVQN4
// 14:33 "only need previous row to fill in next row"

// Both: https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/solutions/773197/javascript-solution-top-down-with-memoization-and-bottom-up-approach-dp/?envType=daily-question&envId=2023-12-26

// Monu DP -- 68/84
// a little slower than memoization

function numRollsToTarget(n, k, target) {
    const MOD = Math.pow(10,9) + 7
    let dp = new Array(n+1);

    for (let i=0; i<n+1; i++){
        dp[i] = new Array(target+1).fill(0);
    }

    dp[0][0] = 1

    for (let i=1; i<=n; i++){
        //for the number of dice
        for (let j=1; j<=target; j++){
            // for totals up to the target
            for (let f=1; f<=k; f++){
                // for each face of the die
                if (j-f < 0){break}
                // if face is larger than number up to target, negative, so break
                dp[i][j]=(dp[i][j] + dp[i-1][j-f])%MOD;
                // set as dp[dice][total] the current plus one row up and before.
                // and the current keeps getting replaced as f goes through the face
            }
        }
    }
    return dp[n][target]
  };


// for dice = 1, face = 6, target = 3
//     0  1  2  3
//   [ 1, 0, 0, 0 ]
//   [ 0, 1, 1, 1 ] 

//   dp[i][j]=(dp[i][j] + dp[i-1][j-f])%MOD;
//   dp[1][1]= 0+ rowbefore(target-current OR 3-1... 2 = 0) add rowbefore 3-2=1=0, eventually get 1
//   you're looking at the combinations of the current die that add to the previous that make the target, but the target is the column head.


// for dice = 2, face = 6, target = 7

//   0  1  2  3  4  5  6  7
// [ 1, 0, 0, 0, 0, 0, 0, 0],
// [ 0, 1, 1, 1, 1, 1, 1, 0], -- one die makes 1 to 6
// [ 0, 0, 1, 2, 3, 4, 5, 6] -- second die, combinations that make columnheads

// I think I understand but may not be able to replicate.
// the dp aspect is hard as one builds on the other



// Monu memoized with dp
// a lot faster, 75%/84%

function numRollsToTarget(n, k, target) {
    MOD = 10**9 + 7
    let dp = new Array(n+1);

    for (let i=0; i<n+1; i++){
        dp[i] = new Array(target+1).fill(-1);
    }
    
      function helper(n, t){
          if (t==0){return n === 0}
          if (n<=0 || t<0){return 0}
        //   if (n == 0) {
        //     return t == 0 ?  1 : 0}
          if (dp[n][t] != -1){return dp[n][t]}
        
          let count = 0
          for (let i = 1; i<=k; i++){
              count = (count + helper(n-1, t-i)) % MOD
          }
        dp[n][t] = count
        return count
      }
      return helper(n, target)
  };




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
  // make an array from length specified and each one a new array
  // see array.fom MDN entry
  
// it keeps adjusting the die and the target until it's hit and records a count

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