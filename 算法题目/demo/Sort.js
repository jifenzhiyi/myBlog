// 排序
// 1.分而治之
// 1.1 归并排序
// 合并两个有序数组
function merge(arr1, arr2) {
  const merge_arr = [];
  let index_1 = 0, index_2 = 0;
  while (index_1 < arr1.length && index_2 < arr2.length) {
    if (arr1[index_1] <= arr2[index_2]) {
      merge_arr.push(arr1[index_1]);
      index_1++;
    } else {
      merge_arr.push(arr2[index_2]);
      index_2++;
    }
  }

  // arr1 还有剩余
  if (index_1 < arr1.length) {
    while (index_1 < arr1.length) {
      merge_arr.push(arr1[index_1]);
      index_1++;
    }
  }

  // arr2还有剩余
  if (index_2 < arr2.length) {
    while (index_2 < arr2.length) {
      merge_arr.push(arr2[index_2]);
      index_2++;
    }
  }

  return merge_arr;
}

// const arr1 = [1,3,5];
// const arr2 = [2,4,6];
// console.log('result', merge(arr1, arr2));

// 分治
function merge_sort_ex(arr, start, end) {
  if (start < end) {
    const mid = Math.floor((start + end) / 2);
    const arr1 = merge_sort_ex(arr, start, mid);
    const arr2 = merge_sort_ex(arr, mid + 1, end);
    return merge(arr1, arr2);
  }
  return [arr[end]];
}

function merge_sort(arr) {
  return merge_sort_ex(arr, 0 , arr.length - 1);
}

// const arr = [10,11,7,2,3,8,1,6,4,5,9];
// console.log('result', merge_sort(arr));

// 1.2 快速排序
// 分区
function partition(arr, start, end) {
  let pivotpos = start;
  let pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if(arr[i] < pivot) {
      pivotpos++;
      if (pivotpos != i) {
        [arr[pivotpos], arr[i]] = [arr[i], arr[pivotpos]];
      }
    }
  }
  arr[start] = arr[pivotpos];
  arr[pivotpos] = pivot;

  return pivotpos;
}
// 完成排序
function quick_sort_ex(arr, start, end) {
  if (start < end) {
    const pivotpos = partition(arr, start, end);
    quick_sort_ex(arr, start, pivotpos - 1);
    quick_sort_ex(arr, pivotpos + 1, end);
  }
}

function quick_sort(arr) {
  quick_sort_ex(arr, 0, arr.length - 1);
}

// const arr = [10,11,7,2,3,8,1,6,4,5,9];
// const arr = [7,2,8,1,4,6,9,3];
// quick_sort(arr);
// console.log('result', arr);

// 插入排序
function insert_sort(arr, start, end) {
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < arr[i - 1]) {
      const tmp = arr[i];
      let j = i - 1;
      while (j >= 0 && tmp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = tmp;
    }
  }
}

// const arr = [7,2,8,1,4,6,9,3];
// insert_sort(arr, 0, arr.length - 1);
// console.log(arr);

// 改进后的快排
function quick_sort_ex_new(arr, start, end) {
  if (start < end) {
    if (end - start <= 25) {
      insert_sort(arr, start, end);
    } else {
      const pivotpos = partition(arr, start, end);
      quick_sort_ex(arr, start, pivotpos - 1);
      quick_sort_ex(arr, pivotpos + 1, end);
    }
  }
}

function quick_sort_new(arr) {
  quick_sort_ex_new(arr, 0, arr.length - 1);
}

// const arr = [7,2,8,1,4,6,9,3];
// quick_sort_new(arr, 0, arr.length - 1);
// console.log(arr);

// 1.3 二分查找
function binary_search(arr, target, start, end) {
  if (start > end) return -1;

  const middle = Math.floor((start + end) / 2);
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] > target) {
    return binary_search(arr, target, start, middle - 1);
  } else {
    return binary_search(arr, target, middle + 1, end);
  }
}

// const arr = [1,3,4,6,7,9,10];
// console.log(binary_search(arr, 5, 0, arr.length - 1));
// console.log(binary_search(arr, 9, 0, arr.length - 1));

// 1.4 递归
function hanoi(n, pillar_A, pillar_B, pillar_C) {
  if (n == 1) {
    console.log('move: ', pillar_A, '--->', pillar_C);
  } else {
    // 借助C, 将A上n-1个圆盘移动到B上
    hanoi(n - 1, pillar_A, pillar_C, pillar_B);
    // 将A上最后一个圆盘移动到C
    console.log('move: ', pillar_A, '--->', pillar_C);
    // 借助A, 将B上n-1个圆盘移动到C上
    hanoi(n - 1, pillar_B, pillar_A, pillar_C);
  }
}

hanoi(3, 'A', 'B', 'C');

// 2.桶排序
