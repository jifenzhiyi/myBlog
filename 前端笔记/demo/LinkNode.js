// 链表
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
class LinkNodeList {
  constructor() {
    this.length = 0;
    this.head = null; // 第一个元素
  }
  // 增删改查
  append(val) {
    let node = new Node(val);
    let cur;
    // 两种情况
    if (this.head == null) {
      this.head = node;
    } else {
      cur = this.head
      while (cur.next) {
        cur = cur.next
      }
      cur.next = node;
    }
    this.length += 1;
  }
  removeByInt(index) {
    let cur = this.head;
    let prev;
    let i = 0;
    if (index == 0) {
      this.head = cur.next;
    } else {
      while(i < index) {
        prev = cur;
        cur = cur.next;
        i++;
      }
      prev.next = cur.next;
      cur.next = null;
    }
    this.length -= 1;
    return cur.val;
  }
  removeByString(val) {
    let cur = this.head;
    if (cur.val === val) {
      this.head = cur.next;
    }
    while(cur.next) {
      if (cur.next.val === val) {
        cur.next = cur.next.next;
      } else {
        cur = cur.next;
      }
    }
    this.length -= 1;
    return cur.val;
  }
  print() {
    let cur = this.head;
    let ret = [];
    while (cur) {
      ret.push(cur.val);
      cur = cur.next;
    }
    console.log('length', this.length, ret.join('===>'));
  }
  // 反转
  reverse() {
    // 方法一
    // let [prev, curr] = [null, this.head];
    // while(curr) {
    //   [curr.next, prev, curr] = [prev, curr, curr.next];
    // }
    // this.head = prev;
    // 方法二
    const arr = [];
    let cur = this.head;
    while (cur) {
      arr.push(cur.val);
      cur = cur.next;
    }
    this.head = arr.reduce((acc, v) => ({ val: v, next: acc }), null);
  }
}

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
let l1 = new LinkNodeList();
l1.append(1);
l1.append(2);
l1.append(4);
l1.print();
let l2 = new LinkNodeList();
l2.append(1);
l2.append(3);
l2.append(4);
l2.print();
var mergeTwoLists = function(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};

let l3 = mergeTwoLists(l1.head, l2.head);
console.log('l3', l3);
