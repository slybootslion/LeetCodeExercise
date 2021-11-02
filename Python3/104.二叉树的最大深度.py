#
# @lc app=leetcode.cn id=104 lang=python3
#
# [104] 二叉树的最大深度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
深度优先：
Accepted
39/39 cases passed (48 ms)
Your runtime beats 17.16 % of python3 submissions
Your memory usage beats 7.97 % of python3 submissions (17 MB)
"""


class Solution:
    def maxDepth(self, root: TreeNode) -> int:
        count = 0

        def handler(node, c):
            if not node:
                return
            c = c + 1
            handler(node.left, c)
            handler(node.right, c)
            nonlocal count
            count = max(count, c)

        handler(root, count)
        return count
# @lc code=end
