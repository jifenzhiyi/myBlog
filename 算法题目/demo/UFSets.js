// 并查集
function UFSets() {
  let parent = [];

  this.init = function (size) {
    parent = new Array(size).fill(-1);
  }

  this.find = function (item) {
    while (parent[item] >= 0) {
      item = parent[item];
    }
    return item;
  }

  this.union = function (root1, root2) {
    parent[root1] += parent[root2];
    parent[root2] = root1;
    console.log('parent', parent);
  }

  this.buildRelation = function (i, j) {
    const root1 = this.find(i);
    const root2 = this.find(j);
    if (root1 !== root2) {
      this.union(root1, root2);
    }
  }

  this.isFriend = function (i, j) {
    const root1 = this.find(i);
    const root2 = this.find(j);
    return root1 == root2;
  }

  this.getFriendGroupCount = function () {
    return parent.filter((item) => item < 0).length;
  }
}

// const friends = [[0, 7], [1, 6], [4, 8], [8, 2], [9, 0], [3, 5], [1, 2]];
const friends = [[1,2], [3, 10], [7, 12], [3, 6], [4,8], [7,11], [5, 12], [1, 8], [9, 10]];
// 3,10,6,9
// 7,12,11,5
// 4,8,1,2
const uf = new UFSets();
uf.init(10);
for (let i = 0; i < friends.length; i++) {
  const [ x, y ] = friends[i];
  uf.buildRelation(x, y);
}
console.log('count', uf.getFriendGroupCount());
console.log('find(1)', uf.find(1));
console.log('find(3)', uf.find(3));
console.log('find(4)', uf.find(4));
console.log('find(5)', uf.find(5));
console.log('find(6)', uf.find(6));
console.log('find(12)', uf.find(12));
// console.log('6 2 isFriend', uf.isFriend(6, 2));

// parent[root1] += parent[root2];
// parent[root2] = root1;

// 1.创建一个数组 0 ～ 9
// arr [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
// 2.union 将集合2合并到集合1
// eq: [0, 7] 将 7 合并到 0
// 第一步 find(0) = 0 find(7) = 7
// 第二步 arr[0] += arr[7]
// 第三步 arr[7] = 0
// arr [-2, -1, -1, -1, -1, -1, -1, 0, -1, -1]
// eq: [9, 0]
// 第一步 find(9) = 9 find(0) = 0
// 第二步 arr[9] += arr[0]
// 第三步 arr[0] = 9
// arr [9, -1, -1, -1, -1, -1, -1, 0, -1, -3]



// 散列表
// const Node = function(key, value) {
//   this.key = key;
//   this.value = value;
//   this.next = null;
// }

// const NodeList = function() {
//   let len = 0, head = null, tail = null;

//   this.append = function(key, value) {
//     if (this.search(key)) return false;

//   }

//   this.search = function(key) {
//     let index = -1, curr_node = head;
//     while (curr_node) {
//       index += 1;
//       if (curr_node.key === key) {
//         return curr_node;
//       }
//       curr_node = curr_node.next;
//     }
//     return null;
//   }

//   this.remove_key = function(key) {
//     const index = this.indexOf(key);
//     if (index >= 0) {
//       this.remove(index);
//       return true;
//     }
//     return false;
//   }
// }