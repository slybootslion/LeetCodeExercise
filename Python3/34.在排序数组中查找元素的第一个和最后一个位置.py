#
# @lc app=leetcode.cn id=34 lang=python3
#
# [34] 在排序数组中查找元素的第一个和最后一个位置
#

# @lc code=start
"""
思路都没，没有做出来
Accepted
88/88 cases passed (44 ms)
Your runtime beats 7.6 % of python3 submissions
Your memory usage beats 31.56 % of python3 submissions (15.7 MB)
"""
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
"""

"""
所以我想用双指针试一下，这个好理解多了。但是效率比二分法差，时间复杂度是O(n)。
Accepted
88/88 cases passed (40 ms)
Your runtime beats 19.7 % of python3 submissions
Your memory usage beats 66.22 % of python3 submissions (15.7 MB)
"""

"""
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums:
            return [-1, -1]
        left, right = 0, len(nums) - 1

        while left < right:
            if nums[left] == nums[right]:
                break
            if nums[left] < target:
                left += 1
            if nums[right] > target:
                right -= 1


        if left > right or nums[left] != target:
            left = -1
        if right < left or nums[right] != target:
            right = -1

        return [left, right]
"""

"""
最后我再试一下二分搜索的模板
Accepted
88/88 cases passed (28 ms)
Your runtime beats 90.6 % of python3 submissions
Your memory usage beats 21.47 % of python3 submissions (15.8 MB)
"""


class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        if not nums:
            return [-1, -1]

        def bound(nums, target, type):
            left, right = 0, len(nums) - 1
            while left <= right:
                middle = left + (right - left) // 2
                if nums[middle] < target:
                    left = middle + 1
                elif nums[middle] > target:
                    right = middle - 1
                elif nums[middle] == target:
                    if type == 'left':
                        right = middle - 1
                    else:
                        left = middle + 1

            res = ''
            if type == 'left':
                if left >= len(nums) or nums[left] != target:
                    return -1
                res = left
            else:
                if right < 0 or nums[right] != target:
                    return -1
                res = right
            return res

        _l = bound(nums, target, 'left')
        r = bound(nums, target, 'right')
        return [_l, r]


"""
# 总结一下二分搜索的模板
# 有序数组中，用二分查找发找到目标值
def binary_search(nums, target):
    left, right = 0, nums.length - 1
    while left <= right:
        # 这样写是因为，这样做可以防止left和right是特别大的数，相加而导致溢出。
        # 效果和 (left + right) // 2 是一样的
        middle = left + (right - left) // 2
        if nums[middle] < target:
            left = middle + 1
        elif nums[middle] > target:
            right = middle - 1
        elif nums[middle] == target:
            return middle
    return -1


# 有序数组中，用二分查找发找到目标值的左边界
def left_bound(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        middle = left + (right - left) // 2
        if nums[middle] < target:
            left = middle + 1
        elif nums[middle] > target:
            right = middle - 1
        elif nums[middle] == target:
            # 锁定左边界
            right = middle - 1

    if left >= len(nums) or nums[left] != target:
        return -1
    return left


# 有序数组中，用二分查找发找到目标值的右边界
def right_bound(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        middle = left + (right - left) // 2
        if nums[middle] > target:
            right = middle - 1
        elif nums[middle] < target:
            left = middle + 1
        elif nums[middle] == target:
            # 锁定右边界
            left = middle + 1

    if right < 0 or nums[right] != target:
        return -1
    return right
"""

# @lc code=end
