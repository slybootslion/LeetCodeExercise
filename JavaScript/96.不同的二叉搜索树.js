/*
 * @lc app=leetcode.cn id=96 lang=javascript
 *
 * [96] 不同的二叉搜索树
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

/*
方法一
思路： 递归方式
*/
/*
Accepted
19/19 cases passed (4628 ms)
Your runtime beats 8.61 % of javascript submissions
Your memory usage beats 19.04 % of javascript submissions (37.8 MB)
*/
/*
var numTrees = function (n) {
  if (n < 2) return 1
  let num = 0
  for (let i = 0; i < n; i++) {
    num += numTrees(i) * numTrees(n - i - 1)
  }
  return num
};
*/

/*
方法二
动态规划
*/
/*
Accepted
19/19 cases passed (88 ms)
Your runtime beats 41.13 % of javascript submissions
Your memory usage beats 46.17 % of javascript submissions (37.7 MB)
*/
/*
const numTrees = n => {
  const list = new Array(n + 1).fill(0)
  list[0] = 1
  list[1] = 1
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      list[i] += list[j] * list[i - j - 1]
    }
  }
  return list[n]
}
*/

/* 
方法三
有缓存的递归，性能好过递归的方式
*/
/* 
Accepted
19/19 cases passed (76 ms)
Your runtime beats 90.52 % of javascript submissions
Your memory usage beats 92.35 % of javascript submissions (37.4 MB)
*/
const numTrees = n => {
  if (n < 2) return 1
  const list= new Array(n + 1)
  list[1] = 1
  list[0] = 1
  const tools = n => {
    if (list[n]) return list[n]
    let count = 0
    for (let i = 0; i < n ; i++) {
      count += tools(i) * tools(n - i - 1)
    }
    list[n] = count
    return count
  }
  return tools(n)
}

// @lc code=end

