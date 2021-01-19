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

# Symbol
Symbol用于防止属性名冲突而产生的，比如向第三方对象中添加属性时。  
Symbol 的值是唯一的，独一无二的不会重复的

