const distObj = { A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9, J: 10, K: 11, L: 12, M: 13, N: 14, O: 15, P: 16, Q: 17, R: 18, S: 19, T: 20, U: 21, V: 22, W: 23, X: 24, Y: 25, Z: 26 }

// var titleToNumber = function (s) {
//   let sum = 0, i = s.length - 1, carry = 1;
//
//   while (i >= 0) {
//     let cur = s[i].charCodeAt() - 64;
//
//     sum += cur * carry;
//     carry *= 26;
//     i--;
//   }
//
//   return sum;
// };

const titleToNumber = (s) => {
  let sum = 0
  let i = s.length - 1
  let carry = 1
  while (i >= 0) {
    const cur = distObj[s[i]]
    sum += cur * carry
    carry *= 26
    i--
  }
  return sum
}

console.log(titleToNumber('ZY'))
