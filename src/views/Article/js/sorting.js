import './public.js';

/* eslint no-bitwise: ["error", { "int32Hint": true }] */
export const articleInit = () => {
  window.log('// 各个排序性能测试结果如下：(10万级别以下用原生，10万级别上用快速)');
  window.log('数组长度100，原生 > 快速 (近似) 二分 > 插入 (近似) 并归 > 选择 > 冒泡');
  window.log('数组长度1000，原生 > 快速 > 二分 > 插入 > 并归 > 选择 > 冒泡');
  window.log('数组长度10000，原生 > 快速 > 并归 > 二分 > 插入 > 选择 > 冒泡');
  window.log('数组长度100000，快速 > 原生 > 并归 > (二分, 插入, 选择和冒泡排除)');
  window.log('数组长度1000000，快速 > 原生 > (并归, 二分, 插入, 选择和冒泡排除)');
  window.log('数组长度10000000，快速 > 原生 > (并归, 二分, 插入, 选择和冒泡排除)');
  const size = Math.random() * 10 + 5 | 0; // 5 ~ 14 之间
  const A1 = [];
  let A2 = [];
  let B1;
  let B2;
  let C1;
  let C2;
  let D1;
  let D2;
  let E1;
  let E2;
  let F1 = [];
  let F2 = [];
  let G1 = [];
  let G2 = [];
  console.time('A1生成时间');
  for (let i = 0; i < size; i += 1) {
    A1[i] = Math.floor((Math.random() * 1000) + 1);
  }
  console.timeEnd('A1生成时间');
  if (size <= 100000) {
    console.time('copy A1 生成测试数组时间');
    A2 = window.deepCloneTest(A1, []);
    B1 = window.deepCloneTest(A1, []);
    B2 = window.deepCloneTest(A1, []);
    C1 = window.deepCloneTest(A1, []);
    C2 = window.deepCloneTest(A1, []);
    D1 = window.deepCloneTest(A1, []);
    D2 = window.deepCloneTest(A1, []);
    E1 = window.deepCloneTest(A1, []);
    E2 = window.deepCloneTest(A1, []);
    F1 = window.deepCloneTest(A1, []);
    F2 = window.deepCloneTest(A1, []);
    G1 = window.deepCloneTest(A1, []);
    G2 = window.deepCloneTest(A1, []);
    console.timeEnd('copy A1 生成测试数组时间');
  } else {
    console.time('F1,F2,G1,G2生成时间');
    for (let i = 0; i < size; i += 1) {
      F1[i] = Math.floor((Math.random() * 1000) + 1);
      F2[i] = Math.floor((Math.random() * 1000) + 1);
      G1[i] = Math.floor((Math.random() * 1000) + 1);
      G2[i] = Math.floor((Math.random() * 1000) + 1);
    }
    console.timeEnd('F1,F2,G1,G2生成时间');
  }
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  };
  window.log(`<xmp>// swap 交换数组位置
  const swap = (arr, i, j) => {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }</xmp>`);
  window.log('\\n首先创建一个随机数组 A\\n ');
  window.log(`<xmp>const size = Math.random() * 10 + 5 | 0; // 5 ~ 14 之间
    const A1 = [];
    for (let i = 0; i < size; i += 1) {
      A1[i] = Math.floor((Math.random() * 1000) + 1);
    }
    // 初始化数组长度 === ${size}
    // A1 === ${JSON.stringify(A1)}
    // copy A1 生成 A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2 (深copy)</xmp>`);
  window.log('\\n选择排序\\n ');
  window.log(`选择排序是最简单的排序方法。
    在此，为了对A进行升序排序，将第0个元素与其他所有元素进行比较。
    如果发现第0个元素大于比较元素，则它们互换。
    这样，在第一次迭代之后，最小元素被放置在第0位置。
    然后对每个元素重复该过程，依此类推。`);
  const selectioinSort = (arr, fn) => {
    for (let i = 0; i < size; i += 1) {
      let min = i;
      for (let j = i; j < size; j += 1) {
        if (fn(arr[min], arr[j]) > 0) {
          min = j;
        }
      }
      swap(arr, i, min);
    }
  };
  window.log(`<xmp>const selectioinSort = (arr, fn) => {
    for (let i = 0; i < size; i += 1) {
      let min = i;
      for (let j = i; j < size; j += 1) {
        if (fn(arr[min], arr[j]) > 0) {
          min = j;
        }
      }
      swap(arr, i, min);
    }
  };
  // 调用方法 selectioinSort(A1, (a, b) => a - b); // 升序
  // 调用方法 selectioinSort(A2, (a, b) => b - a); // 降序</xmp>`);
  if (size <= 10000) {
    console.time('选择排序方法运行时间 => ');
    selectioinSort(A1, (a, b) => a - b);
    selectioinSort(A2, (a, b) => b - a);
    console.timeEnd('选择排序方法运行时间 => ');
    window.log('// 结果如下:');
    if (size < 20) {
      window.log('(func_color) A1 === ', JSON.stringify(A1), '</div>');
      window.log('(func_color) A2 === ', JSON.stringify(A2), '</div>');
    } else {
      window.log('(func_color) A1 === ', `[${A1[0]},${A1[1]}, ...${A1[size - 1]}]`, '</div>');
      window.log('(func_color) A2 === ', `[${A2[0]},${A2[1]}, ...${A2[size - 1]}]`, '</div>');
    }
  } else {
    window.log('size > 10000 选择排序关闭');
  }
  window.log('\\n插入排序\\n ');
  window.log(`插入排序就像它的名字一样工作 - 它将每个项目插入到最终列表中的适当位置。
      在插入排序中，第一次迭代从第一个元素与第0个元素的比较开始。
      在第二次迭代中，元素与第0和第1个元素进行比较。
      通常，在每次迭代中，将元素与所有元素进行比较。
      如果在同一点处发现元件可以插入一个位置，则通过将另一个元件向右移动一个位置并将元件插入合适的位置来为其创建空间。
      对阵列中的所有元素重复此过程。`);
  const insertionSort = (array, fn) => {
    for (let i = 1; i < size; i += 1) {
      if (fn(array[i], array[i - 1]) < 0) {
        const tmp = array[i];
        let j = i;
        for (; j > 0 && fn(array[j - 1], tmp) > 0; j -= 1) {
          array[j] = array[j - 1];
          array[j - 1] = tmp;
        }
      }
    }
  };
  window.log(`<xmp>const insertionSort = (array, fn) => {
    for (let i = 1; i < size; i += 1) {
      if (fn(array[i], array[i - 1]) < 0) {
        const tmp = array[i];
        let j = i;
        for (; j > 0 && fn(array[j - 1], tmp) > 0; j -= 1) {
          array[j] = array[j - 1];
          array[j - 1] = tmp;
        }
      }
    }
  };
  // 调用方法 insertionSort(B1, (a, b) => a - b); // 升序
  // 调用方法 insertionSort(B2, (a, b) => b - a); // 降序</xmp>`);
  if (size <= 10000) {
    console.time('插入排序方法运行时间 => ');
    insertionSort(B1, (a, b) => a - b);
    insertionSort(B2, (a, b) => b - a);
    console.timeEnd('插入排序方法运行时间 => ');
    window.log('// 结果如下:');
    if (size < 20) {
      window.log('(func_color) B1 === ', JSON.stringify(B1), '</div>');
      window.log('(func_color) B2 === ', JSON.stringify(B2), '</div>');
    } else {
      window.log('(func_color) B1 === ', `[${B1[0]},${B1[1]}, ...${B1[size - 1]}]`, '</div>');
      window.log('(func_color) B2 === ', `[${B2[0]},${B2[1]}, ...${B2[size - 1]}]`, '</div>');
    }
  } else {
    window.log('size > 10000 插入排序关闭');
  }
  window.log('\\n冒泡排序\\n ');
  window.log(`冒泡排序就是将其中最小的数据元素被移动或“冒泡”到顶部。
    在此方法中，将第一个元素与数组中的下一个元素进行比较。
    如果元素是第一个元素较大，则交换或交换它们并将较小的元素移动到顶部位置，否则不需要交换或交换元素。
    在（N-1）比较之后，所有元素中的最大元素将下降到数组的底部。`);
  const bubbleSort = (arr, fn) => {
    let sorted = false;
    let newsize = size;
    while (!sorted && newsize > 1) {
      sorted = true;
      for (let i = 0; i < newsize - 1; i += 1) {
        if (fn(arr[i], arr[i + 1]) > 0) {
          swap(arr, i, i + 1);
          sorted = false;
        }
      }
      newsize -= 1;
    }
  };
  window.log(`<xmp>const bubbleSort = (arr, fn) => {
    let sorted = false;
    let newsize = size;
    while (!sorted && newsize > 1) {
      sorted = true;
      for (let i = 0; i < newsize - 1; i += 1) {
        if (fn(arr[i], arr[i + 1]) > 0) {
          swap(arr, i, i + 1);
          sorted = false;
        }
      }
      newsize -= 1;
    }
  };
  // 调用方法 bubbleSort(C1, (a, b) => a - b); // 升序
  // 调用方法 bubbleSort(C2, (a, b) => b - a); // 降序
  </xmp>`);
  if (size <= 10000) {
    console.time('冒泡排序方法运行时间 => ');
    bubbleSort(C1, (a, b) => a - b);
    bubbleSort(C2, (a, b) => b - a);
    console.timeEnd('冒泡排序方法运行时间 => ');
    window.log('// 结果如下:');
    if (size < 20) {
      window.log('(func_color) C1 === ', JSON.stringify(C1), '</div>');
      window.log('(func_color) C2 === ', JSON.stringify(C2), '</div>');
    } else {
      window.log('(func_color) C1 === ', `[${C1[0]},${C1[1]}, ...${C1[size - 1]}]`, '</div>');
      window.log('(func_color) C2 === ', `[${C2[0]},${C2[1]}, ...${C2[size - 1]}]`, '</div>');
    }
  } else {
    window.log('size > 10000 冒泡排序关闭');
  }
  window.log('\\n归并排序\\n ');
  window.log(`将未排序的列表分成n个子列表，每个子列表包含1个元素（1个元素的列表被视为已排序）。
    重复合并子列表以生成新的子列表，直到只剩下1个子列表。`);
  const merge = (arr, left, right, fn) => {
    if (left < right) {
      const mid = (left + right) / 2 | 0;
      merge(arr, left, mid, fn);
      merge(arr, mid + 1, right, fn);
      const tmpA = [];
      let l = left;
      let r = mid + 1;
      for (; l <= mid || r <= right;) {
        if (l <= mid && (r > right || fn(arr[l], arr[r]) <= 0)) {
          tmpA.push(arr[l]);
          l += 1;
        } else {
          tmpA.push(arr[r]);
          r += 1;
        }
      }
      for (let i = 0; i <= right - left; i += 1) {
        arr[left + i] = tmpA[i];
      }
    }
  };
  const mergeSort = (array, fn) => {
    merge(array, 0, size - 1, fn);
  };
  window.log(`<xmp>const merge = (arr, left, right, fn) => {
    if (left < right) {
      const mid = (left + right) / 2 | 0;
      merge(arr, left, mid, fn);
      merge(arr, mid + 1, right, fn);
      const tmpA = [];
      let l = left;
      let r = mid + 1;
      for (; l <= mid || r <= right;) {
        if (l <= mid && (r > right || fn(arr[l], arr[r]) <= 0)) {
          tmpA.push(arr[l]);
          l += 1;
        } else {
          tmpA.push(arr[r]);
          r += 1;
        }
      }
      for (let i = 0; i <= right - left; i += 1) {
        arr[left + i] = tmpA[i];
      }
    }
  };
  const mergeSort = (array, fn) => {
    merge(array, 0, size - 1, fn);
  };
  // 调用方法 mergeSort(D1, size, (a, b) => a - b); // 升序
  // 调用方法 mergeSort(D2, size, (a, b) => b - a); // 降序
  </xmp>`);
  if (size <= 100000) {
    console.time('并归排序方法运行时间 => ');
    mergeSort(D1, (a, b) => a - b);
    mergeSort(D2, (a, b) => b - a);
    console.timeEnd('并归排序方法运行时间 => ');
    window.log('// 结果如下:');
    if (size < 20) {
      window.log('(func_color) D1 === ', JSON.stringify(D1), '</div>');
      window.log('(func_color) D2 === ', JSON.stringify(D2), '</div>');
    } else {
      window.log('(func_color) D1 === ', `[${D1[0]},${D1[1]}, ...${D1[size - 1]}]`, '</div>');
      window.log('(func_color) D2 === ', `[${D2[0]},${D2[1]}, ...${D2[size - 1]}]`, '</div>');
    }
  } else {
    window.log('size > 100000 并归排序关闭');
  }
  window.log('\\n原生排序\\n ');
  window.log('<xmp>F1.sort((a, b) => a - b); // 升序 F2.sort((a, b) => b - a); // 降序</xmp>');
  console.time('原生排序方法运行时间 => ');
  F1.sort((a, b) => a - b);
  F2.sort((a, b) => b - a);
  console.timeEnd('原生排序方法运行时间 => ');
  window.log('// 结果如下:');
  if (size < 20) {
    window.log('(func_color) F1 === ', JSON.stringify(F1), '</div>');
    window.log('(func_color) F2 === ', JSON.stringify(F2), '</div>');
  } else {
    window.log('(func_color) F1 === ', `[${F1[0]},${F1[1]}, ...${F1[size - 1]}]`, '</div>');
    window.log('(func_color) F2 === ', `[${F2[0]},${F2[1]}, ...${F2[size - 1]}]`, '</div>');
  }
  window.log('\\n快速排序\\n ');
  const quickSort = (arr, fn) => {
    const cutoff = 3;
    const findPivot = (left, right) => {
      const center = (left + right) / 2 | 0;
      if (fn(arr[left], arr[center]) > 0) {
        swap(arr, left, center);
      }
      if (fn(arr[left], arr[right]) > 0) {
        swap(arr, left, right);
      }
      if (fn(arr[center], arr[right]) > 0) {
        swap(arr, center, right);
      }
      swap(arr, center, right - 1);
      return arr[right - 1];
    };
    const insertSort = (left, right) => {
      const len = right - left;
      for (let i = 0; i <= len; i += 1) {
        for (let j = i; j > 0; j -= 1) {
          if (fn(arr[j], arr[j - 1]) < 0) {
            swap(arr, j, j - 1);
          }
        }
      }
    };
    const partition = (left, right) => {
      const pivot = findPivot(arr, left, right, fn);
      const length = right - left;
      if (length > cutoff) {
        let i = left;
        let j = right - 2;
        while (i <= j) {
          while (fn(arr[i], pivot) < 0) {
            i += 1;
          }
          while (fn(arr[j], pivot) > 0) {
            j -= 1;
          }
          if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
          }
        }
        swap(arr, i, right - 1);
        if (left < i - 1) {
          partition(arr, left, i - 1, fn);
        }
        if ((i + 1) < right) {
          partition(arr, i + 1, right, fn);
        }
      } else {
        insertSort(left, right, fn);
      }
    };
    partition(arr, 0, arr.length - 1, fn);
  };
  window.log(`<xmp>const quickSort = (arr, fn) => {
    const cutoff = 3;
    const findPivot = (left, right) => {
      const center = (left + right) / 2 | 0;
      if (fn(arr[left], arr[center]) > 0) {
        swap(arr, left, center);
      }
      if (fn(arr[left], arr[right]) > 0) {
        swap(arr, left, right);
      }
      if (fn(arr[center], arr[right]) > 0) {
        swap(arr, center, right);
      }
      swap(arr, center, right - 1);
      return arr[right - 1];
    };
    const insertSort = (left, right) => {
      const len = right - left;
      for (let i = 0; i <= len; i += 1) {
        for (let j = i; j > 0; j -= 1) {
          if (fn(arr[j], arr[j - 1]) < 0) {
            swap(arr, j, j - 1);
          }
        }
      }
    };
    const partition = (left, right) => {
      const pivot = findPivot(arr, left, right, fn);
      const length = right - left;
      if (length > cutoff) {
        let i = left;
        let j = right - 2;
        while (i <= j) {
          while (fn(arr[i], pivot) < 0) {
            i += 1;
          }
          while (fn(arr[j], pivot) > 0) {
            j -= 1;
          }
          if (i <= j) {
            swap(arr, i, j);
            i += 1;
            j -= 1;
          }
        }
        swap(arr, i, right - 1);
        if (left < i - 1) {
          partition(arr, left, i - 1, fn);
        }
        if ((i + 1) < right) {
          partition(arr, i + 1, right, fn);
        }
      } else {
        insertSort(left, right, fn);
      }
    };
    partition(arr, 0, arr.length - 1, fn);
  };
  // 调用方法 quickSort(G1, (a, b) => a - b); // 升序
  // 调用方法 quickSort(G2, (a, b) => b - a); // 降序
  </xmp>`);
  console.time('快速排序方法运行时间 => ');
  quickSort(G1, (a, b) => a - b);
  quickSort(G2, (a, b) => b - a);
  console.timeEnd('快速排序方法运行时间 => ');
  window.log('// 结果如下:');
  if (size < 20) {
    window.log('(func_color) G1 === ', JSON.stringify(G1), '</div>');
    window.log('(func_color) G2 === ', JSON.stringify(G2), '</div>');
  } else {
    window.log('(func_color) G1 === ', `[${G1[0]},${G1[1]}, ...${G1[size - 1]}]`, '</div>');
    window.log('(func_color) G2 === ', `[${G2[0]},${G2[1]}, ...${G2[size - 1]}]`, '</div>');
  }
  window.log('\\n二分插入排序\\n ');
  window.log(`从第一个元素开始，该元素可以认为已经被排序。
  取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置。
  将新元素插入到该位置后，重复上述两步。`);
  const binaryInsertSort = (arr, fn) => {
    for (let i = 1; i < size; i += 1) {
      const key = arr[i];
      let left = 0;
      let right = i - 1;
      while (left <= right) {
        const middle = (left + right) / 2 | 0;
        if (fn(arr[middle], key) > 0) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (let j = i - 1; j >= left; j -= 1) {
        arr[j + 1] = arr[j];
      }
      arr[left] = key;
    }
    return arr;
  };
  window.log(`<xmp>const binaryInsertSort = (arr, fn) => {
    for (let i = 1; i < size; i += 1) {
      const key = arr[i];
      let left = 0;
      let right = i - 1;
      while (left <= right) {
        const middle = (left + right) / 2 | 0;
        if (fn(arr[middle], key) > 0) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for (let j = i - 1; j >= left; j -= 1) {
        arr[j + 1] = arr[j];
      }
      arr[left] = key;
    }
    return arr;
  };
  // 调用方法 binaryInsertSort(E1, (a, b) => a - b); // 升序
  // 调用方法 binaryInsertSort(E2, (a, b) => b - a); // 降序
  </xmp>`);
  if (size <= 10000) {
    console.time('二分插入排序方法运行时间 => ');
    binaryInsertSort(E1, (a, b) => a - b);
    binaryInsertSort(E2, (a, b) => b - a);
    console.timeEnd('二分插入排序方法运行时间 => ');
    window.log('// 结果如下:');
    if (size < 20) {
      window.log('(func_color) E1 === ', JSON.stringify(E1), '</div>');
      window.log('(func_color) E2 === ', JSON.stringify(E2), '</div>');
    } else {
      window.log('(func_color) E1 === ', `[${E1[0]},${E1[1]}, ...${E1[size - 1]}]`, '</div>');
      window.log('(func_color) E2 === ', `[${E2[0]},${E2[1]}, ...${E2[size - 1]}]`, '</div>');
    }
  } else {
    window.log('size > 10000 二分插入排序关闭');
  }
};
