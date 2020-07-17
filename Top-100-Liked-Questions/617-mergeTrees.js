//递归
var mergeTrees = function(t1, t2) {
  if (!t1) return t2;
  if (!t2) return t1;
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
};
//迭代
var mergeTrees = function(t1, t2) {
  const stack = [];
  if (!t1) return t2;
  stack.push([t1, t2]);
  while(stack.length !== 0) {
      let [temp1, temp2] = stack.shift();
      if (!temp1 || !temp2) continue;
      temp1.val += temp2.val;
      if (!temp1.left) {
          temp1.left = temp2.left;
      } else {
          stack.push([temp1.left, temp2.left]);
      }
      if (!temp1.right) {
          temp1.right = temp2.right;
      } else {
          stack.push([temp1.right, temp2.right]);
      }
  }
  return t1;
};