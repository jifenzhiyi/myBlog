module.exports.compose = (middlewares) => {
  if (middlewares.length === 0) {
    return (arg) => arg;
  }

  return function() {
    const fn = middlewares.reduce((a, b) => (arg) => a(() => b(arg)));
    return fn(() => {});
  }
}