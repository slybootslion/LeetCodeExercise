#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] 删除有序数组中的重复项
#

# @lc code=start
""" 
没有什么弯弯绕，直接遍历操作（直接操作数组的时间复杂度是O(n^2)，虽然只遍历了一遍）
Accepted
362/362 cases passed (1100 ms)
Your runtime beats 14.37 % of python3 submissions
Your memory usage beats 13.77 % of python3 submissions (15.8 MB)
"""

"""
class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return len(nums)

        p = 1
        while True:
            if p == len(nums):
                break
            if nums[p] == nums[p - 1]:
                nums.pop(p)
                continue
            p += 1

        return len(nums)
"""

"""
然而真正的解法是快慢指针，时间复杂度O(n^2)
别处看到的解法，理解之后真是觉得惊了，返回符合题目要求而且不用操作数组。
Accepted
362/362 cases passed (36 ms)
Your runtime beats 79.72 % of python3 submissions
Your memory usage beats 49.74 % of python3 submissions (15.6 MB)
"""


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        if len(nums) < 2:
            return len(nums)

        p1 = p2 = 0
        while p2 < len(nums):
            if nums[p1] != nums[p2]:
                p1 += 1
                nums[p1] = nums[p2]
            p2 += 1
        return p1 + 1

# @lc code=end
