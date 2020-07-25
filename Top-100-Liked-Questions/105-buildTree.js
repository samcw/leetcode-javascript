//递归
var buildTree = function(preorder, inorder) {
  const midMap = new Map();
  inorder.forEach((item, index) => {
      midMap.set(item, index);
  });
  function getRes(pre_start, pre_end, mid_start, mid_end) {
      if (pre_end < pre_start) return null;
      let node = new TreeNode(preorder[pre_start]);
      let mid_root_index = midMap.get(preorder[pre_start]);
      let left_count = mid_root_index - mid_start;

      node.left = getRes(pre_start + 1, pre_start + left_count, mid_start, mid_root_index - 1);
      node.right = getRes(pre_start + left_count + 1, pre_end, mid_root_index + 1, mid_end);
      return node;
  }
  return getRes(0, preorder.length - 1, 0, preorder.length - 1);
};