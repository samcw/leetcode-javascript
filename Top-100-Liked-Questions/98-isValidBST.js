//递归，划定范围
const helper = (root, lower, upper) => {
  if (root === null) return true;
  if (root.val <= lower || root.val >= upper) return false;
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
  return helper(root, -Infinity, Infinity);
};
//递归，中序遍历
var isValidBST = function(root) {
  const arr = [];
  function mid(node) {
      if (!node) return;
      mid(node.left);
      arr.push(node.val);
      mid(node.right);
  }
  mid(root);
  const res = arr.every((item, index) => {
      if (index === 0) return true;
      if (item > arr[index - 1]) return true;
      return false;
  })
  return res;
};
//迭代，中序遍历
var isValidBST = function(root) {
  const stack = [];
  const arr = [];
  let temp = null;
  if (!root) return true;
  stack.push(root);
  while (stack.length) {
      temp = stack.pop();

      if (!temp) {
          arr.push(stack.pop().val);
          continue;
      }

      if (temp.right)
          stack.push(temp.right);
      
      stack.push(temp);
      stack.push(null);

      if (temp.left)
          stack.push(temp.left);
  }
  const res = arr.every((item, index) => {
      if (index === 0) return true;
      if (item > arr[index - 1]) return true;
      return false;
  })
  return res;
};
