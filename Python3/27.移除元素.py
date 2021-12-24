#
# @lc app=leetcode.cn id=27 lang=python3
#
# [27] 移除元素
#

# @lc code=start
""" 
类似26题，内置api直接删除，操作数组的时间复杂度O(n^2)
Accepted
113/113 cases passed (28 ms)
Your runtime beats 87.21 % of python3 submissions
Your memory usage beats 33.18 % of python3 submissions (15 MB)
"""

"""
class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        if not len(nums):
            return len(nums)

        p = 0
        while True:
            if p >= len(nums):
                break
            if nums[p] == val:
                del nums[p]
                continue
            p += 1

        return len(nums)
"""

"""
双指针，同26题双指针思路
注意一下，这个并不是单纯的返回一个计数器count，而是要修改数组的，所以才是双指针。
Accepted
113/113 cases passed (44 ms)
Your runtime beats 10.66 % of python3 submissions
Your memory usage beats 37.64 % of python3 submissions (15 MB)
"""


class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        length = len(nums)
        if not length:
            return length

        p1 = p2 = 0
        while p2 < length:
            if nums[p2] != val:
                nums[p1] = nums[p2]
                p1 += 1
            p2 += 1

        return p1

# @lc code=end
