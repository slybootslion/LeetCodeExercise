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
var serialize = function (root) {
  return JSON.stringify(root)
};

var deserialize = function (data) {
  return JSON.parse(data)
};

// @lc code=end

