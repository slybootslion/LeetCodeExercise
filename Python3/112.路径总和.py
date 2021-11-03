#
# @lc app=leetcode.cn id=112 lang=python3
#
# [112] 路径总和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先
Accepted
117/117 cases passed (52 ms)
Your runtime beats 12.02 % of python3 submissions
Your memory usage beats 91.54 % of python3 submissions (15.8 MB)
"""
class Solution:
    def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
        flag = False
        if not root:
            return flag

        def handler(node, value):
            nonlocal flag
            if not node.left and not node.right:
                if value == targetSum:
                    flag = True
            if flag:
                return
            if node.left:
                handler(node.left, node.left.val + value)
            if node.right:
                handler(node.right, node.right.val + value)

        handler(root, root.val)
        return flag

# @lc code=end
