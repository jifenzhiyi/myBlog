// const dateToFormat1 = dateToFormat(new Date());
// const dateToFormat2 = dateToFormat(new Date(), false);
// console.log('dateToFormat1', dateToFormat1);
// console.log('dateToFormat2', dateToFormat2);
// const obtainDate1 = obtainDate();
// const obtainDate2 = obtainDate('/');
// console.log('obtainDate1', obtainDate1);
// console.log('obtainDate2', obtainDate1);
// const arr1 = '2020-05-05', arr2 = '2020-05-01';
// const arr3 = '2020-11-20 12:00:00', arr4 = '2020-07-10 12:00:00';
// console.log(arr1, compareDate(arr1, arr2), arr2);
// console.log(arr3, compareTime(arr3, arr4), arr4);
// console.log(dateToFormat1 + ' 距离 ' + arr4 + ' 还差 ', disparityFewDate(dateToFormat1, arr4));
// countDown(arr1);
// const testArr = [1, 2, 3, 3, 3, 2, 2, 1, 2, 5, 5, 5, 6];
// console.log('changeReArr', changeReArr(testArr));
// console.log('sortArr asc', sortArr(testArr));
// console.log('sortArr dsc', sortArr(testArr, false));
// const arrObj = [
//   { num: 10, id: 1 },
//   { num: 50, id: 2 },
//   { num: 20, id: 3 },
//   { num: 30, id: 4 },
// ];
// const arrObj1 = sortArrObj(arrObj.slice(0), 'num');
// const arrObj2 = sortArrObj(arrObj.slice(0), 'num', false);
// console.log('sortArrObj dsc', JSON.stringify(arrObj1));
// console.log('arrObjc', JSON.stringify(arrObj2));
// console.log('数组中的最大值 方法1 为', maxArr1(testArr));
// console.log('数组中的最大值 方法2 为', maxArr2(testArr));
// const fn = item => item.num > 15; // 条件 数组对象的num > 15
// console.log('短路运算 情况一：全部满足', allTrueArr(arrObj, fn));
// console.log('短路运算 情况二：有一个满足', oneTrueArr(arrObj, fn));
// // 对象遍历
// const traverseObj = (arrObj) => {
//   for (let variable in arrObj) {
//     if (arrObj.hasOwnProperty(variable)) {
//       console.log(variable, arrObj[variable]);
//     }
//   }
// }
// traverseObj(arrObj);

// 对象的数据属性
// configurable 表示能否通过delete删除属性，能否修改属性的特性，默认为true
// enumerable 表示能否通过for-in循环返回属性
// writable标示能否修改属性的值
// value 包含改属性的数据值 默认undefined

// 修改数据属性的默认特性，利用Object.defineProperty()
// let person = { name: '张三', age: 30 };
// console.log('person 1', person);
// person.name = '张三三';
// console.log('person 2', person);
// const modifyObjAttr = () => {
//   Object.defineProperty(person, 'name', {
//     writable: false, // 不能修改属性值
//     value: '李四',
//     configurable: false, // 不能对该属性修改
//     enumerable: false, // 不能for in遍历
//   })
// }
// modifyObjAttr();
// console.log('person 3', person);
// person.name = '赵五';
// console.log('person 4', person);
// traverseObj(person); // 其中的name都无法再被遍历

// 对象的访问器属性
// configurable
// enumerable
// Get 在读取属性时调用的函数
// Set 在写入属性时调用的函数

// const newPerson = { name: 'Tom', age: '50' };
// document.querySelector(".person").innerHTML = `名字：${newPerson.name} 年龄：${newPerson.age}`;

// const defineReactive = (obj, key, val) => {
//   Object.defineProperty(obj, key, {
//     get() {
//       console.log('get', val);
//       return val;
//     },
//     set(newVal) {
//       if (newVal !== val) {
//         console.log('set', newVal)
//         val = newVal;

//         document.querySelector(".person").innerHTML = `名字：${newPerson.name} 年龄：${newPerson.age}`;
//       }
//     }
//   });
// }
// defineReactive(newPerson, 'name', '');
// defineReactive(newPerson, 'age', '');

// newPerson.name = 'mary';
// newPerson.age = 20;


/* document.getElementById('a').addEventListener('click', e => { console.log(1) })
document.getElementById('b').addEventListener('click', e => { e.preventDefault(); console.log(2) }) */
/* var string = 'string';
var number = 0;
var bool = true;
console.log(number || string);
console.log(number && string);
console.log(bool || number);
console.log(bool && number); */

// 9*9 乘法表
// let html = '';
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j <= i; j++) {
//     html += i + '*' + j + '=' + (i * j) + ' ';
//   }
//   html += '\n';
// }
// console.log(html);

// 桌面时钟
// let now = new Date(年,月,日,时,分,秒)
// let now = new Date();
// let hour = now.getHours()+'';
// let minute = now.getMinutes() + '';
// let month = (now.getMonth()+1)+'';
// let day = now.getDate()+'';
// console.log(month + '月' + day + '日 ' + hour + ':' + minute);

// substring 字符串截取
// console.log('hello'.substring(2))
// let pi = 3.1415926
// let hi = 'hello'
// console.log(pi.toFixed(2))
// console.log(hi.substring(2))
// console.log(hi.repeat(2))
// console.log(hi.length)
// console.log(hi.charAt(2))
// console.log(hi.substring(2)) // 记得搞清slice，substring，substr的区别
// 还有其他indexOf,inclused trim,startsWith,padStart，replace等方法

// const testArr = [1,2,3,4,5,6,7,8,9,10];

// for (let i = 0; i < testArr.length; i++) {
//   if (testArr[i] === 6) i++;
//   const item = testArr[i];
//   console.log('item', item);
// }

/*
let max = 0;
for(let i = 0, j = 0;j < s.length; j++){
    let index = s.substring(i, j).indexOf(s[j]);
    if (index !== -1) i = index + 1 + i;
    max = Math.max(max, j - i + 1);
}
return max;
*/

const stack = [], queue = [];
for (let i = 1; i <= 10000; i++) {
    i % 2 === 0 ? queue.push(i) : stack.push(i);
}
let ans = 0;
while (stack.length && queue.length) ans += stack.pop() * queue.shift();
console.log('ans', ans, 'res', Math.floor(ans / 17)); // 4903431470
