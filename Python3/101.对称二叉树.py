#
# @lc app=leetcode.cn id=101 lang=python3
#
# [101] 对称二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
""" 
深度优先，正常人好理解的写法
"""

"""
class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        def isMirror(left, right):
            if not left and not right:
                return True
            elif not left and right:
                return False
            elif left and not right:
                return False

            l = isMirror(left.left, right.right)
            r = isMirror(left.right, right.left)
            return l and r and left and right and left.val == right.val

        return isMirror(root.left, root.right)
"""


""" 
鸡贼的写法
注意！返回结果要转布尔类型，否则过去leetcode会判错（真是个天坑）
"""

class Solution:
    def isSymmetric(self, root: Optional[TreeNode]) -> bool:
        if not root:
            return True

        def isMirror(left, right):
            if not left and not right:
                return True
            return bool(left and right and left.val == right.val and isMirror(left.left, right.right) and isMirror(
                left.right, right.left))

        return isMirror(root.left, root.right)
# @lc code=end
