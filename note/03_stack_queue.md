# 栈、队列

### 20. 有效的括号
地址：[20. 有效的括号](https://leetcode.cn/problems/valid-parentheses/)

思路：最近相关性的问题，一般就是栈的问题。

```python
dict_par = {
    ')':'(',
    ']':'[',
    '}':'{',
}
class Solution:
    def isValid(self, s: str) -> bool:
        if len(s) % 2 != 0:
            return False

        stack = []
        for char in s:
            if dict_par.get(char):
                if stack and stack[len(stack) - 1] == dict_par.get(char):
                    stack.pop()
                else:
                    return False
            else:
                stack.append(char)
        return len(stack) == 0
```

### 155. 最小栈
地址：[155. 最小栈](https://leetcode.cn/problems/min-stack/)

思路：
最基本的，就是实现一个栈的数据结构。但是题目有个要求，需要能获取栈中最小元素，所以，需要一个额外的栈空间，来维护一个目前最小的元素，两个栈，同进同出。
维护最小数的栈的顶端，永远是当前所有元素的最小数。
如果最小栈没有思路，先把栈实现出来，再做考虑。

```c++
class MinStack {
public:
    MinStack() {}
    
    void push(int val) {
        min_stack.push(s.empty() ? val : min(val, min_stack.top()));
        s.push(val);
    }
    
    void pop() {
        min_stack.pop();
        s.pop();
    }
    
    int top() {
        return s.top();
    }
    
    int getMin() {
        return min_stack.top();
    }
private:
    stack<int> s;
    stack<int> min_stack;
};
```


### 150. 逆波兰表达式求值
地址：[150. 逆波兰表达式求值](https://leetcode.cn/problems/evaluate-reverse-polish-notation/)

思路（后缀表达式求值）：
建立一个用于存储数的栈，逐一扫描后缀表达式中的元素。
如果遇到一个数字，就放入栈中。
如果遇到运算符，就取出栈顶的两个数进行计算，然后把结果入栈。
扫描完成后，栈中恰好剩下一个数，就是该后缀表达式的值。时间复杂度On。

```c++
class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<long long> s; // 有一个用例给了一个非常大的数，所以long long类型
        for (string &token : tokens) {
            if(token == "-" || token == "+" || token == "/" || token == "*") {
                long long b = s.top();
                s.pop();
                long long a = s.top();
                s.pop();
                s.push(calc(a, b, token));
            } else {
                s.push(stoi(token));
            }
        }
        return s.top();
    }

    long long calc(long long a, long long b, string token) {
        if (token == "+") return a + b;
        if (token == "-") return a - b;
        if (token == "*") return a * b;
        if (token == "/") return a / b;
        return 0;
    }
};
```

### 224. 基本计算器
地址：[224. 基本计算器](https://leetcode.cn/problems/basic-calculator/)

```c++

```
