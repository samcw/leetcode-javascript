//使用递归
var letterCombinations = function(digits) {
  const map = new Map([
      ['2', ['a', 'b', 'c']],
      ['3', ['d', 'e', 'f']],
      ['4', ['g', 'h', 'i']],
      ['5', ['j', 'k', 'l']],
      ['6', ['m', 'n', 'o']],
      ['7', ['p', 'q', 'r', 's']],
      ['8', ['t', 'u', 'v']],
      ['9', ['w', 'x', 'y', 'z']]
  ]);
  const res = [];
  if (digits.length === 0) return res;
  function setDeep(combiation, index) {
      const arr = map.get(digits[index])
      if (index === digits.length) {
          res.push(combiation);
      } else {
          for (let i = 0; i < arr.length; ++i) {
              setDeep(combiation + arr[i], index + 1);
          }
      }
  }
  setDeep('', 0);
  return res;
};
//使用循环
var letterCombinations = function(digits) {
  const map = new Map([
      ['2', ['a', 'b', 'c']],
      ['3', ['d', 'e', 'f']],
      ['4', ['g', 'h', 'i']],
      ['5', ['j', 'k', 'l']],
      ['6', ['m', 'n', 'o']],
      ['7', ['p', 'q', 'r', 's']],
      ['8', ['t', 'u', 'v']],
      ['9', ['w', 'x', 'y', 'z']]
  ]);
  const res = [];
  let time = 1;
  if (digits.length === 0) return res;
  for(let i of map.get(digits[0])) {
      res.push(i);
  }
  while(res[0].length !== digits.length) {
      const temp = res.shift();
      time = temp.length;
      const value = map.get(digits[time]);
      for(let i of value) {
          res.push(temp + i);
      }
  }
  return res;
};