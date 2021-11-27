#
# @lc app=leetcode.cn id=1094 lang=python3
#
# [1094] 拼车
#

# @lc code=start
"""
差分数组应用
Accepted
58/58 cases passed (40 ms)
Your runtime beats 53.67 % of python3 submissions
Your memory usage beats 94.4 % of python3 submissions (14.9 MB)
"""


class Solution:
    def carPooling(self, trips: List[List[int]], capacity: int) -> bool:
        nums = [0] * 1001

        def handler(i, j, val):
            nums[i] += val
            if j + 1 < len(nums):
                nums[j + 1] -= val

        for trip in trips:
            i = trip[1]
            j = trip[2] - 1
            val = trip[0]
            handler(i, j, val)

        res = [nums[0]]
        for i in range(1, len(nums)):
            res.append(nums[i] + res[i - 1])

        for item in res:
            if capacity < item:
                return False
        return True

# @lc code=end
