#
# @lc app=leetcode.cn id=1 lang=python3
#
# [1] 两数之和
#

# @lc code=start
""" 
思路一：哈利表
Accepted
54/54 cases passed (36 ms)
Your runtime beats 87.61 % of python3 submissions
Your memory usage beats 5.43 % of python3 submissions (16 MB)
"""

""" 
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        d = {}
        for idx, num in enumerate(nums):
            if d.get(num) != None:
                return (d[num], idx)
            else:
                d[target - num] = idx
"""


""" 
思路二：排序 + 双指针
这个方法并不好，不是返回下标，而是直接返回对应的数，那这种方法好。
Accepted
55/55 cases passed (36 ms)
Your runtime beats 78.23 % of python3 submissions
Your memory usage beats 5.12 % of python3 submissions (16.2 MB)
"""


class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        numsers = [(number, index) for index, number in enumerate(nums)]
        numsers.sort()

        left, right = 0, len(nums) - 1
        while left < right:
            if numsers[left][0] + numsers[right][0] > target:
                right -= 1
            elif numsers[left][0] + numsers[right][0] < target:
                left += 1
            else:
                return numsers[left][1], numsers[right][1]

# @lc code=end
