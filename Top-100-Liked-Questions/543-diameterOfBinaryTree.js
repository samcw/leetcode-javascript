//递归
var diameterOfBinaryTree = function(root) {
  let obj = {
      max: 0
  }
  getMax(root, obj);
  return obj.max !== 0 ? obj.max - 1 : obj.max;
};
function getMax(node, obj) {
  if (!node) return 0;
  let left = getMax(node.left, obj);
  let right = getMax(node.right, obj);
  obj.max = obj.max >= left + right + 1 ? obj.max : left + right + 1;
  return left > right ? left + 1: right + 1;
}