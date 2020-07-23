//莫里斯方法
var flatten = function(root) {
  let temp;
  let flag;
  while(root) {
      if (root.left) {
          temp = root.right;
          flag = root;
          root.right = root.left;
          while(flag.right) {
              flag = flag.right;
          }
          flag.right = temp;
          root.left = null;
      }
      root = root.right;
  }
};
//后序遍历法，先遍历右子树
var flatten = function(root) {
  let pre = null;
  function flattenItem(node) {
      if (!node) return;
      flattenItem(node.right);
      flattenItem(node.left);
      node.right = pre;
      node.left = null;
      pre = node;
  }
  flattenItem(root);
};