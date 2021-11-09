#
# @lc app=leetcode.cn id=257 lang=python3
#
# [257] 二叉树的所有路径
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
没有什么特别，深度优先，前序遍历而已。
递归版
"""


class Solution:
    def binaryTreePaths(self, root: TreeNode) -> List[str]:
        res = []

        def handler(node, parents):
            if not node.left and not node.right:
                res.append(parents + str(node.val))
                return
            parents = parents + str(node.val)
            if node.left:
                handler(node.left, parents + '->')
            if node.right:
                handler(node.right, parents + '->')

        handler(root, '')
        return res

# @lc code=end
