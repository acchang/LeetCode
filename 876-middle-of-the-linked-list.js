/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// from: https://leetcode.com/problems/middle-of-the-linked-list/solutions/2878706/topic/
// not my answer.

var middleNode = function(head) {
    let fast = head;
    while (fast != null && fast.next != null) {
        head = head.next;
        fast = fast.next.next;
    }
    return head;
};