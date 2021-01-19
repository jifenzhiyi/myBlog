module.exports.createStore = opts => {
  function Store(opts) {
    this.state = opts.state;
    this.mutations = opts.mutations;
  }
  Store.prototype.commit = function(type) {
    this.mutations[type](this.state);
    this.effect();
  }
  Store.prototype.effect = function(fn) {
    this.effect = fn;
  }
  return new Store(opts);
}