#
# @lc app=leetcode.cn id=1005 lang=python3
#
# [1005] K 次取反后最大化的数组和
#

# @lc code=start
from functools import reduce

"""
偷懒的做法
Accepted
80/80 cases passed (52 ms)
Your runtime beats 16.54 % of python3 submissions
Your memory usage beats 61.59 % of python3 submissions (15 MB)
"""
class Solution:
    def largestSumAfterKNegations(self, nums: List[int], k: int) -> int:
        nums.sort()
        for i in range(k):
            nums[0] = -nums[0]
            nums.sort()
        count = reduce(lambda x, y: x + y, nums)
        return count
# @lc code=end
