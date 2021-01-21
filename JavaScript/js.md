JavaScript

# 基础知识

## 起步入门
JavaScript 官方名称是 ECMAScript 是一种属于网络的脚本语言,  
已经被广泛用于Web应用开发,常用来为网页添加各式各样的动态功能,为用户提供更流畅美观的浏览效果。

兼容性  
https://caniuse.com/

## 变量声明
var, let, const

变量提升 var, 但是let, const不会  
eq:  
  console.log(a); // undefined  
  var a = 1;  
  console.log(a); // 1  

Object.freeze冻结变量，参数不能再继续修改

# 运算符与流程控制

## 运算符
赋值运算符 =  
算术运算符 + - * / %  
复合运算符 += -= *= /= %=  
一元运算符 ++n --n n++ n--  
比较运算符 > < >= <= == ===  
逻辑运算符 && || ! (&& 优先级高于 ||)  

```
let sex = prompt("你的性别是？") || "保密";
console.log(sex);
```

## 流程控制
if if/else 三元表达式 switch while do/while for break/continue  
for/in 遍历对象的所有属性  
for/of 遍历数组 每次循环取其中的值而不是索引  

# 基本类型

## 类型检测
typeof 用于返回原始类型  
1.number/string/boolean  
2.function  
3.object  
4.undefined  

instanceof 用于检测构造函数的prototype属性是否出现在某个实例对象的原型链上  
也可以理解为是否为某个对象的实例。

eq:  
  typeof 不能区分数组，instanceof 可以

```
const arr = [];
console.log(typeof arr); // object
console.log(arr instanceof Array); // true
```

值类型与对象
```
let def = 'Hello';
let obj = new String('World');
console.log(typeof def, typeof obj); // string object
```
eq: 只有对象才有方法使用，但是在js中值类型也可以，因为它会在执行的时候将值类型转为对象

## String
大小写转换
```
console.log('Hello World'.toUpperCase()); // HELLO WORLD
console.log('Hello World'.toLowerCase()); // hello world
```

获取单字符
```
console.log('Hello World'.charAt(3));
console.log('Hello World'[3]);
```

截取字符串  
slice substr substring  
注:  
slice、substring 第二个参数为截取的结束位置  
substr 第二个参数指定获取字符数量  
```
let temp = 'HelloWorld';
console.log(temp.slice(3));
console.log(temp.substr(3));
console.log(temp.substring(3));
// 3个结果一样都是loWorld
console.log(temp.slice(3, 6)); // loW
console.log(temp.substring(3, 6)); // loW
console.log(temp.substr(3, 6)); // loWorl
// 以下特殊的情况
console.log(temp.slice(3, -1)); // loWorl 第二个为负数表示从后面算的字符
console.log(temp.slice(-2)); // ld 从末尾取
console.log(temp.substring(3, -9)); // Hel 负数转为0
console.log(temp.substr(-3, 2)); // rl 从后面第三个开始取两个
```

查找字符串  
indexOf 检测不到的时候返回-1  
lastIndexOf 从结尾开始搜索  
search  
includes 包含  
startsWith 是否是指定位置开始  
endsWith 是否是指定位置结束  

替换字符串 replace

重复生成
```
const star = (num = 3) => '*'.repeat(num);
console.log(star());
```

类型转换 split

## Boolean
隐式转换  
如果使用Boolean与数值比较时，会进行隐式类型转换 true转为1，false 转为0。  

显式转换  
!!

## Number
NaN isNaN Object.is(2 / 'test', NaN)  

浮点精度  
console.log(0.1 + 0.2); // 结果：0.30000000000000004

方法一  
toFixed(2)

方法二
```
Number.prototype.add = function (num) {
  // 取两个数值中小数位最大的
  let n1 = this.toString().split('.')[1].length;
  let n2 = num.toString().split('.')[1].length;
  // 得到10的N次幂
  let m = Math.pow(10, Math.max(n1, n2));
  return (this * m + num * m) / m;
}
console.log((0.1).add(0.2));
```
市面上已经存在很多针对数学计算的库 mathjs、decimal.js等，我们就不需要自己构建了。

### Math对象
取极限值  
使用 min 与 max 可以取得最小与最大值
```
console.log(Math.min(1, 2, 3));
console.log(Math.max(1, 2, 3));
let arr = [1,2,3,4,5];
console.log(Math.max.apply(Math, arr));
```
舍入处理  
```
// 向上取整
console.log(Math.ceil(1.111)); // 2
// 向下取整
console.log(Math.floor(1.555)); // 1
// 四舍五入
console.log(Math.round(1.5)); // 2
```
随机数  
Math.random() 返回 0 ~ 1 之间的随机数（包括0但不包括1）  

Date日期  
```
const datenow = new Date();
console.log(typeof datenow); // object
// 以下都是获取时间戳
console.log(datenow * 1);
console.log(Number(datenow));
console.log(datenow.valueOf())
console.log(datenow.getTime());
```
moment.js  
Moment.js是一个轻量级的JavaScript时间库，它方便日常开发中对时间的操作，提高开发效率。
```
// 获取当前时间
console.log(moment().format("YYYY-MM-DD HH:mm:ss"));
// 设置时间
console.log(moment("2020-02-18 09:22:15").format("YYYY-MM-DD HH:mm:ss"));
// 十天后的日期
console.log(moment().add(10, "days").format("YYYY-MM-DD hh:mm:ss"));
```

# 数组类型
## 数组声明
数组是引用类型
```
const arr1 = new Array();
const arr2 = [];
// Array.of与new Array的区别
const arr3 = new Array(3);
const arr4 = Array.of(3);
console.log(arr3); // [ , , ] length 3
console.log(arr4); // [3]

const arr5 = Array.of(1,2,3);
console.log(arr5); // [1, 2, 3];
```
类型检测 Array.isArray  
类型转换  
Array.from 可以将类数组转化为数组  
类数组指包含length属性可迭代的对象  
```
const str = 'hello';
console.log(Array.from(str)); // ["h", "e", "l", "l", "o"]
const test = {
  0: 'name',
  '1': 'age',
  'sex': 'sex', // 无法转化
  length: 3
};
console.log(Array.from(test)); // ["name", "age", undefined]
```
展开语法 ...  
```
// 数组合并
let a = [1,2,3];
let b = ['a', 'b', ...a];
console.log(b); // ['a', 'b', 1, 2, 3];
// 函数参数
function hd(...args) {
  console.log(args); // [1, 2, 3]
}
hd(1,2,3);
```
解构赋值
```
let [name, email] = ['张三', '123@123.com'];
console.log(name, email);
function hd([a, b]) {
	console.log(a, b); // aaa hdcms
}
hd(['aaa', 'hdcms']);
```
管理元素  
push pop shift unshift fill slice splice  
注：slice不会改变原数组

合并拆分  
join split concat copyWithin
```
const arr = [1, 2, 3, 4];
console.log(arr.copyWithin(2, 0, 2)); // [1, 2, 1, 2]
```

查找元素  
indexOf lastIndexOf includes find findIndex  
```
// find原理
Array.prototype.findValue = function(callback) {
  for (const value of this) {
    if (callback(value) === true) return value;
  }
  return undefined;
};
```

数组排序  
reverse sort

遍历循环  
for forEach for/in 索引 for/of 值

迭代器  
keys values entries

扩展方法  
every some filter map reduce reduceRight

## Symbol
Symbol用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。  
Symbol 的值是唯一的，独一无二的不会重复的
```
let aa = Symbol("test");
let bb = Symbol("test");
console.log(aa == bb); //false
let cc = Symbol.for("test");
let dd = Symbol.for("test");
console.log(cc == dd); //true
```

## Set
用于存储任何类型的唯一值，无论是基本类型还是对象引用。
```
const arr = new Set();
arr.add('test1');
arr.add('111');
arr.add('111');
console.log(arr.values()); // SetIterator {"test1", "111"}
console.log(arr.size); // 2
console.log(arr.has('test1')); // true
console.log(arr.delete("111")); // true
console.log(arr.has("111")); // false
arr.clear(); // 清空所有元素
// 交集
const set1 = new Set([1, 3, 5, 7, 9]);
const set2 = new Set([2, 3, 4, 5, 6]);
const newSet = new Set([...set1].filter((item) => set2.has(item)));
console.log(newSet); // Set(2) { 3, 5 }
// 差集(在集合a中出现但是不在集合b中出现)
const newSet2 = new Set([...set1].filter((item) => !set2.has(item)));
console.log(newSet2); // Set(3) { 1, 7, 9 }
// 并集
const newSet3 = new Set([...set1, ...set2]);
console.log(newSet3); // Set(8) { 1, 3, 5, 7, 9, 2, 4, 6 }
```

WeakSet  
WeakSet结构同样不会存储重复的值，它的成员必须只能是对象类型的值。
```
const test = new WeakSet();
const arr = ['111'];
test.add(arr);
console.log(test.has(arr)); // true
test.delete(arr);
console.log(test.has(arr)); // false
```

## Map
Map是一组键值对的结构，用于解决以往不能用对象做为键的问题

具有极快的查找速度  
函数、对象、基本类型都可以作为键或值  

```
const map = new Map();
const obj = { name: '张三' };
map.set(obj, '123@123.com');
console.log(map.entries());
// 对于键是对象的Map， 键保存的是内存地址，值相同但内存地址不同的视为两个键。
console.log(map.get(obj)); // 123@123.com
console.log(map.get({ name: '张三' })); // undefined
```

# 函数进阶

## 基础知识
在JS中函数也是对象函数是Function类的创建的实例
```
let hd = new Function("title", "console.log(title)");
hd('Hello World');
// 变量提升
console.log(test()); // test
function test() {
  // 会提升
	return 'test';
}
var test = function () {
  // 不会提升
	return 'hdcms.com';
}
```
arguments 是函数获得到所有参数集合  
```
function sum1() {
  return [...arguments].reduce((total, num) => {
    return (total += num);
  }, 0);
}
console.log(sum1(2, 3, 4, 2, 6)); // 17
function sum2(...args) {
 return args.reduce((a, b) => a + b);
}
console.log(sum2(2, 3, 4, 2, 6)); // 17
```
箭头函数  
箭头函数是函数声明的简写形式，在使用递归调用、构造函数、事件处理器时不建议使用箭头函数。

标签函数
```
function tag(str, ...values) {
  console.log(str); // ["", "今天买了", "苹果", raw: Array(3)]
  console.log(values); // ["张三", 100]
}
let name = '张三', count = 100;
tag `${name}今天买了${count}苹果`;
```

apply/call/bind
```
function User(name) {
  this.name = name;
  this.say = () => console.log('大家好，我的名字叫' + this.name);
}
let obj = {};
User.call(obj, '张三');
console.log(obj.name); // 张三
obj.say();
User.apply(obj, ['李四']);
console.log(obj.name); // 李四
obj.say();

// 找数组中的数值最大和最小值 max min
let arr = [1, 3, 2, 8];
console.log(Math.max(arr)); // NaN
console.log(Math.max(...arr)); // 8
console.log(Math.max.apply(Math, arr)); // 8
console.log(Math.max.call(Math, ...arr)); // 8
```
bind  
bind()是将函数绑定到某个对象  
与 call/apply 不同bind不会立即执行  
bind 是复制函数形为会返回新函数  
```
let a = function() {};
let b = a;
console.log(a === b); // true
// bind是新复制函数
let c = a.bind();
console.log(a == c); // false
```

# 作用域与闭包
