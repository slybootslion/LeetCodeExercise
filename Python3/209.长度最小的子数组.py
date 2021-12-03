#
# @lc app=leetcode.cn id=209 lang=python3
#
# [209] 长度最小的子数组
#

# @lc code=start

"""
滑动窗口
Accepted
19/19 cases passed (1208 ms)
Your runtime beats 13.83 % of python3 submissions
Your memory usage beats 17.52 % of python3 submissions (16.6 MB)
"""


class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        window = []

        p = 0
        res = float('inf')

        while p < len(nums):
            num = nums[p]
            window.append(num)
            p += 1
            while sum(window) >= target:
                res = min(len(window), res)
                window.pop(0)

        left = len(nums) - len(window)

        while left < len(nums):
            res_new = nums[left:]
            left += 1
            if sum(res_new) >= target:
                res = min(len(res_new), res)

        res = res if res != float('inf') else 0
        return res

# @lc code=end
