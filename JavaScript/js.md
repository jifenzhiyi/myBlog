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
