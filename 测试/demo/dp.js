// 动态规划
console.log('动态规划');
// 状态转移方程
// buy[i][j] = max(buy[i-1][j], sell[i-1][j] - price[i])
// sell[i][j] = max(sell[i-1][j], buy[i-1][j-1] + price[i])
