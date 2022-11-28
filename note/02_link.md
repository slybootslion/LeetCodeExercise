# 链表

## 先做几个题

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

```c++
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
