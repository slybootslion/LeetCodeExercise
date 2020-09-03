const dailyTemperatures = (T) => {
  const stack = []
  const len = T.length
  const arr = new Array(len).fill(0)
  for (let i = 0; i < len; i++) {
    while (stack.length && T[i] > T[stack[stack.length - 1]]) {
      const top = stack.pop()
      arr[top] = i - top
    }
    stack.push(i)
  }
  return arr
}

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]))
