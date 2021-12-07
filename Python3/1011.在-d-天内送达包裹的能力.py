#
# @lc app=leetcode.cn id=1011 lang=python3
#
# [1011] 在 D 天内送达包裹的能力
#

# @lc code=start
"""
类似第410题。
虽然我根本不知道自己写的什么，但是按照套路写出来居然对了。
Accepted
85/85 cases passed (432 ms)
Your runtime beats 77.73 % of python3 submissions
Your memory usage beats 71.23 % of python3 submissions (17.7 MB)
"""
class Solution:
    def shipWithinDays(self, weights: List[int], days: int) -> int:
        def handler(weights, x):
            days, total = 1, 0
            for num in weights:
                # 装不下了，天数+1
                if total + num > x:
                    days += 1
                    total = num
                # 还能装下，继续试着装
                else:
                    total += num
            return days

        left, right = max(weights), sum(weights)

        while left < right:
            middle = left + (right - left) // 2
            if handler(weights, middle) <= days:
                right = middle
            else:
                left = middle + 1
        return left

# @lc code=end
