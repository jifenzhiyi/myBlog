const { throttle } = require('./throttle');
it('节流Throttle', (done) => {
  let mockFn = jest.fn();
  let fn = throttle(mockFn, 100);
  fn(1);
  fn(2);
  fn(3);
  expect(mockFn.mock.calls.length).toBe(1);
  mockFn = jest.fn();
  fn = throttle(mockFn, 100);
  fn(1);
  setTimeout(() => {
    fn(2);
    expect(mockFn.mock.calls.length).toBe(2);
    done();
  }, 150);
});