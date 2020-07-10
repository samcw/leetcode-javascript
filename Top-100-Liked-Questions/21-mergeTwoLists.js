//迭代
var mergeTwoLists = function(l1, l2) {
  let temp = undefined;
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val >= l2.val) {
      temp = l2;
      l2 = l2.next;
  } else {
      temp = l1;
      l1 = l1.next;
  }
  const res = temp;
  while(l1 && l2) {
      if (l1.val >= l2.val) {
          temp.next = l2;
          l2 = l2.next;
      } else {
          temp.next = l1;
          l1 = l1.next;
      }
      temp = temp.next;
  }
  if (l1) {
      temp.next = l1;
  } else {
      temp.next = l2;
  }
  return res;
};
//递归
var mergeTwoLists = function(l1, l2) {
  if (!l1) return l2;
  else if (!l2) return l1;
  else if (l1.val >= l2.val) {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
  else {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  }
};