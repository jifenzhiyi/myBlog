// 链表
// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
// class LinkNodeList {
//   constructor() {
//     this.length = 0;
//     this.head = null; // 第一个元素
//   }
//   // 增删改查
//   append(val) {
//     let node = new Node(val);
//     let cur;
//     // 两种情况
//     if (this.head == null) {
//       this.head = node;
//     } else {
//       cur = this.head
//       while (cur.next) {
//         cur = cur.next
//       }
//       cur.next = node;
//     }
//     this.length += 1;
//   }
//   removeByInt(index) {
//     let cur = this.head;
//     let prev;
//     let i = 0;
//     if (index == 0) {
//       this.head = cur.next;
//     } else {
//       while(i < index) {
//         prev = cur;
//         cur = cur.next;
//         i++;
//       }
//       prev.next = cur.next;
//       cur.next = null;
//     }
//     this.length -= 1;
//     return cur.val;
//   }
//   removeByString(val) {
//     let cur = this.head;
//     if (cur.val === val) {
//       this.head = cur.next;
//     }
//     while(cur.next) {
//       if (cur.next.val === val) {
//         cur.next = cur.next.next;
//       } else {
//         cur = cur.next;
//       }
//     }
//     this.length -= 1;
//     return cur.val;
//   }
//   print() {
//     let cur = this.head;
//     let ret = [];
//     while (cur) {
//       ret.push(cur.val);
//       cur = cur.next;
//     }
//     console.log('length', this.length, ret.join('===>'));
//   }
//   // 反转
//   reverse() {
//     // 方法一
//     // let [prev, curr] = [null, this.head];
//     // while(curr) {
//     //   [curr.next, prev, curr] = [prev, curr, curr.next];
//     // }
//     // this.head = prev;
//     // 方法二
//     const arr = [];
//     let cur = this.head;
//     while (cur) {
//       arr.push(cur.val);
//       cur = cur.next;
//     }
//     this.head = arr.reduce((acc, v) => ({ val: v, next: acc }), null);
//   }
// }

// let linkNode = new LinkNodeList();
// linkNode.append('哈喽');
// linkNode.append('你瞅啥');
// linkNode.append('嘿嘿');
// linkNode.append('瞅你咋地');
// linkNode.reverse();
// linkNode.print();
// linkNode.removeByInt(2);
// linkNode.removeByString('哈喽');
// linkNode.print();

// 情况一 2->4->3 + 2->6->4
// let l1 = new LinkNodeList();
// l1.append(2);
// l1.append(4);
// l1.append(3);
// l1.print();
// let l2 = new LinkNodeList();
// l2.append(5);
// l2.append(6);
// l2.append(4);
// l2.print();
// 情况二 9->9->9->9->9 + 9->9->9
// let l1 = new LinkNodeList();
// l1.append(9);
// l1.append(9);
// l1.append(9);
// l1.append(9);
// l1.append(9);
// l1.print();
// let l2 = new LinkNodeList();
// l2.append(9);
// l2.append(9);
// l2.append(9);
// l2.print();
// var addTwoNumbers = function(la1, la2) {
//   let l1 = la1.head;
//   let l2 = la2.head;
//   const arr = [];
//   let count = 0;
//   while (l1 || l2) {
//       let num1 = l1 ? l1.val : 0;
//       let num2 = l2 ? l2.val : 0;
//       let sum1 = num1 + num2 + count;
//       const isAdd1 = sum1 > 9;
//       sum1 = isAdd1 ? sum1 - 10 : sum1;
//       isAdd1 ? count = 1 : count = 0;
//       arr.push(sum1);
//       l1 = l1 ? l1.next : null;
//       l2 = l2 ? l2.next : null;
//       if (!l1 && !l2 && count === 1) {
//         arr.push(1);
//       }
//   }
//   console.log('arr', arr);
//   return arr.reduce((acc, v) => ({ val: v, next: acc }), null);
// };
// console.log('result', addTwoNumbers(l1, l2));

// 合并两个有序链表
// let l1 = new LinkNodeList();
// l1.append(1);
// l1.append(2);
// l1.append(4);
// l1.print();
// let l2 = new LinkNodeList();
// l2.append(1);
// l2.append(3);
// l2.append(4);
// l2.print();
// var mergeTwoLists = function(l1, l2) {
//   if (l1 === null) return l2;
//   if (l2 === null) return l1;
//   if (l1.val < l2.val) {
//       l1.next = mergeTwoLists(l1.next, l2);
//       return l1;
//   } else {
//       l2.next = mergeTwoLists(l1, l2.next);
//       return l2;
//   }
// };

// let l3 = mergeTwoLists(l1.head, l2.head);
// console.log('l3', l3);

// 节点类
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
// const node1 = new Node(1);
// const node2 = new Node(3);
// const node3 = new Node(5);
// console.log('node1', node1);
// node1.next = node2;
// node2.next = node3;
// console.log('node1 next', node1.next.data);
// console.log('node1 next', node1.next.next.data);

class LinkNodeList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }
  // 在尾部添加节点
  append(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
    this.length += 1;
  }
  // 指定位置插入元素
  insert(index, data) {
    if (index < 0) return;
    if (index >= this.length) {
      this.append(data);
      return;
    }
    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let count = 1;
      let current = this.head;
      while (count < index) {
        current = current.next;
        count++;
      }
      node.next = current.next;
      current.next = node;
    }
    this.length += 1;
  }
  // 从指定位置删除
  remove(index) {
    if (index < 0 || index >= this.length) return;
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let count = 1;
      let current = this.head;
      while (count < index) {
        current = current.next;
        count++;
      }
      current.next = current.next.next;
      if (!current.next) this.tail = current;
    }
    this.length -= 1;
  }
  // 返回指定位置的值
  get(index) {
    if (!this.head || index < 0 || index > this.length - 1) return;
    if (index === this.length - 1) return this.tail.data;
    let count = 0;
    let current = this.head;
    while(count < index) {
      current = current.next;
      count++;
    }
    return current.data;
  }
  // 打印
  print() {
    let current = this.head;
    const arr = [];
    while(current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log('length', this.length, arr.join(' === '));
  }
  // 反转链表
  reverse() {
    // 方法一
    // # 简写
    // let [prev, curr] = [null, this.head];
    // while(curr) [curr.next, prev, curr] = [prev, curr, curr.next];
    // this.head = prev;
    // # 常规写法
    // let prev = null;
    // let curr = this.head;
    // while(curr) {
    //   let mid = curr.next;
    //   curr.next = prev;
    //   prev = curr;
    //   curr = mid;
    // }
    // this.head = prev;
    // 方法二
    // const arr = [];
    // let cur = this.head;
    // while (cur) {
    //   arr.push(cur.data);
    //   cur = cur.next;
    // }
    // this.head = arr.reduce((acc, v) => ({ data: v, next: acc }), null);
    // 方法三
    this.head = reverse_digui(this.head);
  }
}
function reverse_digui(head) {
  console.log('head', head);
  if (!head) return null;
  if (!head.next) return head;
  const curr = reverse_digui(head.next);
  console.log('curr', curr);
  head.next.next = head;
  head.next = null;
  return curr;
}
const linkNode = new LinkNodeList();
linkNode.append(1);
linkNode.append(2);
linkNode.append(3);
linkNode.append(4);
linkNode.append(5);
// linkNode.insert(8, 1);
// linkNode.insert(8, 2);
// linkNode.insert(8, 3);
// linkNode.insert(8, 4);
// linkNode.insert(8, 5);
// linkNode.insert(8, 6);
// linkNode.remove(4);
// console.log('-1 data', linkNode.get(-1));
// console.log('0 data', linkNode.get(0));
// console.log('1 data', linkNode.get(1));
// console.log('2 data', linkNode.get(2));
// console.log('3 data', linkNode.get(3));
// console.log('4 data', linkNode.get(4));
// console.log('5 data', linkNode.get(5));
// console.log('tail', linkNode.tail);
linkNode.reverse();
linkNode.print();

// -1 -2 0 0 1 2
// -5 -4 -3 -2 -1 0 1 2 3 4 5 target = 3
