#
# @lc app=leetcode.cn id=410 lang=python3
#
# [410] 分割数组的最大值
#

# @lc code=start
"""
本来我是拒绝做这道题的，因为题目都看不明白，最后试着解了一下，果然没弄明白。
所以这道题我在LeetCode上也没提交
下面是官方题解，也没看明白。
"""
class Solution:
    def splitArray(self, nums: List[int], m: int) -> int:
        def check_middle(middle):
            total, count = 0, 1
            for num in nums:
                if total + num > middle:
                    count += 1
                    total = num
                else:
                    total += num
            return count <= m

        left, right = max(nums), sum(nums)
        while left < right:
            middle = left + (right - left) // 2
            if check_middle(middle):
                right = middle
            else:
                left = middle + 1
        return left

# @lc code=end
