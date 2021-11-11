#
# @lc app=leetcode.cn id=515 lang=python3
#
# [515] 在每个树行中找最大值
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
78/78 cases passed (52 ms)
Your runtime beats 41.8 % of python3 submissions
Your memory usage beats 5 % of python3 submissions (18.2 MB)
"""
class Solution:
    def largestValues(self, root: TreeNode) -> List[int]:
        d = {}
        res = []

        def handler(node, level):
            if not node:
                return
            level_list = d.get(level, [])
            level_list.append(node.val)
            d[level] = level_list

            if node.left:
                handler(node.left, level + 1)
            if node.right:
                handler(node.right, level + 1)

        handler(root, 1)

        for val in d.values():
            res.append(max(val))
        return res
# @lc code=end
