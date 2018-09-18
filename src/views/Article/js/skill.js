import './public.js';

/* eslint no-bitwise: ["error", { "int32Hint": true, "allow": ["&"] }] */
export const articleInit = () => {
  window.log('\\nstring 强制转化为数字\\n ');
  window.log('(func_color)\'str\' * 1 或者 +\'str\'</div>');
  window.log('\'32\' * 1 === ', '32' * 1, window.typeIs('32' * 1));
  window.log('+\'\' === ', +'', window.typeIs(+''));
  window.log('+null === ', +null, window.typeIs(+null));
  window.log('+\'32\' === ', +'32', window.typeIs(+'32'));
  window.log('+\'ds\' === ', +'ds', window.typeIs(+'ds'));
  window.log('+undefined === ', +undefined, window.typeIs(+undefined));
  /* 使用Boolean过滤数组中的所有假值 */
  window.log('\\n使用 Boolean 过滤数组中的所有假值\\n ');
  const compact = arr => arr.filter(Boolean);
  const newArr = compact([0, 1, false, 2, '', 3, 'e' * 23, NaN, 4, null, undefined, 5, {}]);
  window.log(`<xmp>const compact = arr => arr.filter(Boolean);
const newArr = compact([0, 1, false, 2, '', 3, 'e' * 23, NaN, 4, null, undefined, 5, {}]);</xmp>`);
  window.log('// 结果如下:');
  window.log('newArr === ', JSON.stringify(newArr), '// 其中 0，false, \'\', NaN, null, undefined被排除');
  window.log('[ 0, ...newArr ] === ', JSON.stringify([0, ...newArr]));
  /* 取整 | 0 */
  window.log('\\n使用 x | 0 取整\\n ');
  window.log('必须引用 /* eslint no-bitwise: ["error", { "int32Hint": true }] */');
  window.log('1.3 | 0 === ', 1.3 | 0);
  window.log('-1.3 | 0 === ', -1.3 | 0);
  window.log('-352.54543 | 0 === ', -352.54543 | 0);
  /* 判断奇偶数 & 1, % 2 */
  window.log('\\n使用 & 1, % 2 判断奇偶数\\n ');
  window.log('必须引用 /* eslint no-bitwise: ["error", { "allow": ["&"] }] */');
  window.log('方法一:');
  window.log('<xmp>const isOddNumber1 = num => ( !!(num & 1) ? \'奇数\' : \'偶数\' );</xmp>');
  const isOddNumber1 = num => (!!(num & 1) ? '奇数' : '偶数');
  window.log('isOddNumber1(0) === 0 是 ', isOddNumber1(0));
  window.log('isOddNumber1(1) === 1 是 ', isOddNumber1(1));
  window.log('isOddNumber1(2) === 2 是 ', isOddNumber1(2));
  window.log('isOddNumber1(3) === 3 是 ', isOddNumber1(3));
  window.log('方法二:');
  window.log('<xmp>const isOddNumber2 = num => ( !!(num % 2) ? \'奇数\' : \'偶数\' );</xmp>');
  const isOddNumber2 = num => (!!(num % 2) ? '奇数' : '偶数');
  window.log('isOddNumber2(0) === 0 是 ', isOddNumber2(0));
  window.log('isOddNumber2(1) === 1 是 ', isOddNumber2(1));
  window.log('isOddNumber2(2) === 2 是 ', isOddNumber2(2));
  window.log('isOddNumber2(3) === 3 是 ', isOddNumber2(3));
  /* 数组 reduce 方法同时实现 map 和 filter */
  window.log('\\n使用 reduce 方法同时实现 map 和 filter\\n ');
  const numbers = [10, 20, 30, 40];
  window.log('const numbers = [10, 20, 30, 40];');
  const double50 = numbers.reduce((arr, num) => {
    if (num * 2 > 50) {
      arr.push(num * 2);
    }
    return arr;
  }, []);
  window.log(`<xmp>const double50 = numbers.reduce((arr, num) => {
    if (num * 2 > 50) {
      arr.push(num * 2);
    }
    return arr;
  }, []);</xmp>`);
  window.log('// 结果如下:');
  window.log('(func_color)double50 === ', JSON.stringify(double50), '</div>');
  /* 统计数组中相同项的个数 */
  window.log('\\n统计数组中相同项的个数\\n ');
  const cars = ['a', 'b', 'b', 'c', 'a', 'd', 'c', 'b'];
  window.log('const cars = [\'a\', \'b\', \'b\', \'c\', \'a\', \'d\', \'c\' , \'b\'];');
  const carsObj = cars.reduce((obj, name) => {
    obj[name] = obj[name] ? obj[name] += 1 : 1;
    return obj;
  }, {});
  window.log(`<xmp>const carsObj = cars.reduce((obj, name) => {
    obj[name] = obj[name] ? obj[name] += 1 : 1;
    return obj;
  }, {});</xmp>`);
  window.log('// 结果如下:');
  window.log('(func_color)carsObj === ', carsObj, '</div>');
  /* 快速查找数组中是否包含某个元素 */
  window.log('\\n快速查找数组中是否包含某个元素 includes\\n ');
  window.log(`<xmp>const arr = [1,2,3,4,NaN]
    arr.includes(3); // true
    arr.includes(NaN); // true
  </xmp>`);
};
