//递归
var convertBST = function(root) {
  let value = 0;
  function convert(node) {
      if (!node) return;
      convert(node.right);
      node.val += value;
      value = node.val;
      convert(node.left);
  }
  convert(root);
  return root;
};
//迭代
var convertBST = function(root) {
  const stack = [];
  let value = 0;
  let temp = null;
  let node = root;
  while(stack.length || node) {
      while(node) {
          stack.push(node);
          node = node.right;
      }
      temp = stack.pop();
      temp.val += value;
      value = temp.val;

      node = temp.left;
  }
  return root;
};