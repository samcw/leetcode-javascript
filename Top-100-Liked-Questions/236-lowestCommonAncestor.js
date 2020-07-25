//递归
var lowestCommonAncestor = function(root, p, q) {
  let ans;
  const dfs = (root, p, q) => {
      if (root === null) return false;
      const lson = dfs(root.left, p, q);
      const rson = dfs(root.right, p, q);
      if ((lson && rson) || ((root.val === p.val || root.val === q.val) && (lson || rson))) {
          ans = root;
      } 
      return lson || rson || (root.val === p.val || root.val === q.val);
  }
  dfs(root, p, q);
  return ans;
};
//递归保存父节点，可以改成迭代方式
var lowestCommonAncestor = function(root, p, q) {
  const parentMap = new Map();
  const values = [];
  if (!q) return p;
  else if (!p) return q;
  //define dfs function
  function dfs(root) {
      if (!root) return null;
      if (root.left) {
          parentMap.set(root.left.val, root);
          dfs(root.left);
      }
      if (root.right) {
          parentMap.set(root.right.val, root);
          dfs(root.right);
      }
  }
  //operate dfs function
  dfs(root);
  while(p) {
      //get the p's parent
      values.push(p.val);
      p = parentMap.get(p.val);
  }
  while(q) {
      if (values.includes(q.val)) {
          return q;
      }
      q = parentMap.get(q.val);
  }
  return null;
};