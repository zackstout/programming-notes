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
var removeNthFromEnd = function (head, n) {
  // Move head forward n
  // Then move dummy and head forward until head reaches end
  // Then remove node
  const res = new ListNode(0, head);
  let dummy = res;

  while (n > 0) {
    head = head.next;
    n--;
  }
  while (head) {
    head = head.next;
    dummy = dummy.next;
  }
  dummy.next = dummy.next.next;

  return res.next;
};
