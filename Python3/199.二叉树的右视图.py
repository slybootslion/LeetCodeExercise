#
# @lc app=leetcode.cn id=199 lang=python3
#
# [199] 二叉树的右视图
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先 前序遍历 递归解法
Accepted
215/215 cases passed (36 ms)
Your runtime beats 42.19 % of python3 submissions
Your memory usage beats 6.76 % of python3 submissions (15.1 MB)
"""

"""
class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        res = []
        stack = []

        def handler(node, level):
            if not node:
                return
            if len(stack) <= level:
                stack.append([])
            stack[level].append(node.val)
            handler(node.left, level + 1)
            handler(node.right, level + 1)

        handler(root, 0)

        return [stack[i][-1] for i in range(len(stack))]
"""

"""
深度优先 迭代解法
Accepted
215/215 cases passed (32 ms)
Your runtime beats 69.26 % of python3 submissions
Your memory usage beats 9.67 % of python3 submissions (15.1 MB)
"""


class Solution:
    def rightSideView(self, root: TreeNode) -> List[int]:
        if not root:
            return []
        d = {}
        max_level = -1
        stack = [(root, 0)]
        while stack:
            node, level = stack.pop()
            d.setdefault(level, node.val)
            max_level = max(max_level, level)
            if node.left:
                stack.append((node.left, level + 1))
            if node.right:
                stack.append((node.right, level + 1))
        return [d.get(i) for i in range(max_level + 1)]

# @lc code=end
