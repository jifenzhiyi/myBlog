function Node (val = 0, next = null) {
  this.val = val;
  this.next = next;
}

function LinkList() {
  let len = 0;
  let head, tail;

  this.append = function(val) {
    if (!head) {
      head = tail = new Node(val);
    } else {
      tail.next = new Node(val);
      tail = tail.next;
    }
    len++;
  }

  this.print = function() {
    const arr = [];
    let cur = head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    console.log('arr', arr, 'len', len);
  }

  this.insert = function(val, index) {
    if (index > len || index < 0) {
      console.log('插入位置', index, '错误 该链表长度为', len);
      return;
    }
    if (index === len) {
      this.append(val);
      return;
    }
    len++;
    if (index === 0) {
      let ret = new Node(val, head);
      head = ret;
    } else {
      let cur = head, i = 1;
      while (i < index) {
        cur = cur.next;
        i++;
      }
      cur.next = new Node(val, cur.next);
    }
  }

  this.remove = function(index) {
    if (index >= len || index < 0) {
      console.log('删除位置', index, '错误 该链表长度为', len);
      return;
    }
    len--;
    if (index === 0) {
      head = head.next;
    } else {
      let cur = head, i = 1;
      while (i < index) {
        cur = cur.next;
        i++;
      }
      if (cur.next.next == null) {
        tail = cur;
      }
      cur.next = cur.next.next;
    }
    if (!head) tail = null;
  }

  this.get = function(index) {
    if (index >= len || index < 0) {
      console.log('当前位置', index, '错误 该链表长度为', len);
      return;
    }
    let cur = head, i = 0;
    while (i < index) {
      cur = cur.next;
      i++;
    }
    console.log('当前位置', index, '的值为', cur.val);
    return cur;
  }

  this.getHead = function() {
    return head;
  }

  this.getTail = function() {
    return tail;
  }

  this.reverse = function() {
    if (!head) return null;
    // 更新tail
    tail = new Node(head.val);
    // 迭代
    // let pre = null, cur = head;
    // while (cur) {
    //   [cur.next, pre, cur] = [pre, cur, cur.next];
    // }
    // head = pre;
    // 递归
    function digui(cur) {
      if (!cur) return null;
      if (!cur.next) return cur;
      var new_head = digui(cur.next);
      cur.next.next = cur;
      cur.next = null;
      return new_head;
    }
    head = digui(head);
  }
}

function consoleResult(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
// 测试用例
// const linkList = new LinkList();
// linkList.append(1);
// linkList.append(3);
// linkList.append(5);
// linkList.append(7);
// // linkList.append(9);
// linkList.print();
// linkList.reverse();
// linkList.print();
// linkList.getHead();
// linkList.insert(7, 0);
// linkList.insert(11, 4);
// linkList.print();
// linkList.getTail();
// linkList.print();
// linkList.remove(0);
// linkList.print();
// linkList.remove(3);
// linkList.print();
// linkList.get(0);
// linkList.get(1);
// linkList.get(2);
// linkList.get(3);

// 1. 合并两个有序链表
// function mergeTwoLists(l1, l2) {
//   // let ret = new Node(-1), cur = ret;
//   // while (l1 || l2) {
//   //   if (l1 && l2) {
//   //     if (l1.val <= l2.val) {
//   //       cur.next = l1;
//   //       l1 = l1.next;
//   //     } else {
//   //       cur.next = l2;
//   //       l2 = l2.next;
//   //     }
//   //     cur = cur.next;
//   //   } else {
//   //     l1 && (cur.next = l1);
//   //     l2 && (cur.next = l2);
//   //     break;
//   //   }
//   // }
//   // return ret.next;
//   // 递归
//   if (!l1) return l2;
//   if (!l2) return l1;
//   if (l1.val < l2.val) {
//     l1.next = mergeTwoLists(l1.next, l2);
//     return l1;
//   } else {
//     l2.next = mergeTwoLists(l1, l2.next);
//     return l2;
//   }
// }
// // 测试用例
// const list1 = new LinkList();
// list1.append(1);
// list1.append(2);
// list1.append(5);
// const list2 = new LinkList();
// list2.append(1);
// list2.append(3);
// list2.append(6);
// console.log('result', consoleResult(mergeTwoLists(list1.getHead(), list2.getHead())));

// 2.查找链表中倒数第k个节点
// function reverse_find(head, k) {
//   if (!head) return null;
//   let cur = head;
//   for (let i = 0; i < k; i++) {
//     cur && (cur = cur.next);
//   }
//   if (!cur) return head;
//   let ret = new Node(-1, head), pre = ret;
//   while (cur) {
//     cur = cur.next;
//     pre = pre.next;
//   }
//   return pre.next;
// }
// // 测试用例
// const list1 = new LinkList();
// list1.append(1);
// list1.append(2);
// list1.append(3);
// list1.append(5);
// list1.append(6);
// list1.append(10);
// list1.print();
// console.log('result', consoleResult(reverse_find(list1.getHead(), 5)));

