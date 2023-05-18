// https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/description/

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

// convert to array and figure out; 47% time, 20% memory

var pairSum = function(head) {
    let list = []
    let cur = head
    let ans = 0
    let sum 
    while(cur) {list.push(cur.val); cur = cur.next}
    for (let i=0; i<list.length/2; i++){
        sum = list[i]+list[list.length-1-i]
        if (sum > ans){ans = sum}
    }
    return ans
};

// divide linked list into 2, reverse one, add and compare.
// 78% fast; 34% memory

var pairSum = function(head) {
    let prev = null;
    let slow = head;
    let fast = head;
    while(fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }
    prev.next = null
    let firstCur = head
    let secondCur = recursivelyReverseList(slow)
    let ans = 0
    let sum
while (firstCur != null) {
        sum = firstCur.val + secondCur.val
        if (sum > ans){ans = sum};
        firstCur = firstCur.next;
        secondCur = secondCur.next;
    }
    return ans
};

function recursivelyReverseList(head) {
    // base case
    if (head === null || head.next === null) {
        return head;
    }
    let reversedHead = recursivelyReverseList(head.next);
    head.next.next = head;
    head.next = null;
    return reversedHead;
}