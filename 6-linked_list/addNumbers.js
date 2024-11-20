/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let temp = new ListNode(0);
  let head = temp;
  while (l1?.next || l2?.next) {
    const n = (l1?.val || 0) + (l2?.val || 0) + carry;
    const val = n % 10;
    const node = new ListNode(val);
    carry = Math.floor(n / 10);
    temp.next = node;
    temp = temp.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  const val = (l1?.val || 0) + (l2?.val || 0) + carry;
  temp.next = new ListNode(val % 10);
  if (Math.floor(val / 10)) {
    temp.next.next = new ListNode(Math.floor(val / 10));
  }

  head = head.next;
  return head;
};
