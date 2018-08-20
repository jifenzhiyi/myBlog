const LStorage = window.localStorage;
const { JSON } = window;
export const set = (key, obj) => {
  LStorage.setItem(key, JSON.stringify(obj));
};
export const get = (key) => {
  let string = LStorage.getItem(key);
  try {
    string = JSON.parse(string);
  } catch (err) {
    console.log('JSON.parse出错,原数据:', string);
  }
  return string || '';
};
export const remove = (key) => {
  LStorage.removeItem(key);
};
export const clear = () => LStorage.clear();
export const getUserID = () => get('user_id');
