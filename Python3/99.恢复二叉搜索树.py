#
# @lc app=leetcode.cn id=99 lang=python3
#
# [99] 恢复二叉搜索树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

""" 
python的骚操作
Accepted
1919/1919 cases passed (52 ms)
Your runtime beats 83.47 % of python3 submissions
Your memory usage beats 32.58 % of python3 submissions (15.3 MB)
"""


class Solution:
    def recoverTree(self, root: Optional[TreeNode]) -> None:
        """
        Do not return anything, modify root in-place instead.
        """
        left, right = None, None
        prev = None

        def handler(node):
            nonlocal prev, left, right
            if not node:
                return
            handler(node.left)
            if not prev:
                prev = node
            else:
                if node.val < prev.val:
                    right, left = node, prev if left is None else left
                prev = node
            handler(node.right)

        handler(root)
        if left and right:
            left.val, right.val = right.val, left.val

# @lc code=end
