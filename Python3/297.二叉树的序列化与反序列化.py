#
# @lc app=leetcode.cn id=297 lang=python3
#
# [297] 二叉树的序列化与反序列化
#

# @lc code=start
# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

"""
这个题的难度等级是困难，我觉得可能体现在有多种解法上
层序遍历
"""
# class Codec:
#     NULL_STRING = '#'
#     SEP_FLAG = ','
#
#     def serialize(self, root):
#         res = []
#
#         queue = [root]
#         while len(queue):
#             root = queue.pop(0)
#             if not root:
#                 res.append(self.NULL_STRING)
#                 continue
#             res.append(str(root.val))
#             queue.append(root.left)
#             queue.append(root.right)
#
#         return self.SEP_FLAG.join(res)
#
#     def deserialize(self, data):
#         data = data.split(',')
#         val = data.pop(0)
#         if not val or val == self.NULL_STRING:
#             return
#         tree_node = TreeNode(int(val))
#         queue = [tree_node]
#
#         while len(data):
#             root = queue.pop(0)
#             left = data.pop(0)
#             if left == self.NULL_STRING:
#                 root.left = None
#             else:
#                 root.left = TreeNode(int(left))
#                 queue.append(root.left)
#             right = data.pop(0)
#             if right == self.NULL_STRING:
#                 root.right = None
#             else:
#                 root.right = TreeNode(int(right))
#                 queue.append(root.right)
#
#         return tree_node

"""
前序遍历 后序遍历 都可以，这里深度优先选后序遍历
中序遍历做不到
Accepted
52/52 cases passed (108 ms)
Your runtime beats 73.07 % of python3 submissions
Your memory usage beats 74.23 % of python3 submissions (19.3 MB)
"""


class Codec:
    NULL_STRING = '#'
    SEP_FLAG = ','

    def serialize(self, root):
        res = []

        def handler(node):
            if not node:
                res.append(self.NULL_STRING)
                return
            handler(node.left)
            handler(node.right)
            res.append(str(node.val))

        handler(root)

        return self.SEP_FLAG.join(res)

    def deserialize(self, data):
        data = data.split(self.SEP_FLAG)

        def handler(stack):
            # 后续遍历，最后一个是根节点
            node = stack.pop()
            if node == self.NULL_STRING:
                return None
            tree_node = TreeNode(int(node))
            # 为保证顺序，先右后左
            tree_node.right = handler(stack)
            tree_node.left = handler(stack)
            return tree_node

        return handler(data)

# Your Codec object will be instantiated and called as such:
# ser = Codec()
# deser = Codec()
# ans = deser.deserialize(ser.serialize(root))
# @lc code=end
