/**
 * @param {string} s
 * @return {boolean}
 */

// blank: 空格，sign: +-，.: .，digit: 0-9，e: e

const graph = {
  0: { blank: 0, sign: 1, '.': 2, digit: 6 },
  1: { digit: 6, '.': 2 },
  2: { digit: 3 },
  3: { digit: 3, e: 4 },
  4: { digit: 5, sign: 7 },
  5: { digit: 5 },
  6: { digit: 6, '.': 3, e: 4 },
  7: { digit: 5 }
}

const isNumber = (s) => {
  let state = 0
  for (let item of s.trim()) {
    if (item >= '0' && item <= '9') item = 'digit'
    else if (item === ' ') item = 'blank'
    else if (item === '+' || item === '-') item = 'sign'
    state = graph[state][item]
    if (state === undefined) return false
  }
  if (state === 3 || state === 5 || state === 6) return true
  return false
}

isNumber()
