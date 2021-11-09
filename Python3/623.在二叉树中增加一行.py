#
# @lc app=leetcode.cn id=623 lang=python3
#
# [623] 在二叉树中增加一行
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先，递归
"""

"""
class Solution:
    def addOneRow(self, root: TreeNode, val: int, depth: int) -> TreeNode:
        if depth == 1:
            tree_node = TreeNode(val)
            tree_node.left = root
            return tree_node

        def handler(node, level):
            if not node:
                return
            if depth - 1 == level:
                node.left, node.left.left = TreeNode(val), node.left
                node.right, node.right.right = TreeNode(val), node.right
            else:
                handler(node.left, level + 1)
                handler(node.right, level + 1)

        handler(root, 1)
        return root
"""

"""
深度优先，迭代
Accepted
109/109 cases passed (48 ms)
Your runtime beats 50.3 % of python3 submissions
Your memory usage beats 45.56 % of python3 submissions (16.2 MB)
"""


class Solution:
    def addOneRow(self, root: TreeNode, val: int, depth: int) -> TreeNode:
        if depth == 1:
            tree_node = TreeNode(val)
            tree_node.left = root
            return tree_node

        stack = [(root, 1)]
        while len(stack):
            node, level = stack.pop()
            if not node:
                continue
            if level == depth - 1:
                node.left, node.left.left = TreeNode(val), node.left
                node.right, node.right.right = TreeNode(val), node.right
            else:
                stack.append((node.left, level + 1))
                stack.append((node.right, level + 1))

        return root

# @lc code=end
