#
# @lc app=leetcode.cn id=1109 lang=python3
#
# [1109] 航班预订统计
#

# @lc code=start
""" 
Accepted
63/63 cases passed (140 ms)
Your runtime beats 9.73 % of python3 submissions
Your memory usage beats 5.06 % of python3 submissions (25.1 MB)
"""
class Solution:
    def corpFlightBookings(self, bookings: List[List[int]], n: int) -> List[int]:
        arr = [0] * n
        df = Difference(arr)
        for booking in bookings:
            i = booking[0] - 1
            j = booking[1] - 1
            val = booking[2]
            df.increment(i, j, val)

        return df.result()


class Difference:
    diff = None

    def __init__(self, nums):
        self.diff = [0] * len(nums)
        self.diff[0] = nums[0]
        for i in range(1, len(nums)):
            self.diff[i] = nums[i] - nums[i - 1]

    def increment(self, i, j, val):
        self.diff[i] += val
        if j + 1 < len(self.diff):
            self.diff[j + 1] -= val

    def result(self):
        res = [self.diff[0]]
        for i in range(1, len(self.diff)):
            res.append(self.diff[i] + res[i - 1])
        return res
# @lc code=end
