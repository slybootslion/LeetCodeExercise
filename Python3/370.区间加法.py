"""
现在LeetCode把这道题变成了会员题，所以没有办法看啦
不过可以在九章的免费题里找到：
https://lc.jiuzhang.com/problem/903

这道题的解法就是：差分数组
Difference类就是差分数组的具体实现
"""


class Solution:
    """
    @param length: the length of the array
    @param updates: update operations
    @return: the modified array after all k operations were executed
    """

    def getModifiedArray(self, length, updates):
        # Write your code here
        nums = [0] * length
        df = Difference(nums)

        for update in updates:
            [i, j, val] = update
            df.increment(i, j, val)

        return df.result()


class Difference:
    nums = None

    def __init__(self, nums):
        self.nums = nums
        self.nums[0] = nums[0]
        for i in range(1, len(nums)):
            self.nums[i] = nums[i] - nums[i - 1]

    def increment(self, i, j, val):
        self.nums[i] += val
        if j + 1 < len(self.nums):
            self.nums[j + 1] -= val

    def result(self):
        res = [self.nums[0]]
        for i in range(1, len(self.nums)):
            res.append(res[i - 1] + self.nums[i])
        return res
