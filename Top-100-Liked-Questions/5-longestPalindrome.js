//动态规划
var longestPalindrome = function(s) {
  let length = s.length;
  let d = [];
  let max = '';
  if (length <= 1) return s;
  for (let i = 0; i < length; ++i) {
      d[i] = [];
      d[i][i] = true;
  }
  max = s[0];
  for (let i = 1; i <= length - 1; ++i) {
      for (let j = 0; j < i; ++j) {
          if (s[i] === s[j]) {
              if (i - j < 3 || d[j+1][i-1] === true) {
                  d[j][i] = true;
                  if (i-j+1 > max.length) max = s.slice(j, i+1);
              }
          } else {
              d[j][i] = false;
          }
      }
  }
  return max;
};

//中心扩散
var longestPalindrome = function(s) {
  let max = '';
  let begin, end = 0;
  if (s.length <= 1) return s;
  max = s[0];
  for(let i = 0; i < s.length; ++i) {
      let max1 = count(s, i, i);
      let max2 = count(s, i, i+1);
      let result = max1.length > max2.length ? max1 : max2
      max = max.length < result.length ? result : max;
  }
  return max;
};

function count(s, begin, end) {
  while(begin >= 0 && end <= s.length -1 && s[begin] === s[end]) {
      --begin;
      ++end;
  }
  return s.slice(begin + 1, end);
}