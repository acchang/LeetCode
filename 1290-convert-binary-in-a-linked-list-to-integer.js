/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
    console.log(head)
    let curr = head;
    let bin = ""
    while (curr){
        console.log(curr.val)
        bin += curr.val.toString()
        console.log("bin", bin)
        curr = curr.next
    }
    console.log("end", bin)
    return parseInt(bin, 2)
};