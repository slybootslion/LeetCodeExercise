#
# @lc app=leetcode.cn id=434 lang=python3
#
# [434] 字符串中的单词数
#

# @lc code=start
""" 
官方题解。don't say so much
Accepted
27/27 cases passed (36 ms)
Your runtime beats 33.57 % of python3 submissions
Your memory usage beats 5.5 % of python3 submissions (15.1 MB)
"""
class Solution:
    def countSegments(self, s: str) -> int:
        res = 0
        for index, char in enumerate(s):
          if (index == 0 or s[index - 1] == ' ') and char != ' ':
            res += 1
        return res
# @lc code=end
