#
# @lc app=leetcode.cn id=304 lang=python3
#
# [304] 二维区域和检索 - 矩阵不可变
#

# @lc code=start
"""
这样写肯定是对的，但是会超时。
"""

"""
class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        self.matrix = matrix

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        count = 0
        for row in self.matrix[row1:row2+1]:
            for num in row[col1:col2+1]:
                count += num

        return count
"""

"""
矩阵的前缀和，日
Accepted
24/24 cases passed (640 ms)
Your runtime beats 32.71 % of python3 submissions
Your memory usage beats 22.04 % of python3 submissions (25.7 MB)
"""


class NumMatrix:

    def __init__(self, matrix: List[List[int]]):
        m, n = len(matrix), len(matrix[0])
        self.m = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                self.m[i][j] = self.m[i - 1][j] + self.m[i][j - 1] + matrix[i - 1][j - 1] - self.m[i - 1][j - 1]
        print(self.m)

    def sumRegion(self, row1: int, col1: int, row2: int, col2: int) -> int:
        return self.m[row2 + 1][col2 + 1] - self.m[row1][col2 + 1] - self.m[row2 + 1][col1] + self.m[row1][col1]

# Your NumMatrix object will be instantiated and called as such:
# obj = NumMatrix(matrix)
# param_1 = obj.sumRegion(row1,col1,row2,col2)
# @lc code=end
