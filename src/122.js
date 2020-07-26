const maxProfit = (prices) => {
  let sum = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) sum += prices[i] - prices[i - 1]
  }
  return sum
}

console.log(maxProfit([1, 2, 3, 4, 5]))
