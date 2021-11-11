#
# @lc app=leetcode.cn id=404 lang=python3
#
# [404] 左叶子之和
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
dfs，没啥好说的
Accepted
100/100 cases passed (28 ms)
Your runtime beats 91.65 % of python3 submissions
Your memory usage beats 33.09 % of python3 submissions (15.6 MB)
"""

"""
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        count = 0

        def handler(node, from_type='left'):
            if not node.left and not node.right:
                if from_type == 'right':
                    return
                nonlocal count
                count += node.val

            if node.left:
                handler(node.left)
            if node.right:
                handler(node.right, 'right')

        handler(root, 'right')
        return count
"""

"""
官方题解的写法
Accepted
100/100 cases passed (40 ms)
Your runtime beats 21.88 % of python3 submissions
Your memory usage beats 35.95 % of python3 submissions (15.6 MB)
"""
class Solution:
    def sumOfLeftLeaves(self, root: TreeNode) -> int:
        is_leaf_node = lambda node: not node.left and not node.right

        def handler(node, ):
            count = 0
            if node.left:
                count += node.left.val if is_leaf_node(node.left) else handler(node.left)
            if node.right and not is_leaf_node(node.right):
                count += handler(node.right)
            return count

        return handler(root) if root else 0
# @lc code=end
