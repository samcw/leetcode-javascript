//暴力解法
var maxArea = function(height) {
  let max = 0;
  let shorter = 0;
  for (let i = 0; i < height.length - 1; ++i) {
      for (let j = i + 1; j < height.length; ++j) {
          shorter = height[i] > height[j] ? height[j] : height[i];
          max = shorter * (j - i) > max ? shorter * (j - i) : max;
      }
  }
  return max;
};
//双指针法
//向内收紧小的一边，可能会使面积增大
var maxArea = function(height) {
  let max = 0;
  let shorter = 0;
  let i = 0, j = height.length - 1;
  let temp = 0;

  while (i < j) {
      let shorter = height[i] > height[j] ? j : i;
      temp = height[shorter] * (j - i);
      max = temp  > max ? temp : max;
      if (shorter === i) ++i;
      else --j;
  }

  return max;
};