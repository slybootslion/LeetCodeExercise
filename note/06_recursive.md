# 递归

### 70. 爬楼梯
地址：[70. 爬楼梯](https://leetcode.cn/problems/climbing-stairs/)

递归的解法：
根据题意，每次爬楼梯的方式，无非就是n-1，或者n-2次，如果要解n-1次，就是那么就要解(n-1)-1和(n-1)-2次，以此类推，每次所要解的方式是固定的。
而终止的条件是，只剩下一个台阶，或者两个的时候。
按照上面的理解，可以写递归算法如下：

```c++
class Solution {
public:
    int climbStairs(int n) {
        if (n == 1) return 1;
        if (n == 2) return 2;
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};
```

不过很可惜，这样的方法不能通过leetcode的测试，会超时。
简化递归的方式，可以用一个哈希表来存储，如果遇到相同的值，直接返回，不用重复计算来减少时间复杂度。

```python
m = {}
class Solution:
    def climbStairs(self, n: int) -> int:
        if n == 1 or n == 2:
            return n
            
        cache = m.get(n)
        if cache:
            return cache
        
        res = self.climbStairs(n - 1) + self.climbStairs(n - 2)
        m[n] = res
        return res
```

### 46. 全排列
地址：[46. 全排列](https://leetcode.cn/problems/permutations/)

```python
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        length = len(nums)
        res, curr = [], []
        m = {}
        def dfs(nth):
            if nth == length:
                res.append(curr[:])
                return
            for num in nums:
                if not m.get(num):
                    m[num] = True
                    curr.append(num)
                    dfs(nth + 1)
                    curr.pop()
                    m[num] = False
        dfs(0)
        return res
```

### 78. 子集
地址：[78. 子集](https://leetcode.cn/problems/subsets/)

```python
class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        length = len(nums)
        res, curr = [], []
        def dfs(idx):
            res.append(curr[:])
            for i, num in enumerate(nums[idx:]):
                curr.append(num)
                dfs(i + idx + 1)
                curr.pop()
        dfs(0)    
        return res
```

### 77. 组合
地址：[77. 组合](https://leetcode.cn/problems/combinations/)

```python
class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res, cur = [], []
        def dfs(begin):
            if len(cur) == k:
                res.append(cur[:])
                return
            for i in range(n + 1)[begin:]:
                cur.append(i)
                dfs(i + 1)
                cur.pop()
        dfs(1)
        return res
```
