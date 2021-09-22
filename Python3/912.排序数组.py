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
        pivot = nums[(start + end) // 2]

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
"""


""" 
方法三：归并排序
Accepted
13/13 cases passed (500 ms)
Your runtime beats 32.76 % of python3 submissions
Your memory usage beats 87.44 % of python3 submissions (19.8 MB)
"""


""" 
class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        if not len(nums):
            return nums

        temp = [None] * len(nums)
        return self.merge_sort(nums, 0, len(nums) - 1, temp)

    def merge_sort(self, nums, start, end, temp):
        if start >= end:
            return nums

        self.merge_sort(nums, start, (start + end) // 2, temp)
        self.merge_sort(nums, (start + end) // 2 + 1, end, temp)
        return self.merge(nums, start, end, temp)

    def merge(self, nums, start, end, temp):
        middle = (start + end) // 2
        leftIndex = start
        rightIndex = middle + 1
        index = leftIndex

        while leftIndex <= middle and rightIndex <= end:
            if nums[leftIndex] < nums[rightIndex]:
                temp[index] = nums[leftIndex]
                index += 1
                leftIndex += 1
            else:
                temp[index] = nums[rightIndex]
                index += 1
                rightIndex += 1

        while leftIndex <= middle:
            temp[index] = nums[leftIndex]
            index += 1
            leftIndex += 1

        while rightIndex <= end:
            temp[index] = nums[rightIndex]
            index += 1
            rightIndex += 1

        for i in range(start, end + 1):
            nums[i] = temp[i]

        return nums
"""

""" 不同写法 """


class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        self.merge_sort(nums, 0, len(nums) - 1)
        return nums

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
