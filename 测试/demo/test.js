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

var generateParenthesis = function (n) {
  let res = [];
  //  cur :当前字符  left：当前字符左括号 right:当前字符右括号
  const help = (cur, left, right) => {
    if (cur.length === 2 * n) {
      res.push(cur);
      return;
    }
    if (left < n) {
      help(cur + "(", left + 1, right)
    }
    if (right < left) {
      help(cur + ")", left, right + 1);
    }
  };
  help("", 0, 0);
  return res;
};

console.log(generateParenthesis(4));

// var matchRight = str.match(/\)/g);
// if (matchRight && matchRight.length > str.length / 2) return
