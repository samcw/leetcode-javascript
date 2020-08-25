/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 注意本题解决重复的方法，就是强制选择仅可以向后进行
 */
var combinationSum = function(candidates, target) {
  const res = [];
  const dfs = (start, path) => {
      let sum = path.reduce((pre, curr) => pre + curr, 0);
      if (sum > target) return;
      if (sum === target) {
          res.push([].concat(path));
          return;
      }
      //i = start 强制选择向后进行
      for (let i = start; i < candidates.length; i++) {
          path.push(candidates[i]);
          dfs(i, path);
          path.pop();
      }
  }
  dfs(0, []);
  return res;
};