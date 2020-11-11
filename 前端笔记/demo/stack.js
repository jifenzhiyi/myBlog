function Stack() {
  var items = []; // 使用数组存储数据

  // 添加元素
  this.push = (item) => {
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
}

// 判断字符串内的括号是否合法
function is_leagl_brackets(str) {
  var stack = new Stack();

  for (let i = 0; i < str.length; i += 1) {
    var item = str[i];
    if (item === '(') {
      stack.push(item);
    } else if (item === ')') {
      if (stack.isEmpty()) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  // 如果栈为空，说明字符串（）合法
  return stack.isEmpty();
}

console.log(is_leagl_brackets("sdf(ds(ew(we)rw)rwqq)qwewe"));
console.log(is_leagl_brackets("()()fsf()(fdfas()sw)("));