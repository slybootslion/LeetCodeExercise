#
# @lc app=leetcode.cn id=34 lang=python3
#
# [34] 在排序数组中查找元素的第一个和最后一个位置
#

# @lc code=start
"""
思路有都没有做出来
Accepted
88/88 cases passed (44 ms)
Your runtime beats 7.6 % of python3 submissions
Your memory usage beats 31.56 % of python3 submissions (15.7 MB)
"""
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        def find_left(nums, target):
            left, right = 0, len(nums) - 1
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] >= target:
                    right = mid - 1
                if nums[mid] < target:
                    left = mid + 1
            return left

        _l = find_left(nums, target)
        r = find_left(nums, target + 1)
        if _l == len(nums) or nums[_l] != target:
            return [-1, -1]
        else:
            return [_l, r - 1]

# @lc code=end
