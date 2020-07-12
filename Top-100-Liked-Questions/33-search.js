var search = function(nums, target) {
  let [start, end] = [0, nums.length - 1];
  let mid = null;
  let res = -1;
  while (start <= end) {
      mid = Math.floor((start + end) / 2);
      if (nums[mid] === target) {
        res = mid;
        break;
      }
      if (nums[start] <= nums[mid]) {
          if (target < nums[start] || target > nums[mid]) {
              start = mid + 1;
          } else {
              end = mid - 1;
          }
      } else {
          if (target < nums[mid + 1] || target > nums[end]) {
              end = mid - 1;
          } else {
              start = mid + 1;
          }
      }
  }
  return res;
};