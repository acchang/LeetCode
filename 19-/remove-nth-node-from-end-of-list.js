// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=daily-question&envId=2024-03-03
// DQ 3/2/24


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let counter = 0
    let first = head, second = head
    while (first.next) {first=first.next; counter++}
    console.log(first)
    for (let i=0; i<counter-n; i++){
        second = second.next
        console.log(second)
    }




    this.remove = function(element){
        var currentNode = head;
        var previousNode;
        if(currentNode.element === element){
            head = currentNode.next;
        } else {
            while(currentNode.element !== element) {
                previousNode = currentNode;
                currentNode = currentNode.next;
            }
    
            previousNode.next = currentNode.next;
        }
    
        length --;
      };



    // let fast = head, slow = head
    // for (let i = 0; i < n; i++) fast = fast.next
    // if (!fast) return head.next
    // while (fast.next) fast = fast.next, slow = slow.next
    // slow.next = slow.next.next
    // return head
};