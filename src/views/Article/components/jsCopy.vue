<template>
  <div class="abs articleDiv">
    <div id="log">
      <h2>JS的浅拷贝和深拷贝</h2>
      <h3>首先创建一个实例</h3>
      <xmp>let obj1 = {
        name: 'obj1', // 用户名
        info: {
          sex: '男', // 用户性别
          age: 18, // 用户年龄
        },
        friends: ['friend_1', 'friend_2', 'friend_3'], // 好友列表
        sayHi() { // 方法:自我介绍
          console.log(`
            Hi, 我的名字叫 ${ this.name } (${ this.info.sex }),
            今年${ this.info.age }岁!
            我有${ this.friends.length }个好朋友,
            分别是${ this.friends }`);
        }
      };</xmp>
      <h3>调用obj1.sayHi() 显示结果:</h3>
      <div class="func_color">Hi, 我的名字叫 obj1 (男),今年18岁!我有3个好朋友,分别是friend_1,friend_2,friend_3</div>
      <h3>创建一个浅copy方法并复制一个新的对象</h3>
      <xmp>function shallowClone(o){
        const obj = {};
        for (let i in o) {
          obj[i] = o[i];
        }
        return obj;
      }</xmp>
      <div>
        let obj2 = shallowClone(obj1); // 浅copy
        <br>obj2.name = 'obj2'; // 深copy
        <br>obj2.info.sex = '女'; // 浅copy
        <br>obj2.info.age = 15; // 浅copy
        <br>obj2.friends[0] = 'friend_4'; // 浅copy
      </div>
      <h3>调用obj1和obj2的sayHi() 显示结果:</h3>
      <div class="func_color">Hi, 我的名字叫 obj1 (女),今年15岁!我有3个好朋友,分别是friend_4,friend_2,friend_3</div>
      <div>// obj1 名字没有改变，性别，年龄和朋友被同时改变了 </div>
      <div class="func_color">Hi, 我的名字叫 obj2 (女),今年15岁!我有3个好朋友,分别是friend_4,friend_2,friend_3</div>
      <h3>Object.assign同样可以实现浅copy,如： </h3>
      <div>let obj3 = Object.assign({}, obj1);
        <br>obj3.name = 'obj3'; // 深copy
        <br>obj3.info.sex = '其它' // 浅copy
        <br>obj3.info.age = 5; // 浅copy
        <br>obj3.friends[0] = 'friend_5'; // 浅copy
      </div>
      <h3>调用obj1,obj2和obj3的sayHi() 显示结果:</h3>
      <div class="func_color">Hi, 我的名字叫 obj1 (其它),今年5岁!我有3个好朋友,分别是friend_5,friend_2,friend_3</div>
      <div class="func_color">Hi, 我的名字叫 obj2 (其它),今年5岁!我有3个好朋友,分别是friend_5,friend_2,friend_3</div>
      <div class="func_color">Hi, 我的名字叫 obj3 (其它),今年5岁!我有3个好朋友,分别是friend_5,friend_2,friend_3</div>
      <div>// 除了名字没有改变，性别，年龄和朋友被同时改变了</div>
      <h3>创建一个深copy方法并复制一个新的对象</h3>
      <xmp>function deepClone(initalObj, finalObj) {
        let obj = finalObj || {};
        for (let i in initalObj) {
          let prop = initalObj[i]; // 避免相互引用导致死循环 如: initalObj.a = initalObj
          if(prop === obj) { continue }
          if (typeof prop === 'object') {
            obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
          } else {
            obj[i] = prop;
          }
        }
        return obj;
      }</xmp>
      <div>let obj4 = deepClone(obj1, {});
        <br>obj4.name = 'obj4';
        <br>obj4.info.sex = '不详';
        <br>obj4.info.age = 0;
        <br>obj4.friends = ['friend_6', 'friend_7', 'friend_8'];
      </div>
      <h3>调用obj1,obj2,obj3和obj4的sayHi() 显示结果:</h3>
      <div class="func_color">Hi, 我的名字叫 obj1 (其它),今年5岁!我有3个好朋友,分别是friend_5,friend_2,friend_3</div>
      <div class="func_color">Hi, 我的名字叫 obj2 (其它),今年5岁!我有3个好朋友,分别是friend_5,friend_2,friend_3</div>
      <div class="func_color">Hi, 我的名字叫 obj3 (其它),今年5岁!我有3个好朋友,分别是friend_5,friend_2,friend_3</div>
      <div class="func_color">Hi, 我的名字叫 obj4 (不详),今年0岁!我有3个好朋友,分别是friend_6,friend_7,friend_8</div>
      <div>// 自身改变的同时并没有改变原来的对象</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'JsCopy',
};
</script>
