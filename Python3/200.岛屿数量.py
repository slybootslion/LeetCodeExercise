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
        row_count = len(grid)
        column_count = len(grid[0])

        count = 0

        def handler(r, c):
            nonlocal grid
            grid[r][c] = '0'

            for x, y in [(r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)]:
                if 0 <= x < row_count and 0 <= y < column_count and grid[x][y] == '1':
                    handler(x, y)

        for r in range(row_count):
            for c in range(column_count):
                item = grid[r][c]
                if item == '1':
                    count += 1
                    handler(r, c)

        return count

# @lc code=end
