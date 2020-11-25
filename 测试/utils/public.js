// 获取当前时间方法1 格式：yyyy-MM-dd HH:mm:ss
const dateToFormat = (date, isRegExp = true) => {
  let result = date.toLocaleString('zh', { hour12: false }).replace(/\b\d\b/g, '0$&');
  isRegExp && (result = result.replace(new RegExp('/', 'gm'), '-'));
  return result;
}

// 获取当前时间方法2 格式：yyyy-MM-dd HH:mm:ss
const obtainDate = (spec = '-') => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let second = date.getSeconds();
  let arr = [month, day, hours, minutes, second];
  arr = arr.map(item => item < 10 ? `0${item}` : item);
  return `${year}${spec}${arr[0]}${spec}${arr[1]} ${arr[2]}:${arr[3]}:${arr[4]}`;
}

// 比较两个日期的大小
const compareDate = (dateOne, dateTwo) => {
  let result = '';
  Number(dateOne.replace(/\-/g, '')) > Number(dateTwo.replace(/\-/g, '')) ? result = '>' : result = '<';
  Number(dateOne.replace(/\-/g, '')) === Number(dateTwo.replace(/\-/g, '')) && (result = '=');
  return result;
}

// 比较两个时间的大小
const compareTime = (timeOne, timeTwo) => {
  let result = '';
  Date.parse(timeOne) > Date.parse(timeTwo) ? result = '>' : result = '<';
  Date.parse(timeOne) === Date.parse(timeTwo) && (result = '=');
  return result;
}

const timeArr = (diff) => {
  const h = parseInt(diff / (60 * 60) % 24);
  const m = parseInt(diff / 60 % 60);
  const s = parseInt(diff % 60);
  const arr = [h, m, s];
  return arr.map(item => item < 10 ? `0${item}` : item);
}

// 比较两个时间相差几年,几个月,几天，几小时，几分钟，几秒
const disparityFewDate = (timeOne, timeTwo) => {
  const one = timeOne.split(' ')[0].split('-').map(item => Number(item));
  const two = timeTwo.split(' ')[0].split('-').map(item => Number(item));
  const arrTime = [0, 0, 0].map((value, index) => two[index] - one[index]);
  let result = arrTime[0] + ' 年 ' + arrTime[1] + ' 个月 ' + arrTime[2] + ' 天 ';
  const date1 = Date.parse(timeOne);
  const date2 = Date.parse(timeTwo);
  const diff = (date2 - date1) / 1000;
  if (arrTime[2] <= 1 && diff > 0) {
    const d = parseInt(diff / (24 * 60 * 60));
    const arr = timeArr(diff);
    result = `${d} 天 ${arr[0]} 时 ${arr[1]} 分 ${arr[2]} 秒`;
  }
  return result;
}

// 设置活动的倒计时
const countDown = (time) => {
  const startTime = new Date().getTime();
  const endTime = new Date(time).getTime();
  if (endTime > startTime) {
    const diff = (endTime - startTime) / 1000;
    const d = parseInt(diff / (24 * 60 * 60));
    const arr = timeArr(diff);
    document.querySelector(".time").innerHTML = `距离活动结束还有 ${d} 天 ${arr[0]} 时 ${arr[1]} 分 ${arr[2]} 秒`;
  } else {
    document.querySelector(".time").innerHTML = "活动已结束";
  }
}

// 数组去重
const changeReArr = (arr) => {
  return [...new Set(arr)];
  // return Array.from(new Set(arr));
}

// 数组排序
const sortArr = (arr, asc = true) => {
  return arr.sort((a, b) => asc ? a - b : b - a);
}

// 数组对象排序
const sortArrObj = (arrObj, prop, asc = true) => {
  return arrObj.sort((a, b) => {
    return asc ? a[prop] - b[prop] : b[prop] - a[prop];
  })
}

// 获取数组中的最大值
const maxArr1 = arr => Math.max(...arr);
const maxArr2 = arr => Math.max.apply(null, arr);

// 数组的“短路运算” every some
// 情况一：全部满足
const allTrueArr = (arr, condition) => arr.every(item => condition(item));
// 情况二：有一个满足
const oneTrueArr = (arr, condition) => arr.some(item => condition(item));
