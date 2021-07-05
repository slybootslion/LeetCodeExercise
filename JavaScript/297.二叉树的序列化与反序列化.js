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

/* 
偷懒做法：JavaScript做这个题比较占便宜的地方就是，可以直接用JSON的方法。
虽然leetcode能过，但是考试敢这样写一分没有。
*/
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
/* 
var serialize = function (root) {
  return JSON.stringify(root)
}; 
*/
/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
/* 
var deserialize = function (data) {
  return JSON.parse(data)
};
*/

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

/* 
这是一个总结性的问题，就是前后层序遍历的问题
中序遍历无法实现
*/
const NULL_STRING = '#'
const SEP_FLAG = ','
/* 
方法一：前序遍历解法
*/
/* 
const serialize = root => {
  const list = []
  // 所以什么是前序遍历呢？
  const tool = node => {
    if (!node) {
      list.push(NULL_STRING)
      return
    }
    list.push(node.val)
    tool(node.left)
    tool(node.right)
  }
  tool(root)
  return list.join(SEP_FLAG)
}
const deserialize = data => {
  const list = data.split(SEP_FLAG)
  // 一个有空值的数组怎么变成一棵树？
  const tool = list => {
    if (!list.length) return null
    const node = list.shift()
    if (node === NULL_STRING) return null
    const treeNode = new TreeNode(+node)
    treeNode.left = tool(list)
    treeNode.right = tool(list)
    return treeNode
  }
  return tool(list)
}
*/

/* 
方法二：后序遍历解法
*/
/* 
const serialize = root => {
  const list = []
  // 所以什么是后序遍历
  const tool = node => {
    if (!node) {
      list.push(NULL_STRING)
      return
    }
    tool(node.left)
    tool(node.right)
    list.push(node.val)
  }
  tool(root)
  return list.join(SEP_FLAG)
}
const deserialize = data => {
  const list = data.split(SEP_FLAG)
  const tool = list => {
    if (!list.length) return null
    // 在后续遍历中，数组的最后一项是数组的根节点
    const node = list.pop()
    if (node === NULL_STRING) return null
    const treeNode = new TreeNode(+node)
    // 并且，先要构建右子树，再构建左子树
    treeNode.right = tool(list)
    treeNode.left = tool(list)
    return treeNode
  }
  return tool(list)
}
*/

/* 
方法三：中序遍历解法
*/
const serialize = root => {
  const list = [root]
  const res = []
  // 所以什么是中序遍历？
  while (list.length) {
    const node = list.shift()
    if (node == null) {
      res.push(NULL_STRING)
      continue
    }
    res.push(node.val)
    list.push(node.left)
    list.push(node.right)
  }
  return res.join(SEP_FLAG)
}

const deserialize = data => {
  const list = data.split(SEP_FLAG)
  const node = list.shift()
  if (!node || node === NULL_STRING) return null
  const treeNode = new TreeNode(+node)
  const queue = [treeNode]

  while (list.length) {
    const parent = queue.shift()
    const left = list.shift()
    if (left === NULL_STRING) {
      parent.left = null
    } else {
      parent.left = new TreeNode(+left)
      queue.push(parent.left)
    }
    const right = list.shift()
    if (right === NULL_STRING) {
      parent.right = null
    } else {
      parent.right = new TreeNode(+right)
      queue.push(parent.right)
    }
  }
  return treeNode
}

// @lc code=end
