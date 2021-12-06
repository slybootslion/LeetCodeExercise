#
# @lc app=leetcode.cn id=704 lang=python3
#
# [704] 二分查找
#

# @lc code=start
"""
LeetCode上能把一个题出这么直白也是不容易
Accepted
47/47 cases passed (44 ms)
Your runtime beats 31.65 % of python3 submissions
Your memory usage beats 20.13 % of python3 submissions (15.9 MB)
"""


class Solution:
    def search(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1

        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                return mid
            elif nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
        return -1
# @lc code=end
