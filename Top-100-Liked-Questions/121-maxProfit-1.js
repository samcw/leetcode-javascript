/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let [min, value] = [+Infinity, -Infinity];
    for (let item of prices) {
        if (item < min) min = item;
        else value = item - min > value ? item - min : value;
    }
    value = value == -Infinity ? 0 : value;
    return value;
};