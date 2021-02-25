// 并查集
class MyUnionFind {
  constructor(size) {
    // 存储对应的数据编号
    this.ids = new Array(size);

    // 模拟存入的数据
    const len = this.ids.length;
    for (let i = 0; i < len; i++) {
      this.ids[i] = i;
    }
  }

  unionElements(q, p) {
    const qId = this.find(q);
    const pId = this.find(p);

    if (qId === pId) return;

    for (let i = 0; i < this.ids.length; i++) {
      if (pId === this.ids[i]) this.ids[i] = qId;
    }
  }

  isConnected(q, p) {
    return this.ids[q] === this.ids[p];
  }

  find(index) {
    if (index < 0 || index >= this.ids.length) throw new Error('index is out of bound.');
    return this.ids[index];
  }

  getSize() {
    return this.ids.length;
  }
}
