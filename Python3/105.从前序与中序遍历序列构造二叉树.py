#
# @lc app=leetcode.cn id=105 lang=python3
#
# [105] 从前序与中序遍历序列构造二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
参数很多，通过参数来不断的定位左右子树
本质上是一个前序遍历，通过定位的树，来构建一棵树
Accepted
203/203 cases passed (56 ms)
Your runtime beats 71.91 % of python3 submissions
Your memory usage beats 89.72 % of python3 submissions (19 MB)
"""
class Solution:
    def buildTree(self, preorder: List[int], inorder: List[int]) -> TreeNode:
        def handler(pre_start, pre_end, in_start, in_end):
            if pre_start > pre_end or in_start > in_end:
                return None
            val = preorder[pre_start]
            node = TreeNode(val)
            in_root = inorder.index(val)
            left = in_root - in_start
            node.left = handler(pre_start + 1, pre_start + left, in_start, in_root - 1)
            node.right = handler(pre_start + left + 1, pre_end, in_root + 1, in_end)
            return node

        return handler(0, len(preorder) - 1, 0, len(inorder) - 1)
# @lc code=end
