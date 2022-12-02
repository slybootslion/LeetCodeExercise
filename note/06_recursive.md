# 递归

### 70. 爬楼梯
地址：[167. 两数之和 II - 输入有序数组」](https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/)

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
