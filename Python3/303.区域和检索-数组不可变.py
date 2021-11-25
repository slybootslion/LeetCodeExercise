#
# @lc app=leetcode.cn id=303 lang=python3
#
# [303] 区域和检索 - 数组不可变
#

# @lc code=start
"""
在没看懂题的情况下，过了。
一共15个用例，能过，但是sumRange频繁调用的情况下，这样写效率低。因为每次调用就是一个O(n)
Accepted
15/15 cases passed (2668 ms)
Your runtime beats 14.23 % of python3 submissions
Your memory usage beats 62.11 % of python3 submissions (18.1 MB)
"""

"""
class NumArray:

    def __init__(self, nums: List[int]):
        self.nums = nums

    def sumRange(self, left: int, right: int) -> int:
        count = 0
        for num in self.nums[left:right+1]:
            count += num
        return count
"""

"""
优化解法：数组前缀和
Accepted
15/15 cases passed (52 ms)
Your runtime beats 90.24 % of python3 submissions
Your memory usage beats 58.91 % of python3 submissions (18.1 MB)
"""


class NumArray:
    pre_nums = None

    def __init__(self, nums: List[int]):
        self.pre_nums = [0]
        for num in nums:
            pre = self.pre_nums[-1]
            self.pre_nums.append(pre + num)

    def sumRange(self, left: int, right: int) -> int:
        return self.pre_nums[right + 1] - self.pre_nums[left]

# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)
# @lc code=end
