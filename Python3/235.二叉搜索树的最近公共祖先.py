#
# @lc app=leetcode.cn id=235 lang=python3
#
# [235] 二叉搜索树的最近公共祖先
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None
"""
官方题解还是牛逼，给跪了
Accepted
27/27 cases passed (64 ms)
Your runtime beats 91.81 % of python3 submissions
Your memory usage beats 78.19 % of python3 submissions (18.8 MB)
"""

"""
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        res = None

        while True:
            if p.val < root.val and q.val < root.val:
                root = root.left
            elif p.val > root.val and q.val > root.val:
                root = root.right
            else:
                return root

        return res
"""

"""
深度优先遍历 加判断
"""

"""
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def handler(node, p, q):
            if not node:
                return False
            left_node = handler(node.left, p, q)
            right_node = handler(node.right, p, q)
            if (left_node and right_node) or ((node.val == q.val or node.val == p.val) and (left_node or right_node)):
                return node
            return left_node or right_node or p.val == node.val or q.val == node.val

        return handler(root, p, q)
"""

"""
官方题解：深度优先，两个队列来管理左右子树
Accepted
27/27 cases passed (72 ms)
Your runtime beats 60.45 % of python3 submissions
Your memory usage beats 94.01 % of python3 submissions (18.7 MB)
"""
class Solution:
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        def get_path(node, target):
            path = []
            while node != target:
                path.append(node)
                if node.val > target.val:
                    node = node.left
                else:
                    node = node.right
            path.append(node)
            return path

        path_p = get_path(root, p)
        path_q = get_path(root, q)

        res = None
        for i, j in zip(path_p, path_q):
            if i == j:
                res = i
            else:
                break
        return res

# @lc code=end
