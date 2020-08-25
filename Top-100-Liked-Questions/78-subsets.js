/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  const res = [];
  const dfs = (index, curr) => {
      res.push([].concat(curr));
      for (let i = index; i < nums.length; i++) {
          curr.push(nums[i]);
          dfs(i + 1, curr);
          curr.pop();
      }
  }
  dfs(0, []);
  return res;
};