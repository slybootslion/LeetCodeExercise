#
# @lc app=leetcode.cn id=70 lang=python3
#
# [70] 爬楼梯
#

# @lc code=start
""" 
Accepted
45/45 cases passed (32 ms)
Your runtime beats 83.39 % of python3 submissions
Your memory usage beats 15.95 % of python3 submissions (15 MB)
"""
class Solution:
    def climbStairs(self, n: int) -> int:
      if n < 2: return n
      count  = 1
      q = 1
      for num in range(n - 1):
        temp = count
        count += q
        q = temp
      return count
# @lc code=end

