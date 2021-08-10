/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 之前写过一个方法，这也是官方的第一个题解方法，在新的测试用例会超时，无力吐槽，不过还是放这里，比较好理解的方法
/* 
const isPrime = (num) => {
  if (num <= 3) return num > 1
  else {
    const sq = Math.sqrt(num) // 开方
    for (let i = 2; i <= sq; i++) {
      if (num % i === 0) return false
    }
    return true
  }
}

const countPrimes = (n) => {
  let c = 0
  for (let i = 2; i < n; i++) {
    if (isPrime(i)) c++
  }
  return c
}
*/

/* 
所以，方法二的思路就是：
如果x是质数，那么大于x的的倍数 2x,3x,…一定不是质数，因此我们可以从这里入手。
用一个数组做缓存，可以减少遍历判断
*/
/* 
Accepted
21/21 cases passed (220 ms)
Your runtime beats 83.77 % of javascript submissions
Your memory usage beats 27.07 % of javascript submissions (77.6 MB)
*/
const countPrimes = n => {
  const isPrime = new Array(n).fill(true)
  let c = 0
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) {
      c += 1
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false
      }
    }
  }
  return c
}

// @lc code=end

