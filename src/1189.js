const B = 'balloon'
const maxNumberOfBalloons = (text) => {
  let str = text
  let stats = true
  let count = 0
  while (stats) {
    for (let i = 0; i < B.length; i++) {
      if (str.includes(B[i])) str = str.replace(B[i], '')
      else {
        stats = false
        break
      }
    }
    if (stats) count++
  }
  return count
}

console.log(maxNumberOfBalloons('loonbalxballpoon'))
