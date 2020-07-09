//双指针，第一种
var removeNthFromEnd = function(head, n) {
  let index = 0;
  let p = head;
  let res = head;
  while(p.next) {
      ++index;
      if (index > n) {
          res = res.next;
      }
      p = p.next;
  }
  if (res === head && index != n) head = head.next;
  else res.next = res.next.next;
  return head;
};
//双指针，第二种，添加了头指针，简化了判断
var removeNthFromEnd = function(head, n) {
  let empty = new ListNode(0);
  empty.next = head;
  let p = empty;
  let q = empty;
  for(let i = 1; i <= n + 1; ++i) {
      p = p.next;
  }
  while(p) {
      p = p.next;
      q = q.next;
  }
  q.next = q.next.next;
  return empty.next;
};