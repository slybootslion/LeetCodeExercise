/* const divisorGame = (N) => {
  let status = false
  const play = (num) => {
    if (num < 2) return status
    for (let i = 1; i < num; i--) {
      if (num % i === 0) {
        status = !status
        play(num - i)
        break
      }
    }
  }
  play(N)
  return status
} */

const divisorGame = (N) => {
  return N % 2 === 0
}

console.log(divisorGame(665))
