/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [valley, peak] = [prices[0], prices[0]];
    let index = 0;
    let maxValue = 0;
    while (index < prices.length - 1) {
        while(index < prices.length - 1 && prices[index] >= prices[index + 1]) {
            index++;
        }
        valley = prices[index];
        while(index < prices.length - 1 && prices[index] <= prices[index + 1]) {
            index++;
        }
        peak = prices[index];
        maxValue += peak - valley;
    }
    return maxValue;
};