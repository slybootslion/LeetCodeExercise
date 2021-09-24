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
"""


""" 
方法三：排序就排序，不考虑其他，效率比上面的方法略低一点，更容易理解。其实就是把方法1的内置排序自己写一下。
Accepted
32/32 cases passed (88 ms)
Your runtime beats 42.85 % of python3 submissions
Your memory usage beats 28.58 % of python3 submissions (15.7 MB)
"""


class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        self.merge_sort(nums, 0, len(nums) - 1)
        return nums[-k]

    def merge_sort(self, nums, left, right):
        if left >= right:
            return

        middle = (left + right) // 2
        self.merge_sort(nums, left, middle)
        self.merge_sort(nums, middle + 1, right)

        temp = []
        i, j = left, middle + 1
        while i <= middle or j <= right:
            if i > middle or (j <= right and nums[j] < nums[i]):
                temp.append(nums[j])
                j += 1
            else:
                temp.append(nums[i])
                i += 1
        nums[left: right + 1] = temp

# @lc code=end
