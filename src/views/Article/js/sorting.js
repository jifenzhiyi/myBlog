// 判断数据类型
const type = (o) => {
  let s = Object.prototype.toString.call(o);
  return s.match(/\[object (.*?)\]/)[1].toLowerCase();
};
['Null','undefined','Object','Array','String','Number','Boolean','Function','RegExp'].forEach(function (t) {
  var typeIs = (o) => {
    return type(o);
  };
});

// 创建深copy方法
const deepCloneTest = (initalObj, finalObj) => {
  let obj = finalObj || {};
  for (let i in initalObj) {
    let prop = initalObj[i]; // 避免相互引用对象导致死循环 如: initalObj.a = initalObj
    if(prop === obj) { continue }
    if (typeof prop === 'object') {
      obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
    } else {
      obj[i] = prop;
    }
  }
  return obj;
}

export const articleInit = () => {
    console.log('// 各个排序性能测试结果如下:(10万级别以下用原生，10万级别上用快速)');
    console.log('数组长度100，原生 > 快速 (近似) 二分 > 插入 (近似) 并归 > 选择 > 冒泡');
    console.log('数组长度1000，原生 > 快速 > 二分 > 插入 > 并归 > 选择 > 冒泡');
    console.log('数组长度10000，原生 > 快速 > 并归 > 二分 > 插入 > 选择 > 冒泡');
    console.log('数组长度100000，快速 > 原生 > 并归 > (二分, 插入, 选择和冒泡排除)');
    console.log('数组长度1000000，快速 > 原生 > (并归, 二分, 插入, 选择和冒泡排除)');
    console.log('数组长度10000000，快速 > 原生 > (并归, 二分, 插入, 选择和冒泡排除)');
    let size = Math.random() * 10 + 5 | 0; // 5 ~ 14 之间
    let A1 = [], A2 = [], B1, B2, C1, C2, D1, D2, E1, E2, F1 = [], F2 = [], G1 = [], G2 = [];
    console.time('A1生成时间');
    for ( let i = 0; i < size; i++) {
        A1[i] = Math.floor((Math.random() * 1000) + 1);
    }
    console.timeEnd('A1生成时间');
    if (size <= 100000) {
        console.time('copy A1 生成测试数组时间');
        A2 = deepCloneTest(A1, []);
        B1 = deepCloneTest(A1, []);
        B2 = deepCloneTest(A1, []);
        C1 = deepCloneTest(A1, []);
        C2 = deepCloneTest(A1, []);
        D1 = deepCloneTest(A1, []);
        D2 = deepCloneTest(A1, []);
        E1 = deepCloneTest(A1, []);
        E2 = deepCloneTest(A1, []);
        F1 = deepCloneTest(A1, []);
        F2 = deepCloneTest(A1, []);
        G1 = deepCloneTest(A1, []);
        G2 = deepCloneTest(A1, []);
        console.timeEnd('copy A1 生成测试数组时间');
    } else {
        console.time('F1,F2,G1,G2生成时间');
        for ( let i = 0; i < size; i++) {
            F1[i] = Math.floor((Math.random() * 1000) + 1);
            F2[i] = Math.floor((Math.random() * 1000) + 1);
            G1[i] = Math.floor((Math.random() * 1000) + 1);
            G2[i] = Math.floor((Math.random() * 1000) + 1);
        }
        console.timeEnd('F1,F2,G1,G2生成时间');
    }
    const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    console.log(`<xmp>// swap 交换数组位置
        const swap = (arr, i, j) => {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        }</xmp>`);
    console.log('初始化数组长度 === ', size);
    console.log('\\n首先创建一个随机数组 A\\n ');
    console.log(`<xmp>let size = Math.random() * 10 + 5 | 0;
        var A1 = new Array();
        for ( let i = 0; i < size; i++) {
        A1[i] = Math.floor((Math.random() * 100) + 1);
        }
        // A1 size === ${size}
        // copy A1 生成 A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2 (深copy)</xmp>`);
    if (size < 20) {
        console.log(`// A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2 === ${JSON.stringify(F2)}`);
    } else {
        console.log(`// A2,B1,B2,C1,C2,D1,D2,E1,E2,F1,F2,G1,G2 === [${F2[0]}, ${F2[1]}, ${F2[2]} ...${F2[size-1]}]`);
    }
    console.log('\\n选择排序\\n ');
    console.log(`选择排序是最简单的排序方法。
        在此，为了对A进行升序排序，将第0个元素与其他所有元素进行比较。
        如果发现第0个元素大于比较元素，则它们互换。
        这样，在第一次迭代之后，最小元素被放置在第0位置。
        然后对每个元素重复该过程，依此类推。`);
    const selectioinSort = (arr, size, fn) => {
        for( let i = 0; i < size; i++) {
            let min = i;
            for( let j = i; j < size; j++ ) {
            if (fn(arr[min], arr[j]) > 0) {
                min = j;
            }
            }
            swap(arr, i, min);
        }
    }
    console.log(`<xmp>const selectioinSort = (arr, size, fn) => {
            for( let i = 0; i < size; i++) {
                let min = i;
                for( let j = i; j < size; j++ ) {
                if (fn(arr[min], arr[j]) >0) {
                    min = j;
                }
                }
                swap(arr, i, min);
            }
        }
    // 调用方法 selectioinSort(A1, size, (a, b) => a - b); // 升序
    // 调用方法 selectioinSort(A2, size, (a, b) => b - a); // 降序</xmp>`);
    if (size <= 10000) {
        console.time('选择排序方法运行时间 => ');
        selectioinSort(A1, size, (a, b) => a - b);
        selectioinSort(A2, size, (a, b) => b - a);
        console.timeEnd('选择排序方法运行时间 => ');
        console.log('// 结果如下:');
        if (size < 20) {
            console.log('(func_color) A1 === ', JSON.stringify(A1), '</div>');
            console.log('(func_color) A2 === ', JSON.stringify(A2), '</div>');
        } else {
            console.log('(func_color) A1 === ', `[${A1[0]},${A1[1]}, ...${A1[size-1]}]`, '</div>');
            console.log('(func_color) A2 === ', `[${A2[0]},${A2[1]}, ...${A2[size-1]}]`, '</div>');
        }
    } else {
        console.log('size > 10000 选择排序关闭');
    }
    console.log('\\n插入排序\\n ');
    console.log(`插入排序就像它的名字一样工作 - 它将每个项目插入到最终列表中的适当位置。
        在插入排序中，第一次迭代从第一个元素与第0个元素的比较开始。
        在第二次迭代中，元素与第0和第1个元素进行比较。
        通常，在每次迭代中，将元素与所有元素进行比较。
        如果在同一点处发现元件可以插入一个位置，则通过将另一个元件向右移动一个位置并将元件插入合适的位置来为其创建空间。
        对阵列中的所有元素重复此过程。`);
    const insertionSort = (array, size, fn) => {
        for (let i = 1; i < size; i++) {
            if (fn(array[i], array[i-1]) < 0) {
                let tmp = array[i];
                let j = i;
                for (; j > 0 && fn(array[j-1], tmp) > 0; j--) {
                    array[j] = array[j-1];
                    array[j-1] = tmp;
                }
            }
        }
    }
    console.log(`<xmp>const insertionSort = (array, size, fn) => {
            for (let i = 1; i < size; i++) {
                if (fn(array[i], array[i-1]) < 0) {
                tmp = array[i];
                let j = i;
                for (; j > 0 && fn(array[j-1], tmp) > 0; j--) {
                    array[j] = array[j-1];
                    array[j-1] = tmp;
                }
                }
            }
        }
    // 调用方法 insertionSort(B1, size, (a, b) => a - b); // 升序
    // 调用方法 insertionSort(B2, size, (a, b) => b - a); // 降序</xmp>`);
    if (size <= 10000) {
        console.time('插入排序方法运行时间 => ');
        insertionSort(B1, size, (a, b) => a - b);
        insertionSort(B2, size, (a, b) => b - a);
        console.timeEnd('插入排序方法运行时间 => ');
        console.log('// 结果如下:');
        if (size < 20) {
            console.log('(func_color) B1 === ', JSON.stringify(B1), '</div>');
            console.log('(func_color) B2 === ', JSON.stringify(B2), '</div>');
        } else {
            console.log('(func_color) B1 === ', `[${B1[0]},${B1[1]}, ...${B1[size-1]}]`, '</div>');
            console.log('(func_color) B2 === ', `[${B2[0]},${B2[1]}, ...${B2[size-1]}]`, '</div>');
        }
    } else {
        console.log('size > 10000 插入排序关闭');
    }
    console.log('\\n冒泡排序\\n ');
    console.log(`冒泡排序就是将其中最小的数据元素被移动或“冒泡”到顶部。
        在此方法中，将第一个元素与数组中的下一个元素进行比较。
        如果元素是第一个元素较大，则交换或交换它们并将较小的元素移动到顶部位置，否则不需要交换或交换元素。
        在（N-1）比较之后，所有元素中的最大元素将下降到数组的底部。`);
    const bubbleSort = (arr, size, fn) => {
        let sorted = false;
        while (!sorted && size > 1) {
            sorted = true;
            for (let i = 0; i < size-1; i++) {
            if (fn(arr[i], arr[i+1]) > 0) {
                swap(arr, i, i+1);
                sorted = false;
            }
            }
            size--;
        }
    }
    console.log(`<xmp>const bubbleSort = (arr, size, fn) => {
            let sorted = false;
            while (!sorted && size > 1) {
                sorted = true;
                for (let i = 0; i < size-1; i++) {
                if (fn(arr[i], arr[i+1]) > 0) {
                    swap(arr, i, i+1);
                    sorted = false;
                }
                }
                size--;
            }
        }
    // 调用方法 bubbleSort(C1, size, (a, b) => a - b); // 升序
    // 调用方法 bubbleSort(C2, size, (a, b) => b - a); // 降序
    </xmp>`);
    if (size <= 10000) {
    console.time('冒泡排序方法运行时间 => ');
    bubbleSort(C1, size, (a, b) => a - b);
    bubbleSort(C2, size, (a, b) => b - a);
    console.timeEnd('冒泡排序方法运行时间 => ');
    console.log('// 结果如下:');
    if (size < 20) {
        console.log('(func_color) C1 === ', JSON.stringify(C1), '</div>');
        console.log('(func_color) C2 === ', JSON.stringify(C2), '</div>');
    } else {
        console.log('(func_color) C1 === ', `[${C1[0]},${C1[1]}, ...${C1[size-1]}]`, '</div>');
        console.log('(func_color) C2 === ', `[${C2[0]},${C2[1]}, ...${C2[size-1]}]`, '</div>');
    }
    } else {
    console.log('size > 10000 冒泡排序关闭');
    }
    console.log('\\n归并排序\\n');
    console.log(`将未排序的列表分成n个子列表，每个子列表包含1个元素（1个元素的列表被视为已排序）。
        重复合并子列表以生成新的子列表，直到只剩下1个子列表。`);
    const merge = (array, left, right, fn) => {
        if (left < right) {
            let mid = (left + right) / 2 | 0;
            merge(array, left, mid, fn);
            merge(array, mid + 1, right, fn);
            let tmpA = [], l = left, r = mid + 1;
            for (; l <= mid || r <= right; ) {
            if (l <= mid && (r > right || fn(array[l], array[r]) <= 0)) {
                tmpA.push(array[l]);
                l++;
            } else {
                tmpA.push(array[r]);
                r++;
            }
            }
            for (let i = 0; i <= right - left; i++) {
            array[left + i] = tmpA[i];
            }
        }
    }
    const mergeSort = (array, size, fn) => {
        merge(array, 0, size - 1, fn);
    }
    console.log(`<xmp>const merge = (array, left, right, fn) => {
                if (left < right) {
                    let mid = (left + right) / 2 | 0;
                    merge(array, left, mid, fn);
                    merge(array, mid + 1, right, fn);
                    let tmpA = [], l = left, r = mid + 1;
                    for (; l <= mid || r <= right; ) {
                    if (l <= mid && (r > right || fn(array[l], array[r]) <= 0)) {
                        tmpA.push(array[l]);
                        l++;
                    } else {
                        tmpA.push(array[r]);
                        r++;
                    }
                    }
                    for (i = 0; i <= right - left; i++) {
                    array[left + i] = tmpA[i];
                    }
                }
            }
            const mergeSort = (array, size, fn) => {
            merge(array, 0, size - 1, fn);
        }
        // 调用方法 mergeSort(D1, size, (a, b) => a - b); // 升序
        // 调用方法 mergeSort(D2, size, (a, b) => b - a); // 降序
        </xmp>`);
    if (size <= 100000) {
        console.time('并归排序方法运行时间 => ');
        mergeSort(D1, size, (a, b) => a - b);
        mergeSort(D2, size, (a, b) => b - a);
        console.timeEnd('并归排序方法运行时间 => ');
        console.log('// 结果如下:');
        if (size < 20) {
            console.log('(func_color) D1 === ', JSON.stringify(D1), '</div>');
            console.log('(func_color) D2 === ', JSON.stringify(D2), '</div>');
        } else {
            console.log('(func_color) D1 === ', `[${D1[0]},${D1[1]}, ...${D1[size-1]}]`, '</div>');
            console.log('(func_color) D2 === ', `[${D2[0]},${D2[1]}, ...${D2[size-1]}]`, '</div>');
        }
    } else {
        console.log('size > 100000 并归排序关闭');
    }
    console.log('\\n原生排序\\n');
    console.log(`<xmp>F1.sort((a, b) => a - b); // 升序
        F2.sort((a, b) => b - a); // 降序
        </xmp>`);
    console.time('原生排序方法运行时间 => ');
    F1.sort((a, b) => a - b);
    F2.sort((a, b) => b - a);
    console.timeEnd('原生排序方法运行时间 => ');
    console.log('// 结果如下:');
    if (size < 20) {
        console.log('(func_color) F1 === ', JSON.stringify(F1), '</div>');
        console.log('(func_color) F2 === ', JSON.stringify(F2), '</div>');
    } else {
        console.log('(func_color) F1 === ', `[${F1[0]},${F1[1]}, ...${F1[size-1]}]`, '</div>');
        console.log('(func_color) F2 === ', `[${F2[0]},${F2[1]}, ...${F2[size-1]}]`, '</div>');
    }
    console.log('\\n快速排序\\n ');
    const quickSort = (arr, size, fn) => {
        let cutoff = 3;
        const partition = (arr, left, right, fn) => {
            let pivot = findPivot(arr, left, right, fn);
            let length = right - left
            if (length > cutoff) {
            var i = left
            var j = right - 2
            while (i <= j) {
                while ( fn(arr[i], pivot) < 0 ) {
                i++;
                }
                while ( fn(arr[j], pivot) > 0 ) {
                j--;
                }
                if (i <= j) {
                swap(arr, i, j);
                i++;
                j--;
                }
            }
            swap(arr, i, right-1);
            if (left < i-1) {
                partition(arr, left, i-1, fn);
            }
            if ((i+1) < right) {
                partition(arr, i+1, right, fn);
            }
            } else {
            insertSort(left, right, fn);
            }
        }
        const findPivot = (arr, left, right, fn) => {
            let center = (left + right) / 2 | 0;
            if (fn(arr[left], arr[center]) > 0) {
            swap(arr, left, center);
            }
            if (fn(arr[left], arr[right]) > 0) {
            swap(arr, left, right);
            }
            if (fn(arr[center], arr[right]) > 0) {
            swap(arr, center, right);
            }
            swap(arr, center, right-1);
            return arr[right-1];
        }
        const insertSort = (left, right, fn) => {
            let len = right - left;
            for (let i = 0; i <= len; i++) {
            for (let j = i; j > 0; j--) {
                if (fn(arr[j], arr[j-1]) < 0) {
                swap(arr, j, j-1);
                }
            }
            }
        }
        partition(arr, 0, arr.length-1, fn);
    }
    console.log(`<xmp>const quickSort = (arr, size, fn) => {
            let cutoff = 3;
            const partition = (arr, left, right, fn) => {
                let pivot = findPivot(arr, left, right, fn);
                let length = right - left
                if (length > cutoff) {
                    var i = left
                    var j = right - 2
                    while (i <= j) {
                        while ( fn(arr[i], pivot) < 0 ) {
                            i++;
                        }
                        while ( fn(arr[j], pivot) > 0 ) {
                            j--;
                        }
                        if (i <= j) {
                            swap(arr, i, j);
                            i++;
                            j--;
                        }
                    }
                    swap(arr, i, right-1);
                    if (left < i-1) {
                        partition(arr, left, i-1, fn);
                    }
                    if ((i+1) < right) {
                        partition(arr, i+1, right, fn);
                    }
                } else {
                    insertSort(left, right, fn);
                }
            }
            const findPivot = (arr, left, right, fn) => {
                let center = (left + right) / 2 | 0;
                if (fn(arr[left], arr[center]) > 0) {
                    swap(arr, left, center);
                }
                if (fn(arr[left], arr[right]) > 0) {
                    swap(arr, left, right);
                }
                if (fn(arr[center], arr[right]) > 0) {
                    swap(arr, center, right);
                }
                swap(arr, center, right-1);
                return arr[right-1];
            }
            const insertSort = (left, right, fn) => {
                let len = right - left;
                for (let i = 0; i <= len; i++) {
                    for (let j = i; j > 0; j--) {
                        if (fn(arr[j], arr[j-1]) < 0) {
                            swap(arr, j, j-1);
                        }
                    }
                }
            }
            partition(arr, 0, arr.length-1, fn);
        }
        // 调用方法 quickSort(G1, size, (a, b) => a - b); // 升序
        // 调用方法 quickSort(G2, size, (a, b) => b - a); // 降序
        </xmp>`);
    console.time('快速排序方法运行时间 => ');
    quickSort(G1, size, (a, b) => a - b);
    quickSort(G2, size, (a, b) => b - a);
    console.timeEnd('快速排序方法运行时间 => ');
    console.log('// 结果如下:');
    if (size < 20) {
        console.log('(func_color) G1 === ', JSON.stringify(G1), '</div>');
        console.log('(func_color) G2 === ', JSON.stringify(G2), '</div>');
    } else {
        console.log('(func_color) G1 === ', `[${G1[0]},${G1[1]}, ...${G1[size-1]}]`, '</div>');
        console.log('(func_color) G2 === ', `[${G2[0]},${G2[1]}, ...${G2[size-1]}]`, '</div>');
    }
    console.log('\\n二分插入排序\\n ');
    console.log(`从第一个元素开始，该元素可以认为已经被排序。
    取出下一个元素，在已经排序的元素序列中二分查找到第一个比它大的数的位置。
    将新元素插入到该位置后，重复上述两步。`);
    const binaryInsertSort = (arr, size, fn) => {
        for (let i = 1; i < size; i++) {
            let key = arr[i], left = 0, right = i - 1;
            while (left <= right) {
            let middle = (left + right) / 2 | 0;
            if (fn(arr[middle], key) > 0) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
            }
            for (let j = i - 1; j >= left; j--) {
            arr[j + 1] = arr[j];
            }
            arr[left] = key;
        }
        return arr;
    }
    console.log(`<xmp>const binaryInsertSort = (arr, size, fn) => {
    for (let i = 1; i < size; i++) {
        let key = arr[i], left = 0, right = i - 1;
        while (left <= right) {
        let middle = (left + right) / 2 | 0;
        if (fn(arr[middle], key) > 0) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        }
        for (let j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
        }
        arr[left] = key;
    }
    return arr;
    }
    // 调用方法 binaryInsertSort(E1, size, (a, b) => a - b); // 升序
    // 调用方法 binaryInsertSort(E2, size, (a, b) => b - a); // 降序
    </xmp>`);
    if (size <= 10000) {
    console.time('二分插入排序方法运行时间 => ');
    binaryInsertSort(E1, size, (a, b) => a - b);
    binaryInsertSort(E2, size, (a, b) => b - a);
    console.timeEnd('二分插入排序方法运行时间 => ');
    console.log('// 结果如下:');
    if (size < 20) {
        console.log('(func_color) E1 === ', JSON.stringify(E1), '</div>');
        console.log('(func_color) E2 === ', JSON.stringify(E2), '</div>');
    } else {
        console.log('(func_color) E1 === ', `[${E1[0]},${E1[1]}, ...${E1[size-1]}]`, '</div>');
        console.log('(func_color) E2 === ', `[${E2[0]},${E2[1]}, ...${E2[size-1]}]`, '</div>');
    }
    } else {
    console.log('size > 10000 二分插入排序关闭');
    }

}