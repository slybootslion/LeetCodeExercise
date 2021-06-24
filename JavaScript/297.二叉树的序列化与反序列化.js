/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  let res = '['
  const func = node => {
    if (!node) {
      res += '#,'
      return
    }
    res += `${node.val},`
    func(node.left)
    func(node.right)
  }
  func(root)
  return res.substring(0, res.length - 1) + ']'
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
// [1,2,#,#,3,4,#,#,5,#,#]
var deserialize = function (data) {
  const arr = data.slice(1, data.length - 1).split(',')
  const func = arr => {
    const val = arr.shift()
    if (val === '#') return null
    const treeNode = new TreeNode(val)
    treeNode.left = func(arr)
    treeNode.right = func(arr)
    return treeNode
  }
  return func(arr)
  // return JSON.parse(data)
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

// JavaScript做这个题比较占便宜的地方就是，可以直接用JSON的方法，不过我没有这么做，拼了一下字符串。
