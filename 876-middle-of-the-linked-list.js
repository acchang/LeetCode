// https://leetcode.com/problems/middle-of-the-linked-list/description/?envType=daily-question&envId=2024-03-07
// DQ 3/6/24
// solved on my own

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
var middleNode = function(head) {
    let fast = head
    while (fast && fast.next){
    head = head.next;
    fast = fast.next.next;
}
return head
};




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