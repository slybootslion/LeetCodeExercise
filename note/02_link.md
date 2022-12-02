# 链表

### 206. 反转链表
地址：[206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)

思路：链表永远指向的是下一个节点，修改节点指向后，下一个节点的记录就会丢失，所以需要一个额外的空间来记录下一个节点。
```c++
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode *p = nullptr;
        while (head != nullptr) {
            ListNode *temp = head->next;
            // 改一条边
            head->next = p;
            // p和head向后移动一位
            p = head;
            head = temp;
        }
        return p;
    }
};
```

### 25. K 个一组翻转链表
地址：[25. K 个一组翻转链表](https://leetcode.cn/problems/reverse-nodes-in-k-group/)

思路比较复杂，毕竟是一个困难难度问题，简单点说分三步：
找到k个数量的链表，记录下这个链表的前一个节点和后一个节点，反转，然后将记录的前一个节点，连接到反转后的头节点，尾节点指向记录的后一个节点，分段去做。

```js
const getEnd = (head, k) => {
    while (head != null) {
        k--
        if (k == 0) break
        head = head.next
    }
    return head
}

// 处理head到end之间的k-1条边的反转
const reverseList = (head, end) => {
    if (head == end) return
    let last = head
    head = head.next
    while (head != end) {
        const nextHead = head.next
        head.next = last
        last = head
        head = nextHead
    }
    end.next = last
}

var reverseKGroup = function (head, k) {
    // 保护节点
    let protect = new ListNode(0, head)
    // 分组，找到每一组的开始和结尾，按组遍历
    let last = protect // last = 上一组结尾
    while (head != null) {
        let end = getEnd(head, k);
        if (end == null) break;
        
        const nextGroupHead = end.next;
        // 反转处理函数
        reverseList(head, end)
        // 上一组跟本组的新开始（旧end）建立联系
        last.next = end
        // 本组新的结尾（head）与下一组建立联系
        head.next = nextGroupHead

        // 分组遍历
        last = head
        head = nextGroupHead
    }
    return protect.next
};
```

### 141. 环形链表
地址：[141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)

思路（最优解）：
快慢指针，On的时间，O1的空间，如果有环两个指针必定会相遇，如果无环，快指针会先到达终点（遇到null）。
其他还有一些方法，比如挂一个垃圾数据做判断，或者规定时间内，是否能运算到null，如果运算不到就是环，但是都没上面这个方法好，上面这个方法是最优解。

```c++
class Solution {
public:
    bool hasCycle(ListNode *head) {
        ListNode *fast = head;
        ListNode *slow = head;
        while (fast != nullptr && fast->next != nullptr) {
            slow = slow->next;
            fast = fast->next->next;
            if (fast == slow) return true;
        }
        return false;
    }
};
```

### 142. 环形链表 II
地址：[142. 环形链表 II](https://leetcode.cn/problems/linked-list-cycle-ii/)

思路：
最优解是一个数学解法，先用快慢指针来判断是不是一个环链表，如果是，从head走到slow指针相遇的点，就是必定是环的起点。

```c++
class Solution {
public:
    ListNode *detectCycle(ListNode *head) {
        ListNode *fast = head;
        ListNode *slow = head;
        while (fast != nullptr && fast->next != nullptr) {
            fast = fast->next->next;
            slow = slow->next;
            if (fast == slow) {
                while (head != slow) {
                    head = head->next;
                    slow = slow->next;
                }
                return head;
            }
        }
        return nullptr;
    }
};
```

如果实际工作中，遇到这样的问题，直接开个map来存储判断。

```python
class Solution:
    def detectCycle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        m = {}
        while head is not None:
            if m.get(head) is None:
                m[head] = head
                head = head.next
            else:
                return m.get(head)
        return None
```

### 24. 两两交换链表中的节点
地址：[24. 两两交换链表中的节点](https://leetcode.cn/problems/swap-nodes-in-pairs/)

```python
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        h = ListNode(None)
        cur, cur.next = h, head
        while cur.next and cur.next.next:
            a = cur.next
            b = a.next
            cur.next, b.next, a.next = b, a, b.next
            cur = a # 挪指针
        return h.next
```

### 876. 链表的中间结点
地址：[876. 链表的中间结点](https://leetcode.cn/problems/middle-of-the-linked-list/)

思路：
直觉且易懂的办法，就是先遍历一遍计数，然后从头节点开始继续遍历所计数量的一半（`count /= 2`），时间复杂度也是On。
不过更装逼的办法是，两个指针，一个走两步，一个走一步，快指针走到头，返回慢指针即可。

```c++
class Solution {
public:
    ListNode* middleNode(ListNode* head) {
        ListNode *p1 = head;
        ListNode *p2 = head;
        while (p2 && p2->next) {
            p2 = p2->next->next;
            p1 = p1->next;
        }
        return p1;
    }
};
```

### 83. 删除排序链表中的重复元素
地址：[83. 删除排序链表中的重复元素](https://leetcode.cn/problems/remove-duplicates-from-sorted-list/)

思路：
最好建立一个守卫，链接到head上，返回守卫的next。
删除就是基本操作，不过要注意，为了防止连续相同值的节点连续出现，删除操作时，跳过链表指针继续走。

```c++
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode *p = new ListNode(0, head);
        while(head && head->next) {
            if (head->val == head->next->val) {
                head->next = head->next->next;
                continue;
            }
            head = head->next;
        }
        return p->next;
    }
};
```

## 链表基础题

* 单链表反转 [206. 反转链表](https://leetcode.cn/problems/reverse-linked-list/)
* 链表中环的检测 [141. 环形链表](https://leetcode.cn/problems/linked-list-cycle/)
* 两个有序链表的合并 [21. 合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/)
* 删除链表倒数第n个节点 [19. 删除链表的倒数第 N 个结点](https://leetcode.cn/problems/remove-nth-node-from-end-of-list/)
* 求链表的中间节点 [876. 链表的中间结点](https://leetcode.cn/problems/middle-of-the-linked-list/)
