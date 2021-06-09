// 二分算法（总）
// 二分查找
function binary_search(arr, len, x) {
  let head = 0, tail = len - 1, mid;
  let count = 0;
  while (head <= tail) {
    mid = (head + tail) >> 1;
    if (arr[mid] === x) return mid;
    if (arr[mid] < x) head = mid + 1;
    else tail = mid - 1;
    count++;
    console.log('count', count, 'mid', mid);
  }
  return -1;
}

const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
console.log(binary_search(arr, 20, 0));
 