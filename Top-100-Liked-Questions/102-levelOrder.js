//迭代
var levelOrder = function(root) {
  const ret = [];
  if (!root) return ret;

  const q = [];
  q.push(root);
  while (q.length !== 0) {
      const currentLevelSize = q.length;
      ret.push([]);
      for (let i = 1; i <= currentLevelSize; ++i) {
          const node = q.shift();
          ret[ret.length - 1].push(node.val);
          if (node.left) q.push(node.left);
          if (node.right) q.push(node.right);
      }
  }
      
  return ret;
};
//递归
var levelOrder = function(root) {
  const res = [];
  function dfs(node, dep) {
      if (!node) return;
      if (Array.isArray(res[dep])) {
          res[dep].push(node.val);
      } else {
          res[dep] = [node.val];
      }
      dfs(node.left, dep + 1);
      dfs(node.right, dep + 1);
  }
  if (!root) return res;
  dfs(root, 0);
  return res;
};