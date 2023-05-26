// https://leetcode.com/problems/stone-game-ii/solutions/799145/javascript-solution-top-down-approach-with-memoization/

var stoneGameII = function(piles) {
    const n = piles.length;
    const memo = new Map();
    const sums = new Array(n).fill(0);
	
    sums[n - 1] = piles[n - 1];
    
    for (let i = n - 2; i >= 0; i--) {
    // count back from n-2 until zero
        sums[i] = sums[i + 1] + piles[i]; // (1)
    // fill in sums with the one after plus the same with piles
    }
    
    return findMax(0, 1);
    // separate equation

    function findMax(index, M) { // (2)
        const key = `${index}#${M}`;
        console.log(key)
        console.log(memo)

        // base case
        if (n - index <= 2 * M) return sums[index]; // (3)
        if (memo.has(key)) return memo.get(key);
        
        let res = Number.MIN_SAFE_INTEGER;
        
        for (let x = 1; x <= 2 * M; x++) { // (4)
            const newM = Math.max(x, M); // (5)
            res = Math.max(res, sums[index] - findMax(index + x, newM)); // (6)
        }
        
        memo.set(key, res);
        return res;
    }
};

// another solution:

var stoneGameII = function(piles) {
    var n = piles.length;
    var arr = new Array(n+1).fill(0).map(el=>new Array(n+1).fill(0));
    var sum = new Array(n).fill(0);
    console.log(arr, sum)
    for(var i = n-1; i>=0 ; i--){
    // go backwards
        if(i == n-1) sum[i] = piles[i];
    // if i is the same as n-1, then piles is the same as sum (first condition)
        else sum[i] = piles[i] + sum[i+1];
    // otherwise sum is the same as piles + sum after
       console.log(i, sum, piles)
    }
    console.log("final",sum, piles)
    for(var i=n-1;i>=0;i--){
    // i goes backwards
        for(var m=1;m<=n; m++){
    // and then m increments as long as it's less than piles.length
            for(var x=1; x<=2*m && i+x<=n; x++) {
    // third loop increments from 1, and determines m
                arr[i][m] = Math.max(arr[i][m], sum[i]-arr[i+x][Math.max(m,x)]);
                console.log(arr[i][m])
            }
        }
    }
    return arr[0][1]; 
};




/* 
Comments:

(1) sums[i] = piles[i] + sum(piles[i + 1], piles[i + 2], ... piles[n - 1]).

(2) You can think of index as the starting position of the stone piles that are remaining. So at beginning, where index = 0,
	we have all the original piles left. If index = 2, then we have the piles[2] ... piles[n - 1] unclaimed.

(3) In this case the current move will be the last move. Therefore, knowing this, a player will want to take advantage of this 
	information by taken the remaining piles.

(4) A player at any point in the game will have the option of taking x piles, where 1 <= x <= 2M. If the # of remaining piles is less
	than 2M, the if conditional clause at (3) takes care of it.

(5) M, which initially equals 1, is the value used to set the limitation of stone piles a player can take at each turn. 
	The value gets updated to M = Math.max(x, M) and the limit of stone piles is doubled based on the new value of M. 

(6) As x increases, the current player is taking more piles.

*/