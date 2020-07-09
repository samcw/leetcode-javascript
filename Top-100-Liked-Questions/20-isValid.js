//栈辅助
var isValid = function(s) {
  const map = new Map([
      ['(', ')'],
      [')', '('],
      ['[', ']'],
      [']', '['],
      ['{', '}'],
      ['}', '{']
  ])
  const stack = [];
  for(let item of s) {
      if (item === '{' || item === '[' || item === '(') stack.push(item);
      else {
          if (stack.length === 0) return false;
          if (map.get(stack.pop()) !== item) return false;
      }
  }
  if (stack.length === 0) return true;
  else return false;
};