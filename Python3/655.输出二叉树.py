#
# @lc app=leetcode.cn id=655 lang=python3
#
# [655] 输出二叉树
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
这脑袋瓜子是怎么长的能想出“2 ** tree_height - 1”、“end + start - 1”这种边界的方式？
Accepted
73/73 cases passed (44 ms)
Your runtime beats 13.33 % of python3 submissions
Your memory usage beats 45.71 % of python3 submissions (15.1 MB)
"""
class Solution:
    def printTree(self, root: TreeNode) -> List[List[str]]:
        def get_height(node):
            if not node:
                return 0
            return 1 + max(get_height(node.left), get_height(node.right))

        tree_height = get_height(root)

        wid = 2 ** tree_height - 1
        res = [[''] * wid for _ in range(tree_height)]

        def handler(node, level, start, end):
            wid = (end + start) // 2
            res[level - 1][wid] = str(node.val)
            if node.left:
                handler(node.left, level + 1, start, wid)
            if node.right:
                handler(node.right, level + 1, wid, end)

        handler(root, 1, 0, wid)
        return res

# @lc code=end
