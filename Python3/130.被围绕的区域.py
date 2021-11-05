#
# @lc app=leetcode.cn id=130 lang=python3
#
# [130] 被围绕的区域
#

# @lc code=start
"""
深度优先搜索
类似第200题，只不过这道题先遍历四条边找到匹配的深度遍历并标记，再遍历矩阵，将标记过的改回来，匹配的改成符合条件的。
这个题，LeetCode不能用额外的堆内存，所以不能用hashmap来标记，否则报内存错误

Accepted
58/58 cases passed (36 ms)
Your runtime beats 93.82 % of python3 submissions
Your memory usage beats 24.24 % of python3 submissions (19.3 MB)
"""

class Solution:
    def solve(self, board: List[List[str]]) -> None:
        row = len(board)
        column = len(board[0])

        def mark_round(r, c):
            board[r][c] = 'mark'
            for x, y in [(r - 1, c), (r + 1, c), (r, c - 1), (r, c + 1)]:
                if 0 <= x < row and 0 <= y < column and board[x][y] == 'O':
                    mark_round(x, y)

        for i in range(column):
            if board[0][i] == 'O':
                mark_round(0, i)
            if board[row - 1][i] == 'O':
                mark_round(row - 1, i)

        for i in range(1, (row - 1)):
            if board[i][0] == 'O':
                mark_round(i, 0)
            if board[i][column - 1] == 'O':
                mark_round(i, column - 1)

        for i in range(row):
            for j in range(column):
                if board[i][j] == 'mark':
                    board[i][j] = 'O'
                elif board[i][j] == 'O':
                    board[i][j] = 'X'

# @lc code=end
