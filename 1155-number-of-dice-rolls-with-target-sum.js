// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/?envType=daily-question&envId=2023-12-26

// https://www.youtube.com/watch?v=sqgpQP4_tTY

// good explanation: https://www.youtube.com/watch?v=hfUxjdjVQN4

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