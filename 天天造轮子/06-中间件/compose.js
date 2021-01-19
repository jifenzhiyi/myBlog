module.exports.compose = (middleware = []) => {
  return function () {
    function dispatch(i) {
      const fn = middleware[i];
      if (!fn) return;
      return fn(function next() {
        return dispatch(i + 1);
      })
    }
    return dispatch(0);
  }
};
