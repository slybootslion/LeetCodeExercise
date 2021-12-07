#
# @lc app=leetcode.cn id=410 lang=python3
#
# [410] 分割数组的最大值
#

# @lc code=start
"""
本来我是拒绝做这道题的，因为题目都看不明白，最后试着解了一下，果然没弄明白。
所以这道题我在LeetCode上也没提交
下面是官方题解，也没看明白。
"""

"""
class Solution:
    def splitArray(self, nums: List[int], m: int) -> int:
        def check_middle(middle):
            total, count = 0, 1
            for num in nums:
                if total + num > middle:
                    count += 1
                    total = num
                else:
                    total += num
            return count <= m

        left, right = max(nums), sum(nums)
        while left < right:
            middle = left + (right - left) // 2
            if check_middle(middle):
                right = middle
            else:
                left = middle + 1
        return left
"""

"""
12月7日重新看这道题。
二分查找法，先判断最值，区间范围[left, right]。这道题的最值是：[max(nums), sum(nums)]。列表中最大的值，到列表和。
这个结论是看题解看到的，但是为什么？不知道。这他妈的谁能反应的上来？？
先不管这个结论怎么得到的，如果已经知道这个，该怎么做？
还是没搞懂。啊！！！！
Accepted
30/30 cases passed (36 ms)
Your runtime beats 58.13 % of python3 submissions
Your memory usage beats 41.05 % of python3 submissions (15 MB)
"""


class Solution:
    # 题目主函数
    def splitArray(self, nums: List[int], m: int) -> int:
        lo, hi = max(nums), sum(nums)
        # 优化前，线性穷举
        """
        for _max in range(lo, hi + 1):
            # 如果最大子数组和是_max
            # 至少可以把nums分割成n个子数组
            n = self.split(nums, _max)
            if n <= m:
                return _max
        """
        # 优化后，就是二分查找法，套模板
        while lo < hi:
            middle = lo + (hi - lo) // 2
            n = self.split(nums, middle)
            if n == m:
                # 收缩右边界，达到收缩左边界的目的
                hi = middle
            elif n < m:
                # 最大子数组和上限高了，减少一些
                hi = middle
            elif n > m:
                # 最大子数组和上限低了，增加一些
                lo = middle + 1
        return lo

    # 辅助函数，若限制最大子数组为m，计算nums至少可以被分割成几个子数组
    def split(self, nums, m):
        # count 至少可以分割的子数组数量
        # total 记录每个子数组的元素和
        count, total = 1, 0
        for num in nums:
            # 如果当前子数组和大于m限制，则这个子数组不能再添加元素了
            if total + num > m:
                count += 1
                total = num
            # 当前子数组还没有达到m限制，还可以添加元素
            else:
                total += num
        return count

# @lc code=end
