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
    return head.length
    if (head.length % 2 != 0) {return head.splice(2)}
    if (head.length % 2 === 0) {return head.splice(head.length/2)}
};