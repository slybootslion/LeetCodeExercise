#
# @lc app=leetcode.cn id=145 lang=python3
#
# [145] 二叉树的后序遍历
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
68/68 cases passed (36 ms)
Your runtime beats 33.27 % of python3 submissions
Your memory usage beats 88.72 % of python3 submissions (14.8 MB)
"""

"""
class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        res = []

        def handler(node):
            if not node:
                return
            handler(node.left)
            handler(node.right)
            res.append(node.val)

        handler(root)

        return res
"""

"""
迭代
Accepted
68/68 cases passed (44 ms)
Your runtime beats 10.46 % of python3 submissions
Your memory usage beats 6.36 % of python3 submissions (15.1 MB)
"""


class Solution:
    def postorderTraversal(self, root: TreeNode) -> List[int]:
        res = []

        stack = []
        prev = None
        while root or len(stack):
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            if not root.right or root.right == prev:
                res.append(root.val)
                prev, root = root, None
            else:
                stack.append(root)
                root = root.right

        return res
# @lc code=end
