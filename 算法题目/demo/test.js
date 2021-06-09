// 4 6
// a t c i s w
// 4 7
// l a e i o u h
// 15 26
// a b c d e f g h i j k l m n o p q r s t u v w x y z
// let L = 4, C = 6, test = 'a t c i s w';
// let L = 4, C = 7, test = 'l a e i o u h';
// let L = 15, C = 26, test = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
// const max = 25000; // 上限25000
// const obj = new Set(['a', 'e', 'i', 'o', 'u']);
// const verify = function(str) {
//   let c1 = 0, c2 = 0;
//   for (let i = 0; i < str.length; i++) {
//     obj.has(str[i]) ? c1++ : c2++;
//     if (c1 > 0 && c2 > 1) return true;
//   }
//   return false;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
// }
// const ret = new Set();
// const dp = new Array(L).fill('');
// const code = test.split(' ').sort(); // a c i s t w
// let start = 0; // 初始下标
// const print = function(dp) {
//   let ans = [...new Set(dp)];
//   ans = ans.join('');
//   if (ans.length === L) {
//     if (ret.has(ans) || !verify(ans) || ret.size === max) return;
//     ret.add(ans);
//   }
// }
// const init = function(start, dp) {
//   if (ret.size === max) return; // 终止条件1
//   if (start === L) return; // 终止条件2
//   let top = code.length - L + start; // 根据初始下标获取的最终位置的下标
//   for (let i = start; i <= top; i++) {
//     const item = code[i];
//     if (item <= dp[start - 1]) continue; // 如果当前值和上一个值相同，跳过
//     dp[start] = item;
//     print(dp);
//     init(start + 1, dp);
//   }
// }
// console.time('test');
// init (0, dp);
// console.timeEnd('test');
// console.log('size', ret.size);
// console.log([...ret].join('\n'));

// let N = 6, students = {
//   Zzzzz: [ 99, 98, 97, 96, 390 ],
//   Alice: [ 99, 98, 97, 96, 390 ],
//   Bob: [ 98, 97, 96, 94, 385 ],
//   Coy: [ 94, 94, 95, 96, 379 ],
//   Dan: [ 93, 95, 96, 97, 381 ],
//   Evan: [ 0, 94, 95, 95, 284 ]
// };
// const rank = new Array(5);
// for (let i = 0; i < 5; i++) rank[i] = [];
// Object.keys(students).forEach((name) => {
//   const arr = students[name];
//   for (let i = 0; i < rank.length; i++) {
//     rank[i].push({ name, mark: arr[i] });
//     rank[i].sort((a, b) => {
//       if (a.mark === b.mark) {
//         if (a.name > b.name) {
//           return 1;
//         } else {
//           return -1;
//         }
//       }
//       return b.mark - a.mark;
//     });
//     if (rank[i].length > 5) rank[i].pop();
//   }
// });
// for (let i = 0; i < 5; i++) {
//   const item = rank[i];
//   let html = '';
//   for (let j = 0; j < 4; j++) {
//     html += item[j].name + ' ';
//   }
//   console.log(html.trim());
// }

/*
Aumwvd Ewexuyqeydj Qjeddront Uuos
*/


// let num = 24, cnt = 1;
// function func(x) {
//   for(let i = 1; i <= x / 2; i++) {
//       cnt++;
//       func(i);
//   }
// }
// func(num);
// console.log('cnt', cnt);
// const n1 = '24', n2 = '23', n3 = '12';
// const m1 = Number(n1) >> 1;
// const m2 = Number(n2) >> 1;
// const m3 = Number(n3) >> 1;
// const r1 = new Set(), r2 = new Set(), r3 = new Set();
// const fn = function (mid, n, s) {
//   if (mid == 0) return;
//   if (s.has(mid + n)) return;
//   s.add(mid + n);
//   fn(mid >> 1, mid + n, s);
//   while (mid > 0) {
//       mid--;
//       fn(mid, n, s);
//   }
// }
// fn(m1, n1, r1);
// fn(m2, n2, r2);
// fn(m3, n3, r3);
// r1.add(n1);
// r2.add(n2);
// r3.add(n3);
// console.log(r1.size, r2.size, r3.size);
// const arr1 = [...r1].map(Number).sort((a, b) => a - b);
// const arr2 = [...r2].map(Number).sort((a, b) => a - b);
// const arr3 = [...r3].map(Number).sort((a, b) => a - b);
// for (let i = 0; i < arr1.length; i++) {
//   if (arr3[i]) console.log(arr1[i], arr2[i], arr3[i]);
//   else if (arr2[i]) console.log(arr1[i], arr2[i]);
//   else console.log(arr1[i]);
// }
// for (let i = 0; )
// const ret = [...res].map(Number).sort((a, b) => a - b);
// console.log([...res].join('\n'));
// console.log(ret.join('\n'));
// console.log(res.size);
// const dfs = function (x) {
//   if(x == 1) return 1;
//   let tot = 1; // 加上自身，所以初始化是 1 
//   for(let i = 1; i <= x >> 1; i++) {
//     tot += dfs(i);
//   }
//   console.log('tot', tot);
//  return tot;
// }
// console.time('time1');
// dfs(Number(n));
// console.timeEnd('time1');

// const n = '54';
// const mid = Number(n) >> 1, res = new Set();
// res.add(n);
// const find = function (mid, n) {
//     if (mid == 0) return;
//     if (res.has(mid + n)) return;
//     res.add(mid + n);
//     find(mid >> 1, mid + n);
//     while (mid > 0) {
//         mid--;
//         find(mid, n);
//     }
// }
// console.time('dfs');
// find(mid, n);
// console.timeEnd('dfs');
// // console.log([...res].join('\n'));
// console.log('n', n, res.size);
// // 方法二
// const m = Number(n);
// const f = new Array(1000);
// f[0] = f[1] = 1;
// for(let i = 2; i <= m; i++) {
//   f[i] = f[i-1];
//   if(i % 2 == 0) f[i] += f[i/2];
// }
// // TODO
// if (m < 24) {
//   console.log('m', m, f[n]);
// } else {
//   const x = Math.floor((m - 22) / 2);
//   // f[n] = f[n] - x;
//   // f[n] = f[n];
//   // 24 -1 26 -2 28 -3
//   console.log('m ...', m, f[n], 'x', x, f[n] - x);
// }
// 1  1
// 2  2
// 3  2
// 4  4
// 5  4
// 6  6
// 7  6
// 8  10
// 9  10
// 10 14
// 11 14
// 12 20
// 13 20
// 14 26
// 15 26
// 16 36
// 17 36
// 18 46
// 19 46
// 20 60
// 21 60
// 22 74
// 23 74
// n % 2 === 0 f[n] = f[n - 1] + f[n / 2]
// fn[24] ... fn[23] + fn[12] ... 74 + 20 === 94 ???
// 24 93  94    - 1
// 26 112 114   - 2
// 28 137 140   - 3
// 30 162 166   - 4
// 32 197 202   - 5
// 34 232 238   - 6
// 36 277 284   - 7
// 38 322 330   - 8
// 40 382 390   - 8
// 42 442 450   - 8
// 44 516 524   - 8
// 46 590 598   - 8
// 48 681 692   - 11
// 50 772 786   - 14
// 52 882 900   - 18
// 54 992 1014  - 22

// const createBase = (a) => {
//   return function(b) {
//     console.log(a + b);
//   }
// }

// const addSix = createBase(6);
// addSix(10); // 16
// addSix(21); // 27
