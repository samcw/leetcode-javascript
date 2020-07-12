var nextPermutation = function(nums) {
  let i = nums.length - 2;
  let temp = 0;
  while(i >= 0 && nums[i] >= nums[i + 1]) --i;
  if (i >= 0) {
      let j = nums.length - 1;
      while (nums[j] <= nums[i] && j >= i) --j;
      temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      temp = nums.slice(i + 1, ).sort((a, b) => a - b);
      nums.splice(i + 1, nums.length, ...temp);
  } else {
      nums.sort((a, b) => a - b);
  }
};