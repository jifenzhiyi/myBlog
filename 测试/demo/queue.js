function Queue() {
  var items = []; // 存储数据

  // 添加元素
  this.enqueue = (item) => {
    items.push(item);
  }

  // 删除元素
  this.dequeue = () => {
    return items.shift();
  }

  this.head = () => {
    return items[0];
  }

  this.size = () => {
    return items.length;
  }
 
  // 清空栈
  this.clear = () => {
    items = [];
  }

  // 判断是否为空
  this.isEmpty = () => {
    return items.length === 0;
  }

  // 返回队列尾节点
  this.tail = () => {
    return items[items.length -1];
  }
}

const arr = [];
for (let i = 0; i < 101; i++) {
  arr.push(i);
}

// 约瑟夫环
// function del_ring(list) {
//   const queue = new Queue();
//   for (var i = 0; i < list.length; i++) {
//     queue.enqueue(list[i]);
//   }
//   let index = 0;
//   while(queue.size() != 1) {
//     let item = queue.dequeue();
//     index += 1;
//     if (index %3 !== 0) {
//       queue.enqueue(item);
//     }
//   }
//   return queue.head();
// }

// const result = del_ring(arr);
// console.log('result', result);

// 斐波那契数列
// 1 1 后面的 f(n) = f(n-1) + f(n-2)
// function fibonacci(n) {
//   const queue = new Queue();
//   let index = 0;
//   queue.enqueue(1);
//   queue.enqueue(1);
//   while (index < n - 2) {
//     let del = queue.dequeue();
//     let head = queue.head();
//     let next = del + head;
//     queue.enqueue(next);
//     index += 1;
//   }
//   return queue.tail();
// }

// const result = fibonacci(3);
// console.log('result', result);

// 用两个队列实现一个栈
// function stack() {
//   let queue1 = new Queue(), queue2 = new Queue();
//   let data_queue = null; // 放数据的队列
//   let empty_queue = null; // 空队列，备份使用

//   const init_queue = () => {
//     if (queue1.isEmpty() && queue2.isEmpty()) {
//       data_queue = queue1;
//       empty_queue = queue2;
//     } else {
//       !queue1.isEmpty() ? data_queue = queue1 : data_queue = queue2;
//       !queue2.isEmpty() ? empty_queue = queue2 : empty_queue = queue1;
//     }
//   }

//   this.push = (item) => {
//     init_queue();
//     data_queue.enqueue(item);
//   }

//   this.top = () => {
//     init_queue();
//     return data_queue.tail();
//   }

//   this.pop = () => {
//     init_queue();
//     while(data_queue.size() > 1) {
//       empty_queue.enqueue(data_queue.dequeue());
//     }
//     return data_queue.dequeue();
//   }
// }

/*
const queue = new Queue();
  queue.enqueue(1);
  for (let i = 1; i <= n; i++) {
    let line = '';
    let pre = 0;
    for (let j = i; j > 0; j--) {
      var item = queue.dequeue();
      line += item + ' ';
      var value = item + pre;
      pre = item;
      queue.enqueue(value);
    }
    queue.enqueue(1);
    console.log(line);
  }
*/

// 杨辉三角
// function print_yanghui1(n) {
//   const queue = new Queue();
//   queue.enqueue(1);
//   for (let i = 1; i <= n; i++) {
//     let line = '', pre = 0;
//     for(let j = i; j > 0; j--) {
//       const item = queue.dequeue(); // 1
//       const value = pre + item;
//       queue.enqueue(value);
//       line += item + ' ';
//       pre = item;
//     }
//     queue.enqueue(1);
//     console.log(line);
//   }
// }
// function print_yanghui2(n) {
//   const queue = new Queue();
//   queue.enqueue(1);
//   queue.enqueue(0);
//   for (let i = 1; i <= n; i++) {
//     let line = '', pre = 0, temp = '';
//     while(temp.length < n-i+1) {
//       temp += ' ';
//     }
//     while(true) {
//       const item = queue.dequeue();
//       if (item === 0) {
//         queue.enqueue(1);
//         queue.enqueue(0);
//         break;
//       } else {
//         line += item + ' ';
//         const value = item + pre;
//         queue.enqueue(value);
//         pre = item; 
//       }
//     }
//     console.log(temp + line);
//   }
// }
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1
// print_yanghui2(5);

// 走迷宫
// const maze_array = [
//   [0, 0, 1, 0, 0, 0, 0],
//   [0, 0, 1, 1, 0, 0, 0],
//   [0, S, 0, 0, 1, 0, 0],
//   [0, 0, 0, 1, 1, E, 0],
//   [1, 0, 0, 0, 1, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0],
//   [1, 1, 1, 0, 0, 0, 0],
// ];
// arr [
//   [ 3, 2, X, 0, 0, 0, 0 ],
//   [ 2, 1, X, X, 0, 0, 0 ],
//   [ 1, s, 1, 2, X, 0, 0 ],
//   [ 2, 1, 2, X, 1, 9, 0 ],
//   [ X, 2, 3, 4, X, 8, 9 ],
//   [ 1, X, X, 5, 6, 7, 8 ],
//   [ 1, 1, X, 6, 7, 8, 9 ]
// ]
// 找出maze_array[2][1]到maze_array[3][5]之间最短的路径，如果两点不联通返回空
// 提示：0 可通行 1 不可通行
// const queue = new Queue();
// const start_point = { x: 2, y: 1};
// const end_point = { x: 3, y: 5 };
// queue.enqueue(start_point); // 保存起始点
// const pointArray = [start_point]; // 保存已经走过的点位
// function calc(x, y, now) {
//   const isExist = pointArray.find((o) => o.x === x && o.y === y);
//   if (isExist) return;
//   if (maze_array[x][y] === 0) {
//     maze_array[x][y] = now + '';
//     pointArray.push({ x, y });
//     queue.enqueue({ x, y });
//   } else if (maze_array[x][y] === 1) {
//     maze_array[x][y] = 'x';
//   }
// }
// // 计算迷宫路线
// function out_maze() {
//   const point = queue.dequeue(); // arr[2][1] 2,1
//   if (point.x === 3 && point.y === 5) return;
//   const start_num = parseInt(maze_array[point.x][point.y], 10);
//   if (point.x > 0 && start_num >= 0) {
//     const x = point.x - 1, y = point.y;
//     calc(x, y, start_num + 1);
//   }
//   if (point.x < maze_array.length - 1 && start_num >= 0) {
//     const x = point.x + 1, y = point.y;
//     calc(x, y, start_num + 1);
//   }
//   if (point.y > 0 && start_num >= 0) {
//     const x = point.x, y = point.y - 1;
//     calc(x, y, start_num + 1);
//   }
//   if (point.y < maze_array[0].length - 1 && start_num >= 0) {
//     const x = point.x, y = point.y + 1;
//     calc(x, y, start_num + 1);
//   }
//   if (maze_array[point.x][point.y] === 0) maze_array[point.x][point.y] = 'S'; // 将初始点设置为S
//   !queue.isEmpty() && out_maze();
// }
// // 返回最短路径
// const routeArr = [];
// function route_list() {
//   if (maze_array[3][5] === 0) return []; // 如果点位是0，说明没有走到。路径不通
//   queue.clear();
//   queue.enqueue(end_point);
//   calc2();
//   routeArr.push(start_point);
//   return routeArr;
// }
// function init(x, y) {
//   queue.enqueue({ x, y });
//   calc2();
// }
// function calc2() {
//   const p = queue.dequeue();
//   routeArr.push({ x: p.x, y: p.y });
//   const endPoint = parseInt(maze_array[p.x][p.y], 10);
//   if (p.x - 1 > 0) {
//     const now = Number(maze_array[p.x - 1][p.y]);
//     if (now === endPoint - 1) {
//       init(p.x - 1, p.y);
//       return
//     }
//   }
//   if (p.x + 1 < maze_array.length - 1) {
//     const now = Number(maze_array[p.x + 1][p.y]);
//     if (now === endPoint - 1) {
//       init(p.x + 1, p.y);
//       return;
//     }
//   }
//   if (p.y - 1 > 0) {
//     const now = Number(maze_array[p.x][p.y - 1]);
//     if (now === endPoint - 1) {
//       init(p.x, p.y - 1);
//       return;
//     }
//   }
//   if (p.y + 1 < maze_array[0].length - 1) {
//     const now = Number(maze_array[p.x][p.y + 1]);
//     if (now === endPoint - 1) {
//       init(p.x, p.y + 1);
//       return;
//     }
//   }
// }
// out_maze();
// const result = route_list();
// console.log('result', result);

// 3 + 2 * 2
// [3, 2, 2] [+, *]
// 2 * 2 + 3
// [2, 2, 3] [+, *]