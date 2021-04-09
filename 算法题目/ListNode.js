// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
function consoleResult(head) {
  const arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  return arr;
}
// 2. 两数相加 (中等)
/*
输入：l1 = [2,4,3], l2 = [5,6,4]
输出：[7,0,8]
解释：342 + 465 = 807.
*/
// var addTwoNumber = function (l1, l2) {
//   let pre, cur, add = 0;
//   while (l1 || l2) {
//     const n1 = l1 ? l1.val : 0;
//     const n2 = l2 ? l2.val : 0;
//     const sum = n1 + n2 + add;
//     if (!pre) {
//       pre = cur = new ListNode(sum % 10);
//     } else {
//       cur.next = new ListNode(sum % 10);
//       cur = cur.next;
//     }
//     add = Math.floor(sum / 10);
//     l1 && (l1 = l1.next);
//     l2 && (l2 = l2.next);
//   }
//   return pre;
// }
// // 测试用例
// const node1 = new ListNode(2, new ListNode(4, new ListNode(3)));
// const node2 = new ListNode(5, new ListNode(6, new ListNode(4)));
// const result = addTwoNumber(node1, node2);
// console.log('result', consoleResult(result));

// ============================================

// 19. 删除链表的倒数第 N 个结点 (中等)
/*
* 输入：head = [1,2,3,4,5], n = 2
* 输出：[1,2,3,5]
* 链表中结点的数目为 sz
* 1 <= sz <= 30
* 0 <= Node.val <= 100
* 1 <= n <= sz
*/
// var removeNthFromEnd = function (head, n) {
//   if (!head) return null;
//   let cur = head;
//   for (let i = 0; i < n; i++) {
//     cur = cur.next;
//   }
//   if (!cur) return head.next;
//   let ret = new ListNode(-1, head), node = ret;
//   while (cur) {
//     node = node.next;
//     cur = cur.next;
//   }
//   node.next = node.next.next;
//   return ret.next;
// }
// // 测试用例
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
// const res = removeNthFromEnd(head, 4);
// console.log('result', consoleResult(res));

// ============================================

// 24. 两两交换链表中的节点
/*
输入：head = [1,2,3,4]
输出：[2,1,4,3]
链表中节点的数目在范围 [0, 100] 内
0 <= Node.val <= 100
*/
// var swapPairs = function(head) {
//   if (!head) return head;
//   let ret = new ListNode(0, head), temp = ret;
//   while (temp.next && temp.next.next) {
//     const n1 = temp.next;
//     const n2 = temp.next.next;
//     temp.next = n2;
//     n1.next = n2.next;
//     n2.next = n1;
//     temp = n1;
//   }
//   return ret.next;
// }
// // 测试用例
// const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
// const res = swapPairs(head);
// console.log('result', consoleResult(res));

