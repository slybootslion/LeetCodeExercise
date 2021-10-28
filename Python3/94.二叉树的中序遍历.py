#
# @lc app=leetcode.cn id=94 lang=python3
#
# [94] 二叉树的中序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

"""
递归： 
Accepted
68/68 cases passed (32 ms)
Your runtime beats 64.19 % of python3 submissions
Your memory usage beats 51.43 % of python3 submissions (14.9 MB)
"""
""" 
class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []

        def handle(node):
            if not node:
                return
            handle(node.left)
            res.append(node.val)
            handle(node.right)

        handle(root)
        return res
"""

""" 
迭代
Accepted
68/68 cases passed (24 ms)
Your runtime beats 96.75 % of python3 submissions
Your memory usage beats 5.66 % of python3 submissions (15.1 MB)
"""


class Solution:
    def inorderTraversal(self, root: TreeNode) -> List[int]:
        res = []
        stack = []

        while root or len(stack):
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            res.append(root.val)
            root = root.right

        return res

# @lc code=end
