// 深copy
function deepCopy(obj) {
  let result;
  if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      result = [];
      for (let i = 0; i < obj.length; i++) {
        result.push(deepCopy(obj[i]));
      }
    } else if (obj === null || obj.constructor === RegExp) {
      result = obj;
    } else {
      result = {};
      Object.keys(obj).forEach((key) => {
        result[key] = deepCopy(obj[key]);
      })
    }
  } else {
    result = obj;
  }
  return result;
}

// 测试用例
const arr1 = [1,[1,2,3]];
const arr2 = deepCopy(arr1);
const arr3 = arr1.slice(); // 一维数据是深copy,二维以上的是浅copy
arr1[0] = 0;
arr1[1][1] = 0;
console.log('arr1', arr1, 'arr2', arr2, 'arr3', arr3);
// const obj1 = { name: '1' };
// const obj2 = deepCopy(obj1);
// obj1.name = '2';
// console.log('obj1', obj1, 'obj2', obj2);

// 范围随机数
function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
console.log('num', getRandomNum(2, 17));
