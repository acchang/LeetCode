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
    let temp1prev = null;
    let curr = head;

    while(curr){
    // while there is a head
        const temp2next = curr.next;
        // temp2 holds current.next 
        /// curr starts again holding current.next 
        console.log("next=curr.next or", temp2next)
        curr.next = temp1prev;
        // set curr.next to temp1prev or null on first go
        /// curr.next now has temp1prev which was the head
        console.log("curr.next=prev or", temp1prev)
        temp1prev = curr;
        // temp1prev now becomes curr or the head
        // temp1prev pulls curr or the head again
        console.log ("prev=curr or", curr)
        curr = temp2next;
        // now curr is temp2next or current.next
        // curr is temp2next or current.next, which is the remainder after the head
        console.log("curr=next or", temp2next, "END")
// console.log("next", temp2next, "curr.next", curr.next, "prev", temp1prev, "curr", curr)
// there are two temporary pointers, prev and next and with curr which is the head
// next holds curr.next
// curr.next then is replaced by prev
// prev then holds curr
// curr is now next
    }
    
    return temp1prev;
};