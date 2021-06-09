// const MinHeap = function() {
//   let heap = [], curr_size = 0;

//   function shif_down(start, mIndex) {
//     let parent_index = start;
//     let min_child_index = parent_index * 2 + 1; // 一定有左孩子，先从左开始
//     while (min_child_index <= mIndex) {
//       if (min_child_index < mIndex && heap[min_child_index] > heap[min_child_index + 1]) {
//         min_child_index = min_child_index + 1;
//       }
//       if (heap[parent_index] <= heap[min_child_index]) {
//         break;
//       } else {
//         let temp = heap[parent_index];
//         heap[parent_index] = heap[min_child_index];
//         heap[min_child_index] = temp;
//         parent_index = min_child_index;
//         min_child_index = 2 * min_child_index + 1;
//       }
//     }
//   }

//   this.init = function(arr) {
//     curr_size = arr.length;
//     for (let i = 0; i < curr_size; i++) {
//       heap[i] = arr[i];
//     }
//     let last = Math.floor((curr_size - 2) / 2); // 堆的最后一个分支节点
//     while (last >= 0) {
//       shif_down(last, curr_size - 1); // 局部自上而下下滑调整
//       last -= 1;
//     }
//   }

//   this.getArr = function() {
//     return heap;
//   }

//   function shif_up(start) {
//     let child_index = start;
//     let parent_index = Math.floor((child_index - 1) / 2);
//     while (child_index > 0) {
//       if (heap[parent_index] <= heap[child_index]) {
//         break;
//       } else {
//         const temp = heap[child_index];
//         heap[child_index] = heap[parent_index];
//         heap[parent_index] = temp;
//         child_index = parent_index;
//         parent_index = Math.floor((parent_index - 1) / 2);
//       }
//     }
//   }

//   this.insert = function(item) {
//     heap[curr_size] = item;
//     shif_up(curr_size)
//     curr_size++;
//   }

//   this.size = function() {
//     return curr_size;
//   }

//   this.getMin = function() {
//     return curr_size > 0 ? heap[0] : null;
//   }

//   this.removeMin = function() {
//     if (curr_size === 0) return null;
//     const min = heap[0];
//     heap[0] = heap[curr_size - 1];
//     heap[curr_size - 1] = min;
//     curr_size--;
//     shif_down(0, curr_size - 1);
//     return min;
//   }
// }

// 测试案例
// const test = [12,11,10,6,7,9,3,4,5];
// const minHeap = new MinHeap();
// minHeap.init(test);
// console.log(minHeap.getArr(), 'size', minHeap.size(), 'min', minHeap.getMin());
// // minHeap.insert(1);
// // console.log(minHeap.getArr(), 'size', minHeap.size(), 'min', minHeap.getMin());
// minHeap.removeMin();
// console.log(minHeap.getArr(), 'size', minHeap.size(), 'min', minHeap.getMin());
// minHeap.removeMin();
// minHeap.removeMin();
// console.log(minHeap.getArr(), 'size', minHeap.size(), 'min', minHeap.getMin());

// const MaxHeap = function() {
//   let heap = [], curr_size = 0;

//   function shif_down(start, mIndex) {
//     let parent_index = start;
//     let max_child_index = parent_index * 2 + 1;
//     while (max_child_index <= mIndex) {
//       if (max_child_index < mIndex && heap[max_child_index + 1] > heap[max_child_index]) {
//         max_child_index = max_child_index + 1;
//       }
//       if (heap[parent_index] >= heap[max_child_index]) {
//         break;
//       } else {
//         let temp = heap[parent_index];
//         heap[parent_index] = heap[max_child_index];
//         heap[max_child_index] = temp;
//         parent_index = max_child_index;
//         max_child_index = 2 * max_child_index + 1;
//       }
//     }
//   }

//   this.init = function(arr) {
//     curr_size = arr.length;
//     for (let i = 0; i < curr_size; i++) {
//       heap[i] = arr[i];
//     }
//     let last = Math.floor((curr_size - 2) / 2); // 堆的最后一个分支节点
//     while (last >= 0) {
//       shif_down(last, curr_size - 1); // 局部自上而下下滑调整
//       last -= 1;
//     }
//   }

//   // 获取堆元素
//   this.getHeap = function() {
//     return heap.slice(0, curr_size).join(' ');
//   }

//   // 获取所有数组元素
//   this.getArr = function() {
//     return heap.join(' ');
//   }

//   this.size = function() {
//     return curr_size;
//   }

//   this.getMax = function() {
//     return curr_size > 0 ? heap[0] : null;
//   }

//   this.removeMax = function() {
//     if (curr_size === 0) return null;
//     const max = heap[0];
//     heap[0] = heap[curr_size - 1];
//     heap[curr_size - 1] = max;
//     curr_size--;
//     shif_down(0, curr_size - 1);
//     return max;
//   }

//   function shif_up(start) {
//     let child_index = start;
//     let parent_index = Math.floor((child_index - 1) / 2);
//     while (child_index > 0) {
//       if (heap[parent_index] >= heap[child_index]) {
//         break;
//       } else {
//         const temp = heap[child_index];
//         heap[child_index] = heap[parent_index];
//         heap[parent_index] = temp;
//         child_index = parent_index;
//         parent_index = Math.floor((parent_index - 1) / 2);
//       }
//     }
//   }

//   this.insert = function(item) {
//     heap[curr_size] = item;
//     shif_up(curr_size)
//     curr_size++;
//   }
// }

// 测试案例
// const test = [12,11,10,6,7,9,3,4,5];
// const maxHeap = new MaxHeap();
// maxHeap.init(test);
// maxHeap.removeMax();
// console.log(maxHeap.getHeap());
// console.log(maxHeap.getArr(), 'size =', maxHeap.size(), 'min =', maxHeap.getMax());
// maxHeap.removeMax();
// console.log(maxHeap.getHeap());
// console.log(maxHeap.getArr(), 'size =', maxHeap.size(), 'min =', maxHeap.getMax());
// maxHeap.removeMax();
// console.log(maxHeap.getHeap());
// console.log(maxHeap.getArr(), 'size =', maxHeap.size(), 'min =', maxHeap.getMax());
// maxHeap.insert(20);
// console.log(maxHeap.getHeap());
// console.log(maxHeap.getArr(), 'size', maxHeap.size(), 'min', maxHeap.getMax());

/*
const MinHeap = function(k) {
    let heap = new Array(k), size = 0;

    function shif_down(start, mIndex) {
        let parent_index = start;
        let min_child_index = parent_index * 2 + 1; // 一定有左孩子，先从左开始
        while (min_child_index <= mIndex) {
            if (min_child_index < mIndex && heap[min_child_index] > heap[min_child_index + 1]) {
                min_child_index = min_child_index + 1;
            }
            if (heap[parent_index] <= heap[min_child_index]) {
                break;
            } else {
                let temp = heap[parent_index];
                heap[parent_index] = heap[min_child_index];
                heap[min_child_index] = temp;
                parent_index = min_child_index;
                min_child_index = 2 * min_child_index + 1;
            }
        }
    }

    function shif_up(start) {
        let child_index = start;
        let parent_index = Math.floor((child_index - 1) / 2);
        while (child_index > 0) {
            if (heap[parent_index] <= heap[child_index]) {
                break;
            } else {
                const temp = heap[child_index];
                heap[child_index] = heap[parent_index];
                heap[parent_index] = temp;
                child_index = parent_index;
                parent_index = Math.floor((parent_index - 1) / 2);
            }
        }
    }

    this.insert = function(item) {
        heap[size] = item;
        shif_up(size)
        size++;
    }
    
    this.size = function() {
        return size;
    }

    this.top = function() {
        return heap[0];
    }

    this.pop = function() {
        if (size == 0) return null;
        const min = heap[0];
        heap[0] = heap[size - 1];
        heap[size - 1] = min;
        size--;
        shif_down(0, size - 1);
        return min;
    }
}
*/
// class Heap {
//   constructor(data, type = 'min') {
//     this.data = data;
//     this.compartor = (a, b) => type === 'min' ? a - b : b - a;
//     this.heapify();
//   }
  
//   heapify() {
//     if (this.size() < 2) return;
//     for (let i = 1; i < this.size(); i++) {
//       this.bubbleUp(i)
//     }
//   }

//   // 添加
//   offer(val) {
//     this.data.push(val);
//     this.bubbleUp(this.size() - 1); // 从最尾部进行调整
//   }

//   // 长度
//   size() {
//     return this.data.length;
//   }

//   // 查看顶部元素
//   peek() {
//     return this.size() > 0 ? this.data[0] : null;
//   }

//   // 弹出顶部元素
//   poll() {
//     if (!this.size()) return null;
//     let res = this.data[0];
//     this.data[0] = this.data.pop();
//     this.bubbleDown(0);
//     return res;
//   }

//   swap(i, j) {
//     [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
//   }

//   bubbleUp(index) {
//     while (index != 0) {
//       const parentIndex = (index - 1) >> 1;
//       if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
//         this.swap(index, parentIndex);
//         index = parentIndex;
//       } else {
//         break;
//       }
//     }
//   }

//   bubbleDown(index) {
//     let lastIndex = this.size() - 1;
//     while (index < lastIndex) {
//       let minIndex = index * 2 + 1;
//       if (minIndex < lastIndex
//         && this.compartor(this.data[minIndex], this.data[minIndex + 1]) > 0) {
//         minIndex = minIndex + 1;
//       }
//       if (minIndex <= lastIndex
//         && this.compartor(this.data[minIndex], this.data[index]) < 0) {
//         this.swap(minIndex, index);
//         index = minIndex;
//       } else {
//         break;
//       }
//     }
//   }
// }
// 测试案例
// let arr1 = [8,7,6,5,4,3,2,1];
// let arr2 = [1,2,3,4,5,6,7,8];
// const minHeap = new Heap(arr1, 'min');
// console.log(arr1);
// console.log(minHeap.poll(), arr1);
// const maxHeap = new Heap(arr2, 'max');
// console.log(arr2);
// console.log(maxHeap.poll(), arr2);
