#
# @lc app=leetcode.cn id=563 lang=python3
#
# [563] 二叉树的坡度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先遍历
Accepted
77/77 cases passed (52 ms)
Your runtime beats 74.7 % of python3 submissions
Your memory usage beats 20.93 % of python3 submissions (17 MB)
"""
class Solution:
    def findTilt(self, root: TreeNode) -> int:
        res = 0
        if not root:
            return res

        def handler(node):
            if not node.left and not node.right:
                return node.val
            left, right = 0, 0
            if node.left:
                left = handler(node.left)
            if node.right:
                right = handler(node.right)
            nonlocal res
            res += abs(left - right)
            return left + right + node.val

        handler(root)
        return res

# @lc code=end
