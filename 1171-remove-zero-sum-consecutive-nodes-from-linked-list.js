// https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/?envType=daily-question&envId=2024-03-12
// Daily Q 3/12/24

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
var removeZeroSumSublists = function(head) {

    let front = new ListNode(1698, head);
    let start = front;
  
          while (start != null) {
              let prefixSum = 0;
              let end = start.next;
  
              while (end != null) {
                  prefixSum += end.val;
                  if (prefixSum == 0) {
                      start.next = end.next;
                  }
                  end = end.next;
              }
              start = start.next;
          }
          return front.next;
  };