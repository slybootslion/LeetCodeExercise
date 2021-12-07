#
# @lc app=leetcode.cn id=875 lang=python3
#
# [875] 爱吃香蕉的珂珂
#

# @lc code=start
"""
二分查找。
Accepted
119/119 cases passed (384 ms)
Your runtime beats 21.03 % of python3 submissions
Your memory usage beats 27.93 % of python3 submissions (15.9 MB)
"""
class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        def f(plies, x):
            hours = 0
            for i in range(len(piles)):
                hours += plies[i] // x
                if plies[i] % x > 0:
                    hours += 1
            return hours

        # 最小每小时吃1根，最大每小时吃完piles中最多数量的那一堆的根数
        left, right = 1, max(piles)
        while left < right:
            middle = left + (right - left) // 2
            if f(plies=piles, x=middle) <= h:
                right = middle
            else:
                left = middle + 1
        return left
# @lc code=end
