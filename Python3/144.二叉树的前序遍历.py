#
# @lc app=leetcode.cn id=144 lang=python3
#
# [144] 二叉树的前序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
递归
Accepted
69/69 cases passed (36 ms)
Your runtime beats 32.45 % of python3 submissions
Your memory usage beats 92.6 % of python3 submissions (14.8 MB)
"""

"""
class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res = []

        def handler(node):
            if not node:
                return
            res.append(node.val)
            handler(node.left)
            handler(node.right)

        handler(root)
        return res
"""

"""
迭代
Accepted
69/69 cases passed (32 ms)
Your runtime beats 63.29 % of python3 submissions
Your memory usage beats 79.96 % of python3 submissions (14.9 MB)
"""


class Solution:
    def preorderTraversal(self, root: TreeNode) -> List[int]:
        res = []

        stack = []
        while root or len(stack):
            while root:
                res.append(root.val)
                stack.append(root)
                root = root.left
            root = stack.pop()
            root = root.right

        return res

# @lc code=end
