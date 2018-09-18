<template>
  <div :class="tindex===1 ? 'abs template tempSelect' : 'abs template'">
    <transition
      name="component-fade"
      mode="out-in">
      <component :is="getComponent"/>
    </transition>
    <div
      class="abs search"
      v-if="getComponent!=='view3'">
      <input
        type="text"
        v-model="text"
        placeholder="关键字搜索">
      <span @click="reset">清空</span>
      <ul>
        <li
          v-if="text !== item.title"
          v-for="(item, index) in NewItems"
          :key="index"
          :data-value="JSON.stringify(item)"
          :title="item.title"
          v-text="item.title"
          @click="search"/>
      </ul>
    </div>
  </div>
</template>

<script>
import templateMixin from '@/mixin/template';
import view1 from '@/views/template/article/view1';
import view2 from '@/views/template/article/view2';
import view3 from '@/views/Article/index';

export default {
  name: 'TemplateIndex',
  data() {
    return {
      text: '',
      isShow: false,
    };
  },
  components: {
    view1,
    view2,
    view3,
  },
  mixins: [
    templateMixin,
  ],
  computed: {
    getComponent() {
      let mode = this.articleMode;
      if (this.articleUrl !== '') {
        mode = 'view3';
      }
      return mode;
    },
    NewItems() {
      const NewItems = [];
      this.articleList.map(item => (item.title.search(this.text) !== -1 && this.text !== '' ? NewItems.push(item) : ''));
      if (NewItems.length === 0) {
        this.$store.commit('SET_ARTICLELIST', []);
      }
      return NewItems;
    },
  },
  methods: {
    search(e) {
      this.text = e.target.title;
      const newArr = [];
      newArr.push(JSON.parse(e.target.dataset.value));
      this.$store.commit('SET_ARTICLELIST', newArr);
    },
    reset() {
      this.text = '';
      this.$store.commit('SET_ARTICLELIST', []);
    },
  },
};
</script>

<style lang="less" scoped>
.articleType {
  top:20px;
  left:50%;
  width:200px;
  margin-left:-100px;
  background:#fff;
  height:50px;
  border-radius: 5px;
  border: solid 1px #ddd;
}
.search {
  width: 1030px;
  left: 50%;
  top: 80px;
  margin-left: -515px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  // background:#fff;
  input {
    background:#fff;
    padding: 10px 25px;
    border: 0;
    font-size: 20px;
    text-align: center;
    border-radius: 5px 0 0 5px;
    color:#f90;
  }
  span {
    height: 43px;
    border-left:solid 1px #ddd;
    line-height: 43px;
    padding: 0 25px;
    background:#f90;
    color:#fff;
    font-size: 14px;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
  }
  ul {
    position: absolute;
    top: 94%;
    width: 372px;
    margin-left: -186px;
    left: 50%;
    border:solid 1px #ddd;
    border-bottom: 0;
    border-radius: 0 0 5px 5px;
    li {
      height: 40px; line-height: 40px;
      border-bottom: solid 1px #ddd;
      background:#fff;
      color:#666;
      text-align: center;
      cursor: pointer;
    }
    li:hover {
      background:#f90;
      color:#fff;
    }
  }
}
input:focus{outline:none;}
.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity .3s ease;
}
.component-fade-enter, .component-fade-leave-to {
  opacity: 0;
}
</style>
