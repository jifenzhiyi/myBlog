function Stack() {
  const items = [];
  const next = [];

  this.push = function (val) {
    this.isEmpty() ?  next.push(val) : next.push(Math.min(this.min(), val));
    items.push(val);
  }

  this.pop = function () {
    next.pop();
    return items.pop();
  }

  this.top = function () {
    return items[items.length - 1];
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.size = function () {
    return items.length;
  }

  this.clear = function () {
    items = [];
  }

  this.min = function () {
    return next[next.length - 1];
  }
}

// items 不用 this
// 原因是，属性轻易不能暴露，安全考虑

// 案例1: 合法（）的判断
// function is_leagl_brackets(str) {
//   const stack = new Stack();
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === '(') stack.push(str[i]);
//     if (str[i] === ')') {
//       if (stack.isEmpty()) return false;
//       stack.pop();
//     }
//   }
//   return stack.isEmpty();
// }

// const str = '((123)123)123)';
// const res = is_leagl_brackets(str);
// console.log('res', res);

// 案例2: 逆波兰表达式，也叫后缀表达式
/*
  [4, 15, 5, '/', '+']
= [4, 3, '+'] // 15 / 5 = 3
= [7] // 4 + 3 = 7
*/
// function calc_exp(exp) {
//   const stack = new Stack();
//   for (let i = 0; i < exp.length; i++) {
//     const item = exp[i];
//     if (isNaN(Number(item))) {
//       const n1 = stack.pop();
//       const n2 = stack.pop();
//       switch(exp[i]) {
//         case '+': stack.push(n2+n1);break;
//         case '-': stack.push(n2-n1);break;
//         case '*': stack.push(n2*n1);break;
//         default: stack.push(n2 / n1 | 0);break;
//       }
//     } else {
//       stack.push(Number(item));
//     }
//   }
//   return stack.pop();
// }
// const exp = [4, 15, 5, '/', '+'];
// const res = calc_exp(exp);
// console.log('res', res);

// 增加min方法 获取栈中的最小值
// 测试用例
// const stack = new Stack();
// stack.push(5);
// stack.push(3);
// stack.push(1);
// stack.pop();
// stack.push(6);
// stack.push(7);
// stack.push(10);
// console.log('min', stack.min());

// 中缀转后缀表达式
// const priority = {
//   '+': 1,
//   '-': 1,
//   '*': 2,
//   '/': 2,
// };
// function infix_exp_2_postfix_exp(exp) {
//   const stack = new Stack();
//   const result = [];
//   for (let i = 0; i < exp.length; i++) {
//     const item = exp[i];
//     if (!isNaN(Number(item))) {
//       result.push(item);
//     } else if (item === '(') {
//       stack.push(item);
//     } else if (item === ')') {
//       while (stack.top() !== '(') {
//         result.push(stack.pop());
//       }
//       stack.pop();
//     } else {
//       while (!stack.isEmpty() && priority[stack.top()] >= priority[item]) {
//         result.push(stack.pop());
//       }
//       stack.push(item);
//     }
//   }
//   while(!stack.isEmpty()) {
//     result.push(stack.pop());
//   }
//   return result;
// }
// // 测试用例
// console.log(infix_exp_2_postfix_exp(['12', '+', '3'])); // 12+3
// console.log(infix_exp_2_postfix_exp(['2', '-', '3', '+' , '2'])); // 2-3+2
// const arr = ['(', '1' , '+', '(', '4', '+' , '5', '+', '3', ')', '-', '3', ')', '+', '(', '9', '+',  '8', ')'];
// // arr (1+(4+5+3)-3)+(9+8)
// console.log(infix_exp_2_postfix_exp(arr));
// console.log(infix_exp_2_postfix_exp(['12', '+', '3', '*', '5'])); // 12+3*5

