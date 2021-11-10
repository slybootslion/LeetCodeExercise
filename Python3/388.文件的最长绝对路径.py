#
# @lc app=leetcode.cn id=388 lang=python3
#
# [388] 文件的最长绝对路径
#

# @lc code=start
"""
这是深度优先吗？
没做出来，看了下题解
Accepted
26/26 cases passed (28 ms)
Your runtime beats 85.93 % of python3 submissions
Your memory usage beats 76.88 % of python3 submissions (14.9 MB)
"""
class Solution:
    def lengthLongestPath(self, input: str) -> int:
        count = 0
        level_count = [0]

        for s in input.split('\n'):
            level = 0
            while s[level] == '\t':
                level += 1
            length = len(s) - level
            if '.' in s:
                count = max(count, level_count[level] + length)
                continue
            if level + 1 < len(level_count):
                level_count[level + 1] = level_count[level] + length + 1
            else:
                level_count.append(level_count[-1] + length + 1)

        return count
# @lc code=end
