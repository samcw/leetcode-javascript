/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let res = [];
  function getIndex(type, nums, target) {
      let [start, end] = [0, nums.length - 1];
      let mid = null;

      while(start <= end) {
          mid = Math.floor((start + end) / 2);
          if (nums[mid] === target) {
              if (type === 'left') end = mid - 1;
              else start = mid + 1;
          }
          else if (nums[mid] > target) {
              end = mid - 1;
          }
          else {
              start = mid + 1;
          }
      }
      if (type === 'left') {
          if (start > nums.length || nums[start] !== target) return -1;
          else return start;
      }
      else {
          if (end < 0 || nums[end] !== target) return -1; 
          else return end;
      }
  };
  res[0] = getIndex('left', nums, target);
  res[1] = getIndex('right', nums, target);
  return res;
};
searchRange([7,7,7,8,8,8,8,8,10], 7)