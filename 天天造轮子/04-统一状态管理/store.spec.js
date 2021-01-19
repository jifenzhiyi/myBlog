const { createStore } = require('./store');

it('store统一状态管理, commit修改状态', () => {
  const mockFn = jest.fn();
  const store = createStore({
    state: { num: 0 },
    mutations: {
      add(state) {
        state.num++;
      },
    },
  });
  store.effect(mockFn);
  store.commit('add');
  const calls = mockFn.mock.calls;
  expect(calls.length).toBe(1);
  expect(store.state.num).toBe(1);
});