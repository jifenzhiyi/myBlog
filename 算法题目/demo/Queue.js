function Queue() {
  const items = [];

  this.enqueue = (val) => {
    items.push(val);
  }

  this.dequeue = () => {
    return items.shift();
  }

  this.head = () => {
    return items[0];
  }
  
  this.size = () => {
    return items.length;
  }

  this.clear = () => {
    items.length = 0;
  }

  this.isEmpty = () => {
    return items.length === 0;
  }

  this.tail = () => {
    return items[items.length - 1];
  }
}

// 1.约瑟夫环 （普通）
// 一个数组 长度100 存放 0 ～ 99，要求每隔两个数删掉一个数，
// 到末尾时循环至开头继续，求删掉的最后一个数
// function del_ring(arr_list) {
//   const queue = new Queue();
//   for (let i = 0; i < arr_list.length; i++) {
//     queue.enqueue(arr_list[i]);
//   }
//   let index = 0;
//   while (queue.size()() !== 1) {
//     const item = queue.dequeue();
//     index++;
//     if (index % 3 !== 0) queue.enqueue(item);
//   }
//   return queue.head();
// }
// // 测试用例
// const list = [];
// for (let i = 0; i < 100; i++) {
//   list.push(i);
// }
// console.log('res', del_ring(list));

// 2.斐波那契数列
// 前两项是 1 1，此后每一项都是该项前两项的和 f(n) = f(n-1) + f(n-2)
// function fibonacci(n) {
//   if (n < 1) return 0;
//   if (n === 1 || n === 2) return 1;
//   const queue = new Queue();
//   queue.enqueue(1);
//   queue.enqueue(1);
//   let index = 0;
//   while (index < n - 2) {
//     const del_item = queue.dequeue();
//     const head_item = queue.head();
//     const next_item = del_item + head_item;
//     queue.enqueue(next_item);
//     index++;
//   }
//   queue.dequeue();
//   return queue.head();
// }
// // 1 1 2 3 5 8 13 21 34
// console.log('res', fibonacci(6));
// console.log('res', fibonacci(7));
// console.log('res', fibonacci(8));
// console.log('res', fibonacci(9));

// 3.队列实现栈
// 队列是先进先出的，而栈是先进后出的
// function Stack() {
//   const items1 = new Queue(), items2 = new Queue();

//   this.push = function (val) {
//     items2.size() > 0 ? items2.enqueue(val) : items1.enqueue(val);
//   }

//   this.pop = function () {
//     if (items2.size() > 0) {
//       while (items2.size() > 1) {
//         items1.enqueue(items2.dequeue());
//       }
//       return items2.dequeue();
//     } else {
//       while (items1.size() > 1) {
//         items2.enqueue(items1.dequeue());
//       }
//       return items1.dequeue();
//     }
//   }

//   this.top = function () {
//     return items2.size() > 0 ? items2.tail() : items1.tail();
//   }

//   this.isEmpty = function () {
//     return items1.isEmpty() && items2.isEmpty();
//   }

//   this.size = function () {
//     return items2.size() > 0 ? items2.size() : items1.size();
//   }

//   this.clear = function () {
//     items1.clear();
//     items2.clear();
//   }
// }
// // 测试用例
// const stack = new Stack();
// stack.push(1);
// stack.push(2);
// stack.push(3);
// stack.push(4);
// console.log('top', stack.top());
// console.log('pop', stack.pop());
// console.log('size', stack.size());
// console.log('top', stack.top());

// 4.杨辉三角 打印前n行, n>=1
/*
          1
        1   1
      1   2   1
    1   3   3   1
  1   4   6   4   1
1   5  10   10  5   1
        ......
*/
// f[i][j] = f[i-1][j-1] + f[i-1][j]
// function print_yanghui(n) {
//   const queue = new Queue();
//   let arr = [];
//   // 第一层for循环控制打印几层
//   for (let i = 0; i <= n; i++) {
//     let line = '', pre = 0;
//     // 第二层for 控制打印几个数字
//     for (let j = 0; j < i; j++) {
//       const item = queue.dequeue();
//       line += item + ' ';
//       let value = item + pre;
//       pre = item;
//       queue.enqueue(value);
//     }
//     queue.enqueue(1);
//     arr = line.split(' ');
//     console.log(line);
//   }
//   arr.pop();
//   return arr;
// }
// const result = print_yanghui(3);
// console.log('最后一行为', result);

