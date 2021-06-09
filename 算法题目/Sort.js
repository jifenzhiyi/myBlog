// 并归排序
// 二路归并
// const mergeSort = function(arr, l, r) {
//   if (l >= r) return;
//   let mid = (l + r) >> 1;
//   mergeSort(arr, l, mid); // left sort
//   mergeSort(arr, mid + 1, r); // right sort
//   let temp = new Array(r - l + 1);
//   let k = 0, p1 = l, p2 = mid + 1;
//   while (p1 <= mid || p2 <= r) {
//     if ((p2 > r) || (p1 <= mid && arr[p1] <= arr[p2])) {
//       temp[k++] = arr[p1++];
//     } else {
//       temp[k++] = arr[p2++];
//     }
//   }
//   for (let i = l; i <= r; i++) {
//     arr[i] = temp[i - l];
//   }
//   temp = [];
//   return;
// }
// 合并两个有序数组
// function mergeArr(arr1, arr2) {
//   const res = [];
//   let idx1 = 0, idx2 = 0;
//   while (idx1 < arr1.length && idx2 < arr2.length) {
//     if (arr1[idx1] <= arr2[idx2]) {
//       res.push(arr1[idx1]);
//       idx1++;
//     } else {
//       res.push(arr2[idx2]);
//       idx2++;
//     }
//   }
//   while (idx1 < arr1.length) {
//     res.push(arr1[idx1]);
//     idx1++;
//   }
//   while (idx2 < arr2.length) {
//     res.push(arr2[idx2]);
//     idx2++;
//   }
//   return res;
// }
// 分治
// function mergeSort(arr, l, r) {
//   if (l < r) {
//     let mid = (l + r) >> 1;
//     const arr1 = mergeSort(arr, l, mid);
//     const arr2 = mergeSort(arr, mid + 1, r);
//     return mergeArr(arr1, arr2);
//   }
//   return [arr[r]];
// }

// 测试用例
// const arr = [5,6,2,1,4,7,9,0,3,8,10];
// const res = mergeSort(arr, 0, arr.length - 1);
// console.log('old arr', arr);
// console.log('new arr', res);

// 快速排序
// 分区
// function partition(arr, start, end) {
//   let index = start, item = arr[start]; // 设置其实下标和值
//   for (let i = start + 1; i <= end; i++) {
//     if (arr[i] < item) {
//       index++;
//       [arr[index], arr[i]] = [arr[i], arr[index]];
//     }
//   }
//   arr[start] = arr[index];
//   arr[index] = item;
//   return index;
// }
// function quick_sort(arr, start, end) {
//   if (start < end) {
//     const pivotpos = partition(arr, start, end);
//     quick_sort(arr, start, pivotpos - 1);
//     quick_sort(arr, pivotpos + 1, end);
//   }
//   return;
// }

// // 测试用例
// const arr = [5,6,2,1,4,7,9,0,3,8,10];
// quick_sort(arr, 0, arr.length - 1);
// console.log(arr);

const arr = [1,1,2,2,3,3,4,5];
// 1.利用Set去重
const res1 = Array.from(new Set(arr)); // 去重后的数组
console.log(res1);
// 2.利用indexOf方法
const res2 = [];
for (let i = 0; i < arr.length; i++) {
  if (res2.indexOf(arr[i]) === -1) res2.push(arr[i]);
}
console.log(res2);
// 3.filter函数
const res3 = arr.filter((ele, index, self) => self.indexOf(ele) === index);
console.log(res3);
// 4.includes
const res4 = [];
for (let n of arr) {
  if (!res4.includes(n)) res4.push(n);
}
console.log(res4);


/*
4 6
a t c i s w

15 26
a b c d e f g h i j k l m n o p q r s t u v w x y z

var readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let L, C, dp, dpIdx, code;
const obj = ['a', 'e', 'i', 'o', 'u'];
let max = 25000; // 上限 25000
// 至少有一个元音  和两个辅音
const verify = function(str) {
    let count1 = 0, count2 = 0;
    for (let i = 0; i < str.length; i++) {
        obj.includes(str[i]) ? count1++ : count2++;
        if (count1 > 0 && count2 > 1) break;
    }
    return count1 > 0 && count2 > 1;
}
const ret = new Set();
const print = function (dp){
    let ans = dp.join('');
    if (!ret.has(ans) && ans.length === L && ret.size <= max) {
        ret.add(ans);
        if (verify(ans)) console.log(ans);
    }
}
const init = function(start, top, dp) {
    if (start === L || dp.join('') === code.slice(C - L).join('')) {
        print(dp);
        return;
    };
    for (let i = start; i <= top; i++) {
        const item = code[i];
        // 如果上一个数比当前值大，直接跳过
        if (dp[start - 1] >= item) continue;
        dp[start] = code[i];
        init(start + 1, top + 1, dp);
    }
}
rl.on('line', function (s) {
    if (!L) {
        const arr = s.trim().split(' ').map(Number);
        L = arr[0], C = arr[1];
        dp = new Array(L).fill('');
        dpIdx = new Array(L);
        for (let i = 0; i < L; i++) dpIdx[i] = i;
    } else {
        code = s.trim().split(' ').sort();
        dpIdx.forEach((idx) => {
            let top = code.length - L + idx;
            init(idx, top, dp);
        });

    }
});

*/