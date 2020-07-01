/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //暴力解法
  for (let i = 0; i < nums.length - 1; ++i) {
      for (let j = i + 1; j < nums.length; ++j) {
          if (nums[i] + nums[j] === target) return [i, j];
      }
  }

  //哈希表
  let map = new Map();
  for (let i = 0; i < nums.length; ++i) {
      let value = target - nums[i];
      if (map.has(value)) return [map.get(value), i];
      map.set(nums[i], i);
  }
};