#
# @lc app=leetcode.cn id=951 lang=python3
#
# [951] 翻转等价二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
Accepted
76/76 cases passed (36 ms)
Your runtime beats 45.6 % of python3 submissions
Your memory usage beats 67.88 % of python3 submissions (15 MB)
"""

"""
class Solution:
    def flipEquiv(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        if root1 is root2:
            return True
        if not root1 or not root2 or root2.val != root1.val:
            return False

        return (self.flipEquiv(root1.left, root2.left) and self.flipEquiv(root1.right, root2.right)) or (
                    self.flipEquiv(root1.left, root2.right) and self.flipEquiv(root1.right, root2.left))
"""

"""
官方二解还真的是有点叼，写的很python
Accepted
76/76 cases passed (24 ms)
Your runtime beats 98.45 % of python3 submissions
Your memory usage beats 14.51 % of python3 submissions (15.1 MB)
"""


class Solution:
    def flipEquiv(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def dfs(node):
            if node:
                yield node.val
                left = node.left.val if node.left else -1
                right = node.right.val if node.right else -1
                if left < right:
                    yield from dfs(node.left)
                    yield from dfs(node.right)
                else:
                    yield from dfs(node.right)
                    yield from dfs(node.left)
                yield 'null'

        from itertools import zip_longest
        return all(x == y for x, y in zip_longest(dfs(root1), dfs(root2)))

# @lc code=end
