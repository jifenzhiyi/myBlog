const MinHeap = function(k) {
  let heap = new Array(k), size = 0;

  this.res = function() {
    return heap;
  }

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

const MaxHeap = function() {
  let heap = null, size = 0;
  let maxSize = 0;

  function shif_up(start) {
      let child_index = start;
      let parent_index = Math.floor((child_index - 1) / 2);
      while (child_index > 0) {
          if (heap[parent_index] >= heap[child_index]) {
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

  function shif_down(start, mIndex) {
      let parent_index = start;
      let max_child_index = parent_index * 2 + 1;
      while (max_child_index <= mIndex) {
          if (max_child_index < mIndex && heap[max_child_index + 1] > heap[max_child_index]) {
              max_child_index = max_child_index + 1;
          }
          if (heap[parent_index] >= heap[max_child_index]) {
              break;
          } else {
              let temp = heap[parent_index];
              heap[parent_index] = heap[max_child_index];
              heap[max_child_index] = temp;
              parent_index = max_child_index;
              max_child_index = 2 * max_child_index + 1;
          }
      }
  }
  
  this.result = function() {
    return heap;
  }

  this.start = function(len) {
    heap = new Array(len);
    maxSize = len;
    size = 0;
  }

  this.init = function(arr) {
      size = arr.length;
      heap = arr.slice();
      let last = Math.floor((size - 2) / 2);
      while (last >= 0) {
          shif_down(last, size - 1);
          last -= 1;
      }
  }

  this.insert = function(item) {
      heap[size] = item;
      shif_up(size);
      if (size < maxSize) size++;
  }

  this.size = function() {
      return size;
  }

  this.back = function() {
      return heap;
  }

  this.top = function() {
      return heap[0];
  }

  this.pop = function() {
      if (size === 0) return null;
      const max = heap[0];
      heap[0] = heap[size - 1];
      heap[size - 1] = max;
      size--;
      shif_down(0, size - 1);
      return max;
  }
}

// const test = '1318073 678016441 874092905 2091308855 763075536 238193668 411460068 512019536 545368023 540157165 1008096286 1575787619 1494177729 2118806932 1214271570 725179549 1122983318 1894335790 1656555755 1754574577 2036958682 2127751547 1222560585 452217599 476559660 1571685957 1277021199 943723475 1993711230 1117298469 838359115 661437838 1410386394 439628372 1490302524 1412745907 1441257717 1750395106 512066289 1331145694 81044612 612161686 7303825 348818896 2116312409 91012802 643806550 1434072264 1243570767 1383028365 194735427 153243561 731636974 131259296 609282403 1007318325 1385498974 916071597 1105065436 1396203596 440027203 1751004200 11690912 1068146107 1515815076 705477971 711043510 1909260662 1243292760 1005532010 1427673827 1079222458 844969044 85364897 208747683 1581512630 1077673491 581284439 744456070 833441068 1755684142 1358064814 1539128582 1693549559 739180775 218387530 389663987 1404989806 2080970677 955493297 93130413 1874756275 1148645141 1548381904 447826182 1831941786 972550263 1154232924 972970317 1771629561 917266072 1853253938 536119878 1872890381 2000819388 325025743 1656748280 695374958 560912132 1944475841 399319641 478809412 728562175 2140203678 52128896 2104510743 1456391511 553516871 58892093 1956929431';
// const testArr = test.split(' ');
const test = [];
for (let i = 100; i > 0; i--) {
  test.push(i);
}

const minHeap = new MinHeap(10);
for (let i = 0; i < test.length; i++) {
  minHeap.insert(test[i]);
  if (minHeap.size() > 10) minHeap.pop();
}
console.log('size', minHeap.size());
console.log('res', minHeap.res());

// var lastStoneWeight = function(stones) {
//   stones.sort((a, b) => b - a);
//   while (stones.length > 5) {
//     const item1 = stones.shift();
//     const item2 = stones.shift();
//     if (item1 !== item2) {
//       stones.push(item1 - item2);
//       stones.sort((a, b) => b - a);
//     }
//   }
//   return stones.sort((a, b) => a - b).join('');
// }
// console.log('result', lastStoneWeight(testArr)); // 65547561595630

// class Heap {
//     constructor(data, type = 'min') {
//         this.data = data;
//         this.compartor = (a, b) => type === 'min' ? a - b : b - a;
//         this.init();
//     }

//     init() {
//         if (this.size() < 2) return;
//         for (let i = 1; i < this.size(); i++) {
//             this.bubbleUp(i)
//         }
//     }

//     size() {
//         return this.data.length;
//     }

//     // 添加
//     append(val) {
//         this.data.push(val);
//         this.bubbleUp(this.size() - 1); // 从最尾部进行调整
//     }

//     // 查看顶部元素
//     top() {
//         return this.size() > 0 ? this.data[0] : null;
//     }

//     pop() {
//         if (!this.size()) return null;
//         let res = this.data[0];
//         this.data[0] = this.data.pop();
//         this.bubbleDown(0);
//         return res;
//     }

//     swap(i, j) {
//         [this.data[i], this.data[j]] = [this.data[j], this.data[i]];
//     }

//     bubbleUp(index) {
//         while (index != 0) {
//           const parentIndex = (index - 1) >> 1;
//           if (this.compartor(this.data[index], this.data[parentIndex]) < 0) {
//             this.swap(index, parentIndex);
//             index = parentIndex;
//           } else {
//             break;
//           }
//         }
//     }
    
//     bubbleDown(index) {
//         let lastIndex = this.size() - 1;
//         while (index < lastIndex) {
//           let minIndex = index * 2 + 1;
//           if (minIndex < lastIndex
//             && this.compartor(this.data[minIndex], this.data[minIndex + 1]) > 0) {
//             minIndex = minIndex + 1;
//           }
//           if (minIndex <= lastIndex
//             && this.compartor(this.data[minIndex], this.data[index]) < 0) {
//             this.swap(minIndex, index);
//             index = minIndex;
//           } else {
//             break;
//           }
//         }
//     }
// }
