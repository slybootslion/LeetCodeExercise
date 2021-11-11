#
# @lc app=leetcode.cn id=530 lang=python3
#
# [530] 二叉搜索树的最小绝对差
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
因为是二叉搜索树，所以中序遍历，就这样，over
Accepted
188/188 cases passed (56 ms)
Your runtime beats 36.29 % of python3 submissions
Your memory usage beats 66.13 % of python3 submissions (16.9 MB)
"""
class Solution:
    def getMinimumDifference(self, root: TreeNode) -> int:
        min_num = float('inf')
        prev = None
        stack = []
        while root or len(stack):
            while root:
                stack.append(root)
                root = root.left
            root = stack.pop()
            if prev is not None:
                min_num = min(min_num, abs(root.val - prev))
            prev = root.val
            root = root.right

        return min_num

# @lc code=end
