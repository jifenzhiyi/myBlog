var twoSum = function(nums, target) {
  let obj = {}; // 小本本
  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (num in obj) {
          return [obj[num], i]
      } else {
          obj[target - num] = i;
      }
      console.log('obj', obj);
  }
};

const arr = [2, 7, 11, 15];
const target = 18;

const result = twoSum(arr, target);
console.log('result', result);
