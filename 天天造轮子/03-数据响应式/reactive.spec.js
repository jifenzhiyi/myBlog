const { reactive, effect } = require('./reactive');

describe('数据响应式', () => {
  it('测试数据改变时 是否被响应', () => {
    const data = reactive({
      name: 'abc',
      age: { n: 5 },
    });
    // Mock一个响应函数
    const fn = jest.fn();

    // 设置响应函数
    effect(fn);

    // 改变数据
    data.name = 'efg';

    // 确认fn生效
    expect(fn).toBeCalled();
  });
});

