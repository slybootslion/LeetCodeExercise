#
# @lc app=leetcode.cn id=114 lang=python3
#
# [114] 二叉树展开为链表
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先 后序遍历
Accepted
225/225 cases passed (28 ms)
Your runtime beats 96.59 % of python3 submissions
Your memory usage beats 71.47 % of python3 submissions (14.9 MB)
"""

"""
class Solution:
    def flatten(self, root: TreeNode) -> None:
        if not root:
            return
        self.flatten(root.left)
        self.flatten(root.right)

        right = root.right
        root.left, root.right = None, root.left
        while root.right:
            root = root.right
        root.right = right
"""

"""
深度优先，前序遍历
Accepted
225/225 cases passed (32 ms)
Your runtime beats 86.17 % of python3 submissions
Your memory usage beats 88.44 % of python3 submissions (14.8 MB)
"""

class Solution:
    def flatten(self, root: TreeNode) -> None:
        if not root:
            return
        stack = []

        def handle(node):
            if node:
                stack.append(node)
                handle(node.left)
                handle(node.right)

        handle(root)

        # while stack:
        #     prev = stack.pop(0)
        #     curr = None
        #     if stack:
        #         curr = stack.pop(0)
        #     prev.left = None
        #     prev.right = curr
        #     if curr:
        #         stack = [curr] + stack

        # 还是for循环写起来简洁一些
        for i in range(1, len(stack)):
            prev, curr = stack[i - 1], stack[i]
            prev.left = None
            prev.right = curr

# @lc code=end
