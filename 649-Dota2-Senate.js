// https://leetcode.com/problems/dota2-senate/description/
// https://www.youtube.com/watch?v=pj-3Mnn3YNU

/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    let senateArray = senate.split("")
    let stack = []

    for (let s of senateArray){
        if (!stack.length || stack[stack.length-1] == s){
            stack.push(s);
        }
        else {
            senateArray.push(stack.pop())
        }
    }
    return stack[0] == 'R' ? 'Radiant' : 'Dire'
};

// another solution:



/**
 * @param {string} senate
 * @return {string}
 */

var predictPartyVictory = function(senate) {
    
    // Count of Each Type of Senator to check for Winner
    let rCount = 0, dCount = 0;
    for (let i = 0; i < senate.length; i++) {
        if (senate[i] == 'R') {
            rCount++;
        } else {
            dCount++;
        }
    }

    // Ban the candidate "toBan", immediate next to "startAt"
    // If have to loop around, then it means next turn will be of
    // senator at same index. Returns loop around boolean
    const ban = (toBan, startAt) => {
        let loopAround = false;
        let pointer = startAt;

        while (true) {
            if (pointer == 0) {
                loopAround = true;
            }
            if (senate[pointer] == toBan) {
                senate = senate.slice(0, pointer) + senate.slice(pointer + 1);
                break;
            }
            pointer = (pointer + 1) % senate.length;
        }

        return loopAround;
    }

    // Turn of Senator at this index
    let turn = 0;

    // While No Winner
    while (rCount > 0 && dCount > 0) {

        // Ban the next opponent, starting at one index ahead
        // Taking MOD to loop around.
        // If index of banned senator is before current index,
        // then we need to decrement turn by 1, as we have removed
        // a senator from list
        if (senate[turn] == 'R') {
            let bannedSenatorBefore = ban('D', (turn + 1) % senate.length);
            dCount--;
            if (bannedSenatorBefore) {
                turn--;
            }
        } else {
            let bannedSenatorBefore = ban('R', (turn + 1) % senate.length);
            rCount--;
            if (bannedSenatorBefore) {
                turn--;
            }
        }

        // Increment turn by 1
        turn = (turn + 1) % senate.length;
    }

    // Return Winner depending on count
    return dCount == 0 ? "Radiant" : "Dire";
};
