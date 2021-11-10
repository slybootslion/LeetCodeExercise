#
# @lc app=leetcode.cn id=1448 lang=python3
#
# [1448] 统计二叉树中好节点的数目
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
深度遍历，然后传个历史路径进去比较
Accepted
63/63 cases passed (252 ms)
Your runtime beats 15.19 % of python3 submissions
Your memory usage beats 23.78 % of python3 submissions (34.5 MB)
"""
"""
class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        count = 0

        def handler(node, parents):
            if not node:
                return
            nonlocal count
            if node.val >= max(parents):
                count += 1

            parents.append(node.val)
            handler(node.left, parents)
            handler(node.right, parents)
            parents.pop()

        handler(root, [root.val])
        return count
"""

"""
可以优化
Accepted
63/63 cases passed (204 ms)
Your runtime beats 62.18 % of python3 submissions
Your memory usage beats 72.21 % of python3 submissions (34.1 MB)
"""


class Solution:
    def goodNodes(self, root: TreeNode) -> int:
        count = 0

        def handler(node, max_num):
            if not node:
                return
            nonlocal count
            if node.val >= max_num:
                count += 1
            if node.left:
                handler(node.left, max(max_num, node.left.val))
            if node.right:
                handler(node.right, max(max_num, node.right.val))

        handler(root, root.val)

        return count

# @lc code=end
