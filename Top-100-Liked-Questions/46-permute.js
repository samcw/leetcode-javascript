/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  const res = [];
  const dfs = (path) => {
      if (path.length === nums.length) {
          res.push([].concat(path));
      }
      for (let item of nums) {
          if (!path.includes(item)) {
              path.push(item);
              dfs(path);
              path.pop();
          }
      }
  }
  dfs([]);
  return res;
};