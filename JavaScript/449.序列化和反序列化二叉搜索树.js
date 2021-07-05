/*
 * @lc app=leetcode.cn id=449 lang=javascript
 *
 * [449] 序列化和反序列化二叉搜索树
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
JavaScript有个不要脸的解法：自带的JSON方法
提交LeetCode会过，但是肯定不能就这么写。
*/
/* 
var serialize = function (root) {
  return JSON.stringify(root)
};

var deserialize = function (data) {
  return JSON.parse(data)
};
*/

/* 
思路：跟给对待普通二叉树一样前、后、层序遍历。下面是一个后序遍历的例子。
*/
/* 
Accepted
62/62 cases passed (132 ms)
Your runtime beats 51.85 % of javascript submissions
Your memory usage beats 43.21 % of javascript submissions (45.7 MB)
*/
const serialize = root => {
  const arr = []
  const tool = node => {
    if (!node) {
      arr.push('#')
      return
    }
    tool(node.left)
    tool(node.right)
    arr.push(node.val)
  }
  tool(root)
  return arr.join(',')
}

const deserialize = data => {
  const arr = data.split(',')
  const tool = list => {
    if (!list.length) return
    const node = list.pop()
    if (node === '#') return null
    const treeNode = new TreeNode(node)
    treeNode.right = tool(list)
    treeNode.left = tool(list)
    return treeNode
  }
  return tool(arr)
}

// @lc code=end

