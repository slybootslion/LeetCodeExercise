#
# @lc app=leetcode.cn id=703 lang=python3
#
# [703] 数据流中的第 K 大元素
#

# @lc code=start
"""
成绩很差但是通过了（主要是python里的PriorityQueue跟我想的不一样呀！）
Accepted
10/10 cases passed (916 ms)
Your runtime beats 13.07 % of python3 submissions
Your memory usage beats 6.98 % of python3 submissions (19 MB)
"""
class KthLargest:

    def __init__(self, k: int, nums: List[int]):
        self.k = k
        self.q = []
        for num in nums:
            self.add(num)


    def add(self, val: int) -> int:
        if len(self.q) < self.k:
            self.q.append(val)
            self.q.sort()
        else:
            if self.q[0] < val:
                self.q.append(val)
                self.q.sort()

        if len(self.q) >= self.k:
            return self.q[-self.k]



# Your KthLargest object will be instantiated and called as such:
# obj = KthLargest(k, nums)
# param_1 = obj.add(val)
# @lc code=end

