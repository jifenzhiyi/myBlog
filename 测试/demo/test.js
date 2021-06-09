// var twoSum = function(nums, target) {
//     const obj = {};
//     for (let i = 0; i < nums.length; i++) {
//         const num = nums[i];
//         if (num in obj) {
//             return [obj[num], i];
//         } else {
//             obj[target - num] = i;
//         }
//     }
// };
// const arr = [2, 7, 11, 15];
// const target = 18;
// const result = twoSum(arr, target);
// console.log('result', result);

// const nums = [ -4, -1, 2, 7, 11, 15, -1, 0, 1, 2, 4, 5, 6, -15]; 
// const nums = [0, 0, 0];
// const nums = [-1,0,1,2,-1,-4,-2,-3,3,0,4];

// let count = 0;
// var threeSum = function(nums) {
//     const res = [];
//     const arr = nums.sort((a, b) => a - b);
//     console.log('arr', arr);
//     for (let i = arr.length; i > 0; i--) {
//         count++;
//         const num = nums[i];
//         if (num < 0) break;
//         if (num === nums[i + 1]) continue;
//         let l = 0, r = i - 1;
//         while (l < r) {
//             const sum = num + nums[l] + nums[r];
//             console.log('num', num, 'sum', sum, 'l', l, 'r', r);
//             if (sum >= 0) {
//                 sum === 0 && res.push([nums[l], nums[r], nums[i]])
//                 while(r-- && nums[r] === nums[r + 1]) {}
//             }
//             if (sum < 0) {
//                 while(l++ && nums[l] === nums[l - 1]) {}
//             }
//         }
//     }
//     console.log('count', count);
//     return res;
// }

// const result = threeSum(nums);
// console.log('result', result, 'length', result.length);

// var removeDuplicates = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i + 1]) {
//             nums.splice(i, 1);
//             i--;
//         }
//     }
//     return nums;
// };

// const nums = [1, 1, 2];
// const result = removeDuplicates(nums);
// console.log('result', result);

// function Stack() {
//     var items = [];
//     this.push = (item) => {
//         items.push(item);
//     }
//     this.pop = () => {
//         return items.pop();
//     };
//     this.isEmpty = () => {
//         return items.length === 0;
//     }
// }
// var isValid = function(s) {
//     if (s.length % 2 === 1) {
//         return false
//     }
//     const stack = new Stack();
//     const obj = {
//         '{' : '}',
//         '(' : ')',
//         '[' : ']',
//     }; 
//     for (let i = 0; i < s.length; i++) {
//         var item = s[i];
//         if (stack.isEmpty()) {
//             stack.push(item);
//         } else {
//             var one = stack.pop();
//             // console.log('item', item, 'one', one, 'obj now', obj[one]);
//             if (item !== obj[one]) {
//                 stack.push(one);
//                 stack.push(item);
//             }
//         }
//     }
//     return stack.isEmpty();
// };
// console.log('isValid', isValid("()"));
// console.log('isValid', isValid("([)]"));
// console.log('isValid', isValid("]"));
// console.log('isValid', isValid("()[]{}"));
// console.log('isValid', isValid("(){}}{"));

// var simplifyPath = function(path) {
//     const pathArr = path.split('/');
//     const arr = [];
//     pathArr.filter(o => o).forEach((item) => {
//         if (item !== '.' && item !== '..') {
//             arr.push(item);
//         }
//         if (arr.length > 0 && item === '..') {
//             arr.pop();
//         }
//     });
//     return '/' + arr.join('/');
// };

// console.log(simplifyPath('/home/'));
// console.log(simplifyPath('/../'));
// console.log(simplifyPath('/a//b////c/d//././/..'));
// console.log(simplifyPath('/a/./b/../../c/'));

// 回文数
// var isPalindrome = function(x) {
//     // 方法一
//     // return x.toString().split('').reverse().join('') === x.toString();
//     // 方法二
//     if (x < 0) return false;
//     let fast = slow = x;
//     let verify = 0;
//     while (fast !== 0) {
//         fast = Math.floor(fast / 100);
//         verify = verify * 10 + slow % 10;
//         if (verify === 0) return false;
//         slow = Math.floor(slow / 10);
//     }
//     if (Math.floor(verify / 10) === slow || verify === slow) {
//         return true;
//     }
//     return false;
// };

// const num = 12200030211;

// 罗马数字转整数
// var romanToInt = function(s) {
//     let map = {'I':1, 'V':5, 'X':10, 'L':50, 'C':100, 'D':500, 'M':1000},
//         sum = 0, loop = 0, num = 0, now = 0;
//     while(loop < s.length) {
//         now = map[s[loop]];
//         num < now ? sum -= num : sum += num;
//         console.log('loop', loop, 'now', now, 'num', num);
//         num = now;
//         console.log('sum', sum + num);
//         loop++;
//     }
//     sum += num;
//     return sum;
// };

// const str = 'CMMXCIV'; // 1994 MCMXCIV
// console.log(romanToInt(str));

// C 100
// CM 100 1000 => (1000 > 100) => 1000 -100 => 900
// CMM 100 1000 1000 => 1000 + 1000 - 100 => 1900
// CMMX 100 1000 1000 10 => 10 + 1000 + 1000 - 100 => 1910
// CMMXC 100 1000 1000 10 100 => 100 - 10 + 1000 + 1000 - 100 => 1990
// CMMXCIV 100 1000 1000 10 100 1 5 => 5 - 1 + 100 - 10 + 1000 + 1000 - 100 =>1994

// 最长公共前缀
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return '';
//     for (let i = 0; i < strs[0].length; i++) {
//         const one = strs[0][i];
//         for (let j = 1; j < strs.length; j++) {
//             const item = strs[j];
//             if (one !== item[i]) {
//                 return item.substr(0, i);
//             }
//         }
//     }
//     return strs[0];
// };

// const str1 = ["flower","flow","flight"];
// const str2 = ["dog","racecar","car"];
// const str3 = [];
// const str4 = ["cir","car"];
// const str5 = ["aa","ab"];
// const str6 = ["a"];
// const str7 = ["aaa", "aaa", "aaa"];


// console.log(longestCommonPrefix(str1));
// console.log(longestCommonPrefix(str2));
// console.log(longestCommonPrefix(str3));
// console.log(longestCommonPrefix(str4));
// console.log(longestCommonPrefix(str5));
// console.log(longestCommonPrefix(str6));
// console.log(longestCommonPrefix(str7));

// 搜索插入位置
// var searchInsert = function(nums, target) {
//   // 方法一
//   if (target === 0) return 0;
//   for (let i = 0; i < nums.length; i++) {
//       const num = nums[i];
//       if (num >= target) {
//           return i;
//       }
//       let flag = i === target - 1;
//       if (flag && nums[target - 1] > target) {
//           return target - 1;
//       }
//       if (flag && nums[target - 1] < target) {
//           return i + 1;
//       }
//   }
//   return nums.length;
// };

// const arr1 = [1,3,5,6], target1 = 5;
// console.log('result', searchInsert(arr1, target1));
// const arr2 = [1,3,5,6], target2 = 2;
// console.log('result', searchInsert(arr2, target2));
// const arr3 = [1,3,5,6], target3 = 7;
// console.log('result', searchInsert(arr3, target3));
// const arr4 = [1,3,5,6], target4 = 0;
// console.log('result', searchInsert(arr4, target4));
// const arr5 = [1,3,5], target5 = 4;
// console.log('result', searchInsert(arr5, target5));

// 外观数列
// var countAndSay = function(n) {
//     // 方法一
//     // let prev = '1';
//     // for(let i = 1; i < n; i++){
//     //     prev = prev.replace(/(\d)\1*/g, item =>`${item.length}${item[0]}`);
//     // }
//     // return prev;
//     // 方法二
//     if(n===1) return n.toString();
//     let tempArr = countAndSay(n-1).match(/(\d)\1*/g);
//     console.log('n', n, 'tempArr', tempArr);
//     let result = "";
//     tempArr.forEach((item)=>{
//         result = result+item.length+item[0];
//     })
//     return result;
// };
// console.log('result', countAndSay(10));

// 最大子序和
// var maxSubArray = function(nums) {
//     let pre = 0, maxAns = nums[0];
//     nums.forEach((x) => {
//         pre = Math.max(pre + x, x);
//         maxAns = Math.max(maxAns, pre);
//     });
//     return maxAns;
// };

// const arr = [-2,1,-3,4,-1,2,1,-5,4];
// console.log('result', maxSubArray(arr));

// 最后一个单词的长度
// var lengthOfLastWord = function(s) {
//     if (!s) return 0;
//     // 方法一
//     // const arr = s.trim().split(' ');
//     // console.log('arr', arr);
//     // return arr[arr.length - 1].length;
//     // 方法二
//     let start = 0;
//     for (let i = s.length - 1; i >= 0; i--) {
//         if (s[i] !== ' ') start++;
//         if (s[i] === ' ' && start > 0) break;
//     }
//     return start;
// };

// // const str = "Hello World     ";
// const str = "ae     ";
// console.log('result', lengthOfLastWord(str));

// 加一
// var plusOne = function(digits) {
//   // 方法一
//   let add = 0;
//   for (let i = digits.length - 1; i >=0; i--) {
//       let num = Number(digits[i]);
//       if (i === digits.length - 1) {
//         num++;
//         if (num > 9) {
//             num = 0;
//             add = 1;
//         }
//       } else {
//           num += add;
//           add = 0;
//           if (num > 9) {
//               num = 0;
//               add = 1;
//           }
//       }
//       digits[i] = num;
//   }
//   if (add > 0) {
//       digits.unshift(add);
//   }
//   return digits;
// };

// // const digits = [4,3,2,1];
// const digits = [9,9,9,9,9,9];
// // const digits = [0,0,0,0,0,0];
// // const digits = [8,9,9,9];
// console.log(plusOne(digits));

// 爬楼梯
// 4
// 1,1,1,1 1,2,1 1,1,2 2,1,1, 2,2
// var climbStairs = function (n) {
//     // 方法一 动态规划
//     // let dp = new Array(n + 1);
//     // dp[0] = 1;
//     // dp[1] = 2;
//     // for (let i = 2; i <= n; i ++) {
//     //     dp[i] = dp[i - 1] + dp[i - 2];
//     // }
//     // return dp[n - 1];
//     // 方法二 斐波拉且通项公式
//     let sqrtFive = Math.sqrt(5);
//     let p = (5 + sqrtFive) / 10;
//     let q = (5 - sqrtFive) / 10;
//     let fibN = p * Math.pow((1 + sqrtFive) / 2, n) + q * Math.pow((1 - sqrtFive) / 2, n);
//     return Math.round(fibN);
// };

// 快乐数
// 方法一
/*
数字转为字符串，split成的每位，reduce相加每位的平方，求和
快乐数连续平方求和，会变成1
不快乐数连续平方求和，会在["4", "16", "37", "58", "89", "145", "42", "20", "4 "]中循环
*/
// var isHappy = function(n) {
//   while (n = String(n).split('').reduce((p, v) => p + v * v, 0)) {
//       if (n === 1) return true
//       else if (n === 4) return false
//   }
// };
// 方法二
// var isHappy = function(n) {
//   let res = sum(n)
//   let obj = {}
//   while(res != 1){
//     if (res in obj) return false
//     obj[res] = 1
//     res = sum(res)
//   }
//   return true
// }
// function sum(n){
//   n = n + ''
//   let sum = 0
//   for(let num of n){
//     sum += num * num
//   }
//   return sum
// }
// // 方法三
// var isHappy = function(n) {
//   let slow = sum(n)
//   let fast = sum(slow)
//   while(slow != fast){
//     slow = sum(slow)
//     fast = sum(sum(fast))
//   }
//   return slow == 1
// }
// console.log('isHappy', isHappy(414));

// var generateParenthesis = function (n) {
//   let res = [];
//   //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
//   const help = (cur, left, right) => {
//     if (cur.length === 2 * n) {
//       res.push(cur);
//       return;
//     }
//     if (left < n) {
//       help(cur + "(", left + 1, right)
//     }
//     if (right < left) {
//       help(cur + ")", left, right + 1);
//     }
//   };
//   help("", 0, 0);
//   return res;
// };

// console.log(generateParenthesis(4));

// var matchRight = str.match(/\)/g);
// if (matchRight && matchRight.length > str.length / 2) return

// var calcEquation = function(equations, values, queries) {
//   let map = new Map(), res = [];
//   let visit = new Map();
//   const dfs = (src, dst) => {
//     if (src === dst) return 1.0;
//     let adjs = map.get(src);
//     for (let i = 0; i < adjs.length; ++i) {
//         let next = adjs[i];
//         if (!visit.get(next[0])) {
//           visit.set(next[0], true);
//           let ret = dfs(next[0], dst);
//           visit.set(next[0], false);
//           if (ret !== -1.0) return next[1] * ret;
//         }
//     }
//     return -1.0;
//   };
//   for (let i = 0; i < equations.length; ++i) {
//     let e = equations[i], v = values[i];
//     if (!map.has(e[0])) {
//         map.set(e[0], []);
//         visit.set(e[0], false);
//     }
//     if (!map.has[e[1]]) {
//         map.set(e[1], []);
//         visit.set(e[1], false);
//     }
//     let adj1 = map.get(e[0]);
//     let adj2 = map.get(e[1]);
//     adj1.push([e[1], v]);
//     adj2.push([e[0], 1 / v]);
//   }
//   for (let q of queries) {
//     let n0 = q[0], n1 = q[1];
//     if (map.has(n0) && map.has(n1)) {
//       visit.set(n0, true);
//       res.push(dfs(n0, n1));
//       visit.set(n0, false);
//     } else {
//         res.push(-1.0);
//     }
//   }
//   return res;
// }

// a / b = 3.4 e / f = 1.4 b / e = 2.3
// a = 3.4b e = 1.4f b = 2.3e;
// b / a = 1 / 3.4 = ......
// a / f = 3.4 * 2.3 * 1.4f / f = 3.4 * 2.3 * 1.4 = .....

// 9 9 乘法表
// let result = '';
// for (let i = 1; i < 10; i++) {
//   for (let j = 1; j <= i; j++) {
//     let res = i * j;
//     if (res < 10) res += ' '; 
//     result += `${i} * ${j} = ${res} `;
//   }
//   result += '\r\n';
// }
// console.log(result);
// var maxSatisfied = function(customers, grumpy, x) {
//   let total = 0;
//   const n = customers.length;
//   for (let i = 0; i < n; i++) {
//     if (grumpy[i] === 0) {
//       total += customers[i];
//     }
//   }
//   console.log('total', total);
//   let increase = 0;
//   for (let i = 0; i < x; i++) {
//     increase += customers[i] * grumpy[i];
//   }
//   console.log('increase', increase);
//   let maxIncrease = increase;
//   for (let i = x; i < n; i++) {
//     increase = increase - customers[i - x] * grumpy[i - x] + customers[i] * grumpy[i];
//     maxIncrease = Math.max(maxIncrease, increase);
//   }
//   console.log('maxIncrease', maxIncrease);
//   return total + maxIncrease;
// }
// const customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], x = 3;
// maxSatisfied(customers, grumpy, x);

// 绝对差不超过限制的最长连续子数组
// 解决方案
/*
  可以创建一个数组来统计最大最小值 比如 [1,4,5,6,7,8,4,4,4,5] 2 .... => [ 4,4,4,5 ]
*/
// 普通
// var longestSubarray = function(nums, limit) {
//   const queMax = [];
//   const queMin = [];
//   const n = nums.length;
//   let left = 0, right = 0, ret = 0;
//   while(right < n) {
//     while (queMax.length && queMax[queMax.length - 1] < nums[right]) {
//       queMax.pop();
//     }
//     while (queMin.length && queMin[queMin.length - 1] > nums[right]) {
//       queMin.pop();
//     }
//     queMax.push(nums[right]);
//     queMin.push(nums[right]);
//     while (queMax.length && queMin.length && queMax[0] - queMin[0] > limit) {
//       if (nums[left] === queMin[0]) {
//         queMin.shift();
//       }
//       if (nums[left] === queMax[0]) {
//         queMax.shift();
//       }
//       left++;
//     }
//     ret = Math.max(ret, right - left + 1);
//     right++;
//   }
//   return ret;
// }
// 进阶
// var longestSubarray = function(nums, limit) {
//   var left = 0;
// 	var min = [], max = [];
// 	var res = 0;
// 	for (var i = 0; i < nums.length; i++) {
// 		while (max.length && nums[max[max.length - 1]] <= nums[i]) max.pop();
// 		max.push(i);
// 		while (min.length && nums[min[min.length - 1]] >= nums[i]) min.pop();
// 		min.push(i);
// 		while (nums[max[0]] - nums[min[0]] > limit) {
// 			left = Math.min(max[0], min[0]) + 1;
// 			max[0] > min[0] ? min.shift() : max.shift();
// 		}
// 		res = Math.max(res, i - left + 1);
// 	}
// 	return res;
// }
// const nums = [8,2,4,7], limit = 4;
// const result = longestSubarray(nums, limit);
// console.log('result', result);


// 54.螺旋矩阵
// var spiralOrder = function (matrix) {
// 	if (!matrix.length || !matrix[0].length) {
// 		return [];
// 	}
// 	const rows = matrix.length, columns = matrix[0].length;
// 	const visited = new Array(rows).fill(0).map(() => new Array(columns).fill(false));
// 	const total = rows * columns;
// 	const order = new Array(total).fill(0);
// 	let directionIndex = 0, row = 0, column = 0;
// 	const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
// 	for (let i = 0; i < total; i++) { 
// 		order[i] = matrix[row][column];
// 		visited[row][column] = true;
// 		const nextRow = row + directions[directionIndex][0], nextColumn = column + directions[directionIndex][1];
// 		if (!(0 <= nextRow && nextRow < rows && 0 <= nextColumn && nextColumn < columns && !(visited[nextRow][nextColumn]))) {
// 				directionIndex = (directionIndex + 1) % 4;
// 		}
// 		row += directions[directionIndex][0];
// 		column += directions[directionIndex][1];
// 	}
// 	return order;
// }

// const matrix = [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15], [16,17,18,19,20],[21,22,23,24,25]];
// console.log('matrix', matrix);
// const result = spiralOrder(matrix);
// console.log('result', result);

// 第k个数
// var getKthMagicNumber = (k) => {
// 	let p3 = 0, p5 = 0, p7 = 0;
// 	const dp = new Array(k);
// 	dp[0] = 1;
// 	for (let i = 1; i < k; i++) {
// 		dp[i] = Math.min(dp[p3] * 3, dp[p5] * 5, dp[p7] * 7);
// 		if (dp[i] === dp[p3] * 3) p3++;
// 		if (dp[i] === dp[p5] * 5) p5++;
// 		if (dp[i] === dp[p7] * 7) p7++;
// 	}
// 	return dp[k - 1];
// }

// let k = 5;
// const result = getKthMagicNumber(k);
// console.log(`第${k}个数 === `, result);

// 猜大小
// function search(arr, target) {
// 	let l = 0, r = arr.length - 1;
// 	while (l < r) {
// 		const mid = Math.floor((r - l) / 2) + l;
// 		if (arr[mid] === target) return mid;
// 		if (arr[mid] > target) {
// 			r = mid - 1;
// 		} else {
// 			l = mid + 1;
// 		}
// 	}
// 	return l;
// }
// const res = search([1,2,3,4,5,6,7,8,9,10], 10);
// console.log('res', res);

// const obj = { a: 1, b: 2 };
// console.log('c' in obj);

// const obj = {};
// for (let i = 0; i < nums.length; i++) {
// 		if (nums[i] in obj) {
// 				return [obj[nums[i]], i]
// 		} else {
// 				obj[target - nums[i]] = i;
// 		}
// }

// function ListNode(val, next) {
// 	this.val = (val===undefined ? 0 : val)
// 	this.next = (next===undefined ? null : next)
// }

// const node1 = new ListNode(2);
// node1.next = new ListNode(4);
// node1.next.next = new ListNode(3);
// const node2 = new ListNode(5);
// node2.next = new ListNode(6);
// node2.next.next = new ListNode(4);

// var addTwoNumbers = (l1, l2) => {
// 	let head, tail, add = 0;
// 	while (l1 || l2) {
// 		const n1 = l1 ? l1.val : 0;
// 		const n2 = l2 ? l2.val : 0;
// 		const sum = n1 + n2 + add;
// 		if (!head) {
// 			head = tail = new ListNode(sum % 10);
// 		} else {
// 			tail.next = new ListNode(sum % 10);
// 			tail = tail.next;
// 		}
// 		add = Math.floor(sum / 10);
// 		l1 && (l1 = l1.next);
// 		l2 && (l2 = l2.next);
// 	}
// 	if (add > 0) tail.next = new ListNode(add);
// 	return head;
// }

// const res = addTwoNumbers(node1, node2)
// console.log('res', res);