/*
 * @lc app=leetcode.cn id=116 lang=javascript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

// 递归算法
/* const connect = root => {
  if (!root) return root
  const dfs = node => {
    if (!node.left && !node.right) return
    node.left.next = node.right
    if (node.next) node.right.next = node.next.left
    node.left && dfs(node.left)
    node.right && dfs(node.right)
  }
  dfs(root)
  return root
} */


// 官方的解法：迭代算法
/*
const connect = root => {
  if (!root) return root
  const queue = [root]
  while (queue.length) {
    const len = queue.length
    for (let i = 0; i < len; i++) {
      const item = queue.shift()
      if (i < len - 1) item.next = queue[0]
      else item.next = null
      item.left && queue.push(item.left)
      item.right && queue.push(item.right)
    }
  }
  return root
}
*/



// 我的写法，比较啰嗦
// 先层序遍历拿到每一层
// 然后根据获取到的层序遍历的二维数组，改变指针

var connect = function (root) {
  if (!root) return root
  const res = []
  const queue = []
  queue.push(root)
  while (queue.length) {
    res.push([])
    let len = queue.length
    while (len) {
      const node = queue.shift()
      res[res.length - 1].push(node)
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
      len--
    }
    const node = res.shift()
    for (let i = 0; i < node.length; i++) {
      const item = node[i]
      if (node[i + 1]) item.next = node[i + 1]
      else item.next = null
    }
  }
  return root
};

// @lc code=end



