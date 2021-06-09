// 二叉搜索树
const TreeNode = function(data) {
  this.data = data;
  this.left = null;
  this.right = null;
  this.parent = null;
}

function BinarySearchTree() {
  let root = null;
  let res = [];

  this.getRoot = function() {
    return root;
  }

  this.print = function() {
    return res.join(' ');
  }

  this.pre_order = function(node) {
    if (!node) return;
    res.push(node.data);
    // console.log(node.data); // 当前节点
    this.pre_order(node.left); // 处理左子树
    this.pre_order(node.right); // 处理右子数
  }

  function insert_data(node, data) {
    if (!root) {
      root = new TreeNode(data);
      return true;
    }
    if (data === node.data) return false;
    if (data < node.data) {
      // 插入的数据小于关键码
      if (node.left) return insert_data(node.left, data);
      node.left = new TreeNode(data);
      node.left.parent = node;
      return true;
    }
    if (data > node.data) {
      // 插入的数据大于关键码
      if (node.right) return insert_data(node.right, data);
      node.right = new TreeNode(data);
      node.right.parent = node;
      return true;
    }
  }

  this.insert = function(data) {
    return insert_data(root, data);
  }

  function search_data(node, data) {
    if (!node) return null;
    if (data === node.data) return node;
    if (data < node.data) return search_data(node.left, data);
    if (data > node.data) return search_data(node.right, data);
  }

  this.search = function(data) {
    return search_data(root, data);
  }

  function link_parent(parent, node, next_node) {
    if (!parent) {
      root = next_node;
      root.parent = null;
    } else {
      if (parent.left && parent.left.data === node.data) {
        parent.left = next_node;
      } else {
        parent.right = next_node;
      }
      next_node.parent = parent;
    }
  }

  function remove_data(node, data) {
    if (!node) return false;
    if (data < node.data) return remove_data(node.left, data);
    if (data > node.data) return remove_data(node.right, data);
    if (data === node.data) {
      if (node.left && node.right) {
        let temp = node.right;
        while (temp.left) {
          temp = temp.left
        }
        node.data = temp.data;
        return remove_data(node.right, temp.data);
      } else {
        let parent = node.parent;
        if (!node.left) {
          link_parent(parent, node, node.right);
        } else {
          link_parent(parent, node, node.left);
        }
      }
    }
  }

  this.remove = function(data) {
    return remove_data(root, data);
  }
}

const arr1 = [100,80,90,60,120,110,130];
const arr2 = [100,120,110,130,80,,60,90];
const arr3 = [100,60,80,90,120,110,130];
const arr4 = [100,80,60,90,120,130,110];
const tree1 = new BinarySearchTree();
const tree2 = new BinarySearchTree();
const tree3 = new BinarySearchTree();
const tree4 = new BinarySearchTree();
for (let item of arr1) {
  tree1.insert(item);
}
tree1.pre_order(tree1.getRoot())
for (let item of arr2) {
  tree2.insert(item);
}
tree2.pre_order(tree2.getRoot())
for (let item of arr3) {
  tree3.insert(item);
}
tree3.pre_order(tree3.getRoot())
for (let item of arr4) {
  tree4.insert(item);
}
tree4.pre_order(tree4.getRoot())
console.log('tree1', tree1.print());
console.log('tree2', tree2.print());
console.log('tree3', tree3.print());
console.log('tree4', tree4.print());
// tree.insert(5);
// tree.insert(2);
// tree.insert(7);
// tree.insert(3);
// tree.insert(4);
// tree.insert(1);
// tree.insert(6);
// tree.pre_order(tree.getRoot())
// console.log('tree', tree.print());
// 1.利用二叉搜索树实现一个简单的字典
// function MyDict() {
//   const bst = new BinarySearchTree();
  
//   this.set = function(key, value) {
//     // 向字典中添加key-value对
//   }
//   this.get = function(key) {
//     // 返回key所对应的value
//   }
//   this.hasKey = function(key) {
//     // 是否存在key
//   }
// }

// const md = new MyDict();
// md.set('name', 'javascript');
// md.set('age', 20);
// console.log(md.hasKey('class'));
// console.log(md.hasKey('name'));
// console.log(md.get('name'));
// console.log(md.get('age'));

// 2. 实现二叉搜索树返回最大值和最小值的功能

// AVL 树
// 左右子树的高度绝对值不能超过1
