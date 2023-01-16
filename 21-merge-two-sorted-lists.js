// https://leetcode.com/problems/merge-two-sorted-lists/
// https://www.youtube.com/watch?v=eQGn1xbt1JU
// https://www.freecodecamp.org/news/implementing-a-linked-list-in-javascript/
// https://www.youtube.com/watch?v=ZBdE8DElQQU


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let curr = new ListNode(0);
    let dummy = curr
    // need to set curr to dummy or else at end curr.next is just one element
    while (list1 && list2){
    // while both lists have something, take the smaller of them and add it to the head
            console.log("dummy", dummy)
            console.log("v", list1.val, list2.val )
        if (list1.val<list2.val){
            curr.next=list1
                console.log("1", curr.next)
            list1=list1.next
                console.log(list1)
        } else {
            curr.next=list2
                console.log("2", curr.next)
            list2=list2.next
                console.log(list2)
        }
    curr = curr.next
    // after one of the two is selected, make curr the next so that the one after gets the next in line 28
        console.log("end", curr)
    }
    if (list1){"remain1"; curr.next=list1}
    if (list2){"remain2"; curr.next=list2}
    // this attaches the remainder
    console.log(dummy)
    // the includes the 0
    console.log(dummy.next)
    return dummy.next
};