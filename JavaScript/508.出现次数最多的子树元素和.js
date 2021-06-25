/*
 * @lc app=leetcode.cn id=508 lang=javascript
 *
 * [508] 出现次数最多的子树元素和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
/* 
一开始没看懂题，其实就是每个节点和子节点的和出现的次数。
返回个数组

（不要随意写全局变量）
*/

/* 
Accepted
58/58 cases passed (644 ms)
Your runtime beats 6.86 % of javascript submissions
Your memory usage beats 5.88 % of javascript submissions (50.5 MB)
*/



var findFrequentTreeSum = function (root) {

  const map = new Map()
  const sumArr = []

  const tools = node => {
    if (!node.left && !node.right) {
      sumArr.push(node.val)
      return node.val
    }
    let v1 = 0, v2 = 0
    if (node.left) v1 = tools(node.left)
    if (node.right) v2 = tools(node.right)
    const value = v1 + v2 + node.val
    sumArr.push(value)
    return value
  }

  const handleRes = () => {
    let res = []
    let count = 0
    for (let i = 0; i < sumArr.length; i++) {
      const item = sumArr[i]
      console.log(sumArr)
      let c = map.get(item)
      if (!c) c = 1
      else c = c + 1
      map.set(item, c)
      if (count < c) {
        res = [item]
        count = c
      } else if (count === c) res.push(item)
    }
    return res
  }

  tools(root)
  return handleRes()
};

// @lc code=end

