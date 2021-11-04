#
# @lc app=leetcode.cn id=200 lang=python3
#
# [200] 岛屿数量
#

# @lc code=start
"""
深度优先遍历，基本就是抄了一遍官方题解
Accepted
49/49 cases passed (104 ms)
Your runtime beats 45.27 % of python3 submissions
Your memory usage beats 36.79 % of python3 submissions (23.6 MB)
"""


class Solution:
    def numIslands(self, grid: List[List[str]]) -> int:
        count = 0
        row = len(grid)
        column = len(grid[0])

        def tool(c, r):
            grid[c][r] = '0'
            for x, y in [(c - 1, r), (c + 1, r), (c, r - 1), (c, r + 1)]:
                if 0 <= x < row and 0 <= y < column and grid[x][y] == '1':
                    tool(x, y)

        for i in range(row):
            for j in range(column):
                if grid[i][j] == '1':
                    count += 1
                    tool(i, j)

        return count

# @lc code=end
