import './public.js';

export const articleInit = () => {
  window.log('\\n首先创建一个实例\\n ');
  const obj1 = {
    name: 'obj1', // 用户名
    info: {
      sex: '男', // 用户性别
      age: 18, // 用户年龄
    },
    friends: ['friend_1', 'friend_2', 'friend_3'], // 好友列表
    sayHi() { // 方法:自我介绍
      window.log(`
      (func_color)Hi, 我的名字叫 ${this.name} (${this.info.sex}),
      今年${this.info.age}岁!
      我有${this.friends.length}个好朋友,
      分别是${this.friends}</div>`);
    },
  };
  window.log(`<xmp>const obj1 = {
    name: 'obj1', // 用户名
    info: {
      sex: '男', // 用户性别
      age: 18, // 用户年龄
    },
    friends: ['friend_1', 'friend_2', 'friend_3'], // 好友列表
    sayHi() { // 方法:自我介绍
      window.log(\`
        Hi, 我的名字叫 \${this.name} (\${this.info.sex}),
        今年\${this.info.age}岁!
        我有\${this.friends.length}个好朋友,
        分别是\${this.friends}\`);
    },
  };</xmp>`);
  window.log('\\n调用obj1.sayHi() 显示结果:\\n ');
  obj1.sayHi();
  window.log('\\n创建一个浅copy方法并复制一个新的对象\\n ');
  const shallowClone = (o) => {
    const obj = {};
    Object.keys(o).forEach((key) => {
      obj[key] = o[key];
    });
    return obj;
  };
  window.log(`<xmp>const shallowClone = (o) => {
    const obj = {};
    Object.keys(o).forEach((key) => {
      obj[key] = o[key];
    });
    return obj;
  };</xmp>`);
  const obj2 = shallowClone(obj1); // 浅copy
  obj2.name = 'obj2'; // 深copy
  obj2.info.sex = '女'; // 浅copy
  obj2.info.age = 15; // 浅copy
  obj2.friends[0] = 'friend_4'; // 浅copy
  window.log(`const obj2 = shallowClone(obj1); // 浅copy<br />
  obj2.name = 'obj2'; // 深copy<br />
  obj2.info.sex = '女'; // 浅copy<br />
  obj2.info.age = 15; // 浅copy<br />
  obj2.friends[0] = 'friend_4'; // 浅copy`);
  window.log('\\n调用obj1和obj2的sayHi() 显示结果:\\n ');
  obj1.sayHi();
  window.log('// obj1 名字没有改变，性别，年龄和朋友被同时改变了');
  obj2.sayHi();
  window.log('\\nObject.assign同样可以实现浅copy,如：');
  const obj3 = Object.assign({}, obj1);
  obj3.name = 'obj3'; // 深copy
  obj3.info.sex = '其它'; // 浅copy
  obj3.info.age = 5; // 浅copy
  obj3.friends[0] = 'friend_5'; // 浅copy
  window.log(`let obj3 = Object.assign({}, obj1);<br />
  obj3.name = 'obj3'; // 深copy<br />
  obj3.info.sex = '其它' // 浅copy<br />
  obj3.info.age = 5; // 浅copy<br />
  obj3.friends[0] = 'friend_5'; // 浅copy`);
  window.log('\\n调用obj1,obj2和obj3的sayHi() 显示结果:\\n ');
  obj1.sayHi();
  obj2.sayHi();
  obj3.sayHi();
  window.log('// 除了名字没有改变，性别，年龄和朋友被同时改变了');
  window.log('\\n创建一个深copy方法并复制一个新的对象\\n ');
  const deepClone = (initalObj, finalObj) => {
    const obj = finalObj || {};
    Object.keys(initalObj).forEach((i) => {
      const prop = initalObj[i]; // 避免相互引用对象导致死循环 如: initalObj.a = initalObj
      if (prop !== obj) {
        if (typeof prop === 'object') {
          obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
          obj[i] = prop;
        }
      }
    });
    return obj;
  };
  window.log(`<xmp>const deepClone = (initalObj, finalObj) => {
    const obj = finalObj || {};
    Object.keys(initalObj).forEach((i) => {
      const prop = initalObj[i]; // 避免相互引用对象导致死循环 如: initalObj.a = initalObj
      if (prop !== obj) {
        if (typeof prop === 'object') {
          obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
        } else {
          obj[i] = prop;
        }
      }
    });
    return obj;
  };</xmp>`);
  const obj4 = deepClone(obj1, {});
  obj4.name = 'obj4';
  obj4.info.sex = '不详';
  obj4.info.age = 0;
  obj4.friends = ['friend_6', 'friend_7', 'friend_8'];
  window.log(`let obj4 = deepClone(obj1, {});<br />
  obj4.name = 'obj4';<br />
  obj4.info.sex = '不详';<br />
  obj4.info.age = 0;<br />
  obj4.friends = ['friend_6', 'friend_7', 'friend_8'];`);
  window.log('\\n调用obj1,obj2,obj3和obj4的sayHi() 显示结果:\\n ');
  obj1.sayHi();
  obj2.sayHi();
  obj3.sayHi();
  obj4.sayHi();
  window.log('// 自身改变的同时并没有改变原来的对象');
};
