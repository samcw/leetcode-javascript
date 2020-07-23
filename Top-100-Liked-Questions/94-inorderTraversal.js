//递归
var inorderTraversal = function(root) {
  const res = [];
  function getRes(node) {
    if (!node) return;
    getRes(node.left);
    res.push(node.val);
    getRes(node.right);
  }
  getRes(root);
  return res;
}
//迭代
var inorderTraversal = function(root) {
  const stack = [];
  const res = [];
  while(stack.length || root) {
      while(root) {
          stack.push(root);
          root = root.left;
      }
      let temp = stack.pop();
      res.push(temp.val);
      root = temp.right;
  }
  return res;
};
//莫里斯方法
var inorderTraversal = function(root) {
    const res = [];
    let pre;
    let temp;
    while (root) {
        if (root.left) {
            pre = root.left;
            while(pre.right) {
                pre = pre.right;
            }
            pre.right = root;
            temp = root;
            root = root.left;
            temp.left = null;
        } else {
            res.push(root.val);
            root = root.right;
        }
    }
    return res;
};
