// https://leetcode.com/problems/linked-list-cycle/?envType=daily-question&envId=2024-03-06
// daily Q 3/6/24

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let fast = head
    while (fast && fast.next){
        head = head.next;
        fast = fast.next.next;
        if (head === fast) {return true}
    }
    return false
};