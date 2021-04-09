function Stack() {
  const items = [];
  const next = [];

  this.push = function (val) {
    this.isEmpty() ?  next.push(val) : next.push(Math.min(this.min(), val));
    items.push(val);
  }

  this.pop = function () {
    next.pop();
    return items.pop();
  }

  this.top = function () {
    return items[items.length - 1];
  }

  this.isEmpty = function () {
    return items.length === 0;
  }

  this.size = function () {
    return items.length;
  }

  this.clear = function () {
    items = [];
  }

  this.min = function () {
    return next[next.length - 1];
  }
}
// 树
// 节点 每个点都是节点
// 度 每根线都是度
// 度为0的节点就是叶节点

const BinTreeNode = function(data) {
  this.data = data; // 数据
  this.leftChild = null; // 左
  this.rightChild = null; // 右
  this.parentNode = null; // 父
}

function BinaryTree() {
  let root = null; // 根节点
  
  // 初始化
  // 用广义表来创建一棵树 A(B(D, E(G,)), C(,F))#
  /*
          A
      B       C
    D   E       F
       G
  */
  this.init = function(str) {
    const stack = new Stack();
    let k = 0; // 判断左右子树的标示
    let new_node = null;
    for (let i = 0; i < str.length; i++) {
      const item = str[i];
      if (item === '#') break;
      if (item === '(') {
        stack.push(new_node);
        k = 1;
      } else if (item === ',') {
        k = 2;
      } else if (item === ')') {
        stack.pop();
      } else {
        new_node = new BinTreeNode(item); // 创建节点
        if (root == null) {
          root = new_node;
        } else {
          const top = stack.top();
          new_node.parentNode = top;
          k === 1
            ? top.leftChild = new_node
            : top.rightChild = new_node;
        }
      }
    }
  }

  this.get = function() {
    return root;
  }

  // 前序遍历
  // 中 左 右
  this.pre_order = function(node) {
    if (!node) return;
    console.log(node.data); // 当前节点
    this.pre_order(node.leftChild); // 处理左子树
    this.pre_order(node.rightChild); // 处理右子数
  }

  // 中序遍历
  // 左 中 右
  this.in_order = function(node) {
    if (!node) return;
    this.in_order(node.leftChild); // 处理左子树
    console.log(node.data); // 当前节点
    this.in_order(node.rightChild); // 处理右子数
  }

  // 后序遍历
  // 左 右 中
  this.next_order = function(node) {
    if (!node) return;
    this.next_order(node.leftChild); // 处理左子树
    this.next_order(node.rightChild); // 处理右子数
    console.log(node.data); // 当前节点
  }

  const tree_node_count = function(node) {
    if (!node) return 0;
    const left_count = tree_node_count(node.leftChild);
    const right_count = tree_node_count(node.rightChild);
    return left_count + right_count + 1;
  }

  // 节点数量
  this.size = function() {
    return tree_node_count(root);
  }

  const tree_height = function(node) {
    if (!node) return 0;
    const left_height = tree_height(node.leftChild);
    const right_height = tree_height(node.rightChild);
    return Math.max(left_height, right_height) + 1;
  }

  // 高度
  this.height = function() {
    return tree_height(root);
  }

  const find_node = function(node, data) {
    if (!node) return null;
    if (node.data === data) return node;
    const left = find_node(node.leftChild, data);
    return left ? left : find_node(node.rightChild, data);
  }

  this.find = function(data) {
    return find_node(root, data);
  }
}

const tree = new BinaryTree();
tree.init('A(B(D, E(G,)), C(,F))#');
// console.log('中序遍历======');
// tree.in_order(tree.get());
// console.log('前序遍历======');
// tree.pre_order(tree.get());
// console.log('后序遍历======');
// tree.next_order(tree.get());
// console.log('size', tree.size());
// console.log('height', tree.height());
// console.log('find', tree.find('F'));

// 1.求一棵树的镜像 （左右子数互换位置）
const root_node = tree.get();
// 方法1
const mirror1 = function(node) {
  if (!node) return;
  // 互换位置
  const temp = node.leftChild;
  node.leftChild = node.rightChild;
  node.rightChild = temp;
  mirror1(node.leftChild);
  mirror1(node.rightChild);
}
// 方法2
const mirror2 = function(node) {
  if (!node) return;
  const left = mirror2(node.leftChild);
  const right = mirror2(node.rightChild);
  node.leftChild = right;
  node.rightChild = left;
  return node;
} 
// mirror1(root_node);
// tree.in_order(root_node);
// mirror2(root_node);
// tree.in_order(root_node);

// 2.使用非递归方式实现前序遍历 （中 左 右）
const pre_order = function(node) {
  const stack = new Stack();
  let cur = node;
  while (cur) {
    console.log(cur.data);
    if (cur.rightChild) stack.push(cur.rightChild);
    if (cur.leftChild) {
      cur = cur.leftChild;
    } else {
      cur = stack.pop();
    }
  }
}
// console.log('result======');
// pre_order(root_node);

// 3.使用非递归方式实现中序遍历 （左 中 右）
/*
        A
    B       C
  D   E       F
    G
*/
// 结果：D B G E A C F
const in_order = function(node) {
  const stack = new Stack();
  let cur = node;
  while (cur || stack.size() > 0) {
    while (cur) {
      stack.push(cur);
      cur = cur.leftChild;
    }
    cur = stack.pop();
    console.log(cur.data);
    cur = cur.rightChild;
  }
}
// console.log('result======');
// in_order(root_node);

// 4.使用非递归方式实现后序遍历 (左 右 中)
/*
        A
    B       C
  D   E       F
    G
*/
// 结果：D G E B F C A
const next_order = function(node) {
  const stack = new Stack();
  stack.push(node);
  let cur = null, res = [];
  while (stack.size() > 0) {
    cur = stack.pop();
    res.unshift(cur.data);
    cur.leftChild && stack.push(cur.leftChild);
    cur.rightChild && stack.push(cur.rightChild);
  }
  res.forEach((item) => {
    console.log(item);
  });
}
// console.log('result======');
// next_order(root_node);

// 5.寻找两个节点的最近公共祖先
// const lowest_common_ancestor = function(root_node, node1, node2) {
//   if (root_node == null || root_node == node1 || root_node == node2) return root_node;
//   const left = lowest_common_ancestor(root_node.leftChild, node1, node2);
//   const right = lowest_common_ancestor(root_node.rightChild, node1, node2);
//   if (!left) return right;
//   if (!right) return left;
//   return root_node;
// }
// const ans = lowest_common_ancestor(root_node, root_node.leftChild.leftChild, root_node.leftChild.rightChild);
// console.log('ans', ans.data);

// 6.分层打印二叉输
/*
结果:
A
B C
D E F
G
*/
// console.log('level_order ===========');
const level_order = function(root) {
  if (!root) return;
  // const queue = [], ret = [];
  // queue.push(node);
  // while (queue.length > 0) {
  //   const currentLevelSize = queue.length;
  //   ret.push([]);
  //   for (let i = 0; i < currentLevelSize; ++i) {
  //     const n = queue.shift();
  //     ret[ret.length - 1].push(n.data);
  //     n.leftChild && queue.push(n.leftChild);
  //     n.rightChild && queue.push(n.rightChild);
  //   }
  // }
  // console.log('ret', ret);
  const res = [];
  const dfs = (root, k, res) => {
    if (!root) return;
    if (k === res.length) res.push([]);
    res[k].push(root.data);
    dfs(root.leftChild, k + 1, res);
    dfs(root.rightChild, k + 1, res);
    return;
  }
  dfs(root, 0, res);
  console.log('res', res);
  return res;
}
level_order(root_node);

// 7.输出指定层的节点个数
/*
        A
    B       C
  D   E       F
    G
*/
const get_width = function(node, n) {
  if (n <= 0) return 0;
  if (n === 1) return 1;
  // const stack = new Stack();
  // stack.push(node);
  // let row = 1;
  // while (row < n) {
  //   let count = 0;
  //   while (stack.size() > 0) {
  //     const p = stack.pop();
  //     if (p.leftChild) {
  //       count++;
  //       stack.push(p.leftChild);
  //     }
  //     if (p.rightChild) {
  //       count++;
  //       stack.push(p.rightChild);
  //     }
  //   }
  //   row++;
  //   if (row === n - 1) return count;
  // }
}
// console.log(get_width(root_node, 1));
// console.log(get_width(root_node, 2));
// console.log(get_width(root_node, 3));
// console.log(get_width(root_node, 4));
