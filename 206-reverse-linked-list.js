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
var reverseList = function(head) {
    console.log(head)
    let prev = null;
    let curr = head;

    while(curr){
        const next = curr.next;
        console.log("next", next)
        curr.next = prev;
        console.log("curr.next", prev)
        prev = curr;
        console.log ("prev", curr)
        curr = next;
        console.log("curr", next, "repeat")

    }
    
    return prev;
};