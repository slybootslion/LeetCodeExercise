#
# @lc app=leetcode.cn id=912 lang=python3
#
# [912] 排序数组
#

# @lc code=start
""" 
方法一：调用api，但这样写肯定是不行的，但是能过，成绩还贼好。
Accepted
13/13 cases passed (52 ms)
Your runtime beats 96.14 % of python3 submissions
Your memory usage beats 88.34 % of python3 submissions (19.8 MB)
"""


""" 
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        nums.sort()
        return nums
"""

""" 
方法二：快排
Accepted
13/13 cases passed (376 ms)
Your runtime beats 72.83 % of python3 submissions
Your memory usage beats 64.78 % of python3 submissions (20 MB)
"""


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if not len(nums):
            return nums

        self.quick_sort(nums, 0, len(nums) - 1)
        return nums

    def quick_sort(self, nums, start, end):
        if start >= end:
            return nums

        left, right = start, end
        pivot = nums[int((start + end) / 2)]

        while left <= right:
            while left <= right and nums[left] < pivot:
                left += 1
            while left <= right and nums[right] > pivot:
                right -= 1
            if left <= right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1

        self.quick_sort(nums, start, right)
        self.quick_sort(nums, left, end)

# @lc code=end
