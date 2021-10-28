#
# @lc app=leetcode.cn id=15 lang=python3
#
# [15] 三数之和
#

# @lc code=start
""" 
官方解法：排序+双指针
Accepted
318/318 cases passed (632 ms)
Your runtime beats 70.79 % of python3 submissions
Your memory usage beats 38.44 % of python3 submissions (17.6 MB)
"""


class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        nums.sort()
        res = []
        n = len(nums)

        for i in range(n):
            if i > 0 and nums[i] == nums[i - 1]:
                continue
            right = n - 1
            target = -nums[i]

            for left in range(i + 1, n):
                if left > i + 1 and nums[left] == nums[left - 1]:
                    continue

                while left < right and nums[left] + nums[right] > target:
                    right -= 1

                if left >= right:
                    break

                if nums[left] + nums[right] == target:
                    res.append([nums[i], nums[left], nums[right]])

        return res
# @lc code=end
