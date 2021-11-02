#
# @lc app=leetcode.cn id=111 lang=python3
#
# [111] 二叉树的最小深度
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
深度优先遍历：
Accepted
52/52 cases passed (500 ms)
Your runtime beats 31.66 % of python3 submissions
Your memory usage beats 9.58 % of python3 submissions (58 MB)
"""
class Solution:
    def minDepth(self, root: TreeNode) -> int:
        if not root:
            return 0

        level = float('inf')

        def handler(node, lev):
            if not node.left and not node.right:
                nonlocal level
                level = min(lev, level)
                return
            if node.left:
                handler(node.left, lev + 1)
            if node.right:
                handler(node.right, lev + 1)

        handler(root, 1)

        return int(level)

# @lc code=end
