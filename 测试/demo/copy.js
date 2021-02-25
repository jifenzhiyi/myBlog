const deepCopy = (target) => {
  // 定一个变量
  let result;
  if (typeof target === 'object') {
    if (Array.isArray(target)) {
      result = [];
      for (let i = 0; i < target.length; i++) {
        result.push(deepCopy(target[i]));
      }
    } else if (target === null || target.constructor === RegExp) {
      result = target;
    } else {
      result = {};
      for (let key in target) {
        result[key] = deepCopy(target[key]);
      }
    }
  } else {
    result = target;
  }
  return  result;
};

const arr1 = [
  { name: '张三', age: 18 },
  { name: '李四', age: 22 },
  { name: '王五', age: 26 },
];

const arr2 = deepCopy(arr1);
arr2[0].age += 10;
console.log('arr1', arr1);
console.log('arr2', arr2);

const obj1 = {
  name: '张三',
  product: ['vue', 'node'],
  tag: {
    sex: '男',
  },
};

const obj2 = deepCopy(obj1);
obj2.name = '李四';
obj2.product = ['react', 'react-native'];
obj2.tag.sex = '女';
console.log('obj1', obj1);
console.log('obj2', obj2);
