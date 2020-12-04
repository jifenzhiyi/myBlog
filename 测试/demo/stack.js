function Stack() {
  var items = []; // 使用数组存储数据
  var min = Number.MAX_SAFE_INTEGER;

  // 添加元素
  this.push = (item) => {
    if (item < min) min = item;
    console.log('min', min);
    items.push(item);
  };

  // 弹出栈顶元素
  this.pop = () => {
    return items.pop();
  };

  // 返回栈顶元素
  this.top = () => {
    return items[items.length -1];
  };

  // 判断是否为空
  this.isEmpty = () => {
    return items.length === 0;
  }

  // 返回栈的大小
  this.size = () => {
    return items.length;
  }

  // 清空栈
  this.clear = () => {
    items = [];
  }
  
  // 最小值
  this.getMin = () => {
    return min;
  }
  
}

const stack = new Stack();

stack.push(0);
stack.push(-1);
stack.push(2);
stack.push(3);
stack.push(-3);
stack.getMin();

// // 判断字符串内的括号是否合法
// function is_leagl_brackets(str) {
//   var stack = new Stack();

//   for (let i = 0; i < str.length; i += 1) {
//     var item = str[i];
//     if (item === '(') {
//       stack.push(item);
//     } else if (item === ')') {
//       if (stack.isEmpty()) {
//         return false;
//       } else {
//         stack.pop();
//       }
//     }
//   }
//   // 如果栈为空，说明字符串（）合法
//   return stack.isEmpty();
// }

// console.log(is_leagl_brackets("sdf(ds(ew(we)rw)rwqq)qwewe"));
// console.log(is_leagl_brackets("()()fsf()(fdfas()sw)("));

// function sum(arr) {
//   var stack = new Stack();

//   for (let i = 0; i < arr.length; i += 1) {
//     var item = arr[i];
//     const flag = ['+', '-', '*', '/', '%'].includes(arr[i]);
//     console.log('flag', flag, 'item', item);
//     if (!flag) {
//       stack.push(item);
//     } else {
//       const num1 = stack.pop();
//       const num2 = stack.pop();
//       const res = parseInt(eval(num2 + item + num1), 10);
//       stack.push(res);
//     }
//   }

//   return stack.pop();
// }

// const arr = ["4", "13", "5", "/", "+"];
// const result = sum(arr);
// console.log('result', result);

// function minStack() {
//   var dataStack = new Stack();
//   var minStack = new Stack();

//   this.push = (item) => {
//     dataStack.push(item);
//     if (minStack.isEmpty() || item < minStack.top()) {
//       minStack.push(item);
//     } else {
//       minStack.push(minStack.top());
//     }
//   };

//   this.top = () => {
//     return dataStack.top();
//   }

//   this.pop = () => {
//     minStack.pop();
//     return dataStack.pop();
//   };

//   this.min = () => {
//     return minStack.top();
//   };

//   // 判断是否为空
//   this.isEmpty = () => {
//     return dataStack.isEmpty();
//   }

//   // 返回栈的大小
//   this.size = () => {
//     return dataStack.size();
//   }

//   // 清空栈
//   this.clear = () => {
//     dataStack.clear();
//     minStack.clear();
//   }
// }

// const min_stack = new minStack();

// min_stack.push(0);
// min_stack.push(-1);
// min_stack.push(2);
// min_stack.push(3);
// min_stack.push(-3);

// console.log('min', min_stack.min());

// const re1 = min_stack.pop();
// const re2 = min_stack.pop();

// console.log('re1', re1, 're2', re2, 'min', min_stack.min());

// console.log('top', min_stack.top());

// 中缀表达式转后缀表达式
// 10 + 15 * 25 / 20 + 100 * 2 - 30

