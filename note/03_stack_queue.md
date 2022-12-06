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
class Solution {
public:
    int calculate(string s) {
        stack<char> ops;
        vector<string> tokens;
        long long val = 0;
        bool num_started = false; // 是否正在解析一个数值，数值后面遇到第一个符号时，要把解析好的数存起来
        bool need_zero = true; // 是否需要补0，例如 "-48 + +48"，要补成"0-48 + 0+48"
        for (char ch : s) {
            // parse一个数值
            if (ch >= '0' && ch <= '9') {
                val = val * 10 + ch - '0'; //将数字字符串转为数字 "13" -> 13
                num_started = true;
                continue;
            } else if (num_started) { // 数值后面第一次遇到符号
                tokens.push_back(to_string(val));
                num_started = false;
                need_zero = false; // 加减号跟在数值后面，不需要补0，例如"10-1"
                val = 0;
            }
            if (ch == ' ') continue;
            if (ch == '(') {
                ops.push(ch);
                need_zero = true;
                continue;
            }
            if (ch == ')') {
                while(ops.top() != '(') { // 两个括号之间的都可以计算了
                    tokens.push_back(string(1, ops.top()));
                    ops.pop();
                }
                ops.pop();
                need_zero = false;
                continue;
            }
            // 处理+-*/
            if (need_zero) tokens.push_back("0");
            while (!ops.empty() && getRank(ops.top()) >= getRank(ch)) { // 前面的符号优先级更高，就可以计算了，例如1*2+3，遇到+时，*就可以算了
                tokens.push_back(string(1, ops.top()));
                ops.pop();
            }
            ops.push(ch);
            need_zero = true; // +-后面跟着+-号，需要补0，例如"3 + -1"，变为"3 + 0-1"
        }
        if (num_started) tokens.push_back(to_string(val));
        while (!ops.empty()) {  // 最后剩余的符号都要取出来
            tokens.push_back(string(1, ops.top()));
            ops.pop();
        }
        return evalRPN(tokens); // 这个方法就是上面那道题原封不动，这里就不多余写了
    }

    int getRank(char ch) {
        if (ch == '+' || ch == '-') return 1;
        if (ch == '*' || ch == '/') return 2;
        return 0;
    }
};
```

### 232. 用栈实现队列
地址：[232. 用栈实现队列](https://leetcode.cn/problems/implement-queue-using-stacks/)

思路，需要两个栈来捣腾数据。input栈只管放入，output栈只管取出。
如果遇到需要pop或者peek的时候，就把input栈中的数据move到output中，再返回对应数据。
move函数的作用，就是如果output栈为空，就将input栈中的数，全部进栈到output中，方便后续出队列，或者获取队列头部的作用。

```python
class MyQueue:
    def __init__(self):
        self.input_stack = []
        self.output_stack = []

    def push(self, x: int) -> None:
        self.input_stack.append(x)

    def pop(self) -> int:
        self.move()
        return self.output_stack.pop()

    def peek(self) -> int:
        self.move();
        return self.output_stack and self.output_stack[-1]

    def empty(self) -> bool:
        return not self.input_stack and not self.output_stack
    
    # 将input栈中的数，移动到output栈中
    def move(self):
        if not self.output_stack:
            while self.input_stack:
                self.output_stack.append(self.input_stack.pop())
```

### 225. 用队列实现栈
地址：[225. 用队列实现栈](https://leetcode.cn/problems/implement-stack-using-queues/)

思路同上一题，用两个队列来控制，如果有数据进来，就要倒腾一下数据，全部由进入的管理，倒腾到出的里面。出栈、查看全部用出队列来进行。

```python
class MyStack:
    def __init__(self):
        self.output_q = []
        self.input_q = []

    def push(self, x: int) -> None:
        self.input_q.append(x)
        while self.output_q:
            self.input_q.append(self.output_q.pop(0))
        self.output_q, self.input_q = self.input_q, self.output_q

    def pop(self) -> int:
        return self.output_q.pop(0)

    def top(self) -> int:
        return self.output_q[0]


    def empty(self) -> bool:
        return not self.output_q
```
