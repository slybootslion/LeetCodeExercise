#
# @lc app=leetcode.cn id=98 lang=python3
#
# [98] 验证二叉搜索树
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
80/80 cases passed (56 ms)
Your runtime beats 8.7 % of python3 submissions
Your memory usage beats 56.89 % of python3 submissions (17.3 MB)
"""

""" 
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:

        def handle(node, _min, _max):
            if not node:
                return True
            if node.val <= _min or node.val >= _max:
                return False
            return handle(node.left, _min, node.val) and handle(node.right, node.val, _max)

        return handle(root, -float('inf'), float('inf'))
"""

""" 
中序遍历，迭代版
Accepted
80/80 cases passed (48 ms)
Your runtime beats 35.13 % of python3 submissions
Your memory usage beats 65.11 % of python3 submissions (17.2 MB)
"""
""" 
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:
        stack = []
        prev = -float('inf')

        while len(stack) or root:
            while root:
                stack.append(root)
                root = root.left

            root = stack.pop()
            if root.val <= prev:
                return False
            prev = root.val

            root = root.right

        return True 
"""

""" 
中序遍历，递归版
Accepted
80/80 cases passed (40 ms)
Your runtime beats 82.36 % of python3 submissions
Your memory usage beats 24.76 % of python3 submissions (17.8 MB)
"""
class Solution:
    def isValidBST(self, root: TreeNode) -> bool:

        prev = float('-inf')

        def handle(node):
            if not node:
                return True
            l = handle(node.left)
            nonlocal prev
            if prev >= node.val:
                return False
            prev = node.val
            r = handle(node.right)
            return l and r

        return handle(root)
# @lc code=end
