//递归
var isSymmetric = function(root) {
  function check(left, right) {
      if (left === null && right === null) return true;
      else if (left === null || right === null) return false;
      return left.val === right.val && check(left.left, right.right) && check(left.right, right.left);
  }
  return check(root, root);
};
//迭代
var isSymmetric = function(root) {
  const stack = [];
  let item1 = null;
  let item2 = null;
  stack.push(root);
  stack.push(root);
  while(stack.length) {
      item1 = stack.shift();
      item2 = stack.shift();
      if (!item2 && !item2) continue;
      else if (!item1 || !item2 || item1.val !== item2.val) return false;
      stack.push(item1.left);
      stack.push(item2.right);

      stack.push(item1.right);
      stack.push(item2.left);
  }
  return true;
};