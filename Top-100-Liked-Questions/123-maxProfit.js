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
    //初始化第一天
    dp1 = 0;
    dp2 = -prices[0];
    dp3 = 0;
    dp4 = -prices[0];
    dp5 = 0;
    //开始
    for (let i = 1; i < len; i++) {
        //初始状态只能从过往的初始状态转换过来
        dp1 = dp1;
        //第一次交易状态
        dp2 = Math.max(dp1 - prices[i], dp2);
        dp3 = Math.max(dp2 + prices[i], dp3);
        //第二次交易状态
        dp4 = Math.max(dp3 - prices[i], dp4);
        dp5 = Math.max(dp4 + prices[i], dp5);
    }
    return Math.max(dp1, dp2, dp3, dp4, dp5);
}

const input = [3,3,5,0,0,3,1,4];
maxProfit2(input);