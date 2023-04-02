/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
var successfulPairs = function(spells, potions, success) {
    sort potions and multiply until under success?
    
    if a spell and potion pair is successful, then the spell and all stronger potions will be successful too.

     for each spell, we need to find the potion with the least strength that will form a successful pair.

We can efficiently do this by sorting the potions based on strength and using binary search.


};