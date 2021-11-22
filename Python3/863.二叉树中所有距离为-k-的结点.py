#
# @lc app=leetcode.cn id=863 lang=python3
#
# [863] 二叉树中所有距离为 K 的结点
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
"""
看了官方题解做的。我有点奇怪把这个题归入了广度优先，为什么？？？
Accepted
57/57 cases passed (40 ms)
Your runtime beats 46.34 % of python3 submissions
Your memory usage beats 63.37 % of python3 submissions (15.2 MB)
"""
class Solution:
    def distanceK(self, root: TreeNode, target: TreeNode, k: int) -> List[int]:
        parents_map = {}

        def find_parents(node):
            if node.left:
                parents_map.setdefault(node.left.val, node)
                find_parents(node.left)
            if node.right:
                parents_map.setdefault(node.right.val, node)
                find_parents(node.right)

        find_parents(root)

        res = []

        def check(node, from_node, depth):
            if not node:
                return
            if depth == k:
                res.append(node.val)
                return
            if node.left != from_node:
                check(node.left, node, depth + 1)
            if node.right != from_node:
                check(node.right, node, depth + 1)
            if parents_map.get(node.val) != from_node:
                check(parents_map.get(node.val), node, depth + 1)

        check(target, None, 0)
        return res

# @lc code=end
