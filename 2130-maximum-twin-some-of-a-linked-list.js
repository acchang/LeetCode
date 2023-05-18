// Using an Array 2

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    let arr = [];
    let cur = head;
    while(cur) {arr.push(cur.val); cur = cur.next;
    }
// make linked list into array

    let temp = arr[k-1];
    arr[k-1] = arr[arr.length-k];
    arr[arr.length-k] = temp;
// switch in array

    let rev = arr.reverse()
    return rev.reduce((acc,cV) => new ListNode(cV, acc), null);
// use reduce on reverse array to reconstruct linked list
// start from null, first in reversed array is last in linked list.
// accuulator becomes the this.next in the linked list.

};


// alt solutions

var swapNodes = function(head, k) {
    let curNode = head;
    let endNode = head;
    let count =1;
// Traverse till the kth element.
    while(count < k){
        curNode = curNode.next;
        count++;
    }
// store that value in frontNode
    let frontNode = curNode;

    curNode = curNode.next;
// Continue traversing 'curNode' from the kth node to the end and endNode from the head, till curNode === null;
    while(curNode){
        curNode = curNode.next;
        endNode = endNode.next;
    }
// Now the firstNode will have the value in the kth position from the start and endNode will have the value in the kth position from the last
    [frontNode.val, endNode.val] = [endNode.val, frontNode.val];
    return head;
};


/// using an array 1

const getAllData = (list) => { // linkedlist -> array
    let res = [];
    let current = list;
    while (current) {
        res.push(current.val);
        current = current.next;
    }
    return res;
};

const createL = (arr) => { // array -> linkedlist
    let tmp, node = null;
    let n = arr.length;
    for (let i = n - 1; ~i; i--) {
        if (!node) {
            node = new ListNode(arr[i]);
        } else {
            tmp = new ListNode(arr[i]);
            tmp.next = node;
            node = tmp;
        }
    }
    return node;
};
////////////////////////////////////////////////////////////////////////////

const swapNodes = (head, k) => {
    let a = getAllData(head);
    let n = a.length;
    let i = 0;
    let j = n - 1;
    while (i < k - 1) {
        i++;
        j--;
    }
    [a[i], a[j]] = [a[j], a[i]]; // swap
    return createL(a);
};



