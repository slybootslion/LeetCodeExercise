#
# @lc app=leetcode.cn id=26 lang=python3
#
# [26] 删除有序数组中的重复项
#

# @lc code=start
""" 
没有什么弯弯绕，直接遍历操作
Accepted
362/362 cases passed (1100 ms)
Your runtime beats 14.37 % of python3 submissions
Your memory usage beats 13.77 % of python3 submissions (15.8 MB)
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
# @lc code=end
