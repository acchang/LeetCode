// https://leetcode.com/problems/custom-sort-string/?envType=daily-question&envId=2024-03-11

/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function(order, s) {
    const sOccurrences = {}
    let ans = ""
    for (sPart of s){
        if (!sOccurrences[sPart]){sOccurrences[sPart] = 1}
        else (sOccurrences[sPart]++)
    }

    for (oPart of order){
        ans += oPart.repeat(sOccurrences[oPart])
    }

    for (sPart of s){
        if (!order.includes(sPart)){ans+=sPart}
    }

    return ans
};


// first attempt, too complicated:

    // build a dictionary of order, (letter, place, 0)
    // take s and match dictionary, if s is in dictionary (letter, place, +1)
    // if not add to leftovers
    // take dictionary, sort by place, put letters into ans times appearance
    // add leftovers

    