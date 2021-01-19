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
  typeof 不能区分数组，instanceof可以

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
console.log('Hello World'.toUpperCase());
console.log('Hello World'.toLowerCase());
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

替换字符串
replace

重复生成
```
function star(num = 3) {
	return '*'.repeat(num);
}
console.log(star());
```

类型转换
split

## Boolean
隐式转换
如果使用Boolean与数值比较时，会进行隐式类型转换 true转为1，false 转为0。  
显式转换 !!

## Number
NaN isNaN Object.is(2 / 'test', NaN)  
浮点精度  
console.log(0.1 + 0.2); // 结果：0.30000000000000004
方法一 toFixed(2)  
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

Math对象