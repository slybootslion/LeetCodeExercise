#
# @lc app=leetcode.cn id=513 lang=python3
#
# [513] 找树左下角的值
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度优先，记录层级和该层第一次进入的值
Accepted
76/76 cases passed (48 ms)
Your runtime beats 49.06 % of python3 submissions
Your memory usage beats 10.43 % of python3 submissions (17.9 MB)
"""


class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        d = {}
        max_level = 0

        def handler(node, level):
            nonlocal max_level
            if not node.left and not node.right:
                max_level = max_level if max_level > level else level
                d.setdefault(max_level, node.val)

            if node.left:
                handler(node.left, level + 1)
            if node.right:
                handler(node.right, level + 1)

        handler(root, max_level)
        return d[max_level]


"""
换一种存储的数据结构也可以，都一样，还是dfs
Accepted
76/76 cases passed (36 ms)
Your runtime beats 95.59 % of python3 submissions
Your memory usage beats 19.19 % of python3 submissions (17.8 MB)
"""

"""
class Solution:
    def findBottomLeftValue(self, root: Optional[TreeNode]) -> int:
        flag = (0, 0)

        def handler(node, level):
            nonlocal flag
            if not node.left and not node.right:
                max_level, val = flag
                if level > max_level:
                    flag = (level, node.val)
                

            if node.left:
                handler(node.left, level + 1)
            if node.right:
                handler(node.right, level + 1)

        handler(root, 1)
        return flag[1]
"""

# @lc code=end
