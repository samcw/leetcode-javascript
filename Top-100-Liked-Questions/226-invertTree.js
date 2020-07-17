//递归
var invertTree = function(root) {
  if (!root) return null;
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};
//迭代
var invertTree = function(root) {
  const stack = [];
  let temp = null;
  if (!root) return null;
  stack.push(root);
  while (stack.length) {
      temp = stack.shift();
      if (!temp) continue;
      let node = temp.left;
      temp.left = temp.right;
      temp.right = node;

      stack.push(temp.left);
      stack.push(temp.right);
  }
  return root;
};