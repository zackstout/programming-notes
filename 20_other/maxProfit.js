// Given array of prices, find best time to buy and sell stock to maximize profit.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let lowestSeen = prices[0];
  let maxProfit = 0;
  for (const p of prices) {
    if (p < lowestSeen) {
      lowestSeen = p;
    } else {
      maxProfit = Math.max(maxProfit, p - lowestSeen);
    }
  }
  return maxProfit;
};

// Mmm this is nice and clean, got from a comment

// Ayyyy we already did this under buySellStock, lol
