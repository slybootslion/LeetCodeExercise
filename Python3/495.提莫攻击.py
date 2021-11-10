#
# @lc app=leetcode.cn id=495 lang=python3
#
# [495] 提莫攻击
#

# @lc code=start
"""
这什么破题
Accepted
38/38 cases passed (48 ms)
Your runtime beats 98.82 % of python3 submissions
Your memory usage beats 90.71 % of python3 submissions (15.7 MB)
"""


class Solution:
    def findPoisonedDuration(self, timeSeries: List[int], duration: int) -> int:
        exp, res = 0, 0

        for t in timeSeries:
            if t >= exp:
              res += duration
            else:
              res += t + duration - exp
            exp = t + duration
        return res
# @lc code=end
