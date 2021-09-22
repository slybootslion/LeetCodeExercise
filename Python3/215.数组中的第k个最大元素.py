#
# @lc app=leetcode.cn id=215 lang=python3
#
# [215] 数组中的第K个最大元素
#

# @lc code=start
""" 
方法一：无耻内置方法调用大法，能过但是一分没有
Accepted
32/32 cases passed (40 ms)
Your runtime beats 72.46 % of python3 submissions
Your memory usage beats 74.69 % of python3 submissions (15.4 MB)
"""
"""
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
      nums.sort()
      return nums[-k]
"""

"""
方法二：快排 + 根据条件选择
Accepted
32/32 cases passed (40 ms)
Your runtime beats 72.46 % of python3 submissions
Your memory usage beats 31.89 % of python3 submissions (15.7 MB)
"""
class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        if not len(nums):
            return -1

        return self.quickSelect(nums, 0, len(nums) - 1, k)

    def quickSelect(self, nums, start, end, k):
        if start >= end:
            return nums[start]

        left, right = start, end
        pivot = nums[(start + end) // 2]

        while left <= right:
            while left <= right and nums[left] > pivot:
                left += 1

            while left <= right and nums[right] < pivot:
                right -= 1

            if left <= right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1

        if start + k - 1 <= right:
            return self.quickSelect(nums, start, right, k)

        if start + k - 1 >= left:
            return self.quickSelect(nums, left, end, k - (left - start))

        return nums[right + 1]

# @lc code=end
