/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    // this is a dfs problem
    let res, ke;
    res = new Set();  // save room idx
    ke = new Set();  // save all keys
    dfs(rooms, 0);
    return res.size == rooms.length;
};

const dfs = (rooms, idx) => {
    // starts with dfs(the array of rooms, 0);
    if (res.has(idx)) return;
    // doesn't happen at start bc res is empty
    res.add(idx);
    // 0 added to res
    let e = rooms[idx];
    // e is what's in room[0] or the subarray of keys
    let n = e.length;
    // n is the length of the subarray of keys
    if (n == 0) { // empty room[idx] can be visited directly without keys -- not true?
        res.add(idx);
    // add an empty room to res, which is set of the rooms visited
        return;
    }
    for (let i = 0; i < n; i++) {
        ke.add(e[i]);
        // add the keys e[i] to the set ke
        if (hasAllkey(ke, e)) res.add(idx); 
        // all room[idx] keys inside ke Set, this idx is able to be visited
        /// if hasAllkey, which asks if e is in ke is true (e = rooms[idx]), add the room to res, which is set of the rooms visited
        dfs(rooms, e[i]);
        // run the algo again.
    }
};

const hasAllkey = (ke, a) => {
    for (const e of a) {
        if (!ke.has(e)) return false;
        /// why has and not includes?
    }
    return true;
};

