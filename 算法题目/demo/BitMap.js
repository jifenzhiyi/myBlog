// 数据结构 BitMap
// 判断某个数是否存在
function FindClass(size = 10) {
  // const datas = []; // 方法1.存储数据
  // const datas = new Array(size).fill(0); // 方法2.存储数据
  // let value = 0; // 方法3 只能判断 0 ～ 32
  const datas = new Array(size).fill(0); // 方法4（3的进阶版）只能处理整数

  this.addMember = function(member) {
    // datas.push(member); // 方法1.最傻方法
    // datas[member] = 1; // 方法2.记录索引 空间需求大
    // value = 1 << member | value; // 方法3
    // 方法4
    const arr_index = Math.floor(member / 32);
    const bit_index = member % 32;
    datas[arr_index] = 1 << bit_index | datas[arr_index];
    // console.log('arr_index', arr_index, 'bit_index', bit_index, 'result', datas[arr_index]);
  }

  this.isExist = function(member) {
    // return datas.indexOf(member) >= 0; // 方法1.最傻方法 遍历查询慢
    // return datas[member] === 1; // 方法2.查找索引 空间需求大
    // return (value & 1 << member) != 0; // 方法3
    // 方法4
    const arr_index = Math.floor(member / 32);
    const bit_index = member % 32;
    return (1 << bit_index & datas[arr_index]) != 0;
  }
}

// const arr = [3, 9, 19, 20]; // [0, 3, 5, 9, 34, 23, 78, 99];
// const fc = new FindClass(100);
// arr.forEach((item) => fc.addMember(item));
// console.log(fc.isExist(3));
// console.log(fc.isExist(7));
// console.log(fc.isExist(78));

// 数组排序 (不能有重复数据)
// const arr = [0, 33, 6, 7, 73, 34, 10, 99, 22];
// const ret = [];
// const fc = new FindClass(4);
// arr.forEach((item) => fc.addMember(item));
// for (let i = 0; i < 100; i++) {
//   if (fc.isExist(i)) ret.push(i);
// }
// console.log('ret', ret);

// 位运算
// 按位于 &
// console.log(3 & 7); // 3
/*
0 1 1      3
1 1 1      7
------------
0 1 1      3
*/
// 按位或 |
// console.log(5 | 8); // 13
/*
0 1 0 1    5
1 0 0 0    8
------------
1 1 0 1   13
*/
// 左移 <<
// console.log(3 << 1); // 6
// console.log(4 << 1); // 8
/*
0 1 1      3
------------
1 1 0      6
*/

function murmurhash3_32_gc(key, seed) {
  var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;

  remainder = key.length & 3; // key.length % 4
  bytes = key.length - remainder;
  h1 = seed;
  c1 = 0xcc9e2d51;
  c2 = 0x1b873593;
  i = 0;

  while (i < bytes) {
      k1 =
          ((key.charCodeAt(i) & 0xff)) |
          ((key.charCodeAt(++i) & 0xff) << 8) |
          ((key.charCodeAt(++i) & 0xff) << 16) |
          ((key.charCodeAt(++i) & 0xff) << 24);
      ++i;

      k1 = ((((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16))) & 0xffffffff;
      k1 = (k1 << 15) | (k1 >>> 17);
      k1 = ((((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16))) & 0xffffffff;

      h1 ^= k1;
      h1 = (h1 << 13) | (h1 >>> 19);
      h1b = ((((h1 & 0xffff) * 5) + ((((h1 >>> 16) * 5) & 0xffff) << 16))) & 0xffffffff;
      h1 = (((h1b & 0xffff) + 0x6b64) + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16));
  }

  k1 = 0;

  switch (remainder) {
      case 3: k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
      case 2: k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
      case 1: k1 ^= (key.charCodeAt(i) & 0xff);

          k1 = (((k1 & 0xffff) * c1) + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
          k1 = (k1 << 15) | (k1 >>> 17);
          k1 = (((k1 & 0xffff) * c2) + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
          h1 ^= k1;
  }

  h1 ^= key.length;

  h1 ^= h1 >>> 16;
  h1 = (((h1 & 0xffff) * 0x85ebca6b) + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
  h1 ^= h1 >>> 13;
  h1 = ((((h1 & 0xffff) * 0xc2b2ae35) + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16))) & 0xffffffff;
  h1 ^= h1 >>> 16;

  return h1 >>> 0;
}


function BoolmFilter(max_count, error_rate) {
  // 位图映射变量
  let bitMap = [];
  // 最多可放的数量 max_count
  // 错误率 error_rate
  // 位图变量的长度
  let bit_size = Math.ceil(max_count * (-Math.log(error_rate) / (Math.log(2) * Math.log(2))));
  // 哈希数量
  var hash_ount = Math.ceil(Math.log(2) * (bit_size / max_count));

  const set_bit = function(bit) {
    let arr_index = Math.floor(bit / 32);
    let bit_index = Math.floor(bit % 32);
    bitMap[arr_index] |= (1 << bit_index);
  }

  const get_bit = function (bit) {
    let arr_index = Math.floor(bit / 32);
    let bit_index = Math.floor(bit % 32);
    return bitMap[arr_index] &= (1 << bit_index);
  }

  this.add = function(key) {
    if (this.isExist(key)) return -1;
    for (let i = 0; i < hash_ount; i++) {
      const hash_value = murmurhash3_32_gc(key, i);
      set_bit(Math.abs(Math.floor(hash_value % bit_size)));
    }
  }

  this.isExist = function(key) {
    for (let i = 0; i < hash_ount; i++) {
      const hash_value = murmurhash3_32_gc(key, i);
      if (!get_bit(Math.abs(Math.floor(hash_value % bit_size)))) return false;
    }
    return true;
  }
}

const bloomFilter = new BoolmFilter(1000000, 0.01);
bloomFilter.add('http://www.baidu.com');
bloomFilter.add('https://github.com/garycourt/murmurhash-js/blob/master/murmurhash3_gc.js');
console.log(bloomFilter.isExist('http://www.baidu.com'));
console.log(bloomFilter.isExist('http://jsrun.net/t/VcKKp'));
console.log(bloomFilter.isExist('https://github.com/garycourt/murmurhash-js/blob/master/murmurhash3_gc.js'));
