#
# @lc app=leetcode.cn id=121 lang=python3
#
# [121] 买卖股票的最佳时机
#

# @lc code=start
""" 
Accepted
211/211 cases passed (224 ms)
Your runtime beats 73.47 % of python3 submissions
Your memory usage beats 91.27 % of python3 submissions (22.8 MB)
"""
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
      ma = 0
      m = prices[0]
      for price in prices:
        m = min(price, m)
        ma = max(price - m, ma)
      return ma
# @lc code=end

