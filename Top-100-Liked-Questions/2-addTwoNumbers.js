/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const HEAD = new ListNode();
  let temp = 0;
  let p = HEAD;
  let value1 = 0;
  let value2 = 0;
  let sum = 0;

  while (l1 || l2) {
      value1 = l1 ? l1.val : 0;
      value2 = l2 ? l2.val : 0;
      sum = value1 + value2 + temp;
      if (sum >= 10) {
          temp = 1;
          sum = sum % 10;
      } else {
          temp = 0;
      }
      const newNode = new ListNode(sum);
      p.next = newNode;
      p = newNode;
      l1 = l1 ? l1.next : l1;
      l2 = l2 ? l2.next : l2;
  }

  if (temp != 0) {
      p.next = new ListNode(temp);
  }

  return HEAD.next;
};