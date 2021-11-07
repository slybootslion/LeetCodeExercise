#
# @lc app=leetcode.cn id=226 lang=python3
#
# [226] 翻转二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
Max Howell是个逗逼
Accepted
77/77 cases passed (32 ms)
Your runtime beats 64.81 % of python3 submissions
Your memory usage beats 33.55 % of python3 submissions (15 MB)
"""


class Solution:
    def invertTree(self, root: TreeNode) -> TreeNode:
        if not root:
            return None
        return TreeNode(val=root.val, left=self.invertTree(root.right), right=self.invertTree(root.left))
# @lc code=end
