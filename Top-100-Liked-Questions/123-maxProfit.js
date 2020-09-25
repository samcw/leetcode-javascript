/**
 * @param {number[]} prices
 * @return {number}
 * 递归记忆法
 */
var maxProfit1 = function(prices) {
    if (prices.length === 0) return 0;
    const len = prices.length;
    const dfs = (index, status, times) => {
        if (index === len || times === 2) return 0;
        let [a, b, c] = [0, 0, 0];
        a = dfs(index + 1, status, times);
        if (status) {
            b = dfs(index + 1, 0, times + 1) + prices[index];
        }
        else {
            c = dfs(index + 1, 1, times) - prices[index];
        }
        return Math.max(a, b, c);
    }
    return dfs(0, 0, 0); 
};

/**
 * @param {number[]} prices
 * @return {number}
 * 动态规划
 */
var maxProfit2 = function(prices) {
    if (prices.length === 0) return 0;
    const len = prices.length;
    const dp = [];
    //生成dp数组
    for (let i = 0; i < len; i++) {
        dp.push([]);
    }
    for (let item of dp) {
        let arr = [[0, 0], [0, 0], [0, 0]];
        item.push(arr);
    }
    //初始化第一天
    dp[0][0][0] = 0;
    dp[0][0][1] = -prices[0];
    dp[0][1][0] = 0;
    dp[0][1][1] = -prices[0];
    dp[0][2][0] = 0;
    dp[0][2][1] = -prices[0];
    //开始
    for (let i = 1; i < len; i++) {
        //初始状态只能从过往的初始状态转换过来
        dp[i][0][0] = dp[i - 1][0][0]
        //第一次交易状态
        dp[i][0][1] = Math.max(dp[i][0][0] - prices[i], dp[i - 1][0][1]);
        dp[i][1][0] = Math.max(dp[i][0][1] + prices[i], dp[i - 1][1][0]);
        //第二次交易状态
        
    }
}