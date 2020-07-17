//递归
var maxDepth = function(root) {
  if (root) {
      let left = root.left ? maxDepth(root.left) : 0;
      let right = root.right ? maxDepth(root.right) : 0;
      if (left > right) return left + 1;
      else return right + 1;
  } else {
      return 0;
  }
};
//迭代
var maxDepth = function(root) {
  let max = 0;
  const stack = [];
  if (root) {
      stack.push([root, 1]);
  };
  while(stack.length) {
      let [temp, currMax] = stack.pop();
      max = currMax > max ? currMax : max;
      if (temp.left) {
          stack.push([temp.left, currMax + 1]);
      }
      if (temp.right) {
          stack.push([temp.right, currMax + 1]);
      }
  }
  return max;
};