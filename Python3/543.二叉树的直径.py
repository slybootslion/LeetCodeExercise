#
# @lc app=leetcode.cn id=543 lang=python3
#
# [543] 二叉树的直径
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
深度优先遍历，分别计算左右子树的长度，对比留下最大数
Accepted
104/104 cases passed (44 ms)
Your runtime beats 58.99 % of python3 submissions
Your memory usage beats 32.32 % of python3 submissions (17 MB)
"""


class Solution:
    def diameterOfBinaryTree(self, root: TreeNode) -> int:
        count = 0

        def handler(node):
            if not node:
                return 0
            left = handler(node.left)
            right = handler(node.right)
            nonlocal count
            count = max(count, left + right + 1)
            return max(left, right) + 1

        handler(root)
        return count - 1
# @lc code=end
