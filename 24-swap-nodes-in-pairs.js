// https://leetcode.com/problems/swap-nodes-in-pairs/description/


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


// doesn't take a lot of memory (83%) but slow (14%)
// inspired by 1721 swapping nodes in a linked list


var swapPairs = function(head) {
    let second = [];
    let first = [];
    let counter = 0
    let cur = head;

    while(cur) {
        if (counter%2==0){first.push(cur.val)}
        else {second.push(cur.val)}
        cur = cur.next;
        counter++
    }
let arr = [];

if (counter%2 == 0){
        for (let i=0; i<first.length; i++){
            arr.push(second[i]), arr.push(first[i])
        }
}

if (counter%2 != 0){
        for (let i=0; i<second.length; i++){
            arr.push(second[i]), arr.push(first[i])
        }
        arr.push(first[first.length-1])
}

return arr.reverse().reduce((acc,cV) => new ListNode(cV, acc), null);
};

// faster solution: 61%, but memory at 18%
// clever, creates new linkedlists to hold

var swapPairs = function(head) {
    if (head == null || head.next == null) {
        return head;
    }
    let ans = new ListNode(0, head);
    let curr = ans;
    console.log(curr)
    while (curr.next != null && curr.next.next != null) {
        let t1 = curr.next;
        console.log("t1", t1)
        let t2 = curr.next.next;
        console.log("t2", t2)
        curr.next = t2;
        t1.next = t2.next;
        t2.next = t1;
        curr = curr.next.next;
        console.log("final", ans)
    }
    return ans.next;
};

/*
[0,1,2,3,4]
t1 [1,2,3,4]
t2 [2,3,4]
final [0,2,1,3,4]
t1 [3,4]
t2 [4]
final [0,2,1,4,3]
*/