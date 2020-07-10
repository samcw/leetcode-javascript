//深度优先遍历
var generateParenthesis = function(n) {
  const res = [];
  function getRes(arr, combination, n) {
      if (arr[0] === 0 && arr[1] === 0 && combination.length === n * 2) {
          res.push(combination);
      } else if (arr[0] > arr[1]) return;
      if (arr[0] - 1 >= 0)
          getRes([arr[0] - 1, arr[1]], combination + '(', n);
      if (arr[1] - 1 >= 0)
          getRes([arr[0], arr[1] - 1], combination + ')', n);
  }
  getRes([n, n], '', n);
  return res;
};
//广度优先遍历
var generateParenthesis = function(n) {
  const res = [];
  const queue = [{
      left: n,
      right: n,
      combination: '',
  }]
  while(queue.length !== 0) {
      const temp = queue.shift();
      if (temp.left === 0 && temp.right === 0 && temp.combination.length === n * 2) {
          res.push(temp.combination);
      } else if (temp.left > temp.right) continue;
      if (temp.left - 1 >= 0)
          queue.push({
              left: temp.left - 1,
              right: temp.right,
              combination: temp.combination + '('
          })
      if (temp.right - 1 >= 0)
          queue.push({
              left: temp.left,
              right: temp.right - 1,
              combination: temp.combination + ')'
          })
  }
  return res;
};
//动态规划
