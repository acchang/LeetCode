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


// Or, simpler:

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
    let bin = ""
    while (head){
        bin += head.val.toString()
        head = head.next
    }
    return parseInt(bin, 2)
};

// a lot of the book solutions don't need to parseInt and calculate binary automatically

function getDecimalValue(head: ListNode | null): number {
    let cur = head; 
    let dec= 0; 
    while(cur){
        dec +=cur.val;
        dec*=2;
        cur = cur.next 
    }
    
    return dec/2;
    }

    
