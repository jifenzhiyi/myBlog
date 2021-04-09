// 堆 完全二叉树
function MinHeap(size) {
  let heap = new Array(size); // 数组
  let curr_size = 0; // 当前堆的大小
  let max_size = size; // 堆的最大容量

  function shif_down(start, m) {
    let parent_index = start;
    let min_child_index = parent_index * 2 + 1; // 一定有左孩子，先从左开始
    while (min_child_index <= m) {
      // if (min_child_index < m && heap[min_child_index] > heap[min_child_index + 1]) {
      // TODO 关键码需要更新为rate
      if (min_child_index < m && heap[min_child_index].data.rate > heap[min_child_index + 1].data.rate) {
        min_child_index = min_child_index + 1;
      }
      // if (heap[parent_index] <= heap[min_child_index]) {
      // TODO 关键码需要更新为rate
      if (heap[parent_index].data.rate <= heap[min_child_index].data.rate) {
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

  this.init = function(arr) {
    if (arr.length > max_size) {
      console.log('数组长度大于堆的容量，无法插入该数据');
      return false;
    }
    curr_size = arr.length;
    // curr_size = max_size = arr.length;
    // head = new Array(curr_size);
    for (let i = 0; i < curr_size; i++) {
      heap[i] = arr[i];
    }
    let curr_pos = Math.floor((curr_size - 2) / 2); // 堆的最后一个分支节点
    while (curr_pos >= 0) {
      shif_down(curr_pos, curr_size - 1); // 局部自上而下下滑调整
      curr_pos -= 1;
    }
  }

  this.getArr = function() {
    return heap;
  }

  function shif_up(start) {
    let child_index = start;
    let parent_index = Math.floor((child_index - 1) / 2);
    while (child_index > 0) {
      if (heap[parent_index].data.rate <= heap[child_index].data.rate) {
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
    if (curr_size === max_size) {
      console.log('当前堆已经放满，无法插入新的数据');
      return false;
    }
    heap[curr_size] = item;
    shif_up(curr_size);
    curr_size++;
    return true;
  }

  this.remove_min = function() {
    if (curr_size <= 0) return null;
    const min_val = heap[0];
    heap[0] = heap[curr_size - 1];
    curr_size--;
    shif_down(0, curr_size - 1);
    // heap.pop(); // TODO 需不需要删除最后一个元素
    return min_val;
  }

  this.size = function() {
    return curr_size;
  }

  this.get_min = function() {
    return curr_size > 0 ? heap[0] : null;
  }
}

// [53, 17, 78, 9, 45, 65, 87, 23]
// const heap = new MinHeap(8);
// heap.init([53, 17, 78, 9, 45, 65, 87, 23]);
// console.log(heap.getArr());
// // heap.insert(11);
// // console.log(heap.getArr());
// console.log('remove', heap.remove_min(), heap.getArr());

// function MaxHeap(size) {
//   let heap = new Array(size); // 数组
//   let curr_size = 0; // 当前堆的大小
//   let max_size = size; // 堆的最大容量

//   function shif_down(start, m) {
//     let parent_index = start;
//     let min_child_index = parent_index * 2 + 1; // 一定有左孩子，先从左开始
//     while (min_child_index <= m) {
//       if (min_child_index < m && heap[min_child_index] < heap[min_child_index + 1]) {
//         min_child_index = min_child_index + 1;
//       }
//       if (heap[parent_index] >= heap[min_child_index]) {
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
//     if (arr.length > max_size) {
//       console.log('数组长度大于堆的容量，无法插入该数据');
//       return false;
//     }
//     curr_size = arr.length;
//     for (let i = 0; i < curr_size; i++) {
//       heap[i] = arr[i];
//     }
//     let curr_pos = Math.floor((curr_size - 2) / 2); // 堆的最后一个分支节点
//     while (curr_pos >= 0) {
//       shif_down(curr_pos, curr_size - 1); // 局部自上而下下滑调整
//       curr_pos -= 1;
//     }
//   }

//   this.getArr = function() {
//     return heap;
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
//     if (curr_size === max_size) {
//       console.log('当前堆已经放满，无法插入新的数据');
//       return false;
//     }
//     heap[curr_size] = item;
//     shif_up(curr_size);
//     curr_size++;
//     return true;
//   }

//   this.remove_max = function() {
//     if (curr_size <= 0) return null;
//     const max_val = heap[0];
//     heap[0] = heap[curr_size - 1];
//     curr_size--;
//     shif_down(0, curr_size - 1);
//     // heap.pop(); // TODO 需不需要删除最后一个元素
//     return max_val;
//   }

//   this.size = function() {
//     return curr_size;
//   }

//   this.get_max = function() {
//     return curr_size > 0 ? heap[0] : null;
//   }
// }

// const heapMax = new MaxHeap(8);
// heapMax.init([5, 4, 3, 2, 1]);
// console.log(heapMax.getArr());
// heapMax.insert(11);
// console.log(heapMax.getArr());
// console.log('remove', heapMax.remove_max(), heapMax.getArr());

// 疑问：最大堆求最小k 真的比 最小堆求最小k快吗？ 同（最小堆求最大k 真的比 最大堆求最大k哪个更快）

// 哈夫曼树
// 1.概念
// 1.1 路径长度
// 路径 从树中的一个节点到另一个节点之间的分支构成了两点之间的路径
// 路径长度 树的的路径长度是从根节点到每个节点的路径长度之和
// 1.2 带权路径长度 WPL
// 外节点的带权路径长度为T的跟节点到该节点的路径长度与该节点上的权值的乘积
// 总结：
// 带权路径最小的二叉树就是哈夫曼树 节点权值越大，距离根节点就越近
// 1.3 哈夫曼算法
// 例如 { 7, 5, 2, 4 }
/*
 7 5  6   ===> 7   11    ===>   18
     2 4          5  6        7    11
                    2 4           5   6
                                     2  4
*/
/*
{ 5,7,2,3,6,8,9 }
*/
// 2.哈夫曼编码
// 在通信领域，经过哈夫曼编码的信息小于大量冗余数据，提高传输效率，是重要的数据压缩方法。
// var CodeNode = function(code, rate) {
//   this.code = code; // 字符
//   this.rate = rate; // 概率
// }
// var TreeNode = function(data) {
//   this.data = data;
//   this.leftChild = null;
//   this.rightChld = null;
//   this.parent = null;
// }
// var code_dict = { a: 0.12, b: 0.4, c: 0.15, d: 0.08, e: 0.25 };
// const forest = [];
// for (let key in code_dict) {
//   const item = new CodeNode(key, code_dict[key]);
//   forest.push(new TreeNode(item));
// }
// function HuffmanTree() {
//   let root = null;

//   this.init_tree = function(arr) {
//     const min_heap = new MinHeap();
//     min_heap.init(arr);
//     for (let i = 0; i < arr.length - 1; i++) {
//       const first = min_heap.remove_min();
//       const second = min_heap.remove_min();
//       const new_item = new CodeNode('', first.data.rate + second.data.rate);
//       const new_node = new TreeNode(new_item);
//       min_heap.insert(new_node);
//       new_node.leftChild = first;
//       new_node.rightChld = second;
//       first.parent = new_node;
//       second.parent = new_node;
//       root = new_node;
//     }
//   }

//   const get_code_from_tree = function(node, dict, code_str) {
//     if (!node.leftChild && !node.rightChld) {
//       dict[node.data.code] = code_str;
//       return;
//     }
//     if (node.leftChild) {
//       get_code_from_tree(node.leftChild, dict, code_str + '0');
//     }
//     if (node.rightChld) {
//       get_code_from_tree(node.rightChld, dict, code_str + '1');
//     }
//   }

//   this.get_code = function() {
//     const code_dict = {};
//     get_code_from_tree(root, code_dict, '');
//     return code_dict;
//   }

//   this.print = function() {
//     console.log(root);
//   }
// }
// // 备注：最小堆中的关键码
// // 测试案例
// const huffman = new HuffmanTree();
// huffman.init_tree(forest);
// // huffman.print();
// console.log(huffman.get_code());
