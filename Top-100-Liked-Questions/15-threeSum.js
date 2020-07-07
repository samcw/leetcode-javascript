//类似双指针
var threeSum = function(nums) {
  let res = [];
  let first, end = 0;
  nums.sort((a, b) => a - b);
  if (nums[0] <= 0 && nums[nums.length - 1] >= 0) {
      for(let i = 0; i < nums.length - 2;) {
          if (nums[i] > 0) return res;
          first = i + 1;
          end = nums.length - 1;
          do {
              if (first >= end || nums[i] * nums[end] > 0) break;
              if (nums[i] + nums[first] + nums[end] > 0) {
                  while(nums[end] === nums[--end]);
              } else if (nums[i] + nums[first] + nums[end] < 0) {
                  while(nums[first] === nums[++first]);
              } else {
                  res.push([nums[i], nums[first], nums[end]]);
                  while(nums[first] === nums[++first]);
              }
          } while (first < end);
          while (nums[i] === nums[++i]) {};
      }
  }
  return res;
};

console.log(threeSum([0, 0, 0, 0, 0, 0]));