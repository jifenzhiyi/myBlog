// 并查集
// quick-find
class UnionSet1 {
  constructor(size) {
    this.parent = new Array(size);
    for (let i = 0; i < size; i++) {
      this.parent[i] = i;
    }
    this.size = size;
  }

  find(x) {
    return this.parent[x];
  }

  merge(a, b) {
    if (this.parent[a] == this.parent[b]) return;
    const cb = this.parent[b];
    for (let i = 0; i < this.size; i++) {
      if (this.parent[i] == cb) this.parent[i] = this.parent[a];
    }
  }
}
// 测试案例
// const us = new UnionSet(10);
// console.log('us', us.parent);
// us.merge(3, 4);
// us.merge(3, 8);
// console.log('us', us.parent);
// us.merge(6, 5);
// console.log('us', us.parent);

// quick-Union
class UnionSet2 {
  constructor(size) {
    this.boss = new Array(size);
    for (let i = 0; i < size; i++) {
      this.boss[i] = i;
    }
  }

  find(x) {
    if (this.boss[x] === x) return x;
    return this.find(this.boss[x]);
  }

  merge(a, b) {
    const fa = this.find(a), fb = this.find(b);
    if (fa === fb) return;
    this.boss[fa] = fb;
  }
}

// 测试案例
// const us2 = new UnionSet2(10);
// console.log('us2', us2.boss);
// us2.merge(3, 4);
// us2.merge(3, 8);
// console.log('us2', us2.boss);
// console.log(us2.find(3), us2.find(4), us2.find(8));

// 按秩优化
class UnionSet3 {
  constructor(n) {
    this.parent = new Array(n);
    this.size = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    return this.find(this.parent[x]);
  }

  merge(a, b) {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return;
    if (this.size[ra] < this.size[rb]) {
      this.parent[ra] = rb;
      this.size[rb] += this.size[ra];
    } else {
      this.parent[rb] = ra;
      this.size[ra] += this.size[rb];
    }
  }
}

// 测试案例
// const us3 = new UnionSet3(10);
// console.log('us3 parent', us3.parent, 'size', us3.size);
// us3.merge(3, 4);
// us3.merge(3, 8);
// console.log('us3 parent', us3.parent, 'size', us3.size);
// console.log(us3.find(3), us3.find(4), us3.find(8));

// 路径压缩 + 按秩优化
class UnionSet4 {
  constructor(n) {
    this.parent = new Array(n);
    this.size = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }
  }

  find(x) {
    if (this.parent[x] === x) return x;
    const root = this.find(this.parent[x]);
    this.parent[x] = root;
    return root;
  }

  merge(a, b) {
    const ra = this.find(a), rb = this.find(b);
    if (ra === rb) return;
    if (this.size[ra] < this.size[rb]) {
      this.parent[ra] = rb;
      this.size[rb] += this.size[ra];
    } else {
      this.parent[rb] = ra;
      this.size[ra] += this.size[rb];
    }
  }
}

// 路径压缩
class UnionSet5 {
  constructor(n) {
    this.fa = new Array(n + 1);
    for (let i = 0; i <= n; i++) {
      this.fa[i] = i;
    }
  }

  get(x) {
    // 路径压缩
    return this.fa[x] = (this.fa[x] == x ? x : this.get(this.fa[x]));
  }

  merge(a, b) {
    this.fa[this.get(a)] = this.get(b);
  }
}

// 标准版
class UnionSet {
  constructor(size) {
    this.fa = new Array(size + 1);
    for (let i = 0; i <= size; i++) {
      this.fa[i] = i;
    }
  }

  find(x) {
    // 路径压缩
    return this.fa[x] = (this.fa[x] === x ? x : this.find(this.fa[x]));
  }

  merge(a, b) {
    this.fa[this.find(a)] = this.find(b);
  }
}

// 练习题1:朋友圈
// 题目：所谓一个朋友圈，其中的人不一定互相都认识
// 例如：小张的朋友是小李，小李的朋友是小王，那么他们三个人属于一个朋友圈
// 现在给出一些人的朋友关系，人按照从1到n编号在这中间会进行询问两人是否属于一个朋友圈，
// 请你编写一个程序，实现这个过程
// 输入：第一行输入两个整数n, m, 分别代表人数和操作数
// 接下来的m行，每行三个整数 a,b,c
// 当 a = 1 时，代表新增一条已知信息, b和c是朋友
// 当 a = 2 时，代表根据以上信息，询问 b和c是否为朋友
// 输出：对于每个 a = 2 的操作，输出yes或者no来代表两个人是否为朋友关系
// function pyq(m, n) {
//   const us = UnionSet(n);
//   for (let i = 0; i < m; i++) {
//     let a, b, c;
//     switch(a) {
//       case 1: us.merge(b, c); break;
//       case 2:
//         if (us.find(b) === us.find(c)) {
//           console.log('yes');
//         } else {
//           console.log('no');
//         }
//         break;
//     }
//   }
// }
// 测试案例
let m = 6, n = 5; // 6个人 操作5次
// const us = new UnionSet1(6);
// const us = new UnionSet2(6);
// const us = new UnionSet3(6);
// const us = new UnionSet4(6);
// const us = new UnionSet5(6);
const us = new UnionSet(m);
const option = (a, b, c) => {
  switch(a) {
    case 1: us.merge(b, c); break;
    case 2: 
      if (us.find(b) === us.find(c)) {
        console.log('yes');
      } else {
        console.log('no');
      }
      break;
  }
}
const ops = [
  [1,1,2],
  [2,1,3],
  [1,2,4],
  [1,4,3],
  [2,1,3],
];
for (let i = 0; i < n; i++) {
  option(...ops[i]);
}