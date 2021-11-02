#
# @lc app=leetcode.cn id=110 lang=python3
#
# [110] 平衡二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先
Accepted
228/228 cases passed (48 ms)
Your runtime beats 71.3 % of python3 submissions
Your memory usage beats 63.2 % of python3 submissions (19.5 MB)
"""
"""
class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        flag = True

        def handler(node):
            if not node:
                return 0
            left = handler(node.left)
            right = handler(node.right)
            nonlocal flag
            if not flag:
                return
            if abs(left - right) > 1:
                flag = False
            return max(left, right) + 1

        handler(root)

        return flag
"""

"""
Accepted
228/228 cases passed (60 ms)
Your runtime beats 31.84 % of python3 submissions
Your memory usage beats 65.82 % of python3 submissions (19.5 MB)
"""


class Solution:
    def isBalanced(self, root: TreeNode) -> bool:
        if not root:
            return True

        def handle(node):
            if not node:
                return 0
            return max(handle(node.left), handle(node.right)) + 1

        return abs(handle(root.left) - handle(root.right)) <= 1 and self.isBalanced(root.left) and self.isBalanced(
            root.right)

# @lc code=end
