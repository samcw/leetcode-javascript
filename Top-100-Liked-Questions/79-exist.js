/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  //获得board的宽高
  const [ccol, crow] = [board[0].length, board.length];
  //结果
  let res = false;
  const mark = [];
  //构造标记数组
  for (let i = 0; i < crow; i++) {
      let arr = [];
      for (let j = 0; j < ccol; j++) arr.push(0);
      mark.push(arr);
  }

  const search = (row, col, index, path) => {
      if (res) return;

      if (row >= crow || row < 0 || col >= ccol || col < 0 || path[row][col] || board[row][col] !== word[index]) return;
      if (index === word.length - 1) res = true;

      path[row][col] = 1;

      search(row + 1, col, index + 1, path);
      search(row - 1, col, index + 1, path);
      search(row, col + 1, index + 1, path);
      search(row, col - 1, index + 1, path);
      
      path[row][col] = 0;
  }

  board.forEach((value, index) => {
      value.forEach((val, i) => {
          if (val === word[0]) {
              search(index, i, 0, mark);
              if (res) return res;
          }
      })
  });

  return res;
};