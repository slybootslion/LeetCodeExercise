#
# @lc app=leetcode.cn id=124 lang=python3
#
# [124] 二叉树中的最大路径和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
""" 
后序遍历
Accepted
94/94 cases passed (68 ms)
Your runtime beats 94.12 % of python3 submissions
Your memory usage beats 20.1 % of python3 submissions (22.5 MB)
"""


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        res = float('-inf')

        def handler(node):
            left, right = 0, 0
            if node.left:
                left = max(handler(node.left), 0)
            if node.right:
                right = max(handler(node.right), 0)
            nonlocal res
            res = max(res, left + right + node.val)
            return max(left, right) + node.val

        handler(root)

        return int(res)
# @lc code=end
