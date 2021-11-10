#
# @lc app=leetcode.cn id=617 lang=python3
#
# [617] 合并二叉树
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
182/182 cases passed (84 ms)
Your runtime beats 6.12 % of python3 submissions
Your memory usage beats 22.79 % of python3 submissions (15.5 MB)
"""
class Solution:
    def mergeTrees(self, root1: TreeNode, root2: TreeNode) -> TreeNode:
        if not root1:
            return root2
        if not root2:
            return root1

        tree_node = TreeNode(root1.val + root2.val)
        tree_node.left = self.mergeTrees(root1.left, root2.left)
        tree_node.right = self.mergeTrees(root1.right, root2.right)
        return tree_node
# @lc code=end
