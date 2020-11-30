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
function print_yanghui1(n) {
  const queue = new Queue();
  queue.enqueue(1);
  for (let i = 1; i <= n; i++) {
    let line = '', pre = 0;
    for(let j = i; j > 0; j--) {
      const item = queue.dequeue(); // 1
      line += item + ' ';
      const value = pre + item;
      queue.enqueue(value);
      pre = item;
    }
    queue.enqueue(1);
    console.log(line);
  }
}

//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1

print_yanghui1(5)
