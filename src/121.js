const maxProfit = (prices) => {
  let minItem = prices[0]
  let max = 0

  prices.forEach(item => {
    if (item < minItem) minItem = item
    if (item - minItem > max) max = item - minItem
  })

  return max
}

console.log(maxProfit([2, 1, 2, 0, 1]))
