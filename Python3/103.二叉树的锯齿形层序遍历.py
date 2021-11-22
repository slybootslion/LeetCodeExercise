#
# @lc app=leetcode.cn id=103 lang=python3
#
# [103] 二叉树的锯齿形层序遍历
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
"""
层序遍历，官方题解就是叼
Accepted
33/33 cases passed (36 ms)
Your runtime beats 41.04 % of python3 submissions
Your memory usage beats 26.55 % of python3 submissions (15.3 MB)
"""


class Solution:
    def zigzagLevelOrder(self, root: TreeNode) -> List[List[int]]:
        res = []
        if not root:
            return res

        q = [root]
        flag = True
        while q:
            res.append([])
            length = len(q)
            while length:
                node = q.pop(0)
                if flag:
                    res[-1].append(node.val)
                else:
                    res[-1].insert(0, node.val)
                if node.left:
                    q.append(node.left)
                if node.right:
                    q.append(node.right)
                length -= 1
            flag = not flag

        return res
# @lc code=end
